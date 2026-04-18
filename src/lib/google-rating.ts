const FALLBACK_RATING = 4.9;

export async function getGoogleRating(): Promise<number> {
  try {
    const res = await fetch(
      "https://www.google.com/search?q=Chocobae+Tripunithura+Kochi",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept-Language": "en-US,en;q=0.9",
        },
        next: { revalidate: 86400 }, // re-scrape once per day
      }
    );

    if (!res.ok) return FALLBACK_RATING;

    const html = await res.text();

    // Google embeds structured data in search results for local businesses
    const jsonLdMatch = html.match(/"ratingValue"\s*:\s*"?([\d.]+)"?/);
    if (jsonLdMatch) {
      const rating = parseFloat(jsonLdMatch[1]);
      if (rating >= 1 && rating <= 5) return rating;
    }

    // Fallback pattern: "4.9 (123 reviews)" style text in HTML
    const inlineMatch = html.match(/(\d\.\d)\s*\([\d,]+\s*(?:Google\s*)?reviews?\)/i);
    if (inlineMatch) {
      const rating = parseFloat(inlineMatch[1]);
      if (rating >= 1 && rating <= 5) return rating;
    }

    return FALLBACK_RATING;
  } catch {
    return FALLBACK_RATING;
  }
}
