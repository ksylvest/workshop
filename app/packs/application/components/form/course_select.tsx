import type { FC } from "react";
import type { ComponentProps } from "react";
import { Select } from "tights";

import { useCoursesQuery } from "@/application/graphql/app_schema";

type Props = {
  value?: string;
  onSelect(id?: string): void;
};

export const CourseSelect: FC<
  Omit<ComponentProps<"select">, keyof Props> & Props
> = ({ value, onSelect, disabled, ...props }) => {
  const { data, loading } = useCoursesQuery();
  return (
    <Select
      {...props}
      disabled={disabled || loading}
      value={value ?? ""}
      onChange={(event) => {
        onSelect(event.target.value || undefined);
      }}
    >
      <option value="" disabled>
        - Course -
      </option>
      {data?.courses.map((course) => (
        <option key={course.id} value={course.id}>
          {course.name}
        </option>
      ))}
    </Select>
  );
};
