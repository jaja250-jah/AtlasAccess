const db = require("../db");

module.exports = {
  dashboard(req, res) {
      db.query("SELECT COUNT(*) AS total FROM users", (err, rows) => {
            if (err) return res.status(500).json({ error: "DB error" });
                  res.json({ total_users: rows[0].total });
                      });
                        },

                          users(req, res) {
                              db.query(
                                    "SELECT id, username, role, created_at FROM users",
                                          (err, rows) => {
                                                  if (err) return res.status(500).json({ error: "DB error" });
                                                          res.json(rows);
                                                                }
                                                                    );
                                                                      },

                                                                        delete(req, res) {
                                                                            db.query("DELETE FROM users WHERE id = ?", [req.params.id], err => {
                                                                                  if (err) return res.status(500).json({ error: "Delete failed" });
                                                                                        res.json({ message: "User deleted" });
                                                                                            });
                                                                                              }
                                                                                              };