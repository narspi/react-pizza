import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const setPizzaz = (items) => ({
  type: "SET_PIZZAZ",
  payload: items,
});

export const fetchPizzaz = (filters) => (dispatch) => {
  const { category, sortBy } = filters;
  dispatch(setLoaded(false));
  axios
    .get(
      `https://my-json-server.typicode.com/narspi/react-pizza/pizzas?${
        category !== null ? "category=" + category : ""
      }&_sort=${sortBy}&_order=desc`
    )
    .then(({ data }) => {
      dispatch(setPizzaz(data));
    });
};
