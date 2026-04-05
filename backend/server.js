const express = require("express");
const app = express();

require("./db");

app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/users"));
app.use("/admin", require("./routes/admin"));

app.get("/", (req, res) => {
  res.json({ message: "PROJECT_ONE API running" });
  });

  app.listen(3000, () => console.log("Server running on 3000"));