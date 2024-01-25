import React, { useState, useEffect } from "react";

// Styles
import ArrowUp from "../../images/icons/arrow-up.svg";

// Third Imports
import styled from "styled-components";

const TopButton = styled.button`
  position: fixed;
  bottom: 120px;
  right: 50px;
  transition: ease all 0.3s;
  cursor: pointer;
  background: none;
  outline: none;
  border: 1px solid var(--dark-color);
  padding: 20px;
  border-radius: 100%;

  @media (max-width: 500px) {
    right: 10px;
    bottom: 280px;
  }
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <TopButton onClick={scrollToTop}>
        <img src={ArrowUp} alt="Botão para voltar ao topo" />
      </TopButton>
    )
  );
};

export default ScrollToTopButton;
