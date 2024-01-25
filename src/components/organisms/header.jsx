//Styles imports
import Logo from "../../images/icons/pokeball-icon.png";

// Third Imports
import styled from "styled-components";

import LayoutContainer from "../atoms/container";
import SocialMedia from "../atoms/socialMedia";

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--dark-color);
  padding: 24px 0px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: auto;
    margin-left: 10px;
  }
  h1 {
    color: #fff;
  }

  span {
    color: var(--charmander-red);
  }
`;

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export default function Header() {
  return (
    <TagHeader>
      <LayoutContainer>
        <HeaderContent>
          <LogoContainer>
            <h1>
              Poké<span>Dex</span>
            </h1>
            <img src={Logo} alt="Pokeball-Logo" />
          </LogoContainer>
          <SocialMedia />
        </HeaderContent>
      </LayoutContainer>
    </TagHeader>
  );
}
