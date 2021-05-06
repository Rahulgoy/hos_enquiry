import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Home = () => {
  return (
    <div className="banner-area heading-exchange text-dark">
      <div
        id="bootcarousel"
        className="carousel inc-top-heading slide carousel-fade animate_text"
        data-ride="carousel"
      >
        <div className="carousel-inner carousel-zoom">
          <div className="item active">
            <div
              className="slider-thumb bg-cover"
              style={{
                backgroundImage: `url(https://sttheme.com/demosd/medihub/wp-content/uploads/2019/06/1.jpg)`,
              }}
            >
              <div className="box-table">
                <div className="box-cell">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="content">
                          <h1 data-animation="animated fadeInUp">
                            Medihub Best
                            <br />
                            <span>Care</span>
                          </h1>
                          <h2 data-animation="animated fadeInDown">
                            Your health is our top priority and concern
                          </h2>
                          <p data-animation="animated slideInUp">
                            The ourselves suffering the sincerity. Inhabit her
                            manners adapted age certain.
                            <br /> Debating offended at branched striking be
                            subjects.
                          </p>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-theme effect btn-md"
                            href="#"
                          >
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div
                className="slider-thumb bg-cover"
                style={{
                  backgroundImage: `url(https://sttheme.com/demosd/medihub/wp-content/uploads/2019/06/2.jpg)`,
                }}
              ></div>
              <div className="box-table">
                <div className="box-cell">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="content">
                          <h1 data-animation="animated fadeInUp">
                            Best <span>Technology</span>
                          </h1>
                          <h2 data-animation="animated fadeInDown">
                            Affordable solution by better technology
                          </h2>
                          <p data-animation="animated slideInUp">
                            The ourselves suffering the sincerity. Inhabit her
                            manners adapted age certain.
                            <br /> Debating offended at branched striking be
                            subjects.{" "}
                          </p>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-theme effect btn-md"
                            href="#"
                          >
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="slider-thumb bg-cover"
                style={{
                  backgroundImage: `url(https://sttheme.com/demosd/medihub/wp-content/uploads/2019/06/3.jpg)`,
                }}
              ></div>
              <div className="box-table">
                <div className="box-cell">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="content">
                          <h1 data-animation="animated fadeInUp">
                            <span>Best</span> specialist
                          </h1>
                          <h2 data-animation="animated fadeInDown">
                            The country's best heart specialist
                          </h2>
                          <p data-animation="animated slideInUp">
                            The ourselves suffering the sincerity. Inhabit her
                            manners.
                            <br /> Debating offended at branched striking be
                            subjects.{" "}
                          </p>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-theme effect btn-md"
                            href="#"
                          >
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            className="left carousel-control"
            href="#bootcarousel"
            data-slide="prev"
          >
            <FaAngleLeft color="black" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#bootcarousel"
            data-slide="next"
          >
            <FaAngleRight color="black" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
