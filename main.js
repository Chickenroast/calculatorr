const buttons = document.querySelectorAll(".custom-btn");
const output = document.getElementById("output2");
let currentInput = "";
let lastButton = null;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonText = this.textContent;
    //REINITIALISE LE SON DE 0
    clicSound.currentTime = 0;
    clicSound.play();

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

    // DEPLACE LE BOUTON
    button.style.transform = `translateX(${Math.random() * 220 - 100}px)`;

    // REVIENT BOUTON
    if (lastButton && lastButton !== button) {
      lastButton.style.transform = "translateX(0)";
    }

    // Mémorisez le dernier bouton cliqué
    lastButton = button;
  });
});

const elementsToShake = document.querySelectorAll(".custom-btn");

function shakeElement(element) {
  let x = 0;
  let y = 0;
  let rotation = 0;

  const interval = setInterval(() => {
    element.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

    x = Math.floor(Math.random() * 61) - 30;
    y = Math.floor(Math.random() * 61) - 30;
    rotation = Math.floor(Math.random() * 61) - 30;

    setTimeout(() => {
      clearInterval(interval);
      element.style.transform = "translate(0, 0) rotate(0deg)";
    }, 500); // Arrêtez la secousse après 500 millisecondes (ajustable)
  }, 100); // Change la position toutes les 100 millisecondes (ajustable)
}

const divToClick = document.getElementById("calculator-container");

divToClick.addEventListener("click", function () {
  elementsToShake.forEach((element) => {
    shakeElement(element);
  });
});
