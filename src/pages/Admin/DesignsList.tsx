import React, { useEffect, useState } from "react";

const DesignsList: React.FC = () => {
  const [designs, setDesigns] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://kanhapolymer.onrender.com/api/designs")
      .then(res => res.json())
      .then(data => {
        if (data.success) setDesigns(data.designs);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Submitted Designs</h1>
      <div className="grid gap-4">
        {designs.map(d => (
          <div key={d._id} className="p-4 border rounded">
            <p><strong>Material:</strong> {d.material}</p>
            <p><strong>Handle:</strong> {d.handle}</p>
            <p><strong>Color:</strong> <span style={{background: d.color, display: "inline-block", width: 20, height: 20}} /></p>
            <p><strong>Size:</strong> {d.size}</p>
            {d.logoUrl && <img src={`https://kanhapolymer.onrender.com${d.logoUrl}`} alt="logo" className="w-32 h-32 object-contain mt-2" />}
            <p className="text-sm text-gray-500 mt-2">{new Date(d.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignsList;
