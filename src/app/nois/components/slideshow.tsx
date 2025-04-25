"use client";
import { useEffect, useRef, useState } from "react";

const slides = [
  "/Ryans/food/s1.jpeg",
  "/Ryans/food/s2.jpeg",
  "/Ryans/food/s3.jpg",
];

export default function NoiSlideshow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative bg-black">
      <div
        ref={containerRef}
        className="flex transition-transform duration-[1500ms] ease-in-out"
        style={{ transform: `translateX(-${index * 100}vw)` }}
      >
        {slides.map((src, i) => (
          <div
            key={i}
            className="w-screen h-screen flex-shrink-0"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "brightness(0.75) contrast(1.1)",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-yellow-300 drop-shadow-lg">
          Noi&apos;s Thai Kitchen
        </h1>
        <p className="mt-4 text-xl md:text-3xl text-white tracking-wide font-semibold drop-shadow-md">
          Good Food is Good Mood
        </p>
      </div>
    </div>
  );
}
