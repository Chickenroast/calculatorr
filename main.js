const buttons = document.querySelectorAll(".custom-btn");
const output = document.getElementById("output2");
let currentInput = "";

let lastButton = null;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonText = this.textContent;

    if (buttonText === "=") {
      // Si le bouton "=" est cliqué, effectuez le calcul
      output.value = eval(currentInput);
      currentInput = "";
    } else if (buttonText === "C") {
      // Si le bouton "C" est cliqué, effacez l'input
      currentInput = "";
      output.value = "";
    } else {
      // Sinon, ajoutez le texte du bouton à l'input en cours
      currentInput += buttonText;
      output.value = currentInput;
    }

    // DEPLACE LE BOUTTON
    button.style.transform = `translateX(${Math.random() * 220 - 100}px)`;

    // REVIENT BOUTON
    if (lastButton && lastButton !== button) {
      lastButton.style.transform = "translateX(0)";
    }

    // Mémorisez le dernier bouton cliqué
    lastButton = button;
  });
});
