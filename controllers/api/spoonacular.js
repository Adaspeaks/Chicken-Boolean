const router = require("express").Router();
const { User, Steps, Recipe } = require("../../models");
const axios = require("axios").default;
const withAuth = require("../utils/auth");

router.get(`/:`, async (req, res) => {
  try {
    const dairy = req.params.dairyFree;
    const gluten = req.params.glutenFree;
    const searchTerm = req.params.searchTerm;
    const diet = req.params.diet;

    const recipeData = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOON_API}&addRecipeInformation=true&diet=${diet}&intolerance=${gluten},${dairy}query=${searchTerm}`
    );
    res.json(recipeData.data.results);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newRecipe = await recipe.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
