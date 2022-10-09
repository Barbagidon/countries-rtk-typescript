import styled from "styled-components";
import { MainProps } from "types/Components/mainProps";
import { Container } from "./Container";

const Wrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

export const Main = ({ children }: MainProps) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
