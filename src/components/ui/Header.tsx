import { Button } from "antd";
import logo from "../../assets/images/main-logo.avif";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut, useCurrentRole } from "../../redux/features/auth/authSlice";

import { NavLink } from "react-router-dom";
import { AlignRightOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

const Header = () => {
  const role = useAppSelector(useCurrentRole);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  return (
    // <div className="text-white sticky top-0 flex z-10 justify-between px-8 h-24 w-full items-center bg-black bg-opacity-40">
    //   <Link to="/">
    //     <img className="h-16 rounded-full" src={logo} alt="" />
    //   </Link>
    //   <div className="flex gap-4">
    //     <Link
    //       to="supplies"
    //       className="hover:bg-gray-500 p-2 rounded-md font-semibold"
    //     >
    //       All Supplies
    //     </Link>
    //     <Link
    //       to="/community"
    //       className="hover:bg-gray-500 p-2 rounded-md font-semibold"
    //     >
    //       Community
    //     </Link>
    //     <Link
    //       to="/leaderboard"
    //       className="hover:bg-gray-500 p-2 rounded-md font-semibold"
    //     >
    //       Leaderboard
    //     </Link>
    //   </div>
    //   {/* <Link to="testimonials">Testimonials</Link> */}
    //   {role ? (
    //     <div className="flex gap-4">
    //       <Link to={`/${role}/dashboard`}>
    //         <Button className="text-white font-semibold bg-green-300">
    //           Dashboard
    //         </Button>
    //       </Link>
    //       <Button
    //         className="text-white font-semibold bg-red-300 hidden"
    //         onClick={() => dispatch(logOut())}
    //       >
    //         Logout
    //       </Button>
    //     </div>
    //   ) : (
    //     <Link to="/login">
    //       <Button className="text-white font-semibold bg-blue-600">
    //         Login
    //       </Button>
    //     </Link>
    //   )}
    // </div>
    <div className="">
      <nav className="text-white sticky top-0 flex z-10 justify-between md:px-8 px-2 h-16  md:h-24 w-full items-center bg-black bg-opacity-40">
        <NavLink className="text-2xl md:text-4xl " to="/">
          <img
            className="h-8 w-8  md:h-16 md:w-16  rounded-full"
            src={logo}
            alt=""
          />
        </NavLink>
        <div className="md:flex gap-4 hidden">
          <Link
            to="supplies"
            className="hover:bg-gray-500 p-2 rounded-md font-semibold"
          >
            All Supplies
          </Link>
          <Link
            to="/community"
            className="hover:bg-gray-500 p-2 rounded-md font-semibold"
          >
            Community
          </Link>
          <Link
            to="/leaderboard"
            className="hover:bg-gray-500 p-2 rounded-md font-semibold"
          >
            Leaderboard
          </Link>
        </div>
        {role ? (
          <div className="md:flex gap-4 hidden ">
            <Link to={`/${role}/dashboard`}>
              <Button className="text-white font-semibold bg-green-300">
                Dashboard
              </Button>
            </Link>
            <Button
              className="text-white font-semibold bg-red-300 "
              onClick={() => dispatch(logOut())}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Link to="/login">
            <Button className="text-white font-semibold bg-blue-600">
              Login
            </Button>
          </Link>
        )}
        <div className="md:hidden transition-all">
          <div
            className="text-2xl md:text-[36px]"
            onClick={() => setOpen(!open)}
          >
            {!open && <AlignRightOutlined />}
          </div>

          {open && (
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className=" bg-gray-600 transition-transform transform duration-1000 text-white p-5 top-0 left-0 right-0 text-center justify-start absolute flex flex-col w-full"
            >
              <Link
                to="supplies"
                className="hover:bg-gray-500 p-2 font-semibold  border-t-2"
              >
                All Supplies
              </Link>
              <Link
                to="/community"
                className="hover:bg-gray-500 p-2 font-semibold  border-t-2"
              >
                Community
              </Link>
              <Link
                to="/leaderboard"
                className="hover:bg-gray-500 p-2 font-semibold border-t-2"
              >
                Leaderboard
              </Link>

              <div
                className="text-[40px] flex justify-end"
                onClick={() => setOpen(!open)}
              >
                {open && <CloseCircleOutlined />}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
