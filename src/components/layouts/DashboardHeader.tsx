import { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoChatbubblesOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
// import { CiDark } from "react-icons/ci";
import { Layout } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut, useCurrentUser } from "../../redux/features/auth/authSlice";
import profile from "../../assets/images/banner.webp";
import { Link } from "react-router-dom";

const { Header } = Layout;

const DashboardHeader = () => {
  const [open, setOpen] = useState(false);
  const { role, name } = useAppSelector(useCurrentUser);

  const dispatch = useAppDispatch();

  return (
    <Header
      style={{
        padding: 0,
        paddingLeft: 24,
        paddingRight: 24,
        // backgroundColor: "white",
        color: "white",
        display: "flex",

        justifyContent: "space-between",
        alignItems: "center",
        // overflow: "hidden",
      }}
    >
      <div>
        <h1 className="font-medium">Welcome {name}</h1>
      </div>
      <div className="flex md:gap-6 gap-2  text-4xl">
        <CiLight className="border p-2 bg-white text-black rounded-full hover:bg-green-600 cursor-pointer hover:text-white"></CiLight>
        <Link to="">
          <IoChatbubblesOutline className="border p-2 bg-white text-black rounded-full hover:bg-green-600 cursor-pointer hover:text-white"></IoChatbubblesOutline>
        </Link>
      </div>
      <div>
        <div className=" w-full flex items-center text-white">
          <div className="relative cursor-pointer text-black flex items-center gap-1">
            <img
              onClick={() => setOpen(!open)}
              className="w-12 h-12 border rounded-full"
              src={profile}
              alt=""
            />
            {open && (
              <div className="absolute w-40 top-14 bg-white shadow-xl rounded-b-md right-0 px-2">
                <Link
                  to={`/${!role ? "user" : "seller"}/manage-profile`}
                  className="flex gap-2 items-center text-gray-700  cursor-pointer"
                >
                  <CiUser className="text-2xl"></CiUser>
                  <h1 className=" hover:underline">My Profile</h1>
                </Link>
                <div
                  onClick={() => {
                    dispatch(logOut());
                    setOpen(false);
                  }}
                  className="flex gap-2 items-center text-gray-700 hover:text-blue-400 cursor-pointer"
                >
                  <CiLogout className="text-2xl" />
                  <button className=" hover:underline">Logout</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Header>
  );
};

export default DashboardHeader;
