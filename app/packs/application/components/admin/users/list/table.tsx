import type { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Buttons, Table } from "tights";

import { useAdminUsersQuery } from "@/application/graphql/app_schema";

export const AdminUsersListTable: FC = () => {
  const { data } = useAdminUsersQuery();
  return (
    <Table fullwidth striped>
      <thead>
        <tr>
          <th>Name</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {data?.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>
              <Buttons alignment="right">
                <Button
                  tag={Link}
                  color="info"
                  to={`/admin/users/${user.id}/edit`}
                >
                  Edit
                </Button>
                <Button color="danger">Delete</Button>
              </Buttons>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3}>
            <Buttons alignment="right">
              <Button tag={Link} color="info" to="/admin/users/new">
                New
              </Button>
            </Buttons>
          </td>
        </tr>
      </tfoot>
    </Table>
  );
};
