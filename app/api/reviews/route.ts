import { getReviewsData } from "@/lib/reviews";

export const revalidate = 172800; // 2 days in seconds

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
  } catch (error: any) {
    return Response.json(
      { error: "Failed to retrieve reviews", message: error?.message },
      { status: 500 }
    );
  }
}
