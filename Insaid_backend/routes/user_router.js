const {get_user, add_user} = require("./user_controller");
const router = require("express").Router();

router.post("/add", add_user);
router.get("/get", get_user);

module.exports = router;