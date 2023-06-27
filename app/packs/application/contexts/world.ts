import { createContext } from "react";

import { Authentication } from "@/application/graphql/app_schema";

export const World = createContext<{
  authentication?: Pick<Authentication, "id">;
  auth(_: Pick<Authentication, "id">): void;
  deauth(): void;
}>({
  auth: () => {
    /* noop */
  },
  deauth: () => {
    /* noop */
  },
});
