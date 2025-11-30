import React from "react";
import { Link } from "react-router-dom";

import bag_1 from "../assets/images/bag-1.webp";
import bag_2 from "../assets/images/bag-2.webp";
import bag_3 from "../assets/images/bag-3.webp";
import bag_4 from "../assets/images/bag-4.webp";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Banner: React.FC = () => {
  const bags: string[] = [bag_1, bag_2, bag_3, bag_4];
  const currentYear: number = new Date().getFullYear();

  return (
    <div className="md:mt-[77px] mt-[73px] w-69% max-w-[1300px] mx-auto">
      <Swiper
        pagination={{ type: "progressbar" }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper relative rounded-2xl overflow-hidden shadow-lg"
      >
        {bags.map((bag, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[400px] md:h-[550px]">

              {/* Background Image */}
              <img
                src={bag}
                alt={`kanha-polymers-bag-${idx}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 flex flex-col justify-center items-center text-center px-6">
                <h2 className="text-lg md:text-2xl font-medium text-gray-100 tracking-wide uppercase">
                  Eco-Friendly & Durable Packaging
                </h2>

                <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-3 drop-shadow-lg">
                  Premium Non-Woven & Jute Bags {currentYear}
                </h1>

                <p className="text-gray-200 text-base md:text-lg max-w-xl leading-relaxed mb-5">
                  Kanha Polymers brings you sustainable and high-quality packaging
                  solutions — combining strength, style, and responsibility towards nature.
                </p>

                {/* ⭐ WORKING BUTTON → Redirects to /shop */}
                <Link
                  to="/shop"
                  className="text-sm md:text-base font-semibold uppercase text-white bg-[#F76B6A] hover:bg-[#d8111b] transition-all px-6 py-2.5 rounded-md shadow-md"
                >
                  Explore Collection
                </Link>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
