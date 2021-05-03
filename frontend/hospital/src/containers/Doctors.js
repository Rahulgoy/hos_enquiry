import React, { useState, useEffect, Fragment } from "react";
import DoctorsCard from "../components/DoctorsCard";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Search from "./Search";

const url = "http://localhost:8000/api/doctor/profile/";
const Doctors = ({ auth }) => {
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setfilteredDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [specialisedDoctors, setspecialisedDoctors] = useState([]);

  const fetchDoctors = () => {
    setLoading(true);

    axios
      .get(url)
      .then((response) => {
        //console.log(response.data.results);
        setDoctors(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchfilteredDoctors = (input) => {
    if (input) {
      setSearch(input);

      //console.log(response.data.results);

      const special = doctors.filter((doctor) => {
        return Object.values(doctor)
          .join(" ")
          .toLowerCase()
          .includes(input.toLowerCase());
      });

      //console.log(special);
      setfilteredDoctors(special);
    }
  };
  useEffect(() => {
    fetchDoctors();
  }, []);
  console.log(filteredDoctors);
  console.log(doctors);
  if (doctors.length === 0) {
    return (
      <div className="container">
        <h1>No Doctors Available</h1>
      </div>
    );
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
            <Search
              setSearch={setSearch}
              fetchfilteredDoctors={fetchfilteredDoctors}
            />
          </div>
        </div>
      </div>

      <DoctorsCard doctors={search === "" ? doctors : filteredDoctors} />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Doctors);
