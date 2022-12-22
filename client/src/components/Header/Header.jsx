import React, { useState } from "react";
import "./Header.css";
import { Close, MenuOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "../../assets/images/imagix_logo.png";

const Header = ({ video }) => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="header-container">
      <video className="video" src={video} autoPlay muted loop />

      <div className="header-menu">
        <div className="menu-icon">
          <MenuOutlined className="menu" onClick={showMenu} />
        </div>

        <nav className={active ? "slider active" : "slider"}>
          <ul>
            <div className="closed">
              <Close className="closes" onClick={showMenu} />
            </div>
            <li className="logo">
              <Link to="/contact">
                <img className="logoImagix" src={logo} alt="logo" />
              </Link>
            </li>
            <li className="accueil">
              <Link to="/">Accueil</Link>
            </li>
            <li className="presta">
              <Link to="/prestations">Prestations</Link>
            </li>
            <li className="spect">
              <Link to="/animations">Animations</Link>
            </li>
            <li className="contact">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="atelier">
              <Link to="/ateliers">Ateliers</Link>
            </li>
            <li className="galerie">
              <Link to="/galerie">Galerie</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
