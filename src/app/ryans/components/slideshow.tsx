"use client"

import { useEffect, useRef, useState } from "react"

const slides = [
  "/ext.png",
  "/outside.jpg",
  "/drinks.jpg",
  "/busy.jpg",
]

export default function ImageSlideshow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-screen overflow-hidden relative bg-black">
      <div
        ref={containerRef}
        className="flex transition-transform duration-[1500ms] ease-in-out"
        style={{
          transform: `translateX(-${index * 100}vw)`,
        }}
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
        <h1 className="text-6xl md:text-8xl font-bold text-yellow-400 drop-shadow-lg">
          Ryan&apos;s
        </h1>
        <p className="mt-4 text-xl md:text-3xl text-white tracking-wide font-semibold drop-shadow-md">
          <span className="mx-2 text-yellow-400">·</span>Live Sports
          <span className="mx-2 text-yellow-400">·</span>Drinks
          <span className="mx-2 text-yellow-400">·</span>Atmosphere
          <span className="mx-2 text-yellow-400">·</span>
        </p>
      </div>
      <div className="absolute bottom-6 w-full text-center z-30">
  <p className="text-white text-lg tracking-wide opacity-80">
    ↓ Scroll for more!
  </p>
</div>
    </div>
  )
}
