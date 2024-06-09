import Thumb from "../habitat-thumb";
import data from "../../data/data.json";
import "./section-habitat.css";

const Habitat = () => {
  return (
    <div className="container section-habitat">
      <div className="section-habitat-left">
        {data.habitats.slice(0, 4).map((thumb, index) => (
          <Thumb key={index} thumb={thumb} />
        ))}
      </div>
      <div className="section-habitat-intro">
        <h2 className="intro-title">Les Habitats</h2>
        <p className="intro-text">
          Représenter fidèlement les différents écosystèmes du monde permet aux
          visisteurs de mieux comprendre la complexité des environnements
          naturels. Cette approche sensibilise le public à la nécéssité de
          protéger ces environnements et offre des conditions de vie plus
          adaptées aux animaux, contribuant à leur bien-être.
        </p>
      </div>
    </div>
  );
};

export default Habitat;
