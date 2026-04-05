const router = require("express").Router();
const c = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");

router.get("/profile", auth, c.profile);

module.exports = router;