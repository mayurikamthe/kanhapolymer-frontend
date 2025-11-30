import React from "react";

const DCutBags: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-4">D-Cut Bags</h1>

      <p className="text-gray-700 text-lg mb-4">
        Our <strong>D-Cut Bags</strong> are designed with a durable D-shaped handle,
        providing both comfort and strength for carrying. These bags are lightweight,
        reusable, and an eco-friendly substitute for single-use plastic bags.
      </p>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Made from high-quality non-woven or fabric material.</li>
        <li>Strong D-cut handles ensure easy grip and comfort.</li>
        <li>Custom sizes, colors, and printing options available.</li>
        <li>Ideal for retail stores, exhibitions, and brand promotions.</li>
      </ul>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-3">
          Benefits of D-Cut Bags
        </h2>
        <p className="text-gray-700">
          These bags are durable, recyclable, and can be reused multiple times.
          Their simple yet stylish design makes them a favorite choice among
          brands and customers promoting sustainability.
        </p>
      </div>
    </div>
  );
};

export default DCutBags;
