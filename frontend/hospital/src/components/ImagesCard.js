import { Link, Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { fetch_filteredDoctors } from "../actions/user";
import { Button } from "@material-ui/core";

const ImagesCard = ({ image }) => {
  const handleClick = () => {
    fetch_filteredDoctors(image.key);
  };
  return (
    <>
      <div className="col-md-4 equal-height" style={{ height: "521px" }}>
        <div className="item">
          <div className="thumb">
            <img src={image.img} alt="Thumb" style={{ height: "420px" }} />
          </div>

          <div className="info">
            <Link to={`/images/${image.key}/`}>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                onClick={handleClick}
              >
                {image.name}
              </Button>
            </Link>
            <div className="appoinment-btn"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { fetch_filteredDoctors })(ImagesCard);
