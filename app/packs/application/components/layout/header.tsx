import type { FC } from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarDivider,
  NavbarDropdown,
  NavbarEnd,
  NavbarItem,
  NavbarLink,
  NavbarMenu,
  NavbarStart,
} from "tights";

import { World } from "@/application/contexts/world";

import { LogoutButton } from "@/application/components/logout/button";

const DEFAULT_ACTIVE = false;

const NavbarItemAdmin: FC = () => (
  <NavbarItem tag={Link} to="/admin">
    Admin
  </NavbarItem>
);

const NavbarItemLogin: FC = () => (
  <NavbarItem tag={Link} to="/login">
    Login
  </NavbarItem>
);

const NavbarItemSignup: FC = () => (
  <NavbarItem tag={Link} to="/signup">
    Signup
  </NavbarItem>
);

const NavbarItemLogout: FC = () => (
  <NavbarItem tag="div">
    <LogoutButton />
  </NavbarItem>
);

const NavbarItemProfile: FC = () => (
  <NavbarItem dropdown hoverable>
    <NavbarLink>Me</NavbarLink>
    <NavbarDropdown direction="right">
      <NavbarItemAdmin />
      <NavbarDivider />
      <NavbarItemLogout />
    </NavbarDropdown>
  </NavbarItem>
);

export const LayoutHeader: FC = () => {
  const { authentication } = useContext(World);
  const [active, setActive] = useState<boolean>(DEFAULT_ACTIVE);
  const onToggle = (): void => setActive(!active);

  return (
    <header>
      <Navbar color="light">
        <NavbarBrand>
          <NavbarItem tag={Link} to="/">
            Workshop
          </NavbarItem>
          <NavbarBurger active={active} onClick={onToggle} />
        </NavbarBrand>
        <NavbarMenu active={active}>
          <NavbarStart>{authentication && <NavbarItemAdmin />}</NavbarStart>
          <NavbarEnd>
            {!authentication && <NavbarItemLogin />}
            {!authentication && <NavbarItemSignup />}
            {authentication && <NavbarItemProfile />}
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </header>
  );
};
