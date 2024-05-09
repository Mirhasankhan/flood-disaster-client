import badge from "../../assets/images/main-logo.avif";
import {
  GithubOutlined,
  FacebookFilled,
  InstagramFilled,
  XOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-12 px-6">
      <div className="container mx-auto  md:flex justify-between items-center">
        <div className="text-left">
          <div className="flex gap-2 items-center my-3">
            <img className="h-8 rounded-full" src={badge} alt="" />
            <p>Flood Donation.</p>
          </div>
          <p className="text-sm pb-3">&copy; 2024 All rights reserved.</p>
        </div>
        <div>
          <div className="flex gap-6 text-3xl mb-4">
            <GithubOutlined />
            <FacebookFilled></FacebookFilled>
            <XOutlined></XOutlined>
            <InstagramFilled></InstagramFilled>
          </div>
          <div className="text-center md:text-right">
            <ul className="flex justify-left md:justify-end space-x-4">
              <li>
                <a href="#" className="text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
