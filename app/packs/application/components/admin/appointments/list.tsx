import type { FC } from "react";
import { format, parseISO } from "date-fns";
import { Button, Buttons, Table } from "tights";

import { useAdminAppointmentsQuery } from "@/application/graphql/app_schema";

export const AdminAppointmentsList: FC = () => {
  const { data } = useAdminAppointmentsQuery();
  return (
    <Table fullwidth striped>
      <thead>
        <tr>
          <th>Student</th>
          <th>Faculty</th>
          <th>Course</th>
          <th>Requested</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {data?.appointments.map((appointment) => (
          <tr key={appointment.id}>
            <td>{appointment.student.name}</td>
            <td>{appointment.faculty.name}</td>
            <td>{appointment.course.name}</td>
            <td>
              {format(
                parseISO("2023-06-23T00:30:00+0000"),
                "EEEE, MMM do hh:m a"
              )}
            </td>
            <td>
              <Buttons alignment="right">
                <Button color="primary">Claim</Button>
                <Button color="danger"> Delete</Button>
              </Buttons>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
