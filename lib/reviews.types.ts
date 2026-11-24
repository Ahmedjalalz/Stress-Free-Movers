export interface Review {
  id: string;
  author: string;
  headline: string;
  date: string;
  rating: number; // 1 to 5 stars
  ratingOutOf10?: number;
  text: string;
  source: "Trustpilot" | "Getamover";
  verified: boolean;
}

export interface PlatformStats {
  score: string;
  reviewCount: number;
  profileUrl: string;
  evaluateUrl?: string;
  reviews: Review[];
}

export interface ReviewsData {
  lastSyncedAt: string;
  nextSyncAt: string;
  syncIntervalDays: number;
  totalReviews: number;
  averageRating: number;
  getamover: PlatformStats;
  trustpilot: PlatformStats;
  allReviews: Review[];
}

// 2 days in milliseconds: 48 * 60 * 60 * 1000 = 172,800,000 ms
export const SYNC_INTERVAL_MS = 2 * 24 * 60 * 60 * 1000;

export const DEFAULT_REVIEWS_DATA: ReviewsData = {
  lastSyncedAt: new Date().toISOString(),
  nextSyncAt: new Date(Date.now() + SYNC_INTERVAL_MS).toISOString(),
  syncIntervalDays: 2,
  totalReviews: 32,
  averageRating: 4.9,
  getamover: {
    score: "9.9",
    reviewCount: 10,
    profileUrl:
      "https://www.getamover.co.uk/movers/LzW1A/stress-free-move-limited/?utm_source=widget&utm_medium=referral",
    reviews: [
      {
        id: "gam-1",
        author: "Michael",
        headline: "Pleasant",
        date: "17 Nov 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Quick and polite. Good follow up.",
        source: "Getamover",
        verified: true,
      },
      {
        id: "gam-2",
        author: "Elaine",
        headline: "Helpful and friendly people",
        date: "11 Nov 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Excellent- team was punctual, moved items carefully and protected them well. They were friendly and efficient.",
        source: "Getamover",
        verified: true,
      },
      {
        id: "gam-3",
        author: "Nathanel Femi",
        headline: "Excellent service",
        date: "10 Nov 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "From the booking to the setting of the last piece of furniture, the service was fantastic; the men provided great customer service and were nice, respectful, and professional. I would recommend them.",
        source: "Getamover",
        verified: true,
      },
      {
        id: "gam-4",
        author: "Andrew",
        headline: "Highly recommended",
        date: "31 Oct 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "The move was seamless. Large sofa was tricky but they managed it. They dismantled and reassembled a king size bed. Would highly recommend",
        source: "Getamover",
        verified: true,
      },
      {
        id: "gam-5",
        author: "Matthew",
        headline: "Quick, careful and efficient",
        date: "31 Oct 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Moved everything I a quick, careful and efficient fashion. Great price.",
        source: "Getamover",
        verified: true,
      },
      {
        id: "gam-6",
        author: "Bri",
        headline: "Amazing to work with",
        date: "27 Oct 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "They were amazing to work with, both before and during the move. I had a complicated move from a second floor flat to a 3 floor house, neither had a lift. They moved everything! I would highly recommend this company!!!",
        source: "Getamover",
        verified: true,
      },
      {
        id: "gam-7",
        author: "Jennifer",
        headline: "Truly a stress-free experience",
        date: "25 Oct 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Efficient from the beginning of the process, Naveeda listened to our concerns as we were two disabled pensioners. Everything was exactly as we agreed truly a stress free experience 👏",
        source: "Getamover",
        verified: true,
      },
      {
        id: "gam-8",
        author: "Sandra",
        headline: "5 Star plus service",
        date: "22 Oct 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "From the first call to Naveeda who was suberb 5 star plus she put me at ease informing me of time of arrival to the exact cost with no hidden extras. The movers were 2 wonderful considerate workers who packed our stuff with care and were polite . Would recommed to others excellent service",
        source: "Getamover",
        verified: true,
      },
      {
        id: "gam-9",
        author: "Samiha",
        headline: "Prompt and clear communication",
        date: "14 Oct 2026",
        rating: 4,
        ratingOutOf10: 8.7,
        text: "I had booked them for my removal service. Their communication was spot on and got prompt reply and assurance through out the whole booking process. The kind lady explained everything in detail and gave flexibility for any changes. I had to cancel the booking due to change of circumstances and they promptly refunded my booking cost. Surely would recommend for peace of mind booking👍",
        source: "Getamover",
        verified: true,
      },
      {
        id: "gam-10",
        author: "Amanda",
        headline: "Very helpful and careful",
        date: "13 Oct 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Very helpful. So careful with the items. Very professional. Thank you.",
        source: "Getamover",
        verified: true,
      },
    ],
  },
  trustpilot: {
    score: "4.6",
    reviewCount: 22,
    profileUrl: "https://uk.trustpilot.com/review/stressfreemoveltd.co.uk",
    evaluateUrl: "https://uk.trustpilot.com/evaluate/stressfreemoveltd.co.uk",
    reviews: [
      {
        id: "tp-1",
        author: "Andrew Lishomwa",
        headline: "Speedy",
        date: "22 Nov 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Speedy, friendly and courteous",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-2",
        author: "will brennan",
        headline: "Brilliant movers very efficient and…",
        date: "21 Nov 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Brilliant movers very efficient and professional. Moved very well from a 5th floor flat with tricky parking. Stress free!",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-2",
        author: "Genni Laporta",
        headline: "Really great service",
        date: "21 Nov 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Really great service, easy and friendly! Fifth floor flat moving to house, really good help with packing and no trouble at all. Thank you",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-3",
        author: "mehak Amir",
        headline: "My overall experience was amazing with…",
        date: "20 Nov 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "My overall experience was amazing with stress free move, they were extremely cooperative with the entire process and kept me posted at all times. They were also incredibly accommodating. Safe drive too. Would a 100% recommend ✨",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-4",
        author: "Hina Zahid",
        headline: "Good customer service",
        date: "20 Nov 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Good customer service. I am really happy and will recommend.",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-5",
        author: "Consumer",
        headline: "Great guys",
        date: "16 Nov 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Great guys! Amazing service and fast worker",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-6",
        author: "Nikka Mae Vallo",
        headline: "Amazing!!",
        date: "16 Nov 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Amazing, will definitely recommend them. Very quick and the guys were very kind. Their service is top tier!",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-7",
        author: "Media Relations Event Manageme",
        headline: "Very good service",
        date: "14 Nov 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Very good service. I recommend this company to allVery reasonable price.Ali and Mr. Khan was very helpful.👍",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-8",
        author: "Sadek Al Rikaby",
        headline: "Very good and expert",
        date: "14 Nov 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Very good and expert",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-9",
        author: "David Miedzianogora",
        headline: "Ali was great and very helpful",
        date: "10 Nov 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Ali was great and very helpful. Efficient move. Happy with everything",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-10",
        author: "Nj Sofia",
        headline: "Stressfreemove was an amazing company…",
        date: "31 Oct 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Stressfreemove was an amazing company to move with. They were really efficient and helpful and I really recommend. There were no scratches and it was all stress free with everything cared for. The people working were amazing and trust worthy so don’t hesitate to pick this company.",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-11",
        author: "Chi",
        headline: "Very good service",
        date: "1 Nov 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Very good service! They are really patient as well",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-12",
        author: "Dan Pearson",
        headline: "Very accommodating service",
        date: "31 Oct 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Very accommodating service, quick service and great price. Moving with a smile :) thank you",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-13",
        author: "Andrew Noonan",
        headline: "Moved from house to flat with no log…",
        date: "31 Oct 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Moved from house to flat with no log and lots of stairs. On time and great price. No issues at all. Will use again. Thank you!",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-14",
        author: "Malia",
        headline: "Quick and easy move",
        date: "30 Oct 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Quick and easy move, stress free :)",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-15",
        author: "Matthew Williams",
        headline: "Great job",
        date: "30 Oct 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Great job, quick and easy. Good price",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-16",
        author: "Mark",
        headline: "Incredibly stress free as the name…",
        date: "29 Oct 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Incredibly stress free as the name suggests, didn’t have to lift a finger and very trustworthy",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-17",
        author: "Punky C",
        headline: "Great service!!",
        date: "17 Oct 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Great service!!! Super fast, took care of all our belongings and the team was just all around amazing!!!",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-18",
        author: "Jenny Nichols-Dunbar",
        headline: "Wonderful experience",
        date: "24 Oct 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Excellent experience, efficient and quick really friendly and hardworking. Thoroughly recommend them such nice men, first class.",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-19",
        author: "J Nichols-Dunbar",
        headline: "Absolutely wonderful and excellent…",
        date: "24 Oct 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Absolutely wonderful and excellent service from start to finish from this company. Ali and his assistant Khan were brilliant would definitely recommend them to anyone else who's looking too move.",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-20",
        author: "Brittany Perry",
        headline: "They were amazing!!",
        date: "22 Oct 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "They were amazing!!! Helped me move out of second floor flat with no lift into a house with a lot of stairs! They were so accommodating, kind, and helpful!",
        source: "Trustpilot",
        verified: true,
      },
      {
        id: "tp-21",
        author: "SANDRA WOODARDS",
        headline: "Excellent service by two movers who…",
        date: "22 Oct 2026",
        rating: 5,
        ratingOutOf10: 10,
        text: "Excellent service by two movers who were polite considerate and nothing was too much ttouble. Arrived on time packed and unpacked all my furniture with care and.consideration. would recommend and use them again. Amazing",
        source: "Trustpilot",
        verified: true,
      },
    ],
  },
  allReviews: [],
};

// Build interleaved default reviews
DEFAULT_REVIEWS_DATA.allReviews = (() => {
  const result: Review[] = [];
  const tp = DEFAULT_REVIEWS_DATA.trustpilot.reviews;
  const gam = DEFAULT_REVIEWS_DATA.getamover.reviews;
  const maxLen = Math.max(tp.length, gam.length);
  for (let i = 0; i < maxLen; i++) {
    if (i < tp.length) result.push(tp[i]);
    if (i < gam.length) result.push(gam[i]);
  }
  return result;
})();
