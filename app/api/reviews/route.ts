import { getReviewsData } from "@/lib/reviews";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const forceSync = searchParams.get("sync") === "true";

    const data = await getReviewsData(forceSync);

    return Response.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=172800, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("[Reviews API] Error retrieving reviews:", error);
    return Response.json(
      { error: "Failed to retrieve reviews" },
      { status: 500 }
    );
  }
}
