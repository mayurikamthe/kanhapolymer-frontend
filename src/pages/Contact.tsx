import React from "react";
import { MapPin, Phone, Mail, Factory } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          Contact <span className="text-[#F76B6A]">Kanha Polymers</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          We’re always happy to assist you. Reach out to us for product
          inquiries, quotations, or custom packaging solutions.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg space-y-6 border border-gray-100">
        <div className="flex items-center space-x-3">
          <Factory className="text-[#F76B6A]" />
          <div>
            <p className="text-sm text-gray-500">Company</p>
            <p className="font-semibold text-gray-800">Kanha Polymers</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Mail className="text-[#F76B6A]" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium text-gray-800">
              kanhapolymer7311@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Phone className="text-[#F76B6A]" />
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium text-gray-800">+91 9767686311</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <MapPin className="text-[#F76B6A] mt-1" />
          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-medium text-gray-800 leading-relaxed">
              NH 965, Takrarwadi Toll Plaza , Purandhar, Pune, Maharashtra, 412301
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-[#F76B6A] font-bold">GSTIN:</span>
          <p className="font-medium text-gray-800">27DHPPK5717M1ZM</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600 text-sm">
          We ensure quick response and best quality service for every inquiry.
        </p>
        <button className="mt-4 bg-[#F76B6A] hover:bg-[#d8111b] text-white px-6 py-2 rounded-md font-semibold transition-all">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Contact;
