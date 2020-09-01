import React from "react";

const renderCategories = (categories) => {
  const categoriesComponentArr = [];
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const categoryComponent = (
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" key={i}>
        <div className="shop-cat-box">
          <img className="img-fluid" src={`images/${category.image}`} alt="" />
          <a className="btn hvr-hover" href="#">
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
    <div className="categories-shop">
      <div className="container">
        <div className="row">{renderCategories(categories)}</div>
      </div>
    </div>
  );
}
