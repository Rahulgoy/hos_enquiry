import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateTpProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateTpProps, { login })(Login);
