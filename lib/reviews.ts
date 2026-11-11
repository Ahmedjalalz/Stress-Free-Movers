import fs from "fs";
import path from "path";
import {
  Review,
  PlatformStats,
  ReviewsData,
  SYNC_INTERVAL_MS,
  DEFAULT_REVIEWS_DATA,
} from "./reviews.types";

export type { Review, PlatformStats, ReviewsData };
export { SYNC_INTERVAL_MS, DEFAULT_REVIEWS_DATA };

const CACHE_FILE_PATH = path.join(process.cwd(), "data", "reviews-cache.json");

/**
 * Fetch live review stats & customer reviews from Getamover
 */
export async function fetchLiveGetamover(): Promise<{
  score: string;
  reviewCount: number;
  reviews: Review[];
} | null> {
  try {
    // 1. Fetch live widget
    const widgetRes = await fetch(
      "https://www.getamover.co.uk/pro/LzW1A/rating-widget.html",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
        cache: "no-store",
      }
    );

    let score = "9.9";
    let reviewCount = 9;

    if (widgetRes.ok) {
      const widgetText = await widgetRes.text();
      const scoreMatch = widgetText.match(/Review score\s*([0-9,]+)/i);
      if (scoreMatch) score = scoreMatch[1].replace(",", ".");
      const countMatch = widgetText.match(/([0-9]+)\s+customer reviews/i);
      if (countMatch) reviewCount = parseInt(countMatch[1], 10);
    }

    // 2. Fetch live profile for individual customer reviews
    const profileRes = await fetch(
      "https://www.getamover.co.uk/movers/LzW1A/stress-free-move-limited/",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
        cache: "no-store",
      }
    );

    const reviews: Review[] = [];

    if (profileRes.ok) {
      const html = await profileRes.text();
      const parts = html.split('itemprop="review"');

      for (let i = 1; i < parts.length; i++) {
        const chunk = parts[i];

        const headlineMatch = chunk.match(/itemprop="headline">([\s\S]*?)<\/span>/i);
        const headline = headlineMatch
          ? headlineMatch[1].replace(/<[^>]+>/g, "").trim()
          : "Verified Move";

        const authorMatch =
          chunk.match(/itemprop="author"[\s\S]*?itemprop="name">([\s\S]*?)<\/span>/i) ||
          chunk.match(/itemprop="author"[^>]*>([\s\S]*?)<\/[^>]+>/i);
        const author = authorMatch
          ? authorMatch[1].replace(/<[^>]+>/g, "").trim()
          : "Verified Customer";

        const dateMatch =
          chunk.match(/itemprop="datePublished">([^<]+)<\/span>/i) ||
          chunk.match(/itemprop="datePublished"[^>]*content="([^"]*)"/i);
        let dateStr = "Recent";
        if (dateMatch) {
          const raw = (dateMatch[1] || "").trim();
          try {
            const d = new Date(raw);
            if (!isNaN(d.getTime())) {
              dateStr = d.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              });
            } else {
              dateStr = raw;
            }
          } catch {
            dateStr = raw;
          }
        }

        const ratingMatch =
          chunk.match(/itemprop="ratingValue">([^<]+)<\/span>/i) ||
          chunk.match(/class="rating[^"]*"[^>]*>([\s\S]*?)<\/[^>]+>/i);
        const ratingOutOf10 = ratingMatch ? parseFloat(ratingMatch[1]) : 10;
        const rating = Math.min(5, Math.max(1, Math.round(ratingOutOf10 / 2)));

        const bodyMatch = chunk.match(/itemprop="reviewBody"[^>]*>([\s\S]*?)<\/p>/i);
        const text = bodyMatch
          ? bodyMatch[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
          : "";

        if (text) {
          reviews.push({
            id: `gam-${i}`,
            author,
            headline,
            date: dateStr,
            rating,
            ratingOutOf10,
            text,
            source: "Getamover",
            verified: true,
          });
        }
      }
    }

    return {
      score,
      reviewCount: reviews.length > 0 ? reviews.length : reviewCount,
      reviews: reviews.length > 0 ? reviews : DEFAULT_REVIEWS_DATA.getamover.reviews,
    };
  } catch (error) {
    console.error("[Reviews Sync] Failed to fetch live Getamover reviews:", error);
    return null;
  }
}

/**
 * Attempt to fetch Trustpilot live reviews.
 * If blocked by Cloudflare/WAF, returns null so the existing cached reviews remain active.
 */
export async function fetchLiveTrustpilot(): Promise<{
  score: string;
  reviewCount: number;
  reviews: Review[];
} | null> {
  try {
    const res = await fetch(
      "https://uk.trustpilot.com/review/stressfreemoveltd.co.uk",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-GB,en;q=0.9",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      // 403 or other WAF block: graceful fallback
      return null;
    }

    const html = await res.text();
    const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
    let parsedScore = "4.1";
    let parsedCount = 5;

    if (jsonLdMatch) {
      try {
        const data = JSON.parse(jsonLdMatch[1]);
        if (data.aggregateRating) {
          parsedScore = data.aggregateRating.ratingValue?.toString() || "4.1";
          parsedCount = parseInt(data.aggregateRating.reviewCount || "5", 10);
        }
      } catch {
        // ignore parse error
      }
    }

    return {
      score: parsedScore,
      reviewCount: parsedCount,
      reviews: DEFAULT_REVIEWS_DATA.trustpilot.reviews,
    };
  } catch {
    return null;
  }
}

/**
 * Main review accessor with 2-day auto sync.
 * Reads cache, checks if lastSyncedAt > 48h, triggers sync if needed, and writes back.
 */
export async function getReviewsData(forceSync = false): Promise<ReviewsData> {
  let cache: any = null;

  try {
    if (fs.existsSync(CACHE_FILE_PATH)) {
      const content = fs.readFileSync(CACHE_FILE_PATH, "utf8");
      cache = JSON.parse(content);
    }
  } catch (err) {
    console.error("[Reviews Sync] Could not read cache file:", err);
  }

  const now = Date.now();
  const lastSyncTime = cache?.lastSyncedAt
    ? new Date(cache.lastSyncedAt).getTime()
    : 0;
  const isExpired = now - lastSyncTime > SYNC_INTERVAL_MS;

  if (isExpired || forceSync || !cache) {
    try {
      const [liveGam, liveTp] = await Promise.all([
        fetchLiveGetamover(),
        fetchLiveTrustpilot(),
      ]);

      const gamData = liveGam || cache?.getamover || DEFAULT_REVIEWS_DATA.getamover;
      const tpData = liveTp || cache?.trustpilot || DEFAULT_REVIEWS_DATA.trustpilot;

      const newCache = {
        lastSyncedAt: new Date().toISOString(),
        getamover: {
          score: gamData.score || "9.9",
          reviewCount: gamData.reviewCount || gamData.reviews?.length || 9,
          profileUrl: DEFAULT_REVIEWS_DATA.getamover.profileUrl,
          reviews:
            gamData.reviews && gamData.reviews.length > 0
              ? gamData.reviews
              : DEFAULT_REVIEWS_DATA.getamover.reviews,
        },
        trustpilot: {
          score: tpData.score || "4.1",
          reviewCount: tpData.reviewCount || tpData.reviews?.length || 5,
          profileUrl: DEFAULT_REVIEWS_DATA.trustpilot.profileUrl,
          evaluateUrl: DEFAULT_REVIEWS_DATA.trustpilot.evaluateUrl,
          reviews:
            tpData.reviews && tpData.reviews.length > 0
              ? tpData.reviews
              : DEFAULT_REVIEWS_DATA.trustpilot.reviews,
        },
      };

      try {
        const dir = path.dirname(CACHE_FILE_PATH);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify(newCache, null, 2), "utf8");
        cache = newCache;
      } catch (writeErr) {
        console.error("[Reviews Sync] Failed to write cache:", writeErr);
        cache = newCache;
      }
    } catch (syncErr) {
      console.error("[Reviews Sync] Sync operation failed:", syncErr);
    }
  }

  const finalCache = cache || DEFAULT_REVIEWS_DATA;
  const lastSynced = finalCache.lastSyncedAt || new Date().toISOString();
  const nextSync = new Date(
    new Date(lastSynced).getTime() + SYNC_INTERVAL_MS
  ).toISOString();

  const gamReviews: Review[] =
    finalCache.getamover?.reviews || DEFAULT_REVIEWS_DATA.getamover.reviews;
  const tpReviews: Review[] =
    finalCache.trustpilot?.reviews || DEFAULT_REVIEWS_DATA.trustpilot.reviews;

  // Interleave reviews so visitors see both Trustpilot and Getamover
  const allReviews: Review[] = [];
  const maxLen = Math.max(gamReviews.length, tpReviews.length);
  for (let i = 0; i < maxLen; i++) {
    if (i < tpReviews.length) allReviews.push(tpReviews[i]);
    if (i < gamReviews.length) allReviews.push(gamReviews[i]);
  }

  const totalReviews =
    (finalCache.getamover?.reviewCount || gamReviews.length) +
    (finalCache.trustpilot?.reviewCount || tpReviews.length);

  return {
    lastSyncedAt: lastSynced,
    nextSyncAt: nextSync,
    syncIntervalDays: 2,
    totalReviews,
    averageRating: 4.8,
    getamover: {
      score: finalCache.getamover?.score || "9.9",
      reviewCount: finalCache.getamover?.reviewCount || gamReviews.length,
      profileUrl: DEFAULT_REVIEWS_DATA.getamover.profileUrl,
      reviews: gamReviews,
    },
    trustpilot: {
      score: finalCache.trustpilot?.score || "4.1",
      reviewCount: finalCache.trustpilot?.reviewCount || tpReviews.length,
      profileUrl: DEFAULT_REVIEWS_DATA.trustpilot.profileUrl,
      evaluateUrl: DEFAULT_REVIEWS_DATA.trustpilot.evaluateUrl,
      reviews: tpReviews,
    },
    allReviews,
  };
}
