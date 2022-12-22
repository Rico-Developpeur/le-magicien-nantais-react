import React from "react";
import "./Animations.css";
import Header from "../../components/Header/Header";
import verre from "../../assets/videos/verre_eau.mp4";
import Background from "../../components/Background/Background";
import closeUp from "../../assets/images/close_up.png";
import mentalisme from "../../assets/images/mentalisme.jpg";
import salon from "../../assets/images/salon.jpg";
import scene from "../../assets/images/scene1.png";
import digitale from "../../assets/images/digitale.jpg";

const Animation = () => {
  return (
    <div className="animation-container">
      <div>
        <Background />

        <div className="animation-page">
          <Header video={verre} />

          <h1 className="animation-title">Animations</h1>

          <div className="grid_pc_animation flex_tel_animation">
            <div className="close">
              <h2>Close-up</h2>
              <p className="grid_animation">
                Profitez d'une myriade d'effets magiques aussi variés que
                surprenants ! (cartes, pièces, cordes, foulards, Rubik's cubes,
                accessoires divers...). <br />
                <br />
                Osez la différence avec la possibilité de personnaliser (et donc
                de rendre unique) un tour de magie selon la nature ou le thème
                de votre événement !
              </p>
            </div>
            <div className="close_img">
              <img className="close1_img" src={closeUp} alt="close up" />
            </div>

            <div className="mentalisme">
              <h2>Mentalisme</h2>
              <p className="grid_animation">
                "En magie, on se joue de la vue. En mentalisme, on se joue des
                esprits !" <br />
                <br />
                Vivez des exprériences intriguantes au travers d'effets variés
                (lecture de pensées, influences, prédictions, divinations).
              </p>
            </div>
            <div className="mentalisme_img">
              <img
                className="mentalisme1_img"
                src={mentalisme}
                alt="mentalisme"
              />
            </div>

            <div className="salon">
              <h2>Magie de salon</h2>
              <p className="grid_animation">
                Sur petite scène ou en table à table, cette catégorie est à
                mi-chemin entre le close-up et la magie de scène. <br />
                <br />
                En réalité, cela dépend des caractéristiques du lieu de
                l'animation.
                <br />
                <br />
                Cela détermine aussi les tours de magie réalisables en fonction
                du contexte.
              </p>
            </div>
            <div className="salon_img">
              <img className="salon1_img" src={salon} alt="salon" />
            </div>

            <div className="scene">
              <h2>Magie de scène</h2>
              <p className="grid_animation">
                Cette catégorie est adaptée à un environnement qui nécessite un
                minimum de distance avec le public, du fait du grand nombre de
                spectateurs principalement.
                <br />
                <br />
                Cela se révèle être aussi idéal, en guise d'introduction, afin
                de mettre en valeur la ou les personnes pour qui l'événement a
                été organisé. <br />
                <br />
                Mettons les à l'honneur !
              </p>
            </div>
            <div className="scene_img">
              <img className="scene1_img" src={scene} alt="magie_de_scene" />
            </div>

            <div className="digitale">
              <h2>Magie digitale</h2>
              <p className="grid_animation">
                Il s'agit d'un type de magie moderne nécessitant l'emploi des
                écrans (smartphones, tablettes, etc...). <br />
                <br />
                Dans le cadre de mes prestations, son utilisation est modérée
                afin de privilégier la magie traditionnelle.
              </p>
            </div>
            <div className="digitale_img">
              <img className="digitale1_img" src={digitale} alt="digitale" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
