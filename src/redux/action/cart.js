export const addPizzaToCart = (pizzaObject) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObject,
});

export const clearCart = () => ({
    type: 'CLEAR_CART'
})

export const removePizzaBlock = (id) => ({
    type: 'REMOVE_PIZZA_BLOCK',
    payload: id
})

export const plusItem = (id) => ({
    type: 'PLUS_PIZZA_ITEM',
    payload: id
})

export const minusItem = (id) => ({
    type: 'MINUS_PIZZA_ITEM',
    payload: id
})


