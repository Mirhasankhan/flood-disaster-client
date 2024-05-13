import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logOut, useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Button } from "antd";
import { CiLogout } from "react-icons/ci";
import { AlignRightOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { FaBorderAll } from "react-icons/fa";
import {
  MdDashboard,
  MdOutlineManageAccounts,
  MdRateReview,
  MdLeaderboard,
} from "react-icons/md";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { email, role } = useAppSelector(useCurrentUser);
  const dispatch = useAppDispatch();

  return (
    <div className="relative">
      {email ? (
        <div>
          <div className="hidden md:flex flex-row items-center gap-3 cursor-pointer">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-transparent hover:bg-gray-600 flex items-center gap-1 rounded-lg"
            >
              <UserOutlined className="text-2xl bg-white p-2 text-gray-400 rounded-full"></UserOutlined>
              <div className=" md:block">
                <h1>Hello, {role}</h1>
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
          <Button className="text-white font-semibold bg-blue-600">
            Login
          </Button>
        </Link>
      )}
      {isOpen && (
        <div className="absolute top-[44px] border md:top-[76px] right-0 bg-white p-2 md:p-6 rounded-b-md min-w-[250px]">
          <Link to="/profile" className="flex gap-2 items-center text-gray-700">
            <MdOutlineManageAccounts className="text-2xl" />
            <h1 className="hover:underline hover:text-red-500">
              Manage My Account
            </h1>
          </Link>
          <Link
            to={`/${role}/dashboard`}
            className="flex gap-2 items-center text-gray-700 md:my-3 my-1"
          >
            <MdDashboard className="text-2xl" />
            <h1 className="hover:underline hover:text-red-500">Dashboard</h1>
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
            to={`/myReviews`}
            className="flex gap-2 items-center text-gray-700 md:my-3 my-1"
          >
            <MdRateReview className="text-2xl" />
            <h1 className="hover:underline hover:text-red-500">My Reviews</h1>
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
