import type { FC, ReactNode } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Tabs, TabsItem, TabsList } from "tights";

import { AuthorizationUnauthed } from "./authorization/unauthed";

export const Authenticator: FC<{
  children?: ReactNode;
}> = ({ children }) => {
  const location = useLocation();

  return (
    <AuthorizationUnauthed>
      <Tabs>
        <TabsList>
          <TabsItem active={location.pathname === "/login"}>
            <Link replace to="/login" state={location.state}>
              Login
            </Link>
          </TabsItem>
          <TabsItem active={location.pathname === "/signup"}>
            <Link replace to="/signup" state={location.state}>
              Signup
            </Link>
          </TabsItem>
        </TabsList>
      </Tabs>
      {children}
    </AuthorizationUnauthed>
  );
};
