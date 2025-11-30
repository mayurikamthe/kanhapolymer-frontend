import React from "react";
import { Link } from "react-router-dom";

// Type for a single bag
export interface Bag {
  id: number;
  img: string;
  price: string;
  desc: string;
  name?: string;
}

interface BagCardProps {
  data: Bag;
}

const BagCard: React.FC<BagCardProps> = ({ data }) => {
  const handleAddToCart = () => {
    const event = new CustomEvent<Bag>("add-to-cart", { detail: data });
    window.dispatchEvent(event);
  };

  return (
    <div className="w-full max-w-xs bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      {/* Product Link */}
      <Link to={`/product/${data.id}`} className="block">
        <div className="w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={data.img}
            alt={data.name ?? data.desc}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-800 line-clamp-2">
          {data.name ?? data.desc}
        </h3>
        <p className="mt-2 text-green-700 font-bold">₹{data.price}</p>

        {/* Buttons */}
        <div className="mt-3 flex items-center justify-between">
          <Link
            to={`/product/${data.id}`}
            className="text-sm bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 transition-colors"
          >
            View
          </Link>

          <button
            className="text-sm border border-green-600 text-green-600 px-3 py-2 rounded hover:bg-green-50 transition-colors"
            onClick={handleAddToCart}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default BagCard;
