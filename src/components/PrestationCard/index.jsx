import "./prestationcard.css";
import { Link } from "react-router-dom";

const PrestationCard = ({ prestation }) => {
  return (
    <div className="card  mb-3 prestation-card">
      <Link to="/prestation">
        <div className=" prestation-card-header">
          <div className="prestation-logo">
            <img src={prestation.logo} alt="" />
          </div>
        </div>
        <div className="prestation-card-body">
          <h4 className="prestation-card-title">{prestation.name}</h4>
          <p>{prestation.description}</p>
          <button className="button-prestation">Voir</button>
        </div>
      </Link>
    </div>
  );
};

export default PrestationCard;
