/* Déclarations */

const buttons = document.querySelectorAll(".custom-btn");
const output = document.getElementById("output2");
const clicSound = document.getElementById("clicSound");
let currentInput = "";
let lastButton = null;
let lastResult = null; // Variable to store the last input

/* Function pair result */
function disappearButtons() {
  buttons.forEach((button) => {
    let startTime = Date.now();
    let bounceCount = 0; // Initialize bounce count

    function animate() {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const duration = 1000; // Animation duration in milliseconds
      const distance = 200; // Bounce distance in pixels
      const fraction = (elapsedTime % duration) / duration;
      const yOffset = Math.sin(fraction * Math.PI) * distance;

      button.style.transform = `translate(0, ${yOffset}px)`;

      if (elapsedTime < duration) {
        requestAnimationFrame(animate);
      } else {
        // Check if we've bounced three times
        if (bounceCount < 2) {
          // Reset start time and increment bounce count
          startTime = Date.now();
          bounceCount++;
        } else {
          // After the third bounce, stop the animation
          clearInterval(button.bouncingInterval);
          button.style.transform = "translate(0, 0)";
        }
        if (bounceCount >= 2) {
          clearInterval(button.bouncingInterval);
          button.style.transform = "translate(0, 0)";
          rearrangeButtons(); // Rearrange the buttons start function
        }
      }
    }

    animate();

    // Start the bouncing animation
    button.bouncingInterval = setInterval(animate, 16);
  });
}

/* Function pair result */

function rearrangeButtons() {
  const container = document.getElementById("calculator-container");
  const buttonArray = Array.from(buttons);

  // Shuffle the buttonArray to randomize button order
  for (let i = buttonArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [buttonArray[i], buttonArray[j]] = [buttonArray[j], buttonArray[i]];
  }

  // Hide the buttons by setting their display property to 'none'
  buttonArray.forEach((button) => {
    button.style.display = "none";
  });

  // Clear the container
  container.innerHTML = "";

  // Add the rearranged buttons back to the container
  buttonArray.forEach((button) => {
    container.appendChild(button);
    button.style.display = "inline-block"; // Revert the display property
  });
}

//CALCULETTE
/* parcours chaque element du tableau*/
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonText = this.textContent;
    clicSound.currentTime = 0;
    clicSound.play();

    if (buttonText === "=") {
      if (currentInput.includes("+")) {
        const [a, b] = currentInput.split("+").map(Number);
        currentInput = a + b;
        disappearButtons();
      } else if (currentInput.includes("-")) {
        const [a, b] = currentInput.split("-").map(Number);
        currentInput = a - b;
        disappearButtons();
      } else if (currentInput.includes("*")) {
        const [a, b] = currentInput.split("*").map(Number);
        currentInput = a * b;
        disappearButtons();
      } else if (currentInput.includes("/")) {
        const [a, b] = currentInput.split("/").map(Number);
        currentInput = a / b;
        disappearButtons();
      }
      lastResult = currentInput;
      output.value = currentInput;
    } else if (buttonText === "C") {
      currentInput = ""; // Réinitialise l'entrée
      output.value = "";
      disappearButtons();
    } else {
      currentInput += buttonText;
      output.value = currentInput;
    }

    // if (buttonText === "=") {
    //   /* EVAL VA EVALUER LE CALCUL A OBTENIR ET DONNER LE RESULTAT
    //   MAIS ATTENTION ELLE PEUT EXECUTER N IMPORTE QUEL CODE JAVASCRIPT ET L EXECUTER*/
    //   currentInput = eval(currentInput); // Calculate the current input
    //   lastResult = currentInput; // Store the last result
    //   output.value = currentInput;
    // } else if (buttonText === "C") {
    //   currentInput = lastResult; // Restore the last result
    //   output.value = lastResult;
    // } else {
    //   currentInput += buttonText;
    //   output.value = currentInput;
    // }

    button.style.transform = `translateX(${Math.random() * 220 - 100}px`;

    if (lastButton && lastButton !== button) {
      lastButton.style.transform = "translateX(0)";
    }

    lastButton = button;
    output.value = currentInput;
  });
});

// FONCTION SHAKE

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
