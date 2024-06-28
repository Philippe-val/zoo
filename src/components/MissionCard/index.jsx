import React from "react";
import "./missioncard.css";
import { Link } from "react-router-dom";
const MissionCard = ({ mission }) => {
  return (
    <div className="mission-card">
    <Link to="/mission">
      <div className="mission-card-header">
        <h4>{mission.name}</h4>
      </div>
      <div className="mission-card-body">
      <div className="mission-circle">

        
        <img src={mission.logo} alt={mission.name} />
      </div>
      </div>
      <div className="mission-card-footer">
        <p>{mission.description}</p>
        <button className="button-mission">Voir</button>
      </div>
    </Link>
    </div>
  );
};

export default MissionCard;
