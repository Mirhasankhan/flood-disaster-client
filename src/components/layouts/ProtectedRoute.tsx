import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut, useCurrentUser } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const { email } = useAppSelector(useCurrentUser);
  if (!email) {
    return <Navigate to="/login" replace></Navigate>;
  }
  return (
    <div>
      {children}
      {/* <div>
        <button onClick={() => dispatch(logOut())}>logut button</button>
      </div> */}
    </div>
  );
};

export default ProtectedRoute;
