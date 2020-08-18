import React from "react";
import ShopCategories from "./ShopCategories.jsx";
import { useSelector } from "react-redux";

export default function ShopCategoriesContainer() {
  const shopCategoriesArr = useSelector((state) => state.shopCategories);
  return <ShopCategories categories={shopCategoriesArr} />;
}
