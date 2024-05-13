import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { useCurrentUser } from "../redux/features/auth/authSlice";

const RecipientRoute = ({ children }: { children: ReactNode }) => {
  const { email, role } = useAppSelector(useCurrentUser);
  if (!email || role !== "recipient") {
    return <Navigate to="/login" replace></Navigate>;
  }
  return <div>{children}</div>;
};

export default RecipientRoute;
