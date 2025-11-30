import React from "react";

const PaperBags = () => {
  const paperBags = [
    {
      name: "Brown Kraft Paper Bag",
      image: "/images/paper1.jpg",
      description:
        "Eco-friendly brown kraft paper bag ideal for groceries, cafes, and restaurants.",
    },
    {
      name: "White Paper Shopping Bag",
      image: "/images/paper2.jpg",
      description:
        "Elegant white paper bag suitable for boutiques and premium packaging.",
    },
    {
      name: "Printed Paper Bag",
      image: "/images/paper3.jpg",
      description:
        "Custom-printed paper bags that help businesses promote their brand in an eco-conscious way.",
    },
    {
      name: "Twisted Handle Paper Bag",
      image: "/images/paper4.jpg",
      description:
        "Stylish twisted-handle paper bags for gifts, apparel, and retail stores.",
    },
  ];

  return (
    <div className="min-h-screen bg-yellow-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-yellow-800 mb-10">
          Paper Bags Collection
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paperBags.map((bag, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={bag.image}
                alt={bag.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-5 text-center">
                <h2 className="text-2xl font-semibold text-yellow-700 mb-2">
                  {bag.name}
                </h2>
                <p className="text-gray-700 text-sm">{bag.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaperBags;
