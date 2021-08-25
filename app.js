const grid = document.getElementById('.grid')
createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement('div')
    div.classList.add('cell');
    div.addEventListener('mouseover', function(event) {
      event.target.style.backgroundColor = 'black';
    })
    grid.appendChild(div)
  }
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

const slider = document.querySelector('#slider')
const screenVal = document.querySelector('.value')
slider.addEventListener('input', function() {
  let val = document.getElementById('slider').value;
  screenVal.textContent = val
  removeAllChildNodes(grid)
  grid.setAttribute('style', `grid-template-coloumns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
  for (let i = 0; i < val*val; i++) {
    const div = document.createElement('div')
    div.classList.add('cell')
    div.addEventListener('mouseover', function(event) {
      event.target.style.backgroundColor = 'black'
    })
    grid.appendChild(div);
  }
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].style.backgroundColor = 'white';
    }
});

createGrid();
