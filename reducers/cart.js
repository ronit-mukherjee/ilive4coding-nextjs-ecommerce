import {
  ADD_TO_CART,
  UPDATE_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
} from "../actions/cart";

function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product: productToAdd, quantity = 1 } = action.payload;
      const productsInCart = [...state];

      let isProductInCart = false;
      for (let i = 0; i < productsInCart.length; i++) {
        const product = productsInCart[i];

        if (product.id === productToAdd.id) {
          product.quantity = product.quantity + parseInt(quantity);
          isProductInCart = true;
          break;
        }
      }

      if (!isProductInCart) {
        productToAdd.quantity = parseInt(quantity);
        productsInCart.push(productToAdd);
      }
      return productsInCart;
    }
    case UPDATE_PRODUCT_QUANTITY: {
      const { productId, quantity: quantityToSet = 1 } = action.payload;
      const productsInCart = [...state];

      for (let i = 0; i < productsInCart.length; i++) {
        const product = productsInCart[i];

        if (product.id === productId) {
          product.quantity = parseInt(quantityToSet);
          break;
        }
      }

      return productsInCart;
    }
    case REMOVE_PRODUCT_FROM_CART: {
      return state.filter((product) => product.id !== action.payload);
    }
    default:
      return state;
  }
}

export default cartReducer;
