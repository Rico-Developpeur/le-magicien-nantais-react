import React from "react";
import "./Galerie.css";
import Header from "../../components/Header/Header";
import signature from "../../assets/videos/signature.mp4";
import Background from "../../components/Background/Background";
import imagixLogo from "../../assets/images/imagix_logo.png";

const Galerie = () => {
  return (
    <div className="galerie-container">
      <div>
        <Background />

        <div className="galerie-page">
          <div className="header-cont">
            <Header video={signature} />
          </div>

          <h1 className="galerie-title">Galerie</h1>

          <div className="container">
            <div className="carousel">
              <div className="carousel__face" />
              <div className="carousel__face" />
              <div className="carousel__face" />
              <div className="carousel__face" />
              <div className="carousel__face" />
              <div className="carousel__face" />
              <div className="carousel__face" />
              <div className="carousel__face" />
              <div className="carousel__face" />
            </div>
          </div>

          <div className="logo2">
            <img className="imagix2" src={imagixLogo} alt="logo_imagix" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galerie;
