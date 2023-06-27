import type { FC } from "react";

import { AdminUsersNewForm } from "./new/form";
import { AdminUsersNewBreacrumbs } from "./new/breadcrumbs";

export const AdminUsersNew: FC = () => (
  <main>
    <AdminUsersNewBreacrumbs />
    <AdminUsersNewForm />
  </main>
);
