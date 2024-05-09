import { Button } from "antd";
import logo from "../../assets/images/main-logo.avif";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut, useCurrentRole } from "../../redux/features/auth/authSlice";

const Header = () => {
  const role = useAppSelector(useCurrentRole);
  const dispatch = useAppDispatch();
  return (
    <div className="text-white sticky top-0 flex z-10 justify-between px-8 h-24 w-full items-center bg-black bg-opacity-40">
      <Link to="/">
        <img className="h-16 rounded-full" src={logo} alt="" />
      </Link>
      <div className="flex gap-4">
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
      </div>
      {/* <Link to="testimonials">Testimonials</Link> */}
      {role ? (
        <div className="flex gap-4">
          <Link to={`/${role}/dashboard`}>
            <Button className="text-white font-semibold bg-green-300">
              Dashboard
            </Button>
          </Link>
          <Button
            className="text-white font-semibold bg-red-300 hidden"
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
    </div>
  );
};

export default Header;
