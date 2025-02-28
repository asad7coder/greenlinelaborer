import React from "react";
import service_one from "../../../assets/service-one.jpeg";
import service_two from "../../../assets/service-two.jpeg";
import service_three from "../../../assets/service-three.jpeg";

import "./Services-box.css";
const Services_box = () => {
  return (
    <>
      <div className="Services-box">
        <img src={service_one} alt="" />
        <h4>Expert Garden Care for Green Spaces</h4>
        <p>
          Need help with your garden? We've got you covered! Our garden
          maintenance services ensure your plants stay happy and healthy all
          year round.
        </p>
        <p className="caption">Read More</p>
      </div>
      <div className="Services-box">
        <img src={service_two} alt="" />
        <h4>Expert Garden Care for Green Spaces</h4>
        <p>
          Need help with your garden? We've got you covered! Our garden
          maintenance services ensure your plants stay happy and healthy all
          year round.
        </p>
        <p className="caption">Read More</p>
      </div>
      <div className="Services-box">
        <img src={service_three} alt="" />
        <h4>Expert Garden Care for Green Spaces</h4>
        <p>
          Need help with your garden? We've got you covered! Our garden
          maintenance services ensure your plants stay happy and healthy all
          year round.
        </p>
        <p className="caption">Read More</p>
      </div>
    </>
  );
};

export default Services_box;
