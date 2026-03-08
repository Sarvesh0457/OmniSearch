import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("q");

  if (!query) {
    return NextResponse.json({ error: "Missing query" }, { status: 400 });
  }

  const res = await fetch(
    `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    }
  );

  const html = await res.text();

  const match = html.match(/var ytInitialData = (.*?);<\/script>/);

  if (!match) {
    return NextResponse.json({ error: "Failed to parse YouTube page" });
  }

  const data = JSON.parse(match[1]);

  const contents =
    data.contents.twoColumnSearchResultsRenderer.primaryContents
      .sectionListRenderer.contents;

  const videos = [];

  for (const section of contents) {
    const items = section.itemSectionRenderer?.contents || [];

    for (const item of items) {
      const video = item.videoRenderer;

      if (!video) continue;

      videos.push({
        id: video.videoId,
        title: video.title.runs[0].text,
        thumbnail: video.thumbnail.thumbnails.pop().url,
      });
    }
  }

  return NextResponse.json({ videos });
}
