import React from "react";
import Card from "./Card";
const DoctorsCard = ({ doctors }) => {
  return (
    <div className="row" style={{ display: "flex" }}>
      <div className="doctor-items text-center" style={{ display: "flex" }}>
        <div className="col-md-4 equal-height">
          {doctors
            ? doctors.map((doctor) => {
                return <Card key={doctor.id} {...doctor}></Card>;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
