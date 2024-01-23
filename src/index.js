function showRecipie(response) {
  new Typewriter("#recipie-details", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 50,
  });
}

function generateRecipie(event) {
  event.preventDefault();

  let ingredientInput = document.querySelector("#ingredients");
  let key = "331711t40ba7f6a03e3o8bfc5f54faa4";
  let prompt = `Generate a recipie using ${ingredientInput.value} as main ingredient`;
  let context =
    "You are a recipie expert. You love to generate healty recipies with up to 6 easy to find ingrediants also providing user instructions. Please please display in basic HTML and seperate each ingredient and each instruction with a <br>.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  let recipieDisplay = document.querySelector("#recipie-details");
  recipieDisplay.innerHTML = "Generating recipie";
  axios.get(apiUrl).then(showRecipie);
}

let submitIngredient = document.querySelector("#submit-ingredient-form");
submitIngredient.addEventListener("submit", generateRecipie);
