const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwtConfig");

module.exports = function(req, res, next) {
  const header = req.headers.authorization;
    if (!header) return res.status(401).json({ error: "No token" });

      const token = header.startsWith("Bearer ") ? header.slice(7) : header;

        try {
            req.user = jwt.verify(token, secret);
                next();
                  } catch {
                      res.status(401).json({ error: "Invalid token" });
                        }
                        };