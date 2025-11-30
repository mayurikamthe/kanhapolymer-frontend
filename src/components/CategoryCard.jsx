// src/components/CategoryCard.jsx
export default function CategoryCard({ title, img }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}
