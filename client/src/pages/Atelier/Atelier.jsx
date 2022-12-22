import React from "react";
import "./Atelier.css";
import Header from "../../components/Header/Header";
import billet from "../../assets/videos/billet.mp4";
import Background from "../../components/Background/Background";

const Atelier = () => {
  return (
    <div className="atelier-container">
      <div>
        <Background />

        <div className="atelier-page">
          <Header video={billet} />

          <h1 className="atelier-title">Ateliers</h1>

          <div className="atelier-attente">
            <p>Page en construction...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Atelier;
