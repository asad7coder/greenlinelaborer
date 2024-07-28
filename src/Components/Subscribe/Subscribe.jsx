import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
  const workingNo34 = () => {
    alert("Working...........");
  };
  return (
    <div className="subscribe">
      <h1>Subscribe to Newsletter</h1>
      <p>
        Enter your email address to register to our newsletter subscription!
      </p>

      <input type="text" placeholder="Email Address" />
      <br />
      <button onClick={workingNo34} className="btn subscribe-btn">
        Send
      </button>

      <p id="copyFooter">© Green Line Laborer 2024 All Rights Reserved </p>
    </div>
  );
};

export default Subscribe;
