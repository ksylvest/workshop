import { type FC } from "react";

import { Authenticator } from "./authentication";

import { LoginForm } from "./login/form";

export const Login: FC = () => (
  <Authenticator>
    <main>
      <LoginForm />
    </main>
  </Authenticator>
);
