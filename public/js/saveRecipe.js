const { response } = require("express");

const saveRecipeBtn = document.getElementsByClassName("saveBtn");

saveRecipeBtn.addEventListener("click", function(){
    fetch("/api/search/", {
        method:"POST",
        headers: { "content-Type": "application/json"},
        body: JSON.stringify({
            title: `${response.title}`,
            url: `${response.sourceUrl}`,
            readyInMinutes: `${response.readyInMinutes}`,
            is_Vegetarian: `${response.vegetarian}`,
            is_vegan: `${response.vegan}`,
            is_glutenFree: `${response.glutenFree}`,
            is_DairyFree: `${response.DairyFree}`,
        })
    })
})