/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import fetchPokemons from "../../query/usePokemonsFetch";
import { setOffset } from "../../redux/actions";

// Third Imports
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-bottom: 40px;
  flex-direction: row;

  @media (max-width: 800px) {
    margin-top: 40px;
    gap: 20px;
    width: 100%;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const PaginationButton = styled.button`
  border: ${({ disabled }) =>
    disabled ? "1px solid rgba(16,16,16, 0.3)" : "1px solid var(--dark-color)"};
  border-radius: 10px;
  background: none;
  padding: 8px 12px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 18px;
  transition: ease all 0.3s;

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "none" : "var(--dark-color)"};
    color: ${({ disabled }) => (disabled ? "rgba(16, 16, 16, 0.3)" : "#fff")};
    transition: ease all 0.3s;
  }

  @media (max-width: 500px) {
    padding: 14px 12px;
    width: 100%;

    &:hover {
      background: none;
      color: #000;
    }
  }
`;

export default function Pagination({ setPokemonData }) {
  const offsetRedux = useSelector((state) => state.offset);
  const dispatch = useDispatch();

  const [isButtonDisabledNext, setButtonDisabledNext] = useState(false);
  const [isButtonDisabledPrev, setButtonDisabledPrev] = useState(false);

  const PaginationData = async () => {
    const data = await fetchPokemons(offsetRedux);
    setPokemonData(data);
    dispatch(setOffset(offsetRedux));
  };

  useEffect(() => {
    PaginationData();
  }, [offsetRedux]);

  const handleNextPage = () => {
    dispatch(setOffset(offsetRedux + 48));
    if (isButtonDisabledNext) {
      return;
    }
    setButtonDisabledNext(true);
    setTimeout(() => {
      setButtonDisabledNext(false);
    }, 1000);
  };

  const handlePrevPage = () => {
    if (offsetRedux > 0) {
      dispatch(setOffset(offsetRedux - 48));
    }
    if (isButtonDisabledPrev) {
      return;
    }
    setButtonDisabledPrev(true);
    setTimeout(() => {
      setButtonDisabledPrev(false);
    }, 1000);
  };

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={handlePrevPage}
        disabled={offsetRedux === 0 || isButtonDisabledPrev}
      >
        Página Anterior
      </PaginationButton>
      <PaginationButton
        onClick={handleNextPage}
        disabled={isButtonDisabledNext}
      >
        Próxima Página
      </PaginationButton>
    </PaginationContainer>
  );
}
