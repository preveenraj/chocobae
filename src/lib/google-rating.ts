const FALLBACK_RATING = 4.9;
const CHOCOBAE_PLACE_ID = "ChIJd9YuaABzCDsRls8ecUDX2ek";

export async function getGoogleRating(): Promise<number> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID ?? CHOCOBAE_PLACE_ID;

  if (!apiKey) return FALLBACK_RATING;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating",
        },
        next: { revalidate: 3600 }, // revalidate every hour
      }
    );

    if (!res.ok) return FALLBACK_RATING;

    const data = await res.json();
    return typeof data.rating === "number" ? data.rating : FALLBACK_RATING;
  } catch {
    return FALLBACK_RATING;
  }
}
