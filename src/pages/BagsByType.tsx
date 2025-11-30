import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const BagsByType: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const type = event.target.value;
    setSelectedType(type);

    if (type) {
      navigate(`/bags-by-type/${type}`);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-8">
          Choose Bag Type
        </h1>

        <div className="bg-white shadow-lg rounded-2xl p-8">
          <label
            htmlFor="bagType"
            className="block text-lg font-semibold text-gray-700 mb-3"
          >
            Select a Bag Type
          </label>

          <select
            id="bagType"
            value={selectedType}
            onChange={handleChange}
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 text-gray-800"
          >
            <option value="">-- Choose a Type --</option>
            <option value="non-woven">Non-Woven Bags</option>
            <option value="jute">Jute Bags</option>
            <option value="cotton">Cotton Bags</option>
            <option value="paper">Paper Bags</option>
            <option value="loop-handle">Loop Handle Bags</option>
            <option value="d-cut">D-Cut Bags</option>
            <option value="box-type">Box Type Bags</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BagsByType;
