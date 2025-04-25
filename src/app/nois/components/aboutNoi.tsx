"use client";
import Image from "next/image";

export default function AboutNoi() {
  return (
    <div className="text-white bg-black px-6 py-16 text-center">
      <h2 className="text-3xl text-yellow-400 font-bold mb-6">About Noi</h2>
      <Image
        src="/noi.png"
        alt="Noi"
        className="mx-auto rounded-md shadow-lg mb-6"
        width={280}
        height={180}
        />
      <p className="max-w-xl mx-auto text-lg">
      My name is Noi, I am a Thai mum and I love cooking, and eating of course. I always use fresh, flavoursome ingredients for my authentic Thai dishes.
      You can find Noi&apos;s Thai Kitchen at Ryan&apos;s Bar, Northfields Avenue, Ealing where you can eat Tuesday to Saturday  from  12 - 9.30pm. You can also order delivery or pickup with Deliveroo and UberEATS.
      </p>
    </div>
  );
}
