/* eslint-disable react-hooks/exhaustive-deps */
//Components
import LayoutContainer from "../atoms/container";
import Spinner from "../atoms/spinner";

// Third Components
import styled from "styled-components";
import { useQuery } from "react-query";

//Hooks
import { useState } from "react";
import fetchPokemons from "../../query/usePokemonsFetch";
import PokemonCard from "../molecules/pokemonCard";
import Pagination from "../atoms/pagination";
import FilterGeneration from "../atoms/filterGeneration";

const Section = styled.section`
  width: 100%;
  height: 100%;
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 80px;

  h2 {
    font-size: 50px;
    margin-bottom: 80px;
  }
`;

const GridPokemons = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 242px);
  gap: 32px;
  list-style: none;
  justify-content: center;
  margin-bottom: 50px;
`;

const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 400px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    margin-top: 20px;
    font-size: 20px;
  }
`;

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default function PokemonGrid() {
  const { isLoading, isError } = useQuery("pokemons", () => fetchPokemons());

  const [pokemonData, setPokemonData] = useState([]);

  if (isLoading)
    return (
      <LoadingContainer>
        <div>
          <Spinner /> <p>Carregando...</p>
        </div>
      </LoadingContainer>
    );
  if (isError) return <p>Ocorreu um erro, tente recarregar a página.</p>;

  return (
    <Section>
      <LayoutContainer>
        <GridContainer>
          <h2>Pokémons</h2>
          <FilterContainer>
            <FilterGeneration setPokemonData={setPokemonData} />
            <Pagination setPokemonData={setPokemonData} />
          </FilterContainer>
          <GridPokemons>
            {pokemonData.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                id={pokemon.id}
                images={pokemon.image}
                height={pokemon.height}
                weight={pokemon.weight}
                type={pokemon.type}
              />
            ))}
          </GridPokemons>
          <Pagination setPokemonData={setPokemonData} />
        </GridContainer>
      </LayoutContainer>
    </Section>
  );
}
