const jwt = require("jsonwebtoken");
const { SEED } = require("../config/config");

/**
 * Verify Token
 */
let verifyToken = (req, res, next) => {
  let token = req.get("Authorization");

  jwt.verify(token, SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: {
          message: "Token Invalid.",
        },
      });
    }

    req.user = decoded.user;
    next();
  });
};

let verifyRole = (req, res, next) => {
  let user = req.user;

  if (user.role !== "ADMIN_ROLE") {
    return res.status(401).json({
      ok: false,
      err: {
        message: "need admin role",
      },
    });
  }
  next();
};

let verificaTokenImg = (req, res, next) => {
  let token = req.query.token;
  jwt.verify(token, SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: {
          message: "Token no valido",
        },
      });
    }
    req.usuario = decoded.usuario;
    next();
  });
};

module.exports = {
  verifyToken,
  verifyRole,
  verificaTokenImg,
};
