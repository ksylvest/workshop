import { useContext, type FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "tights";

import { World } from "@/application/contexts/world";
import { useLogoutMutation } from "@/application/graphql/app_schema";

export const LogoutButton: FC = () => {
  const { deauth } = useContext(World);
  const navigate = useNavigate();
  const location = useLocation();
  const [execute, { loading }] = useLogoutMutation();

  const onClick = async () => {
    await execute();
    deauth();
    navigate(location?.state?.back ?? "/");
  };

  return (
    <Button fullwidth light color="danger" onClick={onClick} loading={loading}>
      Logout
    </Button>
  );
};
