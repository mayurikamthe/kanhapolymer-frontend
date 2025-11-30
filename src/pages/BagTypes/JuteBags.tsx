import React from "react";

const JuteBags = () => {
  const juteBags = [
    {
      name: "Natural Jute Carry Bag",
      image: "/images/jute1.jpg",
      description:
        "Eco-friendly jute carry bag ideal for shopping and daily use. Made from 100% biodegradable jute fibers.",
    },
    {
      name: "Printed Jute Gift Bag",
      image: "/images/jute2.jpg",
      description:
        "Stylish printed jute bag perfect for gifting, events, and packaging. Durable and reusable.",
    },
    {
      name: "Laminated Jute Bag",
      image: "/images/jute3.jpg",
      description:
        "Laminated jute bag with a smooth inner finish, providing extra strength and water resistance.",
    },
    {
      name: "Jute Grocery Tote",
      image: "/images/jute4.jpg",
      description:
        "Spacious grocery tote bag made from premium jute. Strong handles for easy carrying.",
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
          Jute Bags Collection
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {juteBags.map((bag, index) => (
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

export default JuteBags;
