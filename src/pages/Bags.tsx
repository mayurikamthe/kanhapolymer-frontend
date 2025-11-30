import React from "react";
import { useQuery } from "@tanstack/react-query";
import BagCard from "../components/BagCard";

// Define the type for each bag item
interface Bag {
  id: number;
  img: string;
  price: string;
  desc: string;
}

const Bags: React.FC = () => {
  // Fetch data from bags.json
  const fetchBags = async (): Promise<Bag[]> => {
    const res = await fetch("/bags.json");
    if (!res.ok) throw new Error("Failed to fetch bags data");
    return res.json();
  };

  const { data, isLoading, isError } = useQuery<Bag[]>({
    queryKey: ["bags"],
    queryFn: fetchBags,
  });

  // Loading State
  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh]">
        <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-[#F76B6A] border-solid mb-4"></div>
        <p className="text-gray-500 text-lg font-medium">Loading products...</p>
      </div>
    );
  }

  // Error / Empty State
  if (isError || !data || data.length === 0) {
    return (
      <div className="text-center my-20">
        <h2 className="text-2xl font-semibold text-gray-600 mb-2">
          No Products Found
        </h2>
        <p className="text-gray-500">
          Please check back soon. We’re adding more eco-friendly packaging options!
        </p>
      </div>
    );
  }

  // Main Return
  return (
    <section className="px-4 md:px-10 lg:px-20 mt-24 mb-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-700 mb-3">
          Our Product Range
        </h1>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          Explore our wide variety of durable, eco-friendly, and customizable bags.
          Kanha Polymers manufactures high-quality{" "}
          <span className="font-semibold text-gray-700">
            Non-Woven Bags, Jute Bags, PP Woven Bags, and HDPE Bags
          </span>{" "}
          suitable for retail, industrial, and promotional uses.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
        {data.map((bag) => (
          <BagCard key={bag.id} data={bag} />
        ))}
      </div>

      {/* Closing Note */}
      <div className="text-center mt-16">
        <p className="text-gray-600 text-lg font-medium">
          Every bag we craft reflects <span className="text-[#F76B6A]">Quality</span>,{" "}
          <span className="text-[#F76B6A]">Sustainability</span>, and{" "}
          <span className="text-[#F76B6A]">Innovation</span>.
        </p>
      </div>
    </section>
  );
};

export default Bags;
