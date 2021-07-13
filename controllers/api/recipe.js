const router = require("express").Router();
const db = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async function (req, res) {
  try {
    // Create new recipe
    const recipe = await db.Recipe.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.json(await recipe.get({ plain: true }));
  } catch (err) {
    res.status(500).end();
  }
});

module.exports = router;
