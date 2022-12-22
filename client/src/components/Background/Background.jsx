import React from "react";
import "./Background.css";
import scintillant from "../../assets/videos/scintillant.mp4";

const Background = () => {
  return (
    <video className="bg-video" autoPlay muted loop playsInline>
      <source src={scintillant} type="video/mp4" />
    </video>
  );
};

export default Background;
