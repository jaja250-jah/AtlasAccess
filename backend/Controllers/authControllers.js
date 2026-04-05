const db = require("../db");
const hash = require("../utils/hashPassword");
const verify = require("../utils/verifyPassword");
const token = require("../utils/generateToken");

module.exports = {
  register(req, res) {
      const { username, password, role } = req.body;

          const hashed = hash(password);

              db.query(
                    "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
                          [username, hashed, role || "user"],
                                err => {
                                        if (err) return res.status(400).json({ error: "User exists" });
                                                res.json({ message: "Registered" });
                                                      }
                                                          );
                                                            },

                                                              login(req, res) {
                                                                  const { username, password } = req.body;

                                                                      db.query(
                                                                            "SELECT * FROM users WHERE username = ?",
                                                                                  [username],
                                                                                        (err, rows) => {
                                                                                                if (err || rows.length === 0)
                                                                                                          return res.status(400).json({ error: "Invalid" });

                                                                                                                  const user = rows[0];

                                                                                                                          if (!verify(password, user.password))
                                                                                                                                    return res.status(400).json({ error: "Invalid" });

                                                                                                                                            const jwt = token({
                                                                                                                                                      id: user.id,
                                                                                                                                                                username: user.username,
                                                                                                                                                                          role: user.role
                                                                                                                                                                                  });

                                                                                                                                                                                          res.json({ token: jwt, role: user.role });
                                                                                                                                                                                                }
                                                                                                                                                                                                    );
                                                                                                                                                                                                      }
                                                                                                                                                                                                      };