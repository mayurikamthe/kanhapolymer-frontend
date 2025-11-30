import React from "react";

const CottonBags: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Cotton Bags</h1>
      <p className="text-gray-700 text-lg mb-4">
        Our <strong>cotton bags</strong> are made from 100% pure cotton fabric,
        making them eco-friendly, washable, and durable. These bags are perfect
        for daily shopping, grocery use, gifting, and promotional events.
      </p>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Available in various sizes and colors.</li>
        <li>Soft, reusable, and biodegradable material.</li>
        <li>Custom printing options available for branding.</li>
        <li>Strong handles for easy carrying and long life.</li>
      </ul>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-3">
          Why Choose Cotton Bags?
        </h2>
        <p className="text-gray-700">
          Cotton bags combine style and sustainability. They are ideal for
          customers who care about the environment and want a durable,
          attractive alternative to plastic bags.
        </p>
      </div>
    </div>
  );
};

export default CottonBags;
