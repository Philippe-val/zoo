import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {" "}
      <nav className="navbar navbar-expand-lg bg-brown" data-bs-theme="dark">
        <div className="container-fluid">
          <div className="logo">
            <NavLink className="navbar-brand" to="/">
              <img
                src="logoimg.png"
                className="logo-img"
                alt="Zoo de Brocéliande"
              />
              <span className="logo-title">ZOO DE BROCELIANDE</span>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  Accueil
                  <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>{" "}
              <li className="nav-item">
                <NavLink className="nav-link" to="/habitats">
                  Habitats
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/avis">
                  Avis
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
