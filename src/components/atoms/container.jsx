import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  padding: 0 30px;
`;

export default function LayoutContainer({ children }) {
  return <Container>{children}</Container>;
}
