import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bagsDropdown, setBagsDropdown] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setBagsDropdown(!bagsDropdown);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 🌿 Logo */}
          <NavLink to="/" className="text-2xl font-bold text-green-700">
            Kanha Polymers
          </NavLink>

          {/* 🧭 Center Menu */}
          <ul className="hidden md:flex space-x-6 font-medium text-gray-700 mx-auto">
            {/* 👜 Bags By Type Dropdown */}
            <li className="relative group">
              <button className="hover:text-green-600 transition-colors">
                Bags By Type
              </button>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-2 w-48 z-10">
                <li>
                  <NavLink
                    to="/bags-by-type/non-woven"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    Non Woven Bags
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bags-by-type/jute"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    Jute Bags
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bags-by-type/cotton"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    Cotton Bags
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bags-by-type/paper"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    Paper Bags
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bags-by-type/loop-handle"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    Loop Handle Bags
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bags-by-type/d-cut"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    D-Cut Bags
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bags-by-type/box-type"
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    Box Type Bags
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* 🏠 Other Pages (Centered) */}
            <li>
              <NavLink
                to="/"
                className="hover:text-green-600 transition-colors"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="hover:text-green-600 transition-colors"
              >
                About
              </NavLink>
            </li>

            {/* 🎨 Design Your Bags (New Page) */}
            <li>
              <NavLink
                to="/design-your-bags"
                className="hover:text-green-600 transition-colors"
              >
                Design Your Bags
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shop"
                className="hover:text-green-600 transition-colors"
              >
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="hover:text-green-600 transition-colors"
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/faq"
                className="hover:text-green-600 transition-colors"
              >
                FAQ
              </NavLink>
            </li>
          </ul>

          {/* 📱 Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-green-600 transition-colors"
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col p-4 space-y-2 text-gray-700 font-medium">
            <li>
              <button
                onClick={toggleDropdown}
                className="w-full text-left flex justify-between items-center"
              >
                Bags By Type
                <span>{bagsDropdown ? "▲" : "▼"}</span>
              </button>
              {bagsDropdown && (
                <ul className="pl-4 mt-2 space-y-1 text-gray-600">
                  <li>
                    <NavLink
                      to="/bags-by-type/non-woven"
                      onClick={() => setMenuOpen(false)}
                    >
                      Non Woven Bags
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/bags-by-type/jute"
                      onClick={() => setMenuOpen(false)}
                    >
                      Jute Bags
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/bags-by-type/cotton"
                      onClick={() => setMenuOpen(false)}
                    >
                      Cotton Bags
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/bags-by-type/paper"
                      onClick={() => setMenuOpen(false)}
                    >
                      Paper Bags
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/bags-by-type/loop-handle"
                      onClick={() => setMenuOpen(false)}
                    >
                      Loop Handle Bags
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/bags-by-type/d-cut"
                      onClick={() => setMenuOpen(false)}
                    >
                      D-Cut Bags
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/bags-by-type/box-type"
                      onClick={() => setMenuOpen(false)}
                    >
                      Box Type Bags
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/design-your-bags"
                onClick={() => setMenuOpen(false)}
              >
                Design Your Bags
              </NavLink>
            </li>

            <li>
              <NavLink to="/shop" onClick={() => setMenuOpen(false)}>
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink to="/faq" onClick={() => setMenuOpen(false)}>
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
