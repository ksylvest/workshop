import type { FC, ReactNode } from "react";

import { Container, Section } from "tights";

import { LayoutFooter } from "./layout/footer";
import { LayoutHeader } from "./layout/header";
import { Notifications } from "./notifications";

export const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => (
  <>
    <LayoutHeader />
    <Container>
      <Section>
        <Notifications />
        {children}
      </Section>
    </Container>
    <LayoutFooter />
  </>
);
