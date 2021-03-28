import React from "react";
import Card from "./Card";
const DoctorsCard = ({ doctors }) => {
  return (
    <div
      id="doctors"
      className="doctor-area bg-gray default-padding bottom-less"
    >
      <div className="container">
        <div className="row">
          <div className="doctor-items text-center">
            <div className="col-md-4 equal-height">
              {doctors.map((doctor) => {
                return <Card key={doctor.id} {...doctor}></Card>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
