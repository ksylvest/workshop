import type { FC } from "react";

import { AdminUsersListBreacrumbs } from "./list/breadcrumbs";
import { AdminUsersListTable } from "./list/table";

export const AdminUsersList: FC = () => (
  <main>
    <AdminUsersListBreacrumbs />
    <AdminUsersListTable />
  </main>
);
