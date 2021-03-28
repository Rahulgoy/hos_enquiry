import React, { useState, useEffect, Fragment } from "react";
import DoctorsCard from "../components/DoctorsCard";
import axios from "axios";
const url = "http://localhost:8000/api/doctor/profile/";
const Doctors = () => {
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = async () => {
    setLoading(true);

    axios
      .get(url)
      .then((response) => {
        console.log(response.data.results);
        setDoctors(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    /* try {
      const response = await fetch(url);
      const doct = await response.json();
      console.log(doct);
      setLoading(false);
      setDoctors(doct);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } */
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

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
          </div>
        </div>
      </div>
      <DoctorsCard doctors={doctors} />
    </Fragment>
  );
};

export default Doctors;
