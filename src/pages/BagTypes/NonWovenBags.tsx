import React from "react";

const NonWovenBags = () => {
  const nonWovenBags = [
    {
      name: "Plain Non-Woven Bag",
      image: "/images/nonwoven1.jpg",
      description:
        "Eco-friendly non-woven carry bag, lightweight and perfect for daily use and groceries.",
    },
    {
      name: "Printed Non-Woven Bag",
      image: "/images/nonwoven2.jpg",
      description:
        "Custom-printed non-woven bags ideal for branding, promotions, and retail packaging.",
    },
    {
      name: "Box Type Non-Woven Bag",
      image: "/images/nonwoven3.jpg",
      description:
        "Strong box-shaped non-woven bag with wide base, suitable for gift items and bulk products.",
    },
    {
      name: "D-Cut Non-Woven Bag",
      image: "/images/nonwoven4.jpg",
      description:
        "Durable D-cut design with reinforced handles, reusable and recyclable.",
    },
  ];

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
          Non-Woven Bags Collection
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {nonWovenBags.map((bag, index) => (
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
                <h2 className="text-2xl font-semibold text-green-700 mb-2">
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

export default NonWovenBags;
