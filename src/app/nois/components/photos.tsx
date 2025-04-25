"use client";

import Image from "next/image";

const foodImages = [
  "/Ryans/gallery/r1.jpg",
  "/Ryans/gallery/r2.jpg",
  "/Ryans/gallery/r3.jpg",
  "/Ryans/gallery/r4.jpg",
  "/Ryans/gallery/r5.jpg",
  "/Ryans/gallery/r6.jpg",
  "/Ryans/gallery/r7.jpg",
  "/Ryans/gallery/r8.jpg",
  "/Ryans/gallery/r9.jpg",
];

export default function FoodGallery() {
  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Delicious Dishes
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {foodImages.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded shadow-md"
          >
            <Image
              src={src}
              alt={`Dish ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
