import React, { useState } from "react";

const Search = ({ fetchfilteredDoctors }) => {
  const [search, setSearch] = useState("");
  const handlechange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    fetchfilteredDoctors(search);
  };
  return (
    <div
      id="contact"
      className="contact-area bg-gray text-center default-padding"
    >
      <div className="container">
        <div className="row">
          <div className="contact-items">
            <div className="col-md-8 col-md-offset-2 contact-form">
              <form
                method="POST"
                className="wpcf7-form init"
                noValidate="noValidate"
                data-status="init"
                onSubmit={handleSubmit}
              >
                <div method="POST" className="contact-form">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <span className="wpcf7-form-control-wrap email">
                          <input
                            type="email"
                            name="search"
                            size="40"
                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                            id="email"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Search by name, speciality"
                            onChange={handlechange}
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
                        value="Log In"
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
  );
};

export default Search;
