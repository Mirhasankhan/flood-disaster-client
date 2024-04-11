import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { email } = useAppSelector(useCurrentUser);
  if (!email) {
    return <Navigate to="/login" replace></Navigate>;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
