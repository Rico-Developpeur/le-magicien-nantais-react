import React from "react";
import "./Prestations.css";
import Header from "../../components/Header/Header";
import voiture from "../../assets/videos/voiture.mp4";
import Background from "../../components/Background/Background";
import mariage from "../../assets/images/mariage.jpg";
import entreprise from "../../assets/images/entreprise.png";
import anniversaire from "../../assets/images/anniversaire.jpg";
import retraite from "../../assets/images/maison_retraite1.jpg";
import asso from "../../assets/images/asso1.jpg";

const Prestations = () => {
  return (
    <div className="prestations-container">
      <div>
        <Background />

        <div className="prestations-page">
          <Header video={voiture} />

          <h1 className="prestation-title">Prestations</h1>

          <div className="flex_tel_presentations grid_pc_presentations">
            <div className="mariage">
              <h2>Mariages</h2>
              <p className="grid_presentations">
                Apportez une touche magique supplémentaire à cette journée très
                singulière. <br />
                <br />
                Agrémentez le vin d'honneur, le repas ou tout autre moment, avec
                une intervention de type stand-up, table à table, ou encore au
                format stand / atelier.
              </p>
            </div>
            <div className="mariage_img">
              <img className="mariage1_img" src={mariage} alt="mariage_magie" />
            </div>

            <div className="entreprise">
              <h2>Entreprises</h2>
              <p className="grid_presentations">
                Pour tous types d'occasions, intégrez une touche magique à vos
                événements (séminaires, congrès, soirées privées, conventions,
                salons, repas de fin d'année, etc...). <br />
                <br />
                Avant, pendant ou après le repas, une solution est compatible
                avec votre organisation.
              </p>
            </div>
            <div className="entreprise_img">
              <img
                className="entreprise1_img"
                src={entreprise}
                alt="entreprise_magie"
              />
            </div>

            <div className="anniv">
              <h2>Anniversaires</h2>
              <p className="grid_presentations">
                L'art magique s'intègre parfaitement pour ce genre de fêtes, et
                ce, quel que soit votre âge ! <br />
                <br />
                La personne au centre de cet événement est mise en avant. <br />
                <br />
                Des tours sur-mesure peuvent être réalisés selon vos goûts.
              </p>
            </div>
            <div className="anniv_img">
              <img
                className="anniv1_img"
                src={anniversaire}
                alt="anniversaire"
              />
            </div>

            <div className="asso">
              <h2>Association</h2>
              <p className="grid_presentations">
                Pour agrémenter l'organisation de vos différentes
                manifestations, optez pour la formule de votre choix (petite
                scène, format stand / atelier, table à table). <br />
                <br />
                Tout est adaptable selon vos besoins !
              </p>
            </div>
            <div className="asso_img">
              <img className="asso1_img" src={asso} alt="association" />
            </div>

            <div className="retraite">
              <h2>Maisons de retraite</h2>
              <p className="grid_presentations">
                Un divertissement original garanti avec des effets magiques qui
                parlent aux résidents et qui sont, pour certains, basés sur des
                jeux de société (ex: Loto, Scrabble, Mots mêlés, Puzzles,
                Echecs, etc...).
                <br />
                <br />
                Foyers logements, EHPAD... à vous de jouer !
              </p>
            </div>
            <div className="retraite_img">
              <img
                className="retraite1_img"
                src={retraite}
                alt="maison de retraite"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prestations;
