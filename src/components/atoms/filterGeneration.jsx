import { setOffset } from "../../redux/actions";

// Third Imports
import { useDispatch } from "react-redux";
import styled from "styled-components";

const FilterLabel = styled.label`
  font-size: 20px;
  margin-right: 10px;

  @media (max-width: 500px) {
    display: none;
  }
`;

const SelectStyled = styled.select`
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  @media (max-width: 500px) {
    width: 100%;
  }

  option {
    font-size: 18px;
  }
`;

const generationsData = [
  { value: 9999, label: "Todas as Gerações" },
  { value: 0, label: "Geração 1" },
  { value: 152, label: "Geração 2" },
  { value: 251, label: "Geração 3" },
  { value: 386, label: "Geração 4" },
  { value: 494, label: "Geração 5" },
  { value: 649, label: "Geração 6" },
  { value: 721, label: "Geração 7" },
  { value: 809, label: "Geração 8" },
  { value: 905, label: "Geração 9" },
];

export default function FilterGeneration() {
  const dispatch = useDispatch();
  let selectedGeneration;

  const handleGenerationChange = (event) => {
    selectedGeneration = parseInt(event.target.value);

    if (selectedGeneration === 9999) {
      dispatch(setOffset(0));
    } else {
      dispatch(setOffset(selectedGeneration));
    }
  };

  return (
    <div>
      <FilterLabel htmlFor="generationFilter">Filtrar por Geração:</FilterLabel>
      <SelectStyled
        id="generationFilter"
        onChange={handleGenerationChange}
        value={selectedGeneration}
      >
        {generationsData.map((generation) => (
          <option key={generation.value} value={generation.value}>
            {generation.label}
          </option>
        ))}
      </SelectStyled>
    </div>
  );
}
