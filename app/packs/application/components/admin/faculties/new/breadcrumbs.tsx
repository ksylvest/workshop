import type { FC } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "tights";

export const AdminFacultiesNewBreacrumbs: FC = () => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <Link to="/admin">Admin</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to="/admin/faculties">Faculties</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Link to="/admin/faculties/new">New</Link>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);
