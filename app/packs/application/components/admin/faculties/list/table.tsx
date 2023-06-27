import type { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Buttons, Table } from "tights";

import { useAdminFacultiesQuery } from "@/application/graphql/app_schema";

export const AdminFacultiesListTable: FC = () => {
  const { data } = useAdminFacultiesQuery();
  return (
    <Table fullwidth striped>
      <thead>
        <tr>
          <th>Name</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {data?.faculties.map((faculty) => (
          <tr key={faculty.id}>
            <td>{faculty.name}</td>
            <td>
              <Buttons alignment="right">
                <Button color="info">Edit </Button>
                <Button color="danger">Delete</Button>
              </Buttons>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>
            <Buttons alignment="right">
              <Button tag={Link} color="info" to="/admin/faculties/new">
                New
              </Button>
            </Buttons>
          </td>
        </tr>
      </tfoot>
    </Table>
  );
};
