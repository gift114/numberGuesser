const msg = document.getElementById("message");
const minNum = document.getElementById("min");
const maxNum = document.getElementById("max");
const guessInput = document.getElementById("input");
const guessBtn = document.getElementById("btn");
const warnMsg = document.getElementById("warn");

let min = 1;
let max = 5;
let winningNum = randomNum();
let guessesLeft = 3;

minNum.innerText = min;
maxNum.innerText = max;

guessBtn.addEventListener("click", function () {
    let guess = parseInt(guessInput.value);
    console.log(randomNum());
    if (guess > max || guess < min) {
        msg.innerText = `Please, input a mumber between ${min} and ${max}`;
        msg.style.color = "red";
        guessInput.style.borderColor = "red";
        guessInput.value = "";
    }
    if (guess === winningNum) {
        msg.innerText = `${guess} is correct, you won.`;
        warnMsg.innerText = "Congratulations, you won";
        msg.style.color = "green";
        guessInput.style.borderColor = "green";
        guessInput.disabled = true;
        guessBtn.disabled = true;
        guessInput.value = "";
    } else {
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            msg.innerText = "Opps you are out of guesses. You lost";
            warnMsg.innerText = "Game over";
            msg.style.color = "red";
            guessInput.style.border.color = "red";
            guessInput.disabled = true;
            guessBtn.disabled = true;
            guessInput.value = "";
        } else {
            msg.innerText = `${guess} is not correct, try again.`;
            warnMsg.innerText = `Try again, you have ${guessesLeft} chance left`;
            msg.style.color = "red";
            guessInput.style.borderColor = "red";
            guessInput.value = "";
        }
    }
});

function randomNum(){
    let random = Math.floor(Math.random() * 5 + 1);
    return random;
};

