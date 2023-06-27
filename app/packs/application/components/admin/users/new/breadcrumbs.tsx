import type { FC } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "tights";

export const AdminUsersNewBreacrumbs: FC = () => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <Link to="/admin">Admin</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to="/admin/users">Users</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Link to="/admin/users/new">New</Link>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);
