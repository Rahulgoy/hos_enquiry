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
      axios
        .get(`http://127.0.0.1:8000/api/doctor/speciality/`)
        .then((response) => {
          //console.log(response.data.results);

          const specialities = response.data.results;

          const special = specialities.filter((speciality) => {
            return Object.values(speciality)
              .join(" ")
              .toLowerCase()
              .includes(input.toLowerCase());
          });

          special.map((spec) => {
            //console.log(spec.specialised.split("-"));
            setspecialisedDoctors(spec.specialised.split("-"));
          });
          specialisedDoctors.map((doctor) => {
            //console.log(doctor);
            const doc = doctors.filter((doctor1) => {
              return doctor1.name === doctor;
            });

            doc.map((d) => {
              if (filteredDoctors) {
                setfilteredDoctors((filteredDoctors) => [
                  ...filteredDoctors,
                  d,
                ]);
              }
            });
          });
        });
      const unique = [...new Set(filteredDoctors)];
      setfilteredDoctors(unique);
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
});
export default connect(mapStateToProps)(Doctors);
