import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";

interface Bag {
  id: number;
  img: string;
  price: string;
  desc: string;
  name?: string;
  images?: string[];
}

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Bag | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await fetch("/bags.json");
        if (!response.ok) throw new Error("Failed to load product data");
        const data = await response.json();
        const found = data.find((item: Bag) => String(item.id) === String(id));
        setProduct(found ?? null);
      } catch (error) {
        console.error("Error loading product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-600 border-solid"></div>
      </div>
    );

  if (!product)
    return (
      <div className="py-20 text-center text-gray-600 text-lg">
        Product not found or unavailable.
      </div>
    );

  return (
    <Container>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={product.img}
            alt={product.name ?? product.desc}
            className="w-full h-[420px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            {product.name ?? "Premium Bag"}
          </h1>
          <p className="text-green-700 font-bold text-2xl mb-4">
            ₹{product.price}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">{product.desc}</p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("add-to-cart", { detail: product })
                )
              }
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
            <button className="border border-green-600 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
