// Display API response
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

  // Build API Url
  let ingredientInput = document.querySelector("#ingredients");
  let key = "331711t40ba7f6a03e3o8bfc5f54faa4";
  let prompt = `Generate a recipie using ${ingredientInput}`;
  let context =
    "You are a recipie generator.  You love to generate healty recipies with only 6 easy to find ingrediants. Please display each ingredient on a seperate line and provide simple instructions for the user to follow";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  // Make call to the api
  axios.get(apiUrl).then(showRecipie);
}

let submitIngredient = document.querySelector("#submit-ingredient-form");
submitIngredient.addEventListener("submit", generateRecipie);
