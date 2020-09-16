const container = document.querySelector('#container');
let dimension = 16;

for (let i = 0; i < (dimension * dimension); i++) {
    const square = document.createElement('div');
    square.classList.add('start');
    square.addEventListener('mouseover', () => {
        square.classList.add('draw');
    })

    container.appendChild(square);
}








