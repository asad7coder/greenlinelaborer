import React from "react";
import boy_1 from "../../assets/boy1.jpeg";
import boy_2 from "../../assets/boy2.jpeg";
import "./Team.css";
const Team = () => {
  return (
    <div className="team">
      <div className="title">
        <div className="title-col1-team">
          <p className="ourTeamP">
            At Green Line Laborer, our team of passionate gardeners come
            together to transform outdoor spaces into vibrant havens, one plant
            at a time.
          </p>
        </div>
      </div>
      <div id="tttyy">
        <div className="team-row1">
          <img src={boy_1} alt="" />
          <div className="data">
            <h1>Jamie Morrison</h1>
            <p>
              With a deep passion for plants and a knack for team management, I
              lead Green Line Laborer to deliver top-notch gardening services
              while fostering a friendly and efficient work environment
            </p>
          </div>
        </div>
        <div className="team-row2">
          <img src={boy_2} alt="" />
          <div className="data">
            <h1>Jamie Morrison</h1>
            <p>
              With a deep passion for plants and a knack for team management, I
              lead Green Line Laborer to deliver top-notch gardening services
              while fostering a friendly and efficient work environment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
