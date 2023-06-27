import type { FC, ReactNode } from "react";
import { useContext } from "react";
import { useLocation } from "react-router";
import { Navigate } from "react-router-dom";
import { World } from "@/application/contexts/world";
import { Flash } from "@/application/types/flash";

const FLASH: Flash = {
  color: "danger",
  message: "You must be authenticated to access this.",
};

export const AuthorizationAuthed: FC<{
  children?: ReactNode;
}> = ({ children }) => {
  const location = useLocation();
  const { authentication } = useContext(World);
  if (!authentication) {
    const state = { flash: FLASH, back: location };
    return <Navigate to="/login" state={state} />;
  }
  return <>{children}</>;
};
