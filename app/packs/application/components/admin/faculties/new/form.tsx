import type { FC } from "react";
import { useState } from "react";

import { Field, Label, Control, Input, Button } from "tights";

export const AdminFacultiesNewForm: FC = () => {
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
        <Control>
          <Button type="submit">Save</Button>
        </Control>
      </Field>
    </form>
  );
};
