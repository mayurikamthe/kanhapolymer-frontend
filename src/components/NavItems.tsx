import { Link } from "react-router-dom";

interface isClickProps {
  isClick: boolean;
}

const NavItems = ({ isClick }: isClickProps) => {
  return (
    <ul
      className={`z-50 md:flex gap-5 items-center list-none transition-all duration-300 ease-in-out
        ${
          isClick
            ? "absolute top-[72px] left-0 w-full bg-white py-5 flex flex-col items-center shadow-md md:static md:flex-row"
            : "hidden md:flex"
        }`}
    >
      <li>
        <Link
          to="/shop"
          className="text-[18px] font-semibold hover:bg-[#121212] hover:text-white py-2 px-3 transition-all"
        >
          Shop
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="text-[18px] font-semibold hover:bg-[#121212] hover:text-white py-2 px-3 transition-all"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/faq"
          className="text-[18px] font-semibold hover:bg-[#121212] hover:text-white py-2 px-3 transition-all"
        >
          FAQ
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="text-[18px] font-semibold hover:bg-[#121212] hover:text-white py-2 px-3 transition-all"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavItems;
