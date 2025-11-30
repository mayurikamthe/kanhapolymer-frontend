import React, { useState } from "react";

const DesignYourBags: React.FC = () => {
  const [formData, setFormData] = useState({
    material: "",
    handle: "",
    color: "#000000",
    size: ""
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setLogoFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("material", formData.material);
      fd.append("handle", formData.handle);
      fd.append("color", formData.color);
      fd.append("size", formData.size);
      if (logoFile) fd.append("logo", logoFile); // 'logo' matches multer fieldname

      const res = await fetch("https://kanhapolymer.onrender.com/api/design", {
        method: "POST",
        body: fd
      });

      const data = await res.json();
      if (data.success) {
        alert("Design submitted!");
        setFormData({ material: "", handle: "", color: "#000000", size: "" });
        setLogoFile(null);
        setPreview("");
      } else {
        alert("Submission failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error — is backend running?");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#1a1a1a] mb-6">🎨 Design Your Own Bag</h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6 text-left">
          <div>
            <label className="block font-semibold mb-2">Choose Material</label>
            <select name="material" value={formData.material} onChange={handleChange} required className="w-full border rounded px-3 py-2">
              <option value="">Select Material</option>
              <option value="Non-Woven">Non-Woven</option>
              <option value="Jute">Jute</option>
              <option value="Cotton">Cotton</option>
              <option value="Paper">Paper</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">Select Handle</label>
            <select name="handle" value={formData.handle} onChange={handleChange} required className="w-full border rounded px-3 py-2">
              <option value="">Select Handle</option>
              <option value="Loop Handle">Loop Handle</option>
              <option value="D-Cut">D-Cut</option>
              <option value="Box Type">Box Type</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">Choose Color</label>
            <input type="color" name="color" value={formData.color} onChange={handleChange} className="w-16 h-9" />
          </div>

          <div>
            <label className="block font-semibold mb-2">Select Size</label>
            <select name="size" value={formData.size} onChange={handleChange} required className="w-full border rounded px-3 py-2">
              <option value="">Select Size</option>
              <option value="Small">Small (8x10)</option>
              <option value="Medium">Medium (10x12)</option>
              <option value="Large">Large (12x15)</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">Upload Logo</label>
            <input type="file" accept="image/*" onChange={handleFile} />
          </div>

          {preview && <img src={preview} alt="preview" className="mx-auto w-40 h-40 object-contain border mt-4" />}

          <div className="text-center">
            <button type="submit" className="bg-[#F76B6A] text-white px-6 py-2 rounded-full">Submit Design</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DesignYourBags;
