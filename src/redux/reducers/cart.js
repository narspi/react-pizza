const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPice = (arr) => arr.reduce((sum, obj) => sum + obj.price, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART":
      let currentItemPizza;

      if (!state.items[action.payload.id]) {
        currentItemPizza = {
          items: [action.payload],
          totalCount: 1,
          totalPrice: action.payload.price,
        };
      }

      if (state.items[action.payload.id]) {
        const obj = { ...state.items[action.payload.id] };
        const elem = obj.items;
        const totalCount = obj.totalCount;
        const totalPrice = obj.totalPrice;
        elem.push(action.payload);

        currentItemPizza = {
          items: elem,
          totalCount: totalCount + 1,
          totalPrice: totalPrice + action.payload.price,
        };
      }

      const newItems = {
        ...state.items,
        [action.payload.id]: currentItemPizza,
      };

      let arrPizza = [];

      Object.values(newItems).forEach((obj) => {
        arrPizza = [].concat.apply(arrPizza, Object.values(obj.items));
      });

      return {
        items: newItems,
        totalCount: arrPizza.length,
        totalPrice: getTotalPice(arrPizza),
      };

    case "CLEAR_CART":
      return initialState;

    case "REMOVE_PIZZA_BLOCK":
      const obj = {
        ...state.items,
      };

      const currentCount = state.totalCount - obj[action.payload].totalCount;
      const currentPrice = state.totalPrice - obj[action.payload].totalPrice;

      delete obj[action.payload];

      return {
        items: obj,
        totalCount: currentCount,
        totalPrice: currentPrice,
      };

    case "PLUS_PIZZA_ITEM":
      const newElem = state.items[action.payload].items[0];
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: [...state.items[action.payload].items, newElem],
            totalCount: state.items[action.payload].totalCount + 1,
            totalPrice: state.items[action.payload].totalPrice + newElem.price,
          },
        },
        totalCount: state.totalCount + 1,
        totalPrice:
          state.totalPrice + state.items[action.payload].items[0].price,
      };

    case "MINUS_PIZZA_ITEM":
      const minusPrice = state.items[action.payload].items[0].price;
      const changedArr =
        state.items[action.payload].items.length > 1
          ? state.items[action.payload].items.slice(1)
          : state.items[action.payload].items;
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: changedArr,
            totalCount:
              state.items[action.payload].items.length > 1
                ? state.items[action.payload].totalCount - 1
                : state.items[action.payload].totalCount,
            totalPrice:
              state.items[action.payload].items.length > 1
                ? state.items[action.payload].totalPrice - minusPrice
                : state.items[action.payload].totalPrice,
          },
        },
        totalCount:
          state.items[action.payload].items.length > 1
            ? state.totalCount - 1
            : state.totalCount,
        totalPrice:
          state.items[action.payload].items.length > 1
            ? state.totalPrice - minusPrice
            : state.totalPrice,
      };

    default:
      return state;
  }
};

export default cart;
