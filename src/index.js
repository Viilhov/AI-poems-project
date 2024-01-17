function generateRecipie(event) {
  event.preventDefault();

  new Typewriter("#recipie-details", {
    strings: "Soon you will see a recipie",
    autoStart: true,
    cursor: null,
    delay: 50,
  });
}

let submitIngredient = document.querySelector("#submit-ingredient-form");
submitIngredient.addEventListener("submit", generateRecipie);
