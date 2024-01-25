// Styles
import Logo from "../../images/icons/pokeball-icon.png";

// Third Imports
import styled from "styled-components";
import LayoutContainer from "../atoms/container";

const FooterTag = styled.footer`
  background-color: var(--dark-color);
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 920px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  p {
    color: #fff;
    font-size: 18px;
  }
`;

const LogoContainer = styled.div`
  justify-content: initial !important;
  width: auto !important;
  img {
    width: 20px;
    margin-left: 5px;
  }

  @media (max-width: 920px) {
    margin-top: 10px;
    flex-direction: row !important;
  }
`;

export default function Footer() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  return (
    <FooterTag>
      <LayoutContainer>
        <div>
          <p>
            © {anoAtual} Nintendo. Os pokémons são propriedade de seus
            respectivos donos.
          </p>
          <LogoContainer>
            <p>Nintendo of America Inc.</p>
            <img src={Logo} alt="" />
          </LogoContainer>
        </div>
      </LayoutContainer>
    </FooterTag>
  );
}
