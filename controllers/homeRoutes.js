const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");
const db = require("../models");

router.get("/", async (req, res) => {
  res.render("homepage", {
    logged_in: req.session.logged_in,
  });
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

router.get("/search", withAuth, async (req, res) => {
  try {
    res.render("search", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/mypage", withAuth, async (req, res) => {
  try {
    const recipes = await db.Recipe.findAll({
      where: { user_id: req.session.user_id },
    });
    res.render("myPage", {
      logged_in: req.session.logged_in,
      recipes: recipes.map((recipe) => recipe.get({ plain: true })),
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
