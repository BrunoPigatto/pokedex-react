/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";

//Styles imports
import StarIcon from "../../images/icons/star-icon.svg";
import HeightIcon from "../../images/icons/height-icon.png";
import WeightIcon from "../../images/icons/weight-icon.png";

//Third Imports
import styled from "styled-components";

const Card = styled.li`
  box-shadow: 0 0 10px 0 rgba(51, 51, 51, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: var(--light-grey);
  padding: 0 30px 20px;
  position: relative;

  h3 {
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 10px;
  }

  p {
    text-align: center;
    text-transform: capitalize;
  }
`;

const PokeImg = styled.img`
  cursor: pointer;
  width: 200px;
  height: auto;
`;

const InfosDiv = styled.div`
  width: 100%;

  > div {
    display: flex;
    align-items: baseline;
    justify-content: center;
  }

  img {
    width: 15px;
    margin-right: 8px;
    display: flex;
  }

  > p {
    margin-bottom: 10px;
  }
`;

const TypeDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const MeasuresDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  img {
    width: 20px;
  }
`;

const ShinyDiv = styled.div`
  position: absolute;
  left: 5px;
  top: 5px;
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: var(--charmander-red);
  padding: 4px;
  border-radius: 30px;
  color: #fff;

  img {
    width: 16px;
  }
`;

const typeColors = {
  normal: "gray",
  fire: "red",
  water: "blue",
  electric: "orange",
  grass: "green",
  ice: "lightblue",
  fighting: "brown",
  poison: "purple",
  ground: "tan",
  flying: "skyblue",
  psychic: "pink",
  bug: "olive",
  rock: "sienna",
  ghost: "purple",
  dark: "darkslategray",
  steel: "dimgray",
  fairy: "pink",
  dragon: "royalblue",
};

const getTypeColor = (type) => {
  return typeColors[type] || "#000";
};

export default function PokemonCard({
  images,
  name,
  id,
  type,
  height,
  weight,
}) {
  const [changeShiny, setChangeShiny] = useState(true);

  const defaultImage = images?.[0];
  const shinyImage = images?.[1];

  const handleImage = () => {
    setChangeShiny((prev) => !prev);
  };

  return (
    <Card>
      {!changeShiny && (
        <ShinyDiv>
          <img src={StarIcon} alt="" />
          <p>Shiny</p>
        </ShinyDiv>
      )}
      <PokeImg
        onClick={handleImage}
        src={changeShiny ? defaultImage : shinyImage}
        alt="Pokemon Imagem"
      />
      <InfosDiv>
        <h3>{name}</h3>
        <p>ID #{id}</p>
      </InfosDiv>
      <MeasuresDiv>
        <div>
          <img src={WeightIcon} alt="Ícone Peso" />
          <p>{weight / 10} Kg</p>
        </div>
        <div>
          <img src={HeightIcon} alt="Ícone Altura" /> <p>{height / 10} m</p>
        </div>
      </MeasuresDiv>
      <TypeDiv>
        {type?.map((type, index) => (
          <p
            key={index}
            style={{
              backgroundColor: getTypeColor(type),
              color: "#fff",
              padding: "6px",
              borderRadius: "8px",
              fontWeight: "600",
            }}
          >
            {type}
          </p>
        ))}
      </TypeDiv>
    </Card>
  );
}
