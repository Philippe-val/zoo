import "./header.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { userService } from "../../utils/userService";
import { useNavigate } from "react-router-dom";



const Header = () => {
   // Utilisation de l'état local pour stocker les informations de l'utilisateur
   const [user, setUser] = useState(null);

   // Utilisation du hook useNavigate pour la navigation dans l'application React Router
   const navigate = useNavigate();
   userService.setNavigate(navigate);

   // Fonction de déconnexion de l'utilisateur
   const logout = () => {
    userService.logout();
};

// Utilisation du hook useEffect pour souscrire aux changements de l'utilisateur
useEffect(() => {
  // Abonnement aux mises à jour de l'utilisateur à l'aide du service userService
  const subscription = userService.user.subscribe((x) => setUser(x));

  // Nettoyage de l'abonnement lors de la destruction du composant
  return () => subscription.unsubscribe();
}, []);


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
            {/* Affichage conditionnel du bouton de déconnexion ou des liens de connexion/inscription */}
            {user ? (<><NavLink to={"/registeredWorkshop"} className={({ isActive }) => (isActive ? "active" : 'none')} role="menuitem">
                        Mes inscriptions
                    </NavLink>
                        <NavLink to={"/messages"} className={({ isActive }) => (isActive ? "active" : 'none')} role="menuitem">
                            Messages
                        </NavLink>
                        <NavLink to={"/userProfile"} className={({ isActive }) => (isActive ? "active" : 'none')} role="menuitem">
                            Mon compte
                        </NavLink>
                        <NavLink to="/" onClick={logout} className={({ isActive }) => (isActive ? "active" : 'none')} role="menuitem">
                            Se déconnecter
                        </NavLink>
                    </>
                    ) : (
                        <>
                            <NavLink to={"/signIn"} className={({ isActive }) => (isActive ? "active" : 'none')} role="menuitem">
                                Connexion
                            </NavLink>
                            <NavLink to={"/signUp"} className={({ isActive }) => (isActive ? "active" : 'none')} role="menuitem">
                                Inscription
                            </NavLink>
                        </>
                    )}

                    {/* Condition pour afficher le lien vers l'espace admin pour les utilisateurs ayant le rôle "admin" */}
                    {user && user.role === "admin" && <NavLink to={"/backOffice"} className={({ isActive }) => (isActive ? "active" : 'none')}>Espace Admin</NavLink>}
                
            </div>
          </div>
        
      </nav>
    </div>
  );
};

export default Header;
