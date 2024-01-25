//Styles imports

import FacebookLogo from "../../images/icons/facebook-icon.png";
import XLogo from "../../images/icons/twitter-icon.png";
import InstagramLogo from "../../images/icons/instagram-icon.png";
import TikTokLogo from "../../images/icons/tiktok-icon.png";

// Third Components
import styled from "styled-components";

const SocialContainer = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 500px) {
    display: none;
  }

  img {
    width: 30px;
    height: auto;
  }
`;

export default function SocialMedia() {
  return (
    <SocialContainer>
      <a
        href="https://www.facebook.com/groups/brasilnintendoswitch/?locale=pt_BR"
        target="_blank"
        rel="noreferrer"
      >
        <img src={FacebookLogo} alt="Logo Facebook" />
      </a>
      <a
        href="https://twitter.com/nintendobrasil?lang=en"
        target="_blank"
        rel="noreferrer"
      >
        <img src={XLogo} alt="Logo X" />
      </a>
      <a
        href="https://www.instagram.com/nintendo_brasil/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <img src={InstagramLogo} alt="Logo Instagram" />
      </a>
      <a
        href="https://www.tiktok.com/discover/nintendo-official"
        target="_blank"
        rel="noreferrer"
      >
        <img src={TikTokLogo} alt="Tiktok Instagram" />
      </a>
    </SocialContainer>
  );
}
