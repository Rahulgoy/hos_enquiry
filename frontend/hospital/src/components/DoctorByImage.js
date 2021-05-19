import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetch_filteredDoctors } from "../actions/user";
import PropTypes from "prop-types";
import DoctorsCard from "./DoctorsCard";
import axios from "axios";
const url = `${process.env.REACT_APP_API_URL}/api/doctor/profile/`;

const DoctorByImage = (props) => {
  const [doctors, setDoctors] = useState([]);
  const fetchDoctors = (input) => {
    try {
      axios.get(url).then((response) => {
        // console.log(response.data);
        const special = response.data.filter((doctor) => {
          return Object.values(doctor)
            .join(" ")
            .toLowerCase()
            .includes(input.toLowerCase());
        });
        setDoctors(special);
      });
    } catch (error) {
      console.log(error);
    }
  };

  /*   console.log(props);
  console.log(doctors); */

  useEffect(() => {
    fetchDoctors(props.pid);
  }, []);
  return (
    <div>
      <div
        className="breadcrumb-area shadow dark bg-fixed text-light"
        style={{
          backgroundImage: `url(https://sttheme.com/demosd/medihub/wp-content/uploads/2019/06/7-6.jpg)`,
        }}
      >
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
      <div
        id="doctors"
        className="doctor-area bg-gray default-padding bottom-less"
      >
        <div className="container">
          <div className="row">
            <div className="doctor-items text-center">
              {doctors && doctors.length >= 1 ? (
                <DoctorsCard doctors={doctors} />
              ) : (
                <h2>"No Doctor with Mentioned Specs"</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DoctorByImage.propTypes = {
  fetch_filteredDoctors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { fetch_filteredDoctors })(
  DoctorByImage
);
