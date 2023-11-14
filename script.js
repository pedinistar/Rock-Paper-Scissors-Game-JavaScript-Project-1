const buttons = $("button h3");
const userImage = $("#user-img");
const compImage = $("#comp-img");
const result = $("#result-area h3");
let userChoiceDisplay;
let compChoiceDisplay;
// USER
const buttonList = [buttons[0], buttons[1], buttons[2]];
buttonList.forEach(function (elem) {
  elem.addEventListener("click", function () {
    userImage.attr("src", "assets/" + elem.textContent + ".png");
    userChoiceDisplay = elem.textContent;
    generateComputerChoice();
    resultDisplay();
  });
});
// COMPUTER
function generateComputerChoice() {
  const randomNum = Math.floor(Math.random() * buttons.length);
  const imageName = buttons[randomNum].textContent;
  compChoiceDisplay = imageName;
  compImage.attr("src", "assets/" + imageName + ".png");
}
// RESULT
function resultDisplay() {
  if (userChoiceDisplay === "Rock") {
    if (compChoiceDisplay === "Scissors") {
      result[0].innerHTML = "Player Won! 👧🏽🎊";
    } else if (compChoiceDisplay === "Paper") {
      result[0].innerHTML = "Computer Won! 🖥️🎊";
    } else {
      result[0].innerHTML = "Draw 🏳️";
    }
  } else if (userChoiceDisplay == "Paper") {
    if (compChoiceDisplay === "Scissors") {
      result[0].innerHTML = "Computer Won! 🖥️🎊";
    } else if (compChoiceDisplay === "Rock") {
      result[0].innerHTML = "Player Won! 👧🏽🎊";
    } else {
      result[0].innerHTML = "Draw 🏳️";
    }
  } else {
    if (compChoiceDisplay === "Rock") {
      result[0].innerHTML = "Computer Won! 🖥️🎊";
    } else if (compChoiceDisplay === "Paper") {
      result[0].innerHTML = "Player Won! 👧🏽🎊";
    } else {
      result[0].innerHTML = "Draw 🏳️";
    }
  }
}
