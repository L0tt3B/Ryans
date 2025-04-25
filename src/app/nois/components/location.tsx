"use client";
import { FaUber, FaMotorcycle } from "react-icons/fa";

export default function DeliveryLocation() {
  return (
    <section className="bg-black text-white w-full py-12 px-6">
      <div
        className="w-full h-44 lg:h-50 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: "url('/Ryans/divider.png')" }}
      />
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:space-x-12">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 content-center pl-14 sm:text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We Deliver!</h2>
          <div className="flex justify-center items-center gap-6 mb-6 text-white text-6xl">
            <FaUber title="Uber Eats" />
            <FaMotorcycle title="Deliveroo" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
          <address className="not-italic text-lg mb-6">
            282 Northfield Ave, <br />
            London W5 4UB
          </address>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=282+Northfield+Ave,+London+W5+4UB"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent px-8 py-3 text-lg border border-yellow-700 text-yellow-700 rounded-full transition-all duration-300 hover:bg-yellow-700/30 hover:shadow-lg hover:shadow-yellow-500/50 cursor-pointer"
          >
            Get Directions
          </a>
        </div>

        <div className="w-full md:w-1/2 h-64 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Noi's Location"
            src="https://maps.google.com/maps?q=282%20Northfield%20Ave%2C%20London%20W5%204UB&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
