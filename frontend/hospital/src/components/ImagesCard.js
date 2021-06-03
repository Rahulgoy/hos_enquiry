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

          <div className="info" style={{ padding: "25px 30px 30px" }}>
            <Link to={`/images/${image.key}/`}>
              <button
                style={{
                  backgroundColor: "#0cb8b6",
                  color: "white",
                  padding: "5px 10px",
                  fontWeight: "400",
                  margin: "auto",
                  border: "none",
                  marginTop: 0,
                }}
                onClick={handleClick}
              >
                {image.name}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { fetch_filteredDoctors })(ImagesCard);
