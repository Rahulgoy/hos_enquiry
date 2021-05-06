import React from "react";
import Card from "./Card";
const DoctorsCard = ({ doctors }) => {
  return (
    <>
      {doctors
        ? doctors.map((doctor) => {
            return <Card key={doctor.id} {...doctor}></Card>;
          })
        : null}
    </>
  );
};

export default DoctorsCard;
