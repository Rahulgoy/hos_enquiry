import { Link, Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { setKeyword_filteredDoctors } from "../actions/user";
import { Button } from "@material-ui/core";
const ImagesCard = ({ image, setKeyword_filteredDoctors }) => {
  const handleClick = () => {
    setKeyword_filteredDoctors(image.name);
    // return <Redirect to="/doctors" />;
    window.location.replace(`${process.env.REACT_APP_API_URL}/doctors/`);
  };
  return (
    <>
      <div className="col-md-4 equal-height" style={{ height: "521px" }}>
        <div className="item">
          <div className="thumb">
            <img src={image.img} alt="Thumb" style={{ height: "420px" }} />
          </div>
          <div className="info">
            <Button variant="contained" color="secondary" onClick={handleClick}>
              {image.name}
            </Button>
            <div className="appoinment-btn"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { setKeyword_filteredDoctors })(ImagesCard);
