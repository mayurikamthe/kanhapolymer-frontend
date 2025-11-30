import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-green-100 py-20 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800 leading-tight">
          Sustainable Packaging for a Better Tomorrow
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Eco-friendly Non-Woven & Jute Bags from <strong>Kanha Polymers</strong>
        </p>

        <Link
          to="/shop"
          className="bg-green-700 text-white px-8 py-3 rounded-xl hover:bg-green-800 transition-all duration-300 shadow-md"
        >
          Explore Products
        </Link>
      </div>

      {/* Optional decorative background pattern */}
      <div className="absolute inset-0 bg-[url('/hero-bg-pattern.svg')] bg-cover bg-center opacity-10 pointer-events-none"></div>
    </section>
  );
}
