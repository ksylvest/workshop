import type { FC } from "react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";

import { AdminUsersEditBreacrumbs } from "./breadcrumbs";
import { AdminUsersEditForm } from "./form";

const AdminUsersEdit: FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <Navigate to="/admin/users" replace />;

  return (
    <main>
      <AdminUsersEditBreacrumbs id={id} />
      <AdminUsersEditForm />
    </main>
  );
};

export default AdminUsersEdit;
