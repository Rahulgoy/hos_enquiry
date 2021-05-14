import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import Alert from "./Alert";
import { FaBars, FaSearch } from "react-icons/fa";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  var retrievedObject = localStorage.getItem("token");
  const authlinks = (
    <Fragment>
      <li
        id="menu-item-408"
        className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-408"
      >
        <Link to={{ pathname: `/profile/1` }}>Profile</Link>
      </li>
      <li
        id="menu-item-408"
        className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-408"
      >
        <a title="Contact" href="#" onClick={logout}>
          Logout
        </a>
      </li>
    </Fragment>
  );

  const guestlinks = (
    <Fragment>
      <li
        id="menu-item-408"
        className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-408"
      >
        <Link title="LogIn" to="/login">
          LogIn
        </Link>
      </li>
      <li
        id="menu-item-408"
        className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-408"
      >
        <Link title="SignUp" to="/signup">
          SignUp
        </Link>
      </li>
    </Fragment>
  );

  return (
    <body className="home page-template page-template-page-templates page-template-home page-template-page-templateshome-php page page-id-44 wpb-js-composer js-comp-ver-5.4.7 vc_responsive">
      <div className="se-pre-con"></div>
      <div className="top-bar-area inline inc-border">
        <div className="container">
          <div className="row">
            <div className="col-md-8 address-info text-left">
              <div className="info box">
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    Patiala, Punjab, India
                  </li>
                  <li>
                    <i className="fas fa-envelope-open"></i>
                    healthconnect@gmail.com
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    Call Us : +91-151 7778 009
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 bar-btn text-right">
              <Link to="/doctors">SEARCH DOCTORS</Link>
            </div>
          </div>
        </div>
      </div>

      <header id="home">
        <nav className="navbar navbar-default attr-border navbar-sticky bootsnav">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                aria-expanded="false"
                data-target="#navbar-menu"
                data-toggle="collapse"
              >
                <FaBars />
              </button>
              <Link className="navbar-brand" to="/">
                <img
                  src="http://sttheme.com/demosd/medihub/wp-content/uploads/2019/06/logo.png"
                  className="logo"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav navbar-right"
                data-in="#"
                data-out="#"
              >
                <li
                  id="menu-item-369"
                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children nav-item menu-item-369 dropdown  active"
                >
                  <Link
                    title="Home"
                    to="/"
                    className="dropdown-toggle smooth-menu"
                    data-toggle="dropdown"
                  >
                    Home<span className="hidden-lg span-drop"></span>
                  </Link>
                </li>

                <li
                  id="menu-item-388"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-388 dropdown "
                >
                  <Link
                    title="Doctors"
                    to="/doctors"
                    className="dropdown-toggle smooth-menu"
                    data-toggle="dropdown"
                  >
                    Doctors
                    <span className="hidden-lg span-drop"></span>
                  </Link>
                </li>
                <li
                  id="menu-item-408"
                  className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-408"
                >
                  <a
                    title="Contact"
                    href="https://sttheme.com/demosd/medihub/?page_id=282"
                  >
                    Contact
                  </a>
                </li>
                {!loading && (
                  <Fragment>
                    {isAuthenticated || retrievedObject
                      ? authlinks
                      : guestlinks}
                  </Fragment>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </body>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
