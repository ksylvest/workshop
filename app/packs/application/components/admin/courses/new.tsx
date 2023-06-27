import type { FC } from "react";
import { AdminCoursesNewBreacrumbs } from "./new/breadcrumbs";
import { AdminCoursesNewForm } from "./new/form";

export const AdminCoursesNew: FC = () => (
  <main>
    <AdminCoursesNewBreacrumbs />
    <AdminCoursesNewForm />
  </main>
);
