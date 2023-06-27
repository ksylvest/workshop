import type { FC } from "react";
import { Link } from "react-router-dom";
import { Container, Content } from "tights";

export const LayoutFooter = () => (
  <footer>
    <Container>
      <Content>
        <p className="has-text-centered">
          <span>by</span>{" "}
          <Link to="https://kvn.app" target="_blank" rel="noopener">
            Kevin Sylvestre
          </Link>
        </p>
      </Content>
    </Container>
  </footer>
);
