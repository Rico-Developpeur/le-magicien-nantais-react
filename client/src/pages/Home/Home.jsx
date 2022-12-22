import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Background from "../../components/Background/Background";
import billet from "../../assets/videos/billet.mp4";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <Background />

        <div className="home-page">
          <Header video={billet} />
          <div className="titre-home">
            <Typewriter
              options={{
                wrapperClassName: "homeTypewriter",
                strings:
                  "La magie sous vos yeux... Regardez, ça n'a rien à voir !",
                autoStart: true,
                delay: 60,
              }}
            />
          </div>

          <div className="parchemin">
            <p className="olivier">
              Passionné de magie depuis plus de 20 ans, j’aime participer à
              l’animation de mariages, d’anniversaires, de départs en retraite,
              de fêtes diverses… organisées par tous types d’organismes /
              d’administrations ou encore par des particuliers qui recherchent
              une touche d’originalité pour leurs évènements. <br />
              <br />
              La pratique du “Close-Up” ou “Magie rapprochée” favorise
              l’interaction avec le magicien, le rapport humain, et enfin, les
              spectateurs peuvent observer la magie à quelques centimètres de
              leurs yeux…
              <br />
              <br />
              J’ai également beaucoup de plaisir à mystifier le public au
              travers d’effets bluffants nécessitant une petite scène pour
              accueillir les spectateurs ravis de partager une expérience
              inédite et qui garderont plein de bons souvenirs… <br />
              <br />
              Au plaisir de partager ces futurs moments de divertissements
              magiques avec vous ! <br />
              <br />
              Magicalement,
              <br />
              <br />
              <span className="olivier2">Olivier</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
