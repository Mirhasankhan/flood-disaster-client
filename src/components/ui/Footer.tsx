import logo from "../../assets/images/logo3.jpeg";
import { IoLocationSharp } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1D1D1D]  text-white">
      <div className="px-4 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} className="h-12 rounded-full w-12"></img>
              <h1 className="text-2xl font-semibold">
                Altruist<span className="text-blue-600">Hub</span>
              </h1>
            </div>
            <div className="pt-2 flex items-center gap-1 font-semibold">
              <IoLocationSharp className="text-blue-600 text-2xl"></IoLocationSharp>
              <h1>44, Purana Paltan, Dhaka-1000</h1>
            </div>
            <div className="pt-3 flex items-center gap-2 font-semibold">
              <FaMailBulk className="text-blue-600 text-2xl"></FaMailBulk>
              <p>AltruistHub@gmail.com</p>
            </div>
          </div>
          <div>
            <h1 className="font-medium text-xl">Sign Up For Our Newsletter</h1>
            <p className="py-3">
              Get notified about updates and be the first to get early access to
              new Podcast episodes.
            </p>
            <div className="flex">
              <input
                className="border p-1 pr-4 md:pr-12 rounded-l-md"
                type="text"
                placeholder="Your Email Address"
              />
              <button className="bg-[#7E53D4] text-white px-6 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="grid gap-2 md:grid-cols-4 pt-8">
          <div>
            <h1>Privacy Policy</h1>
            <p className="pt-2">Terms & Condition</p>
          </div>
          <div>
            <p>About Us</p>
            <p className="pt-2">Contact Us</p>
          </div>
          <div>
            <p>Help Center</p>
            <p className="pt-2">Terms & Condition</p>
          </div>

          <div>
            <h1>Social LInk</h1>
            <div className="flex gap-6 text-2xl pt-2">
              <FaTwitter className="text-blue-600 text-2xl" />
              <FaFacebook className="text-blue-600 text-2xl" />
              <FaLinkedinIn className="text-blue-600 text-2xl" />
              <FaInstagram className="text-blue-600 text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#7E53D4] text-center py-3 text-sm">
        <p>&copy; 2024 | AltruistHub</p>
      </div>
    </div>
  );
};

export default Footer;
