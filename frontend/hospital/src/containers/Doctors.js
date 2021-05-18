import React, { useState, useEffect, Fragment } from "react";
import DoctorsCard from "../components/DoctorsCard";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Search from "./Search";
import { Link } from "@material-ui/core";

const url = `${process.env.REACT_APP_API_URL}/api/doctor/profile/`;
const Doctors = ({ auth, user }) => {
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setfilteredDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [specialisedDoctors, setspecialisedDoctors] = useState([]);

  const fetchDoctors = () => {
    setLoading(true);

    try {
      axios.get(url).then((response) => {
        // console.log(response.data);
        setDoctors(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const fetchfilteredDoctors = (input) => {
    console.log("Fetch:", input.toLowerCase());
    if (input) {
      setSearch(input);
      input = String(input);
      //console.log(response.data);

      const special = doctors.filter((doctor) => {
        return Object.values(doctor)
          .join(" ")
          .toLowerCase()
          .includes(input.toLowerCase());
      });

      console.log(special);
      setfilteredDoctors(special);
    }
  };
  useEffect(() => {
    console.log("Work1");
    fetchDoctors();
    if (doctors && search !== null && search !== "")
      fetchfilteredDoctors(search);
    if (localStorage.getItem("ImageKey") !== null) {
      setSearch(String(localStorage.getItem("ImageKey")));
      localStorage.removeItem("ImageKey");
    }
  }, []);

  console.log(search);
  console.log(filteredDoctors);
  console.log(doctors);
  if (!doctors || doctors.length === 0) {
    return (
      <div className="container">
        <h1>No Doctors Available</h1>
      </div>
    );
  }
  return (
    <Fragment>
      <Search
        setSearch={setSearch}
        fetchfilteredDoctors={fetchfilteredDoctors}
      />

      <div
        id="doctors"
        className="doctor-area bg-gray default-padding bottom-less"
      >
        <div className="container">
          <div className="row">
            <div className="doctor-items text-center">
              <DoctorsCard
                doctors={
                  search === "" || search === "null" || search === null
                    ? doctors
                    : filteredDoctors
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.user,
});
export default connect(mapStateToProps)(Doctors);
