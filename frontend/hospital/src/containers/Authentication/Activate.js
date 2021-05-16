import React, { useState, Fragment } from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { verify } from "../../actions/auth";

const Activate = ({ verify, match }) => {
  const [verified, setVerified] = useState(false);

  const verify_account = (e) => {
    const uid = match.params.uid;
    const token = match.params.token;

    verify(uid, token);
    setVerified(true);
  };

  if (verified) {
    return <Redirect to="/" />;
  }

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
                  <h2>Activate Account</h2>
                  <p></p>
                </div>
                <div
                  role="form"
                  className="wpcf7"
                  id="wpcf7-f234-p282-o1"
                  lang="en-US"
                  dir="ltr"
                >
                  <div className="col-md-12">
                    <div className="row">
                      <input
                        type="submit"
                        name="submit"
                        id="submit"
                        className="form-submit submit"
                        value="Activate"
                        onClick={verify_account}
                      />
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

export default connect(null, { verify })(Activate);
