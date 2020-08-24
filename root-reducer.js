import { combineReducers } from "redux";

import ourTeamReducer from "./components/OurTeam/OurTeam.reducers";
import shopCategoriesReducer from "./components/ShopCategories/ShopCatergories.reducer";
import cartReducer from "./reducers/cart";
import productsReducer from "./reducers/products.reducer";

export const rootReducer = combineReducers({
  teamMembers: ourTeamReducer,
  shopCategories: shopCategoriesReducer,
  cart: cartReducer,
  products: productsReducer,
});
