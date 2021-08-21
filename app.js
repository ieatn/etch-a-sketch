const DEFAULT_SIZE = 16

const grid = document.getElementById('grid')
let size = DEFAULT_SIZE

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
}