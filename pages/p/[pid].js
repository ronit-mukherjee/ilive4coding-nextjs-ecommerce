import React, { useMemo } from "react";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import { useSelector } from "react-redux";

export async function getStaticPaths() {
  const paths = [{ params: { pid: "100" } }, { params: { pid: "101" } }];
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { pid } = context.params;
  return {
    props: { pid },
  };
}

export default function ProductDetail({ pid }) {
  const productDetails = useSelector((state) =>
    useMemo(() => state.products[pid], [pid, state.products])
  );

  if (!productDetails) return null;
  return (
    <div className="shop-detail-box-main">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-6">
            <div
              id="carousel-example-1"
              className="single-product-slider carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                {productDetails.images.map((image, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      className="d-block w-100"
                      src={`/images/${image.big}`}
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                href="#carousel-example-1"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carousel-example-1"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
              <ol className="carousel-indicators">
                {productDetails.images.map((image, index) => (
                  <li
                    data-target={`#carousel-example-${index + 1}`}
                    data-slide-to={index}
                    className={index === 0 ? "active" : null}
                  >
                    <img
                      className="d-block w-100 img-fluid"
                      src={`/images/${image.small}`}
                      alt=""
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-6">
            <div className="single-product-details">
              <h2>{productDetails.name}</h2>
              <h5>
                <del>
                  {productDetails.currency} {productDetails.mrp}
                </del>{" "}
                {productDetails.currency}
                {productDetails.selling_price}
              </h5>
              <p className="available-stock">
                <span>
                  More than {productDetails.stock_qty} available /{" "}
                  <a href="#">{productDetails.sold_qty} sold </a>
                </span>

                <h4>Short Description:</h4>
                <p>{productDetails.description}</p>
                <ul>
                  <li>
                    <div className="form-group size-st">
                      <label className="size-label">Size</label>
                      <select
                        id="basic"
                        className="selectpicker show-tick form-control"
                      >
                        <option value="0">Size</option>
                        {productDetails.sizes.map((size, index) => (
                          <option value={index}>{size}</option>
                        ))}
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="form-group quantity-box">
                      <label className="control-label">Quantity</label>
                      <input
                        className="form-control"
                        value="0"
                        min="0"
                        max="20"
                        type="number"
                      />
                    </div>
                  </li>
                </ul>

                <div className="price-box-bar">
                  <div className="cart-and-bay-btn">
                    <a
                      className="btn hvr-hover"
                      data-fancybox-close=""
                      href="#"
                    >
                      Buy New
                    </a>
                    <a
                      className="btn hvr-hover"
                      data-fancybox-close=""
                      href="#"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>

                <div className="add-to-btn">
                  <div className="add-comp">
                    <a className="btn hvr-hover" href="#">
                      <i className="fas fa-heart"></i> Add to wishlist
                    </a>
                    <a className="btn hvr-hover" href="#">
                      <i className="fas fa-sync-alt"></i> Add to Compare
                    </a>
                  </div>
                  <div className="share-bar">
                    <a className="btn hvr-hover" href="#">
                      <i className="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a className="btn hvr-hover" href="#">
                      <i className="fab fa-google-plus" aria-hidden="true"></i>
                    </a>
                    <a className="btn hvr-hover" href="#">
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a className="btn hvr-hover" href="#">
                      <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                    </a>
                    <a className="btn hvr-hover" href="#">
                      <i className="fab fa-whatsapp" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>

        <FeaturedProducts />
      </div>
    </div>
  );
}
