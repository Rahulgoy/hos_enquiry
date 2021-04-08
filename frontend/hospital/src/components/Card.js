import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <Fragment>
      <div
        id="doctors"
        className="doctor-area bg-gray default-padding bottom-less"
      >
        <div className="container">
          <div className="row">
            <div className="doctor-items text-center">
              <div className="col-md-4 equal-height">
                <div className="item">
                  <div className="thumb">
                    <img src={props.image} alt="Thumb" />
                    <div className="overlay">
                      <a href="https://sttheme.com/demosd/medihub/?doctor=jessica-jones-2">
                        <i className="fas fa-plus"></i>
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
                    <h5>CARDIOLOGIST</h5>
                    <div className="appoinment-btn">
                      <a href="#">Make Appoinment</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
