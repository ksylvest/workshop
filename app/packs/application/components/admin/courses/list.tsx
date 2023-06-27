import type { FC } from "react";

import { AdminCoursesListBreacrumbs } from "./list/breadcrumbs";
import { AdminCoursesListTable } from "./list/table";

export const AdminCoursesList: FC = () => (
  <main>
    <AdminCoursesListBreacrumbs />
    <AdminCoursesListTable />
  </main>
);
