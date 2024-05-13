import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { useCurrentUser } from "../redux/features/auth/authSlice";

const DonorRoute = ({ children }: { children: ReactNode }) => {
  const { email, role } = useAppSelector(useCurrentUser);
  if (!email || role !== "donor") {
    return <Navigate to="/login" replace></Navigate>;
  }
  return <div>{children}</div>;
};

export default DonorRoute;
