import React from "react";
import { useParams, Link } from "react-router-dom";

const BagTypeDetail: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  const readableType = type ? type.replace("-", " ") : "";

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <Link
        to="/bags-by-type"
        className="text-green-600 hover:underline text-sm mb-4 inline-block"
      >
        ← Back to Bags By Type
      </Link>

      <h1 className="text-3xl font-bold text-green-700 capitalize mb-4">
        {readableType} Bags
      </h1>

      <p className="text-gray-700 mb-6">
        These {readableType} bags are eco-friendly, stylish, and perfect for
        various needs. We provide premium quality bags suitable for shopping,
        events, and branding.
      </p>

      {/* 👜 Later you can add product cards, gallery, or features here */}
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
        <p className="text-gray-600">
          Products for {readableType} will appear here.
        </p>
      </div>
    </div>
  );
};

export default BagTypeDetail;
