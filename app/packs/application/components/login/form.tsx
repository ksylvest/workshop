import { useLoginMutation } from "@/application/graphql/app_schema";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { useContext, useState } from "react";
import type { FormEvent } from "react";

import { World } from "@/application/contexts/world";

import {
  Field,
  Label,
  Control,
  Input,
  Button,
  Icon,
  Notification,
  Delete,
} from "tights";

export const LoginForm: FC = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [execute, { loading, data, reset }] = useLoginMutation();
  const { auth } = useContext(World);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const result = await execute({
      variables: {
        input: {
          email: email ?? "",
          password: password ?? "",
        },
      },
    });

    const authentication = result.data?.login.authentication;
    if (authentication) auth(authentication);
  };

  return (
    <form onSubmit={onSubmit}>
      {data?.login.error && (
        <Notification light color="danger">
          <Delete onClick={reset} />
          {data.login.error}
        </Notification>
      )}

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
          <Button loading={loading} type="submit" color="primary">
            Login
          </Button>
        </Control>
      </Field>
    </form>
  );
};
