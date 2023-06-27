import type { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { Column, Columns, Menu, MenuItem, MenuLabel, MenuList } from "tights";

import { AuthorizationAuthed } from "@/application/components/authorization/authed";

export const AdminLayout: FC = () => (
  <AuthorizationAuthed>
    <Columns>
      <Column size={3}>
        <Menu>
          <MenuLabel>Manage</MenuLabel>
          <MenuList>
            <MenuItem>
              <Link to="/admin/appointments">Appointments</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/admin/courses">Courses</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/admin/faculties">Faculties</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/admin/users">Users</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Column>
      <Column size={9}>
        <Outlet />
      </Column>
    </Columns>
  </AuthorizationAuthed>
);
