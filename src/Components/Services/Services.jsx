import React from "react";
import "./Services.css";
import Services_box from "./Services-box/Services-box";
const Services = () => {
  return (
    <div className="services">
      <div className="services-col1">
        <Services_box />
        <Services_box />
        <Services_box />
      </div>
    </div>
  );
};

export default Services;
