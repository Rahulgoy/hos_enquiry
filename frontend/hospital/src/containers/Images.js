import axios from "axios";
import React, { useEffect, useState } from "react";
import ImagesCard from "../components/ImagesCard";

const url = `${process.env.REACT_APP_API_URL}/api/doctor/images/`;
const Images = () => {
  const [searchImages, setSearchImages] = useState([]);
  const fetchImages = () => {
    try {
      axios.get(url).then((response) => {
        // console.log(response.data);
        setSearchImages(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <>
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
              {searchImages.map((image) => {
                return <ImagesCard key={image.id} image={image} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Images;
