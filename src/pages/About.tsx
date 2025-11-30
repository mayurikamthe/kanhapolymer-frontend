import React from "react";

const About: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#f7faf9] py-16 px-6 lg:px-20 fade-in">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="section-title">About Us</h1>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed mt-6">
          Welcome to <span className="font-semibold text-[#f76b6a]">Kanha Polymers</span> — 
          your trusted partner in sustainable packaging. We specialize in 
          <span className="font-medium"> Non-Woven Bags, Jute Bags, PP Woven Bags, and HDPE Bags</span>, 
          designed to support eco-friendly alternatives for modern businesses.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mt-4">
          Our mission is to replace harmful plastic packaging with durable, 
          reusable, and recyclable solutions that protect both your products 
          and our planet. With years of expertise, we deliver quality you can trust 
          — combining innovation, strength, and sustainability in every bag.
        </p>

        {/* Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all border-t-4 border-[#f76b6a]">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🌿 Eco-Friendly Solutions
            </h3>
            <p className="text-gray-600">
              We promote green packaging with biodegradable, non-woven, 
              and jute-based products that help reduce environmental impact.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all border-t-4 border-[#f76b6a]">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              💪 Durable & Reusable
            </h3>
            <p className="text-gray-600">
              Every Kanha Polymers bag is built for strength, reusability, 
              and long life — ensuring value and reliability for every customer.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all border-t-4 border-[#f76b6a]">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🏭 Quality Manufacturing
            </h3>
            <p className="text-gray-600">
              Our advanced production setup ensures precise stitching, 
              superior finishing, and consistent quality across all products.
            </p>
          </div>
        </div>

        {/* Background Decorative Lines */}
        <div className="absolute inset-0 bg-lines opacity-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default About;
