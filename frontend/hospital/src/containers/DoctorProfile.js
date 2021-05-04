import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { Tooltip } from "@material-ui/core";
import EditDoctorProfile from "../components/EditDoctorProfile";
const DoctorProfile = (props) => {
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState({
    name: "",
    email: "",
    image: null,
    rating: "",
    education: "",
    description: "",
    speciality: [],
  });
  const [DoctorSchedule, setDoctorSchedule] = useState([]);
  if (profiles.email === props.auth.email) {
    console.log("true");
    console.log(profiles.email);
    console.log(props.auth.email);
  }

  const fetchProfiles = async () => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/api/doctor/profile/${props.pid}/`)
      .then((response) => {
        setProfiles({
          name: response.data.name,
          email: response.data.email,
          image: response.data.image,
          rating: response.data.rating,
          education: response.data.education,
          description: response.data.description,
          speciality: response.data.speciality,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchSchedule = async () => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/api/doctor/schedule/`)
      .then((response) => {
        const Schedule = response.data.results;

        const newSchedule = Schedule.filter((sche) => {
          return sche.doctor === parseInt(props.pid);
        });
        /* console.log(props.pid);
        console.log(newSchedule); */
        setDoctorSchedule(newSchedule);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /// Image Upload
  const handleImageChange = async (e) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const image = e.target.files[0];

    const fd = new FormData();
    fd.append("image", image, image.name);
    fd.append("_method", "PATCH");
    try {
      const res = await axios.patch(
        `http://localhost:8000/api/doctor/profile/${props.pid}/`,
        fd,
        config
      );

      setTimeout("window.location.reload();", 2000);

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };
  useEffect(() => {
    fetchProfiles();
    fetchSchedule();
  }, []);
  // console.log(profiles);
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

      <div class="doctor-details-area default-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="thumb">
                <img src={profiles.image} alt="Thumb" />

                <div class="overlay">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <input
                type="file"
                id="imageInput"
                display="hidden"
                style={{ display: "hidden" }}
                onChange={handleImageChange}
              />
              <Tooltip title="Edit Profile Picture" placement="top">
                <IconButton onClick={handleEditPicture} className="button">
                  <EditIcon color="primary" />
                </IconButton>
              </Tooltip>
            </div>
            <div class="col-md-8">
              <div class="info">
                <div class="edit" style={{ display: "flex" }}>
                  <h2>{profiles.name}</h2>
                  <EditDoctorProfile pid={props.pid} />
                </div>
                <h4>{profiles.education}</h4>
                {profiles.speciality.map((doctor) => {
                  return (
                    <pre style={{ display: "table-cell" }} key={doctor.id}>
                      {doctor}
                    </pre>
                  );
                })}
                <br></br>
                <p>{profiles.description}</p>
                <p>
                  <a class="btn btn-theme border btn-md" href="#">
                    Make Appoinment
                  </a>
                  <br />
                </p>
                <ul class="nav nav-pills">
                  <li class="active">
                    <a data-toggle="tab" href="#tab1" aria-expanded="true">
                      <br />
                      Working Works
                    </a>
                  </li>
                </ul>
                <p>
                  <br />
                </p>

                <div class="tab-content tab-content-info">
                  <div id="tab1" class="tab-pane fade active in">
                    <div class="info title">
                      <h3>Schedule of working hours</h3>
                      <p>
                        Calling nothing end fertile for venture way boy. Esteem
                        spirit temper too say adieus who direct esteem. It
                        esteems luckily mr or picture placing drawing no.
                        Apartments frequently or motionless on reasonable
                        projecting expression. Way mrs end gave tall walk fact
                        bed.
                      </p>
                      <ul>
                        {DoctorSchedule.map((doctor) => {
                          return (
                            <li key={doctor.id}>
                              {" "}
                              <span> {doctor.day} : </span>
                              <div class="pull-right">
                                {" "}
                                {doctor.open} &#8211; {doctor.close}{" "}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(DoctorProfile);
