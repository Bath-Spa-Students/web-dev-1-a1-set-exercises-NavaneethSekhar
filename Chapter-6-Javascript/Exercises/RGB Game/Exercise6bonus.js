const numColors = 6;
let colors = [];
let pickedColor;
let score = 0;

const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const options = document.getElementById("options");
const resetButton = document.getElementById("resetButton");
const scoreValue = document.getElementById("scoreValue");

function init() {
    resetButton.addEventListener("click", resetGame);
    resetGame();
}

function resetGame() {
    colors = generateRandomColors(numColors);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    options.innerHTML = "";
    scoreValue.textContent = score;

    for (let i = 0; i < colors.length; i++) {
        const option = document.createElement("div");
        option.classList.add("option");
        option.style.backgroundColor = colors[i];
        option.addEventListener("click", function () {
            const clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                score++;
                scoreValue.textContent = score;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
        options.appendChild(option);
    }
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

init();