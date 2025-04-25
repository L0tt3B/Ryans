"use client"

import { useRouter } from "next/navigation"
import { CardData } from "../data/cards"

interface CardProps extends CardData {
  index: number
}

export function Card({
  id,
  title,
  src,
  subtitle,
  desc,
  buttonText,
  index,
  link,
}: CardProps & { link: string }) {
  const isOdd = index % 2 === 1
  const router = useRouter()

  return (
    <section
      id={id}
      className={`
        flex flex-col items-center
        md:flex-row md:justify-between md:items-start
        ${isOdd ? "md:flex-row-reverse" : ""}
        w-full
      `}
    >
      {/* clickable image */}
      <div
        onClick={() => router.push(link)}
        className="
          w-full md:w-1/2
          h-[400px] md:h-[600px]
          overflow-hidden
          rounded-t-[50%]
          bg-no-repeat bg-center bg-cover
          transform transition-transform duration-500
          hover:scale-105
          shadow-md
          hover:shadow-[0_0_20px_rgba(255,215,0,0.7)]
          cursor-pointer
        "
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="w-full md:w-1/2 px-6 md:px-12 space-y-6 mt-8 md:mt-0 text-center md:text-left">
        <h2 className="text-white text-4xl md:text-5xl italic">{title}</h2>
        <p className="text-yellow-700 text-xl">{subtitle}</p>
        <p className="text-gray-400 text-lg">{desc}</p>
        <button
          onClick={() => router.push(link)}
          className="
            bg-transparent
            px-8 py-3 text-lg
            border border-yellow-700 text-yellow-700
            rounded-full
            transition-all duration-300
            hover:bg-yellow-700/30
            hover:shadow-lg
            hover:shadow-yellow-500/50
            cursor-pointer
          "
        >
          {buttonText}
        </button>
      </div>
    </section>
  )
}
