"use client"

import DrinksSection from "./components/drinks"
import EmployeeOfMonth from "./components/employee"
import ImageSlideshow from "./components/slideshow"
import LiveSportsSection from "./components/sports"

export default function Ryans() {
  return (
    <div className="w-full h-full bg-black text-white">
      <ImageSlideshow />
      <DrinksSection />
      <LiveSportsSection />
      <EmployeeOfMonth />
    </div>
  )
}
