import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faqs = [
  {
    question: "What materials are your bags made of?",
    answer:
      "Our bags are made from eco-friendly PP woven, jute, canvas, and recycled materials to ensure both durability and sustainability.",
  },
  {
    question: "How can I place a bulk order?",
    answer:
      "You can contact us through the 'Contact' page or call our sales team directly. We offer special discounts on bulk orders.",
  },
  {
    question: "Do you offer custom printing on bags?",
    answer:
      "Yes, we provide customized printing services for logos, brand names, and messages on selected bag types.",
  },
  {
    question: "What is the estimated delivery time?",
    answer:
      "Orders are usually delivered within 5–7 business days depending on your location.",
  },
  {
    question: "Can I return or exchange a bag?",
    answer:
      "Yes, you can return or exchange a product within 7 days of delivery, provided it is unused and in its original condition.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Frequently Asked Questions
      </h2>
      {Faqs.map((item, index) => (
        <div
          key={index}
          className="mb-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
        >
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800 px-5 py-4 focus:outline-none"
          >
            {item.question}
            {activeIndex === index ? (
              <ChevronUp className="w-5 h-5 text-[#F76B6A]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>

          {activeIndex === index && (
            <p className="px-5 pb-4 text-gray-600 animate-fadeIn">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
