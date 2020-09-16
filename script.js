const container = document.querySelector('#container');
let dimension = 16;

for (let i = 0; i < (dimension * dimension); i++) {
    const square = document.createElement('div');
    square.classList.add('start');
    container.appendChild(square);
}








