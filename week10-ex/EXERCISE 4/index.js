// SECRET CODE  ---------------------------------------------------------
const SECRET_CODE = 2359;

// DOMS ELEMENTS  ---------------------------------------------------------
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", showGame);

const passwordInput = document.getElementById("passwordInput");
passwordInput.addEventListener("keypress", handleEnterPasserord);

const instructionLabel = document.getElementById("instructionLabel");

// Track tries
let tries = 3;

// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

function showGame() {
  tries = 3;
  passwordInput.value = "";
  instructionLabel.textContent = "Enter your code (You can try 3 times only !)";
  show(passwordView);
  hide(lostView);
  hide(wonView);
}

function showWin() {
  hide(passwordView);
  hide(lostView);
  show(wonView);
}

function showLost() {
  hide(passwordView);
  show(lostView);
  hide(wonView);
}

function handleCheck() {
  let code = Number(passwordInput.value);
  
  if (code === SECRET_CODE) {
    showWin();
  } else {
    tries--;
    if (tries === 0) {
      showLost();
    } else {
      instructionLabel.textContent = "Wrong! You have " + tries + " tries left!";
      passwordInput.value = "";
    }
  }
}

function handleEnterPasserord(event) {
  if (event.key === "Enter") {
    handleCheck();
  }
}