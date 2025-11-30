import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 py-12 px-6 font-semibold">

        {/* Quick Links */}
        <nav>
          <h3 className="text-lg mb-3 font-bold">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-[#F76B6A]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#F76B6A]">About</Link></li>
            <li><Link to="/shop" className="hover:text-[#F76B6A]">Shop</Link></li>
            <li><Link to="/faq" className="hover:text-[#F76B6A]">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-[#F76B6A]">Contact</Link></li>
          </ul>
        </nav>

        {/* Policies */}
        <div>
          <h3 className="text-lg mb-3 font-bold">Our Policies</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/shipping" className="hover:text-[#F76B6A]">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-[#F76B6A]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/payment" className="hover:text-[#F76B6A]">
                Payment Methods
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg mb-3 font-bold">Contact Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Email: info@kanhapolymer.com</li>
            <li>Phone: +91 9767686311</li>
            <li>Location: Takrarwadi Toll Plaza, Pune, Maharashtra</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg mb-3 font-bold">Follow Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F76B6A]"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/kanha.bags.pune"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F76B6A]"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F76B6A]"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 border-t border-gray-700 py-5">
        <p className="text-sm">
          © {currentYear} Kanha Polymer — All Rights Reserved. Designed with ❤️ by Team Kanha Polymer.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
