import type { FC } from "react";
import { useState } from "react";

import { Field, Label, Control, Input, Button } from "tights";

export const AdminUsersNewForm: FC = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

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
            placeholder="e.g. Carl Friedrich Gauss"
            value={email ?? ""}
            onChange={(event) => {
              setEmail(event.target.value || undefined);
            }}
          />
        </Control>
      </Field>

      <Field>
        <Label htmlFor="email">Email</Label>
        <Control>
          <Input
            id="email"
            type="text"
            placeholder="e.g. carl.friedrich.gauss@sfu.ca"
            value={email ?? ""}
            onChange={(event) => {
              setEmail(event.target.value || undefined);
            }}
          />
        </Control>
      </Field>

      <Field>
        <Label htmlFor="password">Password</Label>
        <Control>
          <Input
            id="password"
            type="password"
            placeholder="e.g. ?sfu123!"
            value={password ?? ""}
            onChange={(event) => {
              setPassword(event.target.value || undefined);
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
