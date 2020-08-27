import { ADD_TO_CART } from "../actions/cart";

function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      const { product: productToAdd, quantity = 1 } = action.payload;
      const productsInCart = [...state];

      let isProductInCart = false;
      for (let i = 0; i < productsInCart.length; i++) {
        const product = productsInCart[i];

        if (product.id === productToAdd.id) {
          product.quantity = product.quantity + quantity;
          isProductInCart = true;
          break;
        }
      }

      if (!isProductInCart) {
        productToAdd.quantity = quantity;
        productsInCart.push(productToAdd);
      }
      return productsInCart;
    default:
      return state;
  }
}

export default cartReducer;
