import type { FC } from "react";
import { useLocation } from "react-router";

import { Notification } from "tights";

import { Flash } from "@/application/types/flash";

type State = { flash?: Flash };

export const Notifications: FC = () => {
  const location = useLocation();
  const state: State | null = location.state;
  const flash = state?.flash;

  if (!flash) return null;

  return (
    <Notification light color={flash.color}>
      {flash.message}
    </Notification>
  );
};
