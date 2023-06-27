import type { FC, ReactNode } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { World } from "@/application/contexts/world";
import { Flash } from "@/application/types/flash";

const FLASH: Flash = {
  color: "info",
  message: "You are already authenticated.",
};

export const AuthorizationUnauthed: FC<{
  children?: ReactNode;
}> = ({ children }) => {
  const { authentication } = useContext(World);
  if (authentication) {
    const state = { flash: FLASH };
    return <Navigate to="/" state={state} />;
  }
  return <>{children}</>;
};
