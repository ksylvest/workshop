import type { FC } from "react";

import { AdminAppointmentsList } from "./appointments/list";
import { AdminAppointmentsBreacrumbs } from "./appointments/breadcrumbs";

export const AdminAppointments: FC = () => (
  <main>
    <AdminAppointmentsBreacrumbs />
    <AdminAppointmentsList />
  </main>
);
