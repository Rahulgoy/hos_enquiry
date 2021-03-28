import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Alert from "./Alert";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authlinks = (
    <li
      id="menu-item-408"
      class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-408"
    >
      <a title="Contact" href="#" onClick={logout}>
        Logout
      </a>
    </li>
  );

  const guestlinks = (
    <Fragment>
      <li
        id="menu-item-408"
        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-408"
      >
        <Link title="Contact" to="/login">
          LogIn
        </Link>
      </li>
      <li
        id="menu-item-408"
        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-408"
      >
        <Link title="Contact" to="/signup">
          SignUp
        </Link>
      </li>
    </Fragment>
  );

  return (
    <body class="home page-template page-template-page-templates page-template-home page-template-page-templateshome-php page page-id-44 wpb-js-composer js-comp-ver-5.4.7 vc_responsive">
      <div class="se-pre-con"></div>
      <div class="top-bar-area inline inc-border">
        <div class="container">
          <div class="row">
            <div class="col-md-8 address-info text-left">
              <div class="info box">
                <ul>
                  <li>
                    <i class="fas fa-map-marker-alt"></i>
                    California, TX 70240
                  </li>
                  <li>
                    <i class="fas fa-envelope-open"></i>
                    Info@gmail.com
                  </li>
                  <li>
                    <i class="fas fa-phone"></i>
                    Call Us : +02151 7778 009
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 bar-btn text-right">
              <a href="#">MAKE APPOINMENT</a>
            </div>
          </div>
        </div>
      </div>

      <header id="home">
        <nav class="navbar navbar-default attr-border navbar-sticky bootsnav">
          <div class="container">
            <div class="row">
              <div class="top-search">
                <div class="input-group">
                  <form action="https://sttheme.com/demosd/medihub/">
                    <input
                      type="text"
                      name="s"
                      id="s"
                      class="form-control"
                      placeholder="Search"
                    />
                    <button type="submit">
                      <i class="fas fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="attr-nav">
              <ul>
                <li class="search">
                  <a href="#">
                    <i class="fa fa-search"></i>
                  </a>
                </li>
                <li class="side-menu">
                  <a href="#">
                    <i class="fa fa-bars"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i class="fa fa-bars"></i>
              </button>
              <Link class="navbar-brand" to="/">
                <img
                  src="http://sttheme.com/demosd/medihub/wp-content/uploads/2019/06/logo.png"
                  class="logo"
                  alt="Logo"
                />
              </Link>
            </div>
            <div class="collapse navbar-collapse" id="navbar-menu">
              <ul class="nav navbar-nav navbar-right" data-in="#" data-out="#">
                <li
                  id="menu-item-369"
                  class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children nav-item menu-item-369 dropdown  active"
                >
                  <Link
                    title="Home"
                    to="/"
                    class="dropdown-toggle smooth-menu"
                    data-toggle="dropdown"
                  >
                    Home<span class="hidden-lg span-drop"></span>
                  </Link>
                </li>
                <li
                  id="menu-item-371"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-371 dropdown "
                >
                  <a
                    title="Pages"
                    href="#"
                    class="dropdown-toggle smooth-menu"
                    data-toggle="dropdown"
                  >
                    Pages<span class="hidden-lg span-drop"></span>
                  </a>
                </li>
                <li
                  id="menu-item-382"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-382 dropdown "
                >
                  <a
                    title="Departments"
                    href="#"
                    class="dropdown-toggle smooth-menu"
                    data-toggle="dropdown"
                  >
                    Departments<span class="hidden-lg span-drop"></span>
                  </a>
                  <ul role="menu" class="dropdown-menu animated #">
                    <li
                      id="menu-item-383"
                      class="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-383"
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
                      class="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-384"
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
                      class="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-385"
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
                      class="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-386"
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
                      class="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-387"
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
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-388 dropdown "
                >
                  <a
                    title="Doctors"
                    href="#"
                    class="dropdown-toggle smooth-menu"
                    data-toggle="dropdown"
                  >
                    Doctors
                    <span class="hidden-lg span-drop"></span>
                  </a>
                </li>
                <li
                  id="menu-item-408"
                  class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-408"
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
