const db = require("../db");

module.exports = {
  profile(req, res) {
      db.query(
            "SELECT id, username, role, created_at FROM users WHERE id = ?",
                  [req.user.id],
                        (err, rows) => {
                                if (err || rows.length === 0)
                                          return res.status(404).json({ error: "Not found" });

                                                  res.json(rows[0]);
                                                        }
                                                            );
                                                              }
                                                              };