import React from "react";
import { useQuery } from "@tanstack/react-query";
import BagCard from "../../components/BagCard";
import Container from "../../components/Container";

interface Bag {
  id: number;
  img: string;
  price: string;
  desc: string;
  name?: string;
}

const fetchBags = async (): Promise<Bag[]> => {
  const res = await fetch("/bags.json");
  if (!res.ok) throw new Error("Failed to load");
  return res.json();
};

const Shop: React.FC = () => {
  const { data, isLoading, isError } = useQuery<Bag[]>({ queryKey: ["bags"], queryFn: fetchBags });

  if (isLoading) return <div className="py-20 text-center">Loading...</div>;
  if (isError || !data) return <div className="py-20 text-center">No products found</div>;

  return (
    <Container>
      <div className="mt-20 mb-8">
        <button className="text-green-600 hover:underline mb-4" onClick={() => {
          window.history.back();
        }}>&larr; Back to Home</button>
        <h1 className="text-3xl font-bold text-gray-800">Shop All Products</h1>
        <p className="text-gray-500 mt-1">Browse our range of eco-friendly bags</p>
      </div>

      {/* Filters placeholder */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-gray-600">Showing {data.length} products</div>
        <div className="flex gap-3">
          <select className="border rounded px-3 py-2">
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((b) => (
          <BagCard key={b.id} data={b} />
        ))}
      </div>
    </Container>
  );
};

export default Shop;
