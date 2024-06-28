import { Link } from "react-router-dom";
import "./thumb.css";

const Thumb = ({ thumb }) => {
  return (
    <div class="mb-3 thumb-card">
      <Link to="/habitats">
        <div class="thumb-card-body">
          <h6 class="thumb-card-title">{thumb.title}</h6>
        </div>
        <div class=" thumb-card-header">
          <img src={thumb.img} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default Thumb;
