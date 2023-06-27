import type { FC } from "react";

import { AdminFacultiesListBreacrumbs } from "./list/breadcrumbs";
import { AdminFacultiesListTable } from "./list/table";

export const AdminFacultiesList: FC = () => (
  <main>
    <AdminFacultiesListBreacrumbs />
    <AdminFacultiesListTable />
  </main>
);
