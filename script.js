/*******************************
* BUILD 16x16 GRID *
*******************************/

const container = document.querySelector('#container');
buildEtch(16);

/*********************************
 * RESET BUTTON - NEW GRID
 ********************************/

const button = document.querySelector('.button');
button.addEventListener('click', etchSize);


function buildEtch(newDimension) {
    
    if (newDimension > 0 && newDimension <= 100) {
        container.textContent = ''; //Clear original grid
        container.style.gridTemplateColumns = 'repeat('+ newDimension +', 1fr)';
        container.style.gridTemplateRows = 'repeat('+ newDimension +', 1fr)';
    
    for (let i = 0; i < (newDimension * newDimension); i++) {
        const square = document.createElement('div');
        square.classList.add('start');
        square.addEventListener('mouseover', draw)
        container.appendChild(square);
    }
    } else {
        buildEtch();
    }
}

function draw() {
    this.classList.add('draw');
}

function etchSize() {
    let dimension = prompt('Number between 1 and 100');
    buildEtch(dimension);
} 