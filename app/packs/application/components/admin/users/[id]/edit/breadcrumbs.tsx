import type { FC } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "tights";

export const AdminUsersEditBreacrumbs: FC<{
  id: string;
}> = ({ id }) => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <Link to="/admin">Admin</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to="/admin/users">Users</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Link to={`/admin/users/${id}/edit`}>Edit</Link>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);
