const router = require("express").Router();
const { User, Steps, Recipe } = require("../../models");
const axios = require("axios").default;


router.get(`/:searchTerm`, async(req, res) => {
  try {  
    const searchTerm = req.params.searchTerm;

    const recipeData = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOON_API}&addRecipeInformation=true&query=${searchTerm}`);
      res.json(recipeData.data.results);
} catch (err) {
  res.status(404).json(err);
}
});

module.exports = router;