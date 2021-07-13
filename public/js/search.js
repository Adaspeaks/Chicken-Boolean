const search = document.querySelector("#recipeSearch");
const searchButton = document.querySelector("#searchBtn");

searchButton.addEventListener("click", function(){
    let searchInput = document.getElementById("recipeSearch").value;
    getRecipes(searchInput);
    
});

const getRecipes = async (searchTerm) => {
    let response = await fetch(`api/search/${searchTerm}`);
    response = await response.json();
};