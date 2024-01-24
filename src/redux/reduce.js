const initialState = {
  offset: 0,
  limit: 1000,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_OFFSET":
      return {
        ...state,
        offset: action.payload,
      };

    case "SET_LIMIT":
      return {
        ...state,
        limit: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
