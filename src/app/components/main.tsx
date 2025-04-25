"use client"
import { cards } from "../data/cards"
import { Card } from "./card"

export default function FrontPage() {
  return (
    <section
      className="relative w-full bg-black pt-24 pb-16 overflow-x-hidden"
      style={{ perspective: "1000px" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col space-y-32">
        {cards.map((c, idx) => (
          <Card key={c.id} index={idx} {...c} link={c.link} />
        ))}
      </div>
    </section>
  )
}
