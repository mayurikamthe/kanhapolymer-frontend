import React from "react";
import Container from "../../components/Container";

// Example images for categories
import typeImg from "../assets/images/type.webp";
import usageImg from "../assets/images/usage.webp";

// Define category type
interface Category {
  id: number;
  title: string;
  img: string;
  link: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Bags by Type",
    img: typeImg,
    link: "/bags-by-type",
  },
  {
    id: 2,
    title: "Bags by Usage",
    img: usageImg,
    link: "/bags-by-usage",
  },
];

const Categories: React.FC = () => {
  return (
    <Container>
      <section className="my-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Shop by Category</h2>
        <p className="text-gray-500 mb-12">Explore bags by type or usage</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.link}
              className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-bold">
                  {cat.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Categories;
