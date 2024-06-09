import React from "react";
import data from "../../data/data.json"
import "./section-prestation.css";
import PrestationCard from "../PrestationCard";



const PrestationS = () => {
  return <div className="container section-prestation">

{data.prestations.map((prestation, index) => (
  < PrestationCard key={index} prestation={prestation} />
)
)}

  </div>;
};

export default PrestationS;
