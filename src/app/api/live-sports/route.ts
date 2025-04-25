import { NextResponse } from "next/server";
import scrapeLiveSports from "../../ryans/components/scrapeLiveSports";

export async function GET() {
  try {
    const data = await scrapeLiveSports();
    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("API Error:", err);
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: err.message,
        stack: err.stack,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
