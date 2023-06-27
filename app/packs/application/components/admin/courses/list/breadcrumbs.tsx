import type { FC } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "tights";

export const AdminCoursesListBreacrumbs: FC = () => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <Link to="/admin">Admin</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Link to="/admin/courses">Courses</Link>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);
