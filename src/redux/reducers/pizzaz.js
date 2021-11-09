const initialState = {
  items: [],
  isLoaded: false
};

const pizzaz = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZAZ":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default pizzaz;
