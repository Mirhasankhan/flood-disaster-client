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
      <Link to="supplies">All Supplies</Link>
      {role ? (
        <div>
          <Link to={`/${role}/dashboard`}>
            <Button className="text-white">Dashboard</Button>
          </Link>
          <Button onClick={() => dispatch(logOut())}>Logout</Button>
        </div>
      ) : (
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
