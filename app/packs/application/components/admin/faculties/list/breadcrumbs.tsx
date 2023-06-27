import type { FC } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "tights";

export const AdminFacultiesListBreacrumbs: FC = () => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <Link to="/admin">Admin</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Link to="/admin/faculties">Faculties</Link>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);
