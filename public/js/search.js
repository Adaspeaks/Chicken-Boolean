const formdata = { searchButton = document.getElementById("#searchBtn"),
 searchField = document.getElementById("#recipeSearch"),

 dietdropdown = document.getElementById(vegSel),
 diet = dietdropdown.options[dietdropdown.selectedindex].text,

 dairyFree = (document.querySelector(`#dairyFree:checked`).val = "dairy,"),
 glutenFree = (document.querySelector(`#glutenFree:checked`).val = "gluten,"),
 searchTerm = req.params.search,
};
 const configObj ={
  method: "GET",
  headers: { "content-type": "application/json", acccept: "application/json" },
  body: JSON.stringify(formdata),
};

fetch("/api/search/", configObj)
.then(function(response){
    return response.json();
})
.then (function(object){
    console.log(object);
})
.catch(function(error){
    console.log(error.message);
});
searchButton.addEventListener("click", function () {
  if (searchField.value == "") {
    console.log("no search query found");
  } else {
    window.location.replace(`/search${searchField.value}`);
  }
});
