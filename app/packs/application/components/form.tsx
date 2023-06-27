import type { FC } from "react";
import { useState } from "react";
import type { FormEvent } from "react";

import {
  Button,
  Checkbox,
  Control,
  Field,
  Input,
  Label,
  Textarea,
} from "tights";

import { CourseSelect } from "./form/course_select";
import { FacultySelect } from "./form/faculty_select";

export const Form: FC = () => {
  const [name, setName] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [facultyID, setFacultyID] = useState<string | undefined>();
  const [courseID, setCourseID] = useState<string | undefined>();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
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
            value={name ?? ""}
            type="text"
            placeholder="e.g. Carl Friedrich Gauss"
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
            value={facultyID}
            onSelect={setFacultyID}
          />
        </Control>
      </Field>

      <Field>
        <Label htmlFor="course_id">Course</Label>
        <Control>
          <CourseSelect
            id="course_id"
            value={courseID}
            onSelect={setCourseID}
          />
        </Control>
      </Field>

      <Field>
        <Label htmlFor="description">Description</Label>
        <Control>
          <Textarea
            id="description"
            value={description ?? ""}
            onChange={(event) => {
              setDescription(event.target.value || undefined);
            }}
            placeholder="e.g. Looking for help understanding the fundamental theorem of algebra."
          />
        </Control>
      </Field>

      <Field>
        <Label htmlFor="instructor">Instructor</Label>
        <Control>
          <Checkbox id="instructor">I am here for office hours.</Checkbox>
        </Control>
      </Field>

      <Field>
        <Control>
          <Button type="submit" color="primary">
            Signup
          </Button>
        </Control>
      </Field>
    </form>
  );
};
