import React from "react";

const LoopHandleBags = () => {
  const loopHandleBags = [
    {
      name: "Non-Woven Loop Handle Bag",
      image: "/images/loop1.jpg",
      description:
        "Durable non-woven loop handle bag, ideal for retail stores and events. Reusable and eco-friendly.",
    },
    {
      name: "Customized Loop Handle Bag",
      image: "/images/loop2.jpg",
      description:
        "Custom-printed loop handle bags for promotional branding and packaging purposes.",
    },
    {
      name: "Box Type Loop Handle Bag",
      image: "/images/loop3.jpg",
      description:
        "Premium box-type loop handle bag with wide base for carrying heavier items.",
    },
    {
      name: "Glossy Finish Loop Handle Bag",
      image: "/images/loop4.jpg",
      description:
        "Stylish glossy-finish loop handle bag, perfect for boutiques and fashion stores.",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-orange-800 mb-10">
          Loop Handle Bags Collection
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loopHandleBags.map((bag, index) => (
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
                <h2 className="text-2xl font-semibold text-orange-700 mb-2">
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

export default LoopHandleBags;
