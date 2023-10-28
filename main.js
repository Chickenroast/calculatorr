const buttons = document.querySelectorAll(".custom-btn");
const output = document.getElementById("output2");
const clicSound = document.getElementById("clicSound");
let currentInput = "";
let lastButton = null;

function disappearButtons() {
  const result = eval(document.getElementById("output2").value);

  if (result % 2 === 0) {
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
        }
      }

      animate();

      // Start the bouncing animation
      button.bouncingInterval = setInterval(animate, 16);
    });
  }
}

//CALCULETTE

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonText = this.textContent;
    clicSound.currentTime = 0;
    clicSound.play();

    if (buttonText === "=") {
      output.value = eval(currentInput);
      currentInput = "";

      // Appelez la fonction pour faire rebondir les boutons
      disappearButtons();
    } else if (buttonText === "C") {
      currentInput = "";
      output.value = "";
    } else {
      currentInput += buttonText;
      output.value = currentInput;
    }

    button.style.transform = `translateX(${Math.random() * 220 - 100}px`;

    if (lastButton && lastButton !== button) {
      lastButton.style.transform = "translateX(0)";
    }

    lastButton = button;
  });
});

// FONCTION QUI RIGOLE

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
