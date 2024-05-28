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
import { FaRegMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

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
    <div
      style={{
        background: isDarkMode ? "white" : "black",
        color: isDarkMode ? "black" : "white",
      }}
      className="sticky top-0 z-10 w-full bg-white"
    >
      <nav className="flex justify-between md:px-8 px-2 h-16 md:h-24 items-center">
        <NavLink className="text-xl md:text-2xl" to="/">
          <div className="flex gap-1 items-center">
            <img
              className="h-8 w-8 md:h-12 md:w-12 rounded-full"
              src={logo}
              alt="FloodCare Logo"
            />
            <h1 className="text-green-300 font-semibold italic">FloodCare</h1>
          </div>
        </NavLink>
        <div className="md:flex gap-4 hidden">
          <NavLink
            to="supplies"
            className="hover:text-green-500 hover:border-b hover:border-green-500 p-2 font-semibold"
          >
            All Supplies
          </NavLink>
          <Link
            to="/leaderboard"
            className="hover:text-green-500 hover:border-b hover:border-green-500 p-2 font-semibold"
          >
            Leaderboard
          </Link>
          {/* <Link
            to="/community"
            className="hover:text-green-500 hover:border-b hover:border-green-500 p-2 font-semibold"
          >
            Community
          </Link> */}
          <Link
            to="/about-us"
            className="hover:text-green-500 hover:border-b hover:border-green-500 p-2 font-semibold"
          >
            About Us
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          {role === "recipient" && data?.length < 1 && (
            <Button className="text-green-400" onClick={handleBecomeDonor}>
              Become Donor
            </Button>
          )}
          <MenuDropdown />
          {isDarkMode ? (
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
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
