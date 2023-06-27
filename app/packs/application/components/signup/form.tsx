import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { useState } from "react";

import { Field, Label, Control, Input, Icon, Button } from "tights";

export const SignupForm: FC = () => {
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
        <Control icons="left">
          <Icon>
            <FontAwesomeIcon icon={faUser} />
          </Icon>
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
        <Control icons="left">
          <Icon>
            <FontAwesomeIcon icon={faEnvelope} />
          </Icon>
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
        <Control icons="left">
          <Icon>
            <FontAwesomeIcon icon={faLock} />
          </Icon>
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
          <Button color="primary" type="submit">
            Signup
          </Button>
        </Control>
      </Field>
    </form>
  );
};
