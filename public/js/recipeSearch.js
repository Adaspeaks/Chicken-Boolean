const router = require("expres").Router();
const {Recipe} = require("../../models");

document.querySelector("#searchBtn").addEventListenter("click", getRecipe);

router.get("/:id", async (req, res) => {
    try {
        const recipeTitle = await Product.findByPk(req.params.id, req.params.is_vegetarian, req.params.is_vegan, req.params.is_glutenFree, req.params.is_dairyFree);
    
        if (!recipeTitle) {
          res.status(404).json({ message: "No recipe available" });
          return;
        }
    
        res.status(200).json(recipeTitle);
      } catch (err) {
        res.status(500).json(err);
      }
    });