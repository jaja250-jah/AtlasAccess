const router = require("express").Router();
const c = require("../controllers/adminController");
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

router.get("/dashboard", auth, admin, c.dashboard);
router.get("/users", auth, admin, c.users);
router.delete("/users/:id", auth, admin, c.delete);

module.exports = router;