import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
const Card = (props) => {
  const speciality = props.speciality.split(", ");

  return (
    <Fragment>
      <div className="col-md-4 equal-height" style={{ height: "521px" }}>
        <div className="item">
          <div className="thumb">
            <img src={props.image} alt="Thumb" style={{ height: "420px" }} />
            <div className="overlay">
              <a href="#">
                <i className="fa">
                  <FaPlus />
                </i>
              </a>
            </div>
            <div className="social">
              <ul>
                <li className="facebook">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="twitter">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="instagram">
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="linkedin">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="info">
            <Link to={{ pathname: `/profile/${props.id}` }}>
              <h4>{props.name}</h4>
            </Link>
            <h5>{props.education}</h5>

            {speciality.map((spec) => {
              return (
                <span>
                  {spec}
                  {"/  "}
                </span>
              );
            })}

            <div className="appoinment-btn"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
