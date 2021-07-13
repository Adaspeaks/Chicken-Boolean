const search = document.querySelector("#recipeSearch");
const searchButton = document.querySelector("#searchBtn");

searchButton.addEventListener("click", function(){
    let dairyFree = document.getElementById("dairyFree").value;
    let glutenFree = document.getElementById("glutenFree").value;
    let searchInput = document.getElementById("recipeSearch").value;
    let diet = document.getElementById("vegSel").value
    getRecipes(dairyFree,glutenFree,searchInput,diet);
    
});

const getRecipes = async (searchTerms) => {
    let response = await fetch(`api/search/${searchTerms}`);
    response = await response.json();
};