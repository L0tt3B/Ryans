"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function DrinksSection() {
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/beers")
      .then((res) => res.json())
      .then((data) => {
        if (data.files) setFiles(data.files);
        else console.error("Beers API error:", data.error);
      })
      .catch((err) => console.error("Fetch /api/beers failed:", err));
  }, []);

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-4xl md:text-5xl mb-6 font-bold text-yellow-500">
        Our Drinks
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Enjoy classic pints, seasonal cocktails, and special deals every week! Stay tuned
        for our surprise deals.
      </p>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {files.map((file) => {
          const alt = file
            .replace(/\.[^/.]+$/, "") // strip extension
            .replace(/[-_]/g, " ")    // hyphens/underscores → spaces
            .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize

          return (
            <div key={file} className="relative w-32 h-32">
              <Image
                src={`/beers/${file}`}
                alt={alt}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-md"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
