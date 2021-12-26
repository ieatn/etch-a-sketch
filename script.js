const DEFAULT = 4
let canvas = document.querySelector('#container')
let numberOfCells = DEFAULT;
let side = 700/numberOfCells
var slider = document.querySelector('#range')
var output = document.querySelector('#range-value')
output.innerHTML = slider.value

slider.oninput = function() {
    output.innerHTML = this.value;
    numberOfCells = this.value;
    side = 700 / numberOfCells;
}

let brush = 1;
const blackBrush = document.querySelector('#black')
blackBrush.addEventListener('click', () => {
    brush = 0
    blackBrush.style.background = "hsl(149, 100%, 51%)";
    rainbowBrush.style.background = "#B5FFD9";
    eraser.style.background ="#B5FFD9";
})
const rainbowBrush = document.querySelector('#color')
rainbowBrush.addEventListener('click', () => {
    brush = 1;
    blackBrush.style.background = "#B5FFD9";
    rainbowBrush.style.background = "hsl(149, 100%, 51%)";
    eraser.style.background ="#B5FFD9";
})
const eraser = document.querySelector('#eraser')
eraser.addEventListener('click', () => {
    brush = 2;
    blackBrush.style.background = "#B5FFD9";
    rainbowBrush.style.background = "#B5FFD9";
    eraser.style.background ="hsl(149, 100%, 51%)";
})
const reset = document.querySelector('#reset')
reset.addEventListener('click', resetCells)


createCells(numberOfCells, side, canvas)

function createCells(numberOfCells, side, canvas) {
    for (let i = 1; i <= numberOfCells; i++) {
        for (let j = 1; j <= numberOfCells; j++) {
            const cell = document.createElement('div')
            cell.classList.add('box')
            canvas.appendChild(cell)
        }
    }
    let cells = document.querySelectorAll('.box')
    cells.forEach((cell) => {
        cell.style.width = side + 'px';
        cell.style.height = side + 'px';
    })
}






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

function resetCells() {
    const elements = document.getElementsByClassName('box')
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0])
    }
    createCells(numberOfCells, side, canvas)
    paintCanvas()
}
