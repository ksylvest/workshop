import type { FC } from "react";

import { useState } from "react";
import { Field, Label, Control, Input, Button } from "tights";

import { FacultySelect } from "@/application/components/form/faculty_select";

export const AdminCoursesNewForm: FC = () => {
  const [facultyID, setFacultyID] = useState<string | undefined>();
  const [name, setName] = useState<string | undefined>();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <form onSubmit={onSubmit}>
      <Field>
        <Label htmlFor="name">Name</Label>
        <Control>
          <Input
            id="name"
            type="text"
            placeholder="e.g. Math"
            value={name ?? ""}
            onChange={(event) => {
              setName(event.target.value || undefined);
            }}
          />
        </Control>
      </Field>

      <Field>
        <Label htmlFor="faculty_id">Faculty</Label>
        <Control>
          <FacultySelect
            id="faculty_id"
            value={facultyID ?? ""}
            onSelect={setFacultyID}
          />
        </Control>
      </Field>

      <Field>
        <Control>
          <Button type="submit">Save</Button>
        </Control>
      </Field>
    </form>
  );
};
