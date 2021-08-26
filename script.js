const DEFAULT_SQUARES = 4
let canvas = document.querySelector("#grid");

let numberOfCells = DEFAULT_SQUARES;
let side = 700 / numberOfCells;
var slider = document.getElementById("cellNumber");
var output = document.getElementById("sliderValue");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
    numberOfCells = this.value;
    side = 700 / numberOfCells;
}

createCells(numberOfCells, side, canvas);

const reset = document.querySelector("#reset");
reset.addEventListener("click", resetCells);

let brush = 1;
const blackBrush = document.querySelector("#blackBrush");
blackBrush.addEventListener("click", () => {
    brush = 0;
    blackBrush.style.background = "hsl(149, 100%, 51%)";
    rainbowBrush.style.background = "#B5FFD9";
    eraser.style.background ="#B5FFD9";
});
const rainbowBrush = document.querySelector("#rainbowBrush");
rainbowBrush.addEventListener("click", () => {
    brush = 1;
    blackBrush.style.background = "#B5FFD9";
    rainbowBrush.style.background = "hsl(149, 100%, 51%)";
    eraser.style.background ="#B5FFD9";
});
const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
    brush = 2;
    blackBrush.style.background = "#B5FFD9";
    rainbowBrush.style.background = "#B5FFD9";
    eraser.style.background ="hsl(149, 100%, 51%)";
});

paintCanvas();

function paintCanvas() {
    let cells = document.querySelectorAll(".box");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", paint)
    });
}
function paint(e) {
    if (brush == 0) {
        this.style.background = "black";
    }
    if (brush == 1) {
        this.style.background = getRandomColor();
    }
    if (brush == 2){
        this.style.background = "white";
    }
}
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function createCells(numberOfCells, side, canvas) {
    for (let i = 1; i <= numberOfCells; i++) {
        for (let k = 1; k <= numberOfCells; k++) {
            const cell = document.createElement("div");
            cell.classList.add("box");
            canvas.appendChild(cell);
        }
    }

    let cells = document.querySelectorAll(".box");

    cells.forEach((cell) => {
        cell.style.width = side + "px";
        cell.style.height = side + "px";
    });
}
function resetCells() {
    const elements = document.getElementsByClassName("box");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    createCells(numberOfCells, side, canvas);
    paintCanvas();
}