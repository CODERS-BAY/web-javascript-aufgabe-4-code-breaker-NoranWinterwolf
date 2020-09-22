var code = [0, 0, 0];
var userInput = [0, 0, 0];
var numIndex = 0;
var tries = 0;
var maxTries = 12;
var buttons = document.getElementsByTagName("button");
var output = document.getElementById("output");
var numberField = document.getElementById("numberField");
var alarm = document.getElementById("loose");

startGame();

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", numtest);
}

console.log(buttons[9]);

function numtest(e) {
    let number = parseInt(e.target.innerHTML);
    if (Number.isNaN(number)) {
        gameAction(e);
    }
    else {
        input(e)
    }
}

function input(e) {
    let number = parseInt(e.target.innerHTML);
    userInput[numIndex] = number;
    if (numIndex < 2) {
        numIndex++;
    }
    else {
        numIndex = 0;
    }
    numberField.innerHTML = userInput[0] + " - " + userInput[1] + " - " + userInput[2];
}

function gameAction(e) {
    let action = e.target.innerHTML;
    console.log(e);
    if (action.includes("#")) {
        startGame();
    }
    else {
        checkCode();
    }
}

function checkCode() {
    let outputString = "";
    let rightNumbers = 0;
    numberField.innerHTML = "0 - 0 - 0";
    numIndex = 0;
    outputString += "<span ";
    for (i = 0; i < code.length; i++) {
        if (code[i] == userInput[i]) {
            outputString += "style='color:rgb(96, 192, 0); text-shadow: 0 0 10px greenyellow, 0 0 30px green;'>" + userInput[i];
            rightNumbers++;
        }
        else {
            let contains = false;
            for (j = 0; j < code.length; j++) {
                if (code[j] == userInput[i]) {
                    contains = true;
                }
            }
            if (contains) {
                outputString += "style='color:yellow; text-shadow: 0 0 10px yellow, 0 0 30px yellow;'>" + userInput[i];
            }
            else {
                outputString += "style='color:red; text-shadow: 0 0 10px red, 0 0 30px red;'>" + userInput[i];
            }
        }
        if (i < code.length - 1) {
            outputString += " - <span ";
        }
    }
    outputString += "</span>"
    output.innerHTML += outputString;
    tries++;
    if (tries == maxTries) {
        endGame("loose");
    }
    else if (rightNumbers == 3) {
        endGame("win");
    }
    userInput = [0, 0, 0];
    rightNumbers = 0;
}

function startGame() {
    for (i = 0; i < code.length; i++) {
        code[i] = Math.round(Math.random() * 9);
    }
    tries = 0;
    output.innerHTML = "";
    alarm.style.display = "none";
    numberField.innerHTML = "0 - 0 - 0";
    buttons[9].style.boxShadow = "none";
    buttons[9].style.backgroundColor = "grey";
    activateButtons();
}

function endGame(text) {
    if (text.includes("loose")) {
        alarm.style.display = "block";
        buttons[9].style.boxShadow = "0 0 5px green, 0 0 10px green";
        buttons[9].style.backgroundColor = "green";

    }
    else if (text.includes("win")) {
        numberField.innerHTML = "Welcome!"
    }
    disableButtons();
}

function disableButtons() {
    for (i = 0; i < buttons.length; i++) {
        if (buttons[i].id != "hash") {
            buttons[i].disabled = true;
        }
    }
}
function activateButtons() {
    for (i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
}