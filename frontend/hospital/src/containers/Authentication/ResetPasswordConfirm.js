import React, { useState, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";

import { reset_password_confirm } from "../../actions/auth";

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const uid = match.params.uid;
    const token = match.params.token;
    if (formData.new_password !== "") {
      reset_password_confirm(uid, token, new_password, re_new_password);
    }
    setRequestSent(true);
  };

  if (requestSent) {
    return <Redirect to="/login" />;
  }
  console.log(formData);
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
                  <h2>Reset Password</h2>
                </div>
                <div
                  role="form"
                  className="wpcf7"
                  id="wpcf7-f234-p282-o1"
                  lang="en-US"
                  dir="ltr"
                >
                  <form
                    className="wpcf7-form init"
                    noValidate="noValidate"
                    data-status="init"
                    // onSubmit={(e) => onSubmit(e)}
                  >
                    <div method="POST" className="contact-form">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <span className="wpcf7-form-control-wrap email">
                              <input
                                type="password"
                                name="new_password"
                                minLength="8"
                                size="40"
                                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                                id="new_password"
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="New Password*"
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
                                name="re_new_password"
                                size="40"
                                minLength="8"
                                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                                id="re_new_password"
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Confirm New Password*"
                                required
                                onChange={(e) => onChange(e)}
                              />
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="row">
                          <Button
                            disabled={formData.new_password === ""}
                            className="form-submit submit"
                            value="Reset Password"
                            onClick={(e) => onSubmit(e)}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
