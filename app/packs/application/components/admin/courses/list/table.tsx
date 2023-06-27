import type { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Buttons, Table } from "tights";

import { useAdminCoursesQuery } from "@/application/graphql/app_schema";

export const AdminCoursesListTable: FC = () => {
  const { data } = useAdminCoursesQuery();

  return (
    <Table fullwidth striped>
      <thead>
        <tr>
          <th>Name</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {data?.courses.map((course) => (
          <tr key={course.id}>
            <td>{course.name}</td>
            <td>
              <Buttons alignment="right">
                <Button color="info">Edit</Button>
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
              <Button tag={Link} color="info" to="/admin/courses/new">
                New
              </Button>
            </Buttons>
          </td>
        </tr>
      </tfoot>
    </Table>
  );
};
