import React from "react";

export default function TeamMember({ name, designation, image, about }) {
  return (
    <div className="hover-team">
      <div className="our-team">
        <img src={image} alt={name} />
        <div className="team-content">
          <h3 className="title">{name}</h3>
          <span className="post">{designation}</span>
        </div>
        <ul className="social">
          <li>
            <a href="#" className="fab fa-facebook"></a>
          </li>
          <li>
            <a href="#" className="fab fa-twitter"></a>
          </li>
          <li>
            <a href="#" className="fab fa-google-plus"></a>
          </li>
          <li>
            <a href="#" className="fab fa-youtube"></a>
          </li>
        </ul>
        <div className="icon">
          <i className="fa fa-plus" aria-hidden="true"></i>
        </div>
      </div>
      <div className="team-description">
        <p>{about}</p>
      </div>
      <hr className="my-0" />
    </div>
  );
}
