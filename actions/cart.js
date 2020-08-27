export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (product, quantity = 1) => ({
  type: ADD_TO_CART,
  payload: { product, quantity },
});
