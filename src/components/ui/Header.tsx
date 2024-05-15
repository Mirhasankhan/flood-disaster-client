import logo from "../../assets/images/main-logo.avif";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";
import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUser, useCurrentUser } from "../../redux/features/auth/authSlice";
import { useUpdateMutation } from "../../redux/features/auth/authApi";
import Swal from "sweetalert2";
import { useAppliesQuery } from "../../redux/features/recipient/recipientManagement.api";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const { email, role, token } = useAppSelector(useCurrentUser);
  const [updateUser] = useUpdateMutation();
  const { data } = useAppliesQuery(email);

  const handleBecomeDonor = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this again!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Become Donor!",
    }).then((result) => {
      if (result.isConfirmed) {
        updateUser({ email: email, role: "donor" });
        dispatch(setUser({ email: email, role: "donor", token: token }));
        Swal.fire({
          title: "Congratulations!",
          text: "You Successfully Became A Donor.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="">
      <nav className="text-white sticky top-0 flex z-10 justify-between md:px-8 px-2 h-16  md:h-24 w-full items-center bg-black bg-opacity-40">
        <NavLink className="text-2xl md:text-4xl " to="/">
          <div className="flex gap-2 items-center">
            <img
              className="h-8 w-8  md:h-16 md:w-16  rounded-full"
              src={logo}
              alt=""
            />
            <h1 className="text-green-300 font-semibold">FloodCare</h1>
          </div>
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
        <div className="flex gap-2 items-center">
          {role === "recipient" && data?.length < 1 && (
            <Button onClick={() => handleBecomeDonor()}>Become Donor</Button>
          )}
          <MenuDropdown></MenuDropdown>
          {isDarkMode ? (
            <div title="Switch To Light Mode">
              <button className="text-xl" onClick={toggleTheme}>
                <FaMoon />
              </button>
            </div>
          ) : (
            <div title="Switch To Dark Mode">
              <button className="text-xl text-black" onClick={toggleTheme}>
                <FaRegMoon />
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
