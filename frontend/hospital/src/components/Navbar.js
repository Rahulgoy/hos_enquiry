import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Alert from "./Alert";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authlinks = (
    <Fragment>
      <li
        id="menu-item-408"
        className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-408"
      >
        <Link title="Contact" to="/profile/:pid">
          Profile
        </Link>
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
        <Link title="Contact" to="/login">
          LogIn
        </Link>
      </li>
      <li
        id="menu-item-408"
        className="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-408"
      >
        <Link title="Contact" to="/signup">
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
                    California, TX 70240
                  </li>
                  <li>
                    <i className="fas fa-envelope-open"></i>
                    Info@gmail.com
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    Call Us : +02151 7778 009
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 bar-btn text-right">
              <a href="#">MAKE APPOINMENT</a>
            </div>
          </div>
        </div>
      </div>

      <header id="home">
        <nav className="navbar navbar-default attr-border navbar-sticky bootsnav">
          <div className="container">
            <div className="row">
              <div className="top-search">
                <div className="input-group">
                  <form action="https://sttheme.com/demosd/medihub/">
                    <input
                      type="text"
                      name="s"
                      id="s"
                      className="form-control"
                      placeholder="Search"
                    />
                    <button type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="attr-nav">
              <ul>
                <li className="search">
                  <a href="#">
                    <i className="fa fa-search"></i>
                  </a>
                </li>
                <li className="side-menu">
                  <a href="#">
                    <i className="fa fa-bars"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars"></i>
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
                  id="menu-item-371"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-371 dropdown "
                >
                  <a
                    title="Pages"
                    href="#"
                    className="dropdown-toggle smooth-menu"
                    data-toggle="dropdown"
                  >
                    Pages<span className="hidden-lg span-drop"></span>
                  </a>
                </li>
                <li
                  id="menu-item-382"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-382 dropdown "
                >
                  <a
                    title="Departments"
                    href="#"
                    className="dropdown-toggle smooth-menu"
                    data-toggle="dropdown"
                  >
                    Departments<span className="hidden-lg span-drop"></span>
                  </a>
                  <ul role="menu" className="dropdown-menu animated #">
                    <li
                      id="menu-item-383"
                      className="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-383"
                    >
                      <a
                        title="Medecine And Health"
                        href="http://sttheme.com/demosd/medihub/?services=medecine-and-health"
                      >
                        Medecine And Health
                      </a>
                    </li>
                    <li
                      id="menu-item-384"
                      className="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-384"
                    >
                      <a
                        title="Dental Care and Surgery"
                        href="http://sttheme.com/demosd/medihub/?services=dental-care-and-surgery"
                      >
                        Dental Care and Surgery
                      </a>
                    </li>
                    <li
                      id="menu-item-385"
                      className="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-385"
                    >
                      <a
                        title="Eye Treatment"
                        href="http://sttheme.com/demosd/medihub/?services=eye-treatment"
                      >
                        Eye Treatment
                      </a>
                    </li>
                    <li
                      id="menu-item-386"
                      className="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-386"
                    >
                      <a
                        title="Children Chare"
                        href="http://sttheme.com/demosd/medihub/?services=children-chare"
                      >
                        Children Chare
                      </a>
                    </li>
                    <li
                      id="menu-item-387"
                      className="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-387"
                    >
                      <a
                        title="Traumatology"
                        href="http://sttheme.com/demosd/medihub/?services=nuclear-magnetic"
                      >
                        Traumatology
                      </a>
                    </li>
                  </ul>
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
                    {isAuthenticated ? authlinks : guestlinks}
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
