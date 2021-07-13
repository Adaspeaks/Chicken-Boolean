const router = require("express").Router();

router.use("/users", require("./userRoutes"));
router.use(`/search`, require("./spoonacular"));
router.use(`/recipe`, require("./recipe"));

module.exports = router;
