"use client"

import { FaFacebookF, FaInstagram, FaMailBulk, FaUtensils } from "react-icons/fa"

export default function Contact() {
  const icons = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/ryansbar1/?hl=en" },
    { icon: <FaUtensils />, href: "https://www.noisthai-kitchen.co.uk/" },
    { icon: <FaMailBulk />, href: "mailto:charlotte@burns.net" },
  ]

  return (
    <section className="bg-black text-yellow-600 w-full pt-12">
      <div className="relative w-full">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-yellow-600" />
        </div>

        {/* centered icons */}
        <div className="relative flex justify-center space-x-6">
          {icons.map(({ icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-black
                border border-yellow-600
                rounded-lg
                p-4
                hover:bg-yellow-600/80
                hover:text-black
                transition-colors
                duration-300
              "
            >
              <span className="text-2xl">{icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
