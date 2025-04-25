"use client";
const foodImages = [
  "/gallery/r1.jpg",
  "/gallery/r2.jpg",
  "/gallery/r3.jpg",
  "/gallery/r4.jpg",
  "/gallery/r5.jpg",
  "/gallery/r6.jpg",
  "/gallery/r7.jpg",
  "/gallery/r8.jpg",
  "/gallery/r9.jpg",
];

export default function FoodGallery() {
  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Delicious Dishes</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {foodImages.map((src, i) => (
          <div key={i} className="overflow-hidden rounded shadow-md">
            <img src={src} alt={`Dish ${i}`} className="object-cover w-full aspect-square" />
          </div>
        ))}
      </div>
    </div>
  );
}
