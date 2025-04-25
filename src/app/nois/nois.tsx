"use client";
import NoiSlideshow from "./components/slideshow";
import Reviews from "./components/reviews";
import MenuSection from "./components/menu";
import AboutNoi from "./components/aboutNoi";
import FoodGallery from "./components/photos";
import DeliveryLocation from "./components/location";

const Noi = () => {
  return (
    <div className="w-full h-full bg-black">
      <NoiSlideshow />
      <Reviews />
      <MenuSection />
      <AboutNoi />
      <FoodGallery />
      <DeliveryLocation />
    </div>
  );
};

export default Noi;
