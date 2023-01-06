import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
// routes
import { PATH_AUTH } from "../routes/paths";
// components
import LoadingScreen from "../components/loading-screen";
//
import { useAuthContext } from "./useAuthContext";

// ----------------------------------------------------------------------

type GuestRegisterProps = {
  children: ReactNode;
};

export default function GuestRegister({ children }: GuestRegisterProps) {
  const { isAuthenticated, isInitialized } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={PATH_AUTH.login} />;
  }

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}
