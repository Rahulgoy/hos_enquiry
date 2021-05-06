import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
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
    <>
      <div
        className="newsletter-area default-padding shadow dark bg-fixed text-center text-light"
        style={{
          backgroundImage: `url(https://sttheme.com/demosd/medihub/wp-content/uploads/2019/06/7-6.jpg)`,
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Let’s Find A Doctor.</h2>
              <div
                role="form"
                class="wpcf7"
                id="wpcf7-f42-p6-o1"
                lang="en-US"
                dir="ltr"
              >
                <div class="screen-reader-response">
                  <p role="status" aria-live="polite" aria-atomic="true"></p>{" "}
                  <ul></ul>
                </div>
                <form
                  method="POST"
                  className="wpcf7-form init"
                  noValidate="noValidate"
                  data-status="init"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <div class="input-group stylish-input-group">
                      <span class="wpcf7-form-control-wrap Email">
                        <input
                          type="email"
                          name="Email"
                          size="40"
                          class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Search by name, speciality"
                          onChange={handlechange}
                        />
                      </span>
                      <button type="submit">
                        <FaPaperPlane />
                      </button>
                    </div>
                  </div>
                  <div class="wpcf7-response-output" aria-hidden="true"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
