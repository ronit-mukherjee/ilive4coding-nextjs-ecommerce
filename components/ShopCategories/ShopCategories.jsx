import React from "react";

const renderCategories = (categories) => {
  const categoriesComponentArr = [];
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const categoryComponent = (
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="shop-cat-box">
          <img class="img-fluid" src={`images/${category.image}`} alt="" />
          <a class="btn hvr-hover" href="#">
            {category.name}
          </a>
        </div>
      </div>
    );

    categoriesComponentArr.push(categoryComponent);
  }

  return categoriesComponentArr;
};

export default function ShopCategories({ categories }) {
  return (
    <div class="categories-shop">
      <div class="container">
        <div class="row">{renderCategories(categories)}</div>
      </div>
    </div>
  );
}
