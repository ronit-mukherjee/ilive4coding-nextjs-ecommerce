import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { addToCart } from "../../actions/cart";

const renderProducts = (products) => {
  const dispatch = useDispatch();

  return Object.values(products).map((product) => {
    return (
      <div
        className={`col-lg-3 col-md-6 special-grid ${product.tags.join(" ")}`}
        key={product.id}
      >
        <div className="products-single fix">
          <div className="box-img-hover">
            <div className="type-lb">
              <p className="sale">Sale</p>
            </div>
            <img
              src={`/images/${product.featured_image}`}
              className="img-fluid"
              alt="Image"
            />
            <div className="mask-icon">
              <ul>
                <li>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="View"
                  >
                    <i className="fas fa-eye"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Compare"
                  >
                    <i className="fas fa-sync-alt"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Add to Wishlist"
                  >
                    <i className="far fa-heart"></i>
                  </a>
                </li>
              </ul>
              <a className="cart" onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </a>
            </div>
          </div>
          <Link href="/p/[pid]" as={`/p/${product.id}`}>
            <a>
              <div className="why-text">
                <h4>{product.name}</h4>
                <h5>
                  {product.currency}
                  {product.selling_price}
                </h5>
              </div>
            </a>
          </Link>
        </div>
      </div>
    );
  });
};

export default function FeaturedProducts() {
  const products = useSelector((state) => {
    return useMemo(() => state.products, [state.products]);
  });

  return (
    <div className="products-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-all text-center">
              <h1>Featured Products</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet lacus enim.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="special-menu text-center">
              <div className="button-group filter-button-group">
                <button className="active" data-filter="*">
                  All
                </button>
                <button data-filter=".top-featured">Top featured</button>
                <button data-filter=".best-seller">Best seller</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row special-list">{renderProducts(products)}</div>
      </div>
    </div>
  );
}
