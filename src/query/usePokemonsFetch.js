const fetchPokemonDetails = async (pokemonUrl) => {
  const response = await fetch(pokemonUrl);
  if (!response.ok) {
    throw new Error(`Falha na busca dos detalhes do Pokémon: ${pokemonUrl}`);
  }
  const data = await response.json();
  return data;
};

const fetchPokemons = async (offset = 0) => {
  const query = `
  query GetPokemons($offset: Int) {
    pokemons(offset: $offset, limit: 48) {
      results {
        id
        name
        url
      }
    }
  }
  `;

  const variables = {
    offset,
  };

  const response = await fetch(
    "https://graphql-pokeapi.vercel.app/api/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    }
  );

  if (!response.ok) {
    throw new Error("Falha na busca dos pokémons");
  }

  const { data } = await response.json();

  const pokemonsWithDetails = await Promise.all(
    data.pokemons.results.map(async (pokemon) => {
      const details = await fetchPokemonDetails(pokemon.url);

      return {
        id: details.id,
        name: details.name,
        type: details.types.map((type) => type.type.name),
        image: [details.sprites.front_default, details.sprites.front_shiny],
        height: details.height,
        weight: details.weight,
      };
    })
  );

  return pokemonsWithDetails;
};

export default fetchPokemons;
