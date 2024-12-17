import { useState } from "react";
import { Link } from "react-router-dom";
import { logOut, useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { CiLogout } from "react-icons/ci";
import { AlignRightOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { FaBorderAll, FaDonate, FaUser } from "react-icons/fa";
import {
  MdDashboard,
  MdOutlineManageAccounts,
  MdRateReview,
  MdLeaderboard,
} from "react-icons/md";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { email, role, name } = useAppSelector(useCurrentUser);

  return (
    <div className="relative">
      {email ? (
        <div>
          <div className="hidden md:flex flex-row items-center gap-3 cursor-pointer">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-gray-300 text-black flex items-center gap-1 rounded-md"
            >
              <FaUser className="text-xl text-white rounded-full"></FaUser>
              <div className=" md:block">
                <h1>Hello, {name ? name.toString() : ""}</h1>
              </div>
            </div>
          </div>
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? (
              <AlignRightOutlined></AlignRightOutlined>
            ) : (
              <CloseCircleOutlined />
            )}
          </div>
        </div>
      ) : (
        <Link to="/login">
          <button className="font-bold">Login</button>
        </Link>
      )}
      {isOpen && (
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="absolute top-[44px] border md:top-[41px] right-0 bg-white p-2 md:p-6 rounded-b-md min-w-[250px]"
        >
          <Link to="/" className="flex gap-2 items-center text-gray-700">
            <MdOutlineManageAccounts className="text-2xl" />
            <h1 className="hover:underline hover:text-red-500">
              Manage My Account
            </h1>
          </Link>
          <Link
            to={`/${role}/insight`}
            className="flex gap-2 items-center text-gray-700 md:my-3 my-1"
          >
            <MdDashboard className="text-2xl" />
            <h1 className="hover:underline hover:text-red-500">Dashboard</h1>
          </Link>
          <Link
            to={`/${role}/my-donations`}
            className="flex gap-2 items-center text-gray-700 md:my-3 my-1"
          >
            <FaDonate className="text-2xl" />
            <h1 className="hover:underline hover:text-red-500">My Donations</h1>
          </Link>
          <Link
            to={`/supplies`}
            className="flex gap-2 items-center text-gray-700 md:my-3 my-1 md:hidden"
          >
            <FaBorderAll className="text-2xl" />
            <h1 className="hover:underline hover:text-red-500">All Supplies</h1>
          </Link>
          <Link
            to={`leaderboard`}
            className="flex gap-2 items-center text-gray-700 md:my-3 my-1 md:hidden"
          >
            <MdLeaderboard className="text-2xl" />
            <h1 className="hover:underline hover:text-red-500">Leaderboard</h1>
          </Link>
          <Link
            to={`/${role}/create-testimonial`}
            className="flex gap-2 items-center text-gray-700 md:my-3 my-1"
          >
            <MdRateReview className="text-2xl" />
            <h1 className="hover:underline hover:text-red-500">Testimonial</h1>
          </Link>

          <div
            onClick={() => {
              dispatch(logOut());
              setIsOpen(false);
            }}
            className="flex gap-2 items-center text-gray-700 cursor-pointer"
          >
            <CiLogout className="text-2xl" />
            <button className="hover:text-red-400 hover:underline">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
