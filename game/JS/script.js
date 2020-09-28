var code = [0, 0, 0];
var userInput = [0, 0, 0];
var numIndex = 0;
var tries = 0;
var maxTries = 12;
var buttons = document.getElementsByTagName("button");
var output = document.getElementById("output");
var numberField = document.getElementById("numberField");
var alarm = document.getElementById("loose");
var body = document;

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
    switch (numIndex) {
        case 0:
            numberField.innerHTML = "<span style='text-decoration:underline;'>" + userInput[0] + "</span> - <span style='text-decoration:none;'>" + userInput[1] + "</span> - <span style='text-decoration:none;'>" + userInput[2] + "</span>"
            break;
        case 1:
            numberField.innerHTML = "<span style='text-decoration:none;'>" + userInput[0] + "</span> - <span style='text-decoration:underline;'>" + userInput[1] + "</span> - <span style='text-decoration:none;'>" + userInput[2] + "</span>"
            break;
        case 2:
            numberField.innerHTML = "<span style='text-decoration:none;'>" + userInput[0] + "</span> - <span style='text-decoration:none;'>" + userInput[1] + "</span> - <span style='text-decoration:underline;'>" + userInput[2] + "</span>"
            break;
    }
    //numberField.innerHTML = userInput[0] + " - " + userInput[1] + " - " + userInput[2];
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
    numberField.innerHTML = "<span style='text-decoration:underline;'>" + userInput[0] + "</span> - <span style='text-decoration:none;'>" + userInput[1] + "</span> - <span style='text-decoration:none;'>" + userInput[2] + "</span>"
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
            outputString += "<span style='color:rgb(96, 192, 0); text-shadow: 0 0 10px greenyellow, 0 0 30px green;'> - </span> <span ";
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
    userInput = [0, 0, 0];
    numIndex = 0;
    tries = 0;
    output.innerHTML = "";
    alarm.style.display = "none";
    numberField.innerHTML = "<span style='text-decoration:underline;'>" + userInput[0] + "</span> - <span style='text-decoration:none;'>" + userInput[1] + "</span> - <span style='text-decoration:none;'>" + userInput[2] + "</span>";
    buttons[9].style.boxShadow = "none";
    buttons[9].style.backgroundColor = "grey";
    activateButtons();
}

function endGame(text) {
    if (text.includes("loose")) {
        alarm.style.display = "block";
    }
    else if (text.includes("win")) {
        numberField.innerHTML = "Welcome!"
    }
    disableButtons();
    buttons[9].style.boxShadow = "0 0 5px green, 0 0 10px green";
    buttons[9].style.background = "none";
    buttons[9].style.backgroundColor = "green";
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
document.addEventListener("keydown", function (event) {
    buttons[0].focus(); buttons[0].blur();

    switch (event.key) {
        case '1': buttons[0].style.color = "aqua";
            buttons[0].style.textShadow = "0 0 5px aqua, 0 0 10px aqua";
            break;
        case '2': buttons[1].style.color = "aqua";
            buttons[1].style.textShadow = "0 0 5px aqua, 0 0 10px aqua";
            break;
        case '3': buttons[2].style.color = "aqua";
            buttons[2].style.textShadow = "0 0 5px aqua, 0 0 10px aqua";
            break;
        case '4': buttons[3].style.color = "aqua";
            buttons[3].style.textShadow = "0 0 5px aqua, 0 0 10px aqua";
            break;
        case '5': buttons[4].style.color = "aqua";
            buttons[4].style.textShadow = "0 0 5px aqua, 0 0 10px aqua";
            break;
        case '6': buttons[5].style.color = "aqua";
            buttons[5].style.textShadow = "0 0 5px aqua, 0 0 10px aqua";
            break;
        case '7': buttons[6].style.color = "aqua";
            buttons[6].style.textShadow = "0 0 5px aqua, 0 0 10px aqua";
            break;
        case '8': buttons[7].style.color = "aqua";
            buttons[7].style.textShadow = "0 0 5px aqua, 0 0 10px aqua";
            break;
        case '9': buttons[8].style.color = "aqua";
            buttons[8].style.textShadow = "0 0 5px aqua, 0 0 10px aqua";
            break;
        case ' ':
        case '#': buttons[9].style.color = "aqua";
            buttons[9].style.textShadow = "0 0 5px aqua, 0 0 10px aqua";
            break;
        case '0': buttons[10].style.color = "aqua";
            buttons[10].style.textShadow = "0 0 5px aqua, 0 0 10px aqua";
            break;
        case 'Enter': buttons[11].style.color = "aqua";
            buttons[11].style.textShadow = "0 0 5px aqua, 0 0 10px aqua";
            break;
    }
})
document.addEventListener("keyup", function (event) {
    switch (event.key) {
        case '1': buttons[0].click();
            buttons[0].style.color = "rgb(61, 69, 78)";
            buttons[0].style.textShadow = "0 -1px 1px #66666671, 0 1px 1px #ffffff86";
            break;
        case '2': buttons[1].click();
            buttons[1].style.color = "rgb(61, 69, 78)";
            buttons[1].style.textShadow = "0 -1px 1px #66666671, 0 1px 1px #ffffff86";
            break;
        case '3': buttons[2].click();
            buttons[2].style.color = "rgb(61, 69, 78)";
            buttons[2].style.textShadow = "0 -1px 1px #66666671, 0 1px 1px #ffffff86";
            break;
        case '4': buttons[3].click();
            buttons[3].style.color = "rgb(61, 69, 78)";
            buttons[3].style.textShadow = "0 -1px 1px #66666671, 0 1px 1px #ffffff86";
            break;
        case '5': buttons[4].click();
            buttons[4].style.color = "rgb(61, 69, 78)";
            buttons[4].style.textShadow = "0 -1px 1px #66666671, 0 1px 1px #ffffff86";
            break;
        case '6': buttons[5].click();
            buttons[5].style.color = "rgb(61, 69, 78)";
            buttons[5].style.textShadow = "0 -1px 1px #66666671, 0 1px 1px #ffffff86";
            break;
        case '7': buttons[6].click();
            buttons[6].style.color = "rgb(61, 69, 78)";
            buttons[6].style.textShadow = "0 -1px 1px #66666671, 0 1px 1px #ffffff86";
            break;
        case '8': buttons[7].click();
            buttons[7].style.color = "rgb(61, 69, 78)";
            buttons[7].style.textShadow = "0 -1px 1px #66666671, 0 1px 1px #ffffff86";
            break;
        case '9': buttons[8].click();
            buttons[8].style.color = "rgb(61, 69, 78)";
            buttons[8].style.textShadow = "0 -1px 1px #66666671, 0 1px 1px #ffffff86";
            break;
        case ' ':
        case '#': buttons[9].click();
            buttons[9].style.color = "rgb(61, 69, 78)";
            buttons[9].style.textShadow = "0 -1px 1px #66666671, 0 1px 1px #ffffff86";
            break;
        case '0': buttons[10].click();
            buttons[10].style.color = "rgb(61, 69, 78)";
            buttons[10].style.textShadow = "0 -1px 1px #66666671, 0 1px 1px #ffffff86";
            break;
        case 'Enter': buttons[11].click();
            buttons[11].style.color = "rgb(61, 69, 78)";
            buttons[11].style.textShadow = "0 -1px 1px #66666671, 0 1px 1px #ffffff86";
            break;
    }
});