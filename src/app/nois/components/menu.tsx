"use client";
import Image from "next/image";
import { useState } from "react";

const menuImages = [
  { src: "/Ryans/gallery/oldmenu3.jpg", alt: "Menu Page 1" },
  { src: "/Ryans/gallery/oldmenu2.jpg", alt: "Menu Page 2" },
  { src: "/Ryans/gallery/oldmenu.jpg", alt: "Menu Page 3" },
];

export default function MenuSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="text-center my-12">
      <h2 className="text-3xl text-yellow-300 font-bold mb-6">Menu</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {menuImages.map((img, i) => (
          <button key={i} onClick={() => setSelectedImage(img.src)}>
            <Image
              src={img.src}
              alt={img.alt}
              className="rounded-md shadow-md hover:scale-105 transition-transform duration-200"
              width={180}
              height={240}
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
        >
          <Image
            src={selectedImage}
            alt="Selected Menu Page"
            className="max-h-[90vh] max-w-[90vw]"
            width={800}
            height={1000}
          />
        </div>
      )}
    </div>
  );
}
