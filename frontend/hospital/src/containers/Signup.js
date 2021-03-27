import React, { useState } from "react";
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
    <div>
      <h1>SignUp</h1>
    </div>
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
