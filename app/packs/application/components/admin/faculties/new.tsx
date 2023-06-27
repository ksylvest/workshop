import type { FC } from "react";

import { AdminFacultiesNewBreacrumbs } from "./new/breadcrumbs";
import { AdminFacultiesNewForm } from "./new/form";

export const AdminFacultiesNew: FC = () => (
  <main>
    <AdminFacultiesNewBreacrumbs />
    <AdminFacultiesNewForm />
  </main>
);
