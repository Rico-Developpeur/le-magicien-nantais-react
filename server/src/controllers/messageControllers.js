const { imagixDb } = require("../models/imagixDb");
const nodemailer = require("nodemailer");

const postMessage = (req, res) => {
  const { name, mail, phone_number, message } = req.body;

  imagixDb
    .query(
      "INSERT INTO imagix(name, mail, phone_number, message) VALUES ( ?, ?, ?, ?)",
      [name, mail, phone_number, message]
    )
    .then(([result]) => {
      res.location(`/imagix/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      res.status(500).send(`Error in postUsers ${err}`);
    });
};

async function email(req, res) {
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    service: "outlook",

    port: 587,
    secure: false,
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      // from: `${req.body.mail} <vieira_wcs@hotmail.com>`,
      from: `${req.body.mail} <imagix44@hotmail.com>`,

      // to: "vieira_wcs@hotmail.com",
      to: "imagix44@free.fr",

      subject: `Message de ${req.body.name}`,
      // text: `tel : ${req.body.phone_number}, message : ${req.body.message}`,
      html: `tel : ${req.body.phone_number} ${req.body.message}`,
    });
    res.status(200);
  } catch (error) {
    console.warn(error);
  }
}

module.exports = {
  postMessage,
  email,
};
