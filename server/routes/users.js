const express = require("express");
const bcrypt = require("bcrypt");
const _ = require("lodash");

const User = require("../models").User;
const { verifyToken, verifyRole } = require("../middlewares/auth");

const app = express();

app.get("/users", [verifyToken, verifyRole], (req, res) => {
  let from = req.query.from || 0;
  from = Number(from);
  let limit = req.query.limit || 5;
  limit = Number(limit);
  let defaultFilters = {
    state: true,
  };

  User.findAndCountAll({
    limit: limit,
    offset: from,
    where: defaultFilters,
    attributes: ["id", "name", "email", "role", "state"],
  })
    .then(({ count, rows }) => {
      res.json({
        ok: true,
        users: rows,
        total: count,
      });
    })
    .catch((err) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          message: err,
        });
      }
    });
});

app.get("/users/:userId", verifyToken, (req, res) => {
  let userId = req.params.userId;
  User.findOne({ where: { id: userId } })
    .then((user) => res.json({ ok: true, user }))
    .catch((err) =>
      res.status(400).json({
        ok: false,
        err,
      })
    );
});

app.post("/users", (req, res) => {
  let body = req.body;

  User.create({
    name: body.name,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role,
    userId: body.userId,
  })
    .then((user) => {
      res.status(201).json({
        ok: true,
        user: user,
      });
    })
    .catch((err) =>
      res.status(400).json({
        ok: false,
        err: err,
      })
    );
});

app.put("/users/:userId", verifyToken, (req, res) => {
  let userId = req.params.userId;
  let body = _.pick(req.body, ["name", "email", "role", "state"]);

  User.update(body, {
    where: {
      id: userId,
    },
  })
    .then((user) =>
      res.json({
        ok: true,
        user,
      })
    )
    .catch((err) =>
      res.status(400).json({
        ok: false,
        err,
      })
    );
});

app.delete("/users/:userId", [verifyToken, verifyRole], (req, res) => {
  let userId = req.params.userId;

  let deleteState = {
    state: false,
  };

  User.update(deleteState, {
    where: {
      id: userId,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          ok: false,
          err: {
            message: "No se ha encontrado el usuario",
          },
        });
      }
      res.status(204).json({
        ok: true,
        user,
      });
    })
    .catch((err) =>
      res.status(400).json({
        ok: false,
        message: err,
      })
    );
});

module.exports = app;
