import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import Typewriter from "typewriter-effect";
import Header from "../../components/Header/Header";
import the from "../../assets/videos/carte_thé.mp4";
import Background from "../../components/Background/Background";
import facebook from "../../assets/images/facebook.png";
import email from "../../assets/images/mail.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube-logo-icone.png";
import Input from "../../components/Input/Input";
import sucess from "../../assets/images/courrier.gif";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [nameRegex, setNameRegex] = useState(true);
  const [mailRegex, setMailRegex] = useState(true);
  const [phoneRegex, setPhoneRegex] = useState(true);
  const [messageRegex, setMessageRegex] = useState(true);
  const [success, setSuccess] = useState(false);

  const [errorConnect, setErrorConnect] = useState(false);

  const regexName = (value) => {
    // return /^[a-zA-Z]{3,}\s?[0-9a-zA-Z_]{1,}\s?[0-9a-zA-Z_]{1,}?$/.test(value);
    return /^[a-zA-ZÀ-ú\-\s]{3,20}/.test(value);
  };

  const nameControl = () => {
    if (regexName(name)) {
      setNameRegex(true);
      return true;
    }
    setNameRegex(false);
    return false;
  };

  const regexMail = (value) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
  };

  const mailControl = () => {
    if (regexMail(mail)) {
      setMailRegex(true);
      return true;
    }
    setMailRegex(false);
    return false;
  };

  const regexPhone = (value) => {
    return /^$|^[0-9]{10}$/.test(value);
  };

  const phoneControl = () => {
    if (regexPhone(phone_number)) {
      setPhoneRegex(true);
      return true;
    }
    setPhoneRegex(false);
    return false;
  };

  const messageControl = () => {
    if (message !== "") {
      setMessageRegex(true);
      return true;
    }
    setMessageRegex(false);
    return false;
  };

  const sucessFalse = () => {
    setSuccess(false);
  };

  const durationNav = () => {
    setTimeout(sucessFalse, 5000);
  };

  const data = {
    name,
    mail,
    phone_number,
    message,
  };

  const postEmail = () => {
    axios
      .post(`http://localhost:5000/mail`, data)
      .then((response) => response.data)
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nameControl(name) &&
      mailControl(mail) &&
      phoneControl(phone_number) &&
      messageControl(message)
    ) {
      axios
        .post(`http://localhost:5000/createMessage`, data)
        .then((response) => {
          postEmail();
          setErrorConnect(false);
          setSuccess(true);
          setName("");
          setMail("");
          setPhoneNumber("");
          setMessage("");
          durationNav();
        })
        .catch((error) => {
          setErrorConnect(true);
        });
    }
  };

  return (
    <div className="contact-container">
      <div>
        <Background />
      </div>

      <div className="contact-page">
        <Header video={the} />

        <h1 className="contact-title">Contact</h1>

        {/* <div className="contact2">
          <p className="contact_p">N'hésitez pas à me contacter :</p>
        </div> */}

        <Typewriter
          options={{
            wrapperClassName: "contactTypewriter",
            strings: "N'hésitez pas à me contacter :",
            autoStart: true,
            delay: 60,
          }}
        />

        <form className="contactForm-container">
          <div className="inputName-container">
            <Input
              className="inputName"
              forId="name"
              type="text"
              field="Nom *"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <p className="alert">
              {nameRegex === false
                ? "⚠️ Le nom doit etre composé de 3 lettres minimum"
                : ""}
            </p>
          </div>

          <div className="inputMail-container">
            <Input
              className="inputMail"
              forId="mail"
              type="email"
              field="Adresse mail *"
              onChange={(e) => setMail(e.target.value)}
              value={mail}
            />
            <p className="alert">
              {mailRegex === false ? "⚠️ le mail n'est pas valide " : ""}
            </p>
          </div>

          <div className="inputTel-container">
            <Input
              className="inputTel"
              forId="telephone"
              type="tel"
              pattern="[09]{10}"
              field="Téléphone"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phone_number}
              minlength="10"
              maxlength="10"
            />
            <p className="alert">
              {phoneRegex === false
                ? "⚠️ le téléphone n'est pas valide il doit contenir 10 chiffres"
                : ""}
            </p>
          </div>
          <div className="inputMessage-container">
            <label className="input-label-message" htmlFor="forId">
              Message *
            </label>
            <textarea
              className="inputMessage"
              onChange={(e) => setMessage(e.target.value)}
              id="forId"
              value={message}
              type="text"
              cols="35"
              rows="4"
            />
            <p className="alert">
              {messageRegex === false ? "⚠️ Veuillez inscrire un message" : ""}
            </p>
          </div>

          <div className="button-container">
            <button className="buttonForm" onClick={handleSubmit} type="submit">
              ENVOYER
            </button>
            <p className="alert">
              {success === true ? "Votre message a bien été envoyé !😀" : ""}
            </p>
            <p className="alert">
              {success === true ? (
                <img
                  className="imgSucess"
                  src={sucess}
                  alt="chouette donnant un courrier"
                />
              ) : (
                ""
              )}
            </p>
            <p className="fieldFalse">
              {errorConnect === true ? "Le message n'a pas été envoyé" : ""}
            </p>
          </div>
        </form>

        <div className="contactReseau">
          <div className="contactTel">
            <p>📞 06 12 41 68 49</p>
          </div>

          <div className="reseau-container">
            <a
              className="facebook"
              href="https://www.facebook.com/profile.php?id=100088663880310"
            >
              <img className="facebookImage" src={facebook} alt="facebook" />
            </a>

            <a class="youtube" href="https://www.youtube.com/@imagix44">
              <img class="youtubeImage" src={youtube} alt="youtube" />
            </a>

            <a className="insta" href="https://www.instagram.com/imagix44/">
              <img className="instaImage" src={instagram} alt="instagram" />
            </a>
          </div>

          <div className="email">
            <img className="emailImage" src={email} alt="email" />
            <p>imagix44@free.fr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
