const router = require("express").Router();
const { User, Steps, Recipe } = require("../../models");
const axios = require("axios").default;


router.get(`/:searchTerms`, async(req, res) => {
  try {  
    const dairy = req.params.dairyFree;
    const gluten = req.params.glutenFree;
    const searchTerm = req.params.searchTerm;
    const diet = req.params.diet;

    

    const recipeData = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOON_API}&addRecipeInformation=true&diet=${diet}&intolerance=${gluten},${dairy}query=${searchTerm}`);
      res.json(recipeData.data.results);
} catch (err) {
  res.status(404).json(err);
}
});

module.exports = router;