import { type FC } from "react";

import { Authenticator } from "./authentication";

import { SignupForm } from "./signup/form";

export const Signup: FC = () => (
  <Authenticator>
    <main>
      <SignupForm />
    </main>
  </Authenticator>
);
