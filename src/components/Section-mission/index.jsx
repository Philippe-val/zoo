import React from "react";
import data from "../../data/data.json";
import "./section-mission.css";
import MissionCard from "../MissionCard";
const Mission = () => {
  return (
    <div className="section-mission">
      <div className="mission-title">
      <h1 className="mission-title">Nos missions</h1>
      </div>
      <div className="mission-jumbotron">
      
      {data.missions.map((mission, index) => (
        <MissionCard key={index} mission={mission} />
      ))}
    </div>
    </div>
  );
};

export default Mission;
