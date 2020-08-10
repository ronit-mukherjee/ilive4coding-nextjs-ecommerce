import React from "react";

export default function TopBar() {
  return (
    <div className="main-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="text-slid-box">
              <div id="offer-box" className="carouselTicker">
                <ul className="offer-box">
                  <li>
                    <i className="fab fa-opencart"></i> Off 10%! Shop Now Man
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> 50% - 80% off on Fashion
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> 20% off Entire Purchase
                    Promo code: offT20
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> Off 50%! Shop Now
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> Off 10%! Shop Now Man
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> 50% - 80% off on Fashion
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> 20% off Entire Purchase
                    Promo code: offT20
                  </li>
                  <li>
                    <i className="fab fa-opencart"></i> Off 50%! Shop Now
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="custom-select-box">
              <select
                id="basic"
                className="selectpicker show-tick form-control"
                data-placeholder="$ USD"
              >
                <option>¥ JPY</option>
                <option>$ USD</option>
                <option>€ EUR</option>
              </select>
            </div>
            <div className="right-phone-box">
              <p>
                Call US :- <a href="#"> +11 900 800 100</a>
              </p>
            </div>
            <div className="our-link">
              <ul>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Our location</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
