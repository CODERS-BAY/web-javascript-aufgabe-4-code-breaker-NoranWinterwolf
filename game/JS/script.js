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
    let rightNumbers = 0;
    numberField.innerHTML = "<span style='text-decoration:underline;'>" + userInput[0] + "</span> - <span style='text-decoration:none;'>" + userInput[1] + "</span> - <span style='text-decoration:none;'>" + userInput[2] + "</span>"
    numIndex = 0;
    output.innerHTML += "<span><span>" + userInput[0] + "</span> - <span>" + userInput[1] + "</span> - <span>" + userInput[2] + "</span></span>";
    var numberChilds = output.lastChild.childNodes;
    for (i = 0; i < code.length; i++) {
        if (code[i] == userInput[i]) {
            numberChilds[i * 2].className = '';
            numberChilds[i * 2].classList.add("green");
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
                numberChilds[i * 2].className = '';
                numberChilds[i * 2].classList.add("yellow");
            }
            else {
                numberChilds[i * 2].className = '';
                numberChilds[i * 2].classList.add("red");
            }
        }
        if (i < code.length - 1) {
        }
    }
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
    buttons[9].classList.remove("glow");
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
    buttons[9].classList.add("glow");
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
    buttons[0].focus();
    buttons[0].blur();

    switch (event.key) {
        case '1':
            buttons[0].classList.add("js-hover");
            break;
        case '2':
            buttons[1].classList.add("js-hover");
            break;
        case '3':
            buttons[2].classList.add("js-hover");
            break;
        case '4':
            buttons[3].classList.add("js-hover");
            break;
        case '5':
            buttons[4].classList.add("js-hover");
            break;
        case '6':
            buttons[5].classList.add("js-hover");
            break;
        case '7':
            buttons[6].classList.add("js-hover");
            break;
        case '8':
            buttons[7].classList.add("js-hover");
            break;
        case '9':
            buttons[8].classList.add("js-hover");
            break;
        case ' ':
        case '#':
            buttons[9].classList.add("js-hover");
            break;
        case '0':
            buttons[10].classList.add("js-hover");
            break;
        case 'Enter':
            buttons[11].classList.add("js-hover");
            break;
    }
})
document.addEventListener("keyup", function (event) {
    switch (event.key) {
        case '1': buttons[0].click();
            buttons[0].classList.remove("js-hover");
            break;
        case '2': buttons[1].click();
            buttons[1].classList.remove("js-hover");
            break;
        case '3': buttons[2].click();
            buttons[2].classList.remove("js-hover");
            break;
        case '4': buttons[3].click();
            buttons[3].classList.remove("js-hover");
            break;
        case '5': buttons[4].click();
            buttons[4].classList.remove("js-hover");
            break;
        case '6': buttons[5].click();
            buttons[5].classList.remove("js-hover");
            break;
        case '7': buttons[6].click();
            buttons[6].classList.remove("js-hover");
            break;
        case '8': buttons[7].click();
            buttons[7].classList.remove("js-hover");
            break;
        case '9': buttons[8].click();
            buttons[8].classList.remove("js-hover");
            break;
        case ' ':
        case '#': buttons[9].click();
            buttons[9].classList.remove("js-hover");
            break;
        case '0': buttons[10].click();
            buttons[10].classList.remove("js-hover");
            break;
        case 'Enter': buttons[11].click();
            buttons[11].classList.remove("js-hover");
            break;
    }
});