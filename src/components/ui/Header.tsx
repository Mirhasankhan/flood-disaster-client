import logo from "../../assets/images/logo3.jpeg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";
// import { Button, Dropdown } from "antd";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import NavigationModal from "./NavigationModal";

const Header = () => {
  return (
    <div>
      <div className="py-2 md:px-8 px-2 flex border-b justify-between">
        <div>
          <h6 className="text-gray-400 text-sm inline-flex items-center gap-3">
            <FaPhone className="w-4 h-4" />
            1-830-760-660
          </h6>
          <h6 className="text-gray-400 text-sm inline-flex items-center gap-2 md:ml-4">
            <FaMailBulk className="w-4 h-4" />
            AltruistHub@gmail.com
          </h6>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <FaTwitter className="text-blue-600 text-xl" />
          <FaFacebook className="text-blue-600 text-xl" />
          <FaLinkedinIn className="text-blue-600 text-xl" />
          <FaInstagram className="text-blue-600 text-xl" />
        </div>
      </div>
      <div className="w-full md:px-8 px-2">
        <nav className="flex justify-between py-4 md:py-0 items-center">
          <NavLink className="text-xl md:text-2xl" to="/">
            <div className="flex items-center">
              <img
                className="h-8 w-8 md:h-12 md:w-12 rounded-full"
                src={logo}
                alt="AltruistHub Logo"
              />
              <h1 className="text-black text-3xl font-semibold">
                Altruist<span className="text-blue-600">Hub</span>
              </h1>
            </div>
          </NavLink>
          <div className="md:flex gap-4 hidden items-center">
            <NavLink
              to="campains"
              className="hover:text-green-500 hover:border-b hover:border-green-500 p-2 font-semibold"
            >
              Campains
            </NavLink>
            <Link
              to="/leaderboard"
              className="hover:text-green-500 hover:border-b hover:border-green-500 p-2 font-semibold"
            >
              Best Donors
            </Link>
            <Link
              to="/about-us"
              className="hover:text-green-500 hover:border-b hover:border-green-500 p-2 font-semibold"
            >
              About Us
            </Link>
            <Link
              to="/news"
              className="hover:text-green-500 hover:border-b hover:border-green-500 p-2 font-semibold"
            >
              News
            </Link>
            <div className="flex gap-2 items-center">
              <MenuDropdown />
              {/* {isDarkMode ? (
            <div title="Switch To Light Mode">
              <button className="text-xl" onClick={toggleTheme}>
                <MdLightMode />
              </button>
            </div>
          ) : (
            <div title="Switch To Dark Mode">
              <button className="text-xl text-white" onClick={toggleTheme}>
                <FaRegMoon />
              </button>
            </div>
          )} */}
            </div>
          </div>
          <div className="bg-gray-200 px-12 hidden md:block inset-y-0 -skew-x-12 py-3">
            <Link to="/campains">
              <button className="bg-blue-700 rounded-md text-white text-xl font-medium p-3">
                Donate Now
              </button>
            </Link>
          </div>
          <div className="md:hidden">
            <NavigationModal></NavigationModal>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
