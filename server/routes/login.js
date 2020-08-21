const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models").User;

const { SEED, TIME_TOKEN } = require("../config/config");

const app = express();

app.post("/login", (req, res) => {
  let body = req.body;

  User.findOne({ where: { email: body.email } })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          ok: false,
          err: {
            message: "Usuario o Password incorrecto",
          },
        });
      }
      if (!bcrypt.compareSync(body.password, user.password)) {
        return res.status(401).json({
          ok: false,
          err: {
            message: "User or password incorrect",
          },
        });
      }

      let token = jwt.sign({ user }, SEED, { expiresIn: TIME_TOKEN });
      res.json({
        ok: true,
        user,
        token,
      });
    })
    .catch((err) =>
      res.status(500).json({
        ok: false,
        err,
      })
    );

  // User.findOne({ email: body.email }, (err, userDB) => {
  //   if (err) {
  //     return res.status(500).json({
  //       ok: false,
  //       err,
  //     });
  //   }
  //   if (!userDB) {
  //     return res.status(401).json({
  //       ok: false,
  //       err: {
  //         message: "Usuario o Password incorrecto",
  //       },
  //     });
  //   }

  //   if (!bcrypt.compareSync(body.password, userDB.password)) {
  //     return res.status(401).json({
  //       ok: false,
  //       err: {
  //         message: "User or password incorrect",
  //       },
  //     });
  //   }

  //   let token = jwt.sign({ user: userDB }, SEED, { expiresIn: TIME_TOKEN });
  //   res.json({
  //     ok: true,
  //     user: userDB,
  //     token,
  //   });
  // });
});

module.exports = app;
