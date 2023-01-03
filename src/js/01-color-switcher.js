const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
let timerId = null;

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => { setBackgroundColor() }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function setBackgroundColor() {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
};

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});