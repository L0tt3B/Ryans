"use client"

import Image from "next/image"

export default function EmployeeOfMonth() {
  return (
    <section className="py-20 px-6 flex flex-col md:flex-row justify-center items-center gap-8 bg-black text-center md:text-left">
      <div>
        <h2 className="text-3xl md:text-4xl text-yellow-400 font-semibold mb-2">
          Employee of the Month:
        </h2>
        <p className="text-5xl md:text-6xl font-bold italic text-white">
          Guinness!
        </p>
      </div>

      <div className="relative">
        {/* Guinness */}
        <div className="w-80 h-80 flex-shrink-0 overflow-hidden rounded-lg shadow-lg relative z-10">
          <Image
            src="/Guinness.jpg"
            alt="Employee of the Month: Guinness"
            fill
            className="object-cover object-[80%_80%] scale-[1.4] transition-transform"
          />
        </div>

        <Image
          src="/stars.png"
          alt="Gold star"
          width={130}
          height={130}
          className="absolute -top-10 -left-10 rotate-[-15deg] z-20"
        />
        <Image
          src="/stars.png"
          alt="Gold star"
          width={130}
          height={130}
          className="absolute -bottom-10 -right-10 rotate-[15deg] z-20"
        />
      </div>
    </section>
  )
}
