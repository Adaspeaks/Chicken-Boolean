const search = document.querySelector("#recipeSearch");
const searchButton = document.querySelector("#searchBtn");
const recipeList = document.querySelector("#recipe_list");

searchButton.addEventListener("click", function () {
  let dairy = document.getElementById("dairyFree").value;
  let gluten = document.getElementById("glutenFree").value;
  let searchTerm = document.getElementById("recipeSearch").value;
  let diet = document.getElementById("vegSel").value;
  const query = new URLSearchParams({
    dairy,
    gluten,
    searchTerm,
    diet,
  });

  getRecipes(query.toString());
});

const getRecipes = async (searchTerms) => {
  let response = await fetch(`api/search/?${searchTerms}`);
  response = await response.json();
  recipeList.innerHTML = "";
  response.forEach((recipe) => {
    const li = document.createElement("li");
    li.textContent = recipe.title;
    li.classList.add("list-group-item");

    const button = document.createElement("button");
    button.textContent = "Save";
    button.classList.add("button", "saveBtn");
    button.setAttribute(
      "data-recipe",
      JSON.stringify({
        title: recipe.title,
        recipe_id: recipe.id,
        url: recipe.sourceUrl,
        readyInMinutes: recipe.readyInMinutes,
        is_vegetarian: recipe.vegetarian,
        is_vegan: recipe.vegan,
        is_glutenFree: recipe.glutenFree,
        is_dairyFree: recipe.dairyFree,
      })
    );

    li.append(button);
    recipeList.append(li);
  });
};

// Listen for click on the save button
recipeList.addEventListener("click", function (e) {
  if (!e.target.matches(".saveBtn")) return;

  // POST - /api/recipe
  fetch("/api/recipe", {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: e.target.dataset.recipe,
  });
});
