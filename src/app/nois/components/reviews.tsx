"use client";
import { useState } from "react";

type Review = {
  quote: string;
  name: string;
};

const mockReviews: Review[] = [
  { quote: "The best Thai food I’ve ever had!", name: "Sophia L." },
  { quote: "Incredible flavors and friendly staff!", name: "Mark T." },
  { quote: "A hidden gem. Loved the Pad Thai.", name: "Anna P." },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % mockReviews.length);
  };

  const review = mockReviews[index];

  return (
    <div className="flex flex-col items-center my-12 px-4">
      <div
        className="w-full max-w-2xl aspect-[2.5/1] bg-no-repeat bg-center bg-contain flex flex-col justify-center items-center text-center px-8"
        style={{ backgroundImage: "url('/reviewborder.png')" }}
      >
        <p className="text-base md:text-lg italic text-white leading-tight max-w-[80%] break-words">
          &quot;{review.quote}&quot;
        </p>
        <p className="text-sm md:text-base text-yellow-300 font-semibold mt-2">
          – {review.name}
        </p>
      </div>

      <button
        onClick={handleNext}
        className="mt-6 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition text-sm md:text-base"
      >
        Different Review
      </button>
    </div>
  );
}
