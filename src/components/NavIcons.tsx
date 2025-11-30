import { FaSearch, FaUserCircle } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const NavIcons: React.FC = () => {
  return (
    <div className="flex items-center sm:gap-7 gap-4 xl:pr-0 pr-4">
      <FaSearch
        size={20}
        className="hover:text-[#515151] cursor-pointer transition-all"
      />
      <FaUserCircle
        size={20}
        className="hover:text-[#515151] cursor-pointer transition-all"
      />
      <FaBagShopping
        size={20}
        className="hover:text-[#515151] cursor-pointer transition-all"
      />
    </div>
  );
};

export default NavIcons;
