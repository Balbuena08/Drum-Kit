function initDrumKit() {
  // 1. Detecting Mouse Clicks
  var drumButtons = document.querySelectorAll(".drum");

  drumButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });
  });

  // 2. Detecting Keyboard Press
  document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });

  // 3. Function to Play Sound
  function makeSound(key) {
    switch (key.toLowerCase()) {
      case "w":
        new Audio("sounds/crash.mp3").play();
        break;
      case "a":
        new Audio("sounds/kick-bass.mp3").play();
        break;
      case "s":
        new Audio("sounds/snare.mp3").play();
        break;
      case "d":
        new Audio("sounds/tom-1.mp3").play();
        break;
      case "j":
        new Audio("sounds/tom-2.mp3").play();
        break;
      case "k":
        new Audio("sounds/tom-3.mp3").play();
        break;
      case "l":
        new Audio("sounds/tom-4.mp3").play();
        break;
      default:
        console.log("Unhandled key press: " + key);
    }
  }

  // 4. Adding Animation Effect
  function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey.toLowerCase());

    if (activeButton) {
      activeButton.classList.add("pressed");

      setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 100);
    }
  }
}

// Initialize when DOM is fully loaded
document.addEventListener("DOMContentLoaded", initDrumKit);