const fetchPokemonDetails = async (pokemonUrl) => {
  const response = await fetch(pokemonUrl);
  if (!response.ok) {
    throw new Error(`Falha na busca dos detalhes do Pokémon: ${pokemonUrl}`);
  }
  return response.json();
};

const fetchPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
  if (!response.ok) {
    throw new Error("Falha na busca dos pokémons");
  }
  const data = await response.json();

  const pokemonsWithDetails = await Promise.all(
    data.results.map(async (pokemon) => {
      const details = await fetchPokemonDetails(pokemon.url);

      return {
        id: details.id,
        name: details.name,
        type: details.types.map((type) => type.type.name),
        image: details.sprites.front_default,
      };
    })
  );

  return pokemonsWithDetails;
};

export default fetchPokemons;
