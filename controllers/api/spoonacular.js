const router = require("express").Router();
const { User, Steps, Recipe } = require("../../models");
const axios = require("axios");

document.querySelector("#searchBtn").addEventListenter("click", getRecipe);
// vegSEL
router.get("/:search", async (req, res) => {
  try {
    const recipeSearch = await Recipe(
      (title = req.params.title),
      (id = req.params.id),
      (vegetartian = req.params.is_vegetarian),
      (vegan = req.params.is_vegan),
      (gluten_free = req.params.is_glutenFree),
      (dairy_free = req.params.is_dairyFree)
    );

    const dietdropdown = document.getElementById(vegSEL);
    const diet = dietdropdown.options[dietdropdown.selectedindex].text;

    const dairyFree = (document.querySelector(`#dairyFree:checked`).val =
      "dairy,");
    const glutenFree = (document.querySelector(`#glutenFree:checked`).val =
      "gluten,");

    const searchTerm = document.getElementById(`searchArea`).val;

    const recipeData = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOON_API}&addRecipeInformation=true&diet=${diet}&intolerances=${dairyFree}${glutenFree}&query=${searchTerm}`
    );
    res.json(recipeData.data.results);
    if (!recipeTitle) {
      res.status(404).json({ message: "No recipe available" });
      return;
    }

    res.status(200).json(recipeSearch);
  } catch (err) {
    res.status(500).json(err);
  }
});
