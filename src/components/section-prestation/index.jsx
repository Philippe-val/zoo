import React from "react";
import data from "../../data/data.json"
import "./section-prestation.css";
import PrestationCard from "../PrestationCard";



const PrestationS = () => {
  return <div className="section-prestation">
    <div className="prestation-title">
    <h1 className="prestation-service">Nos services</h1>
    </div>
<div className="prestation-jumbotron">


{data.prestations.map((prestation, index) => (
  < PrestationCard key={index} prestation={prestation} />
)
)}
  </div>
  </div>;
};

export default PrestationS;
