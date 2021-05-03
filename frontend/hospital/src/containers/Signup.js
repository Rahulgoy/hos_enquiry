import React, { useState, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { setAlert } from "../actions/alerts";
import PropTypes from "prop-types";
import { signup } from "../actions/auth";

const Signup = ({ setAlert, signup, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [signre, setSignre] = useState(false);

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) setAlert("Passwords do not match!", "error");
    else {
      signup({ name, email, password, password2 });
      setSignre(true);
    }
  };
  if (signre) return <Redirect to="/" />;

  return (
    <Fragment>
      <div
        className="breadcrumb-area shadow dark bg-fixed text-light"
        style={{
          backgroundImage: `url(https://sttheme.com/demosd/medihub/wp-content/uploads/2019/06/7-6.jpg)`,
        }}
      >
        <div className="container">
          <div className="row">
            {/* <div className="col-md-6">
                            <h1>Contact Us</h1>
                        </div>
                        <div className="col-md-6 text-right">
                            <ul className="breadcrumb">
                                <li><a href="https://sttheme.com/demosd/medihub/"><i className="fas fa-home"></i>Home</a></li>
                                <li><a href="#">Pages</a></li>
                                <li className="active">Contact</li>
                            </ul>
                        </div>  */}
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="contact-area bg-gray text-center default-padding"
      >
        <div className="container">
          <div className="row">
            <div className="contact-items">
              <div className="col-md-8 col-md-offset-2 contact-form">
                <div className="site-heading text-center">
                  <h2>Register</h2>
                  <p>
                    Our next drew much you with rank. Tore many held age hold
                    rose than our. She literature sentiments any contrasted. Set
                    aware joy sense young now tears china shy.
                  </p>
                </div>
                <div
                  role="form"
                  className="wpcf7"
                  id="wpcf7-f234-p282-o1"
                  lang="en-US"
                  dir="ltr"
                >
                  <div className="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true"></p>{" "}
                    <ul></ul>
                  </div>
                  <form
                    action="/demosd/medihub/?page_id=282#wpcf7-f234-p282-o1"
                    method="POST"
                    className="wpcf7-form init"
                    noValidate="noValidate"
                    data-status="init"
                    onSubmit={(e) => onSubmit(e)}
                  >
                    <div method="POST" className="contact-form">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <span className="wpcf7-form-control-wrap Name">
                              <input
                                type="text"
                                name="name"
                                size="40"
                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                                id="name"
                                placeholder="Name"
                                onChange={(e) => onChange(e)}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <span className="wpcf7-form-control-wrap email">
                              <input
                                type="email"
                                name="email"
                                size="40"
                                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                                id="email"
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Email*"
                                onChange={(e) => onChange(e)}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <span className="wpcf7-form-control-wrap email">
                              <input
                                type="password"
                                name="password"
                                size="40"
                                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                                id="password"
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Password*"
                                required
                                onChange={(e) => onChange(e)}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <span className="wpcf7-form-control-wrap email">
                              <input
                                type="password"
                                name="password2"
                                size="40"
                                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                                id="password2"
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Confirm Password*"
                                required
                                onChange={(e) => onChange(e)}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="row">
                          <input
                            type="submit"
                            name="submit"
                            id="submit"
                            className="form-submit submit"
                            value="Register"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                  <p>
                    Already have an account? <Link to="/login"> Log In</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
Signup.propTypes = {
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  setAlert: PropTypes.func.isRequired,
};

const mapStateTpProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateTpProps, { setAlert, signup })(Signup);
