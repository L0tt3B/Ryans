export const dynamic = "force-static";

import { NextResponse } from "next/server";
import scrapeLiveSports from "../../ryans/components/scrapeLiveSports";

export async function GET() {
  try {
    const data = await scrapeLiveSports();
    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error("API Error:", err);
    const message = err instanceof Error ? err.message : String(err);
    const stack   = err instanceof Error && err.stack ? err.stack : undefined;
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: message,
        stack
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

