import type { FC } from "react";
import type { ComponentProps } from "react";
import { Select } from "tights";

import { useFacultiesQuery } from "@/application/graphql/app_schema";

type Props = {
  value?: string;
  onSelect(id?: string): void;
};

export const FacultySelect: FC<
  Omit<ComponentProps<"select">, keyof Props> & Props
> = ({ value, onSelect, disabled, ...props }) => {
  const { data, loading } = useFacultiesQuery();

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
        - Faculty -
      </option>
      {data?.faculties.map((faculty) => (
        <option key={faculty.id} value={faculty.id}>
          {faculty.name}
        </option>
      ))}
    </Select>
  );
};
