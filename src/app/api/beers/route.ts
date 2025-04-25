import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const beersDir = path.join(process.cwd(), "public", "beers");
    const files = fs
      .readdirSync(beersDir)
      .filter((f) => /\.(jpe?g|png|gif|svg|webp)$/i.test(f));
    return NextResponse.json({ files });
  } catch (err: any) {
    console.error("Beers API Error:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
