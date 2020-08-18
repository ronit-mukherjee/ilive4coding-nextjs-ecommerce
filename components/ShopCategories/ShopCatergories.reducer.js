import shopCategoriesInitialState from "./ShopCategories.initialstate";

function ShopCategoriesReducer(
  state = shopCategoriesInitialState,
  action = {}
) {
  switch (action.type) {
    default:
      return state;
  }
}

export default ShopCategoriesReducer;
