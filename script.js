const container = document.querySelector('#container');

function gridMaker(size = 16){
    for(let i = 0; i < size; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for(let i = 0; i< size; i++){
            const columnDiv = document.createElement('div');
            columnDiv.classList.add('column');
            rowDiv.appendChild(columnDiv);
        }

        container.appendChild(rowDiv);
    }
    const columns = document.querySelectorAll('div.column');

    columns.forEach((column) => {
    column.addEventListener('mouseover', () => {
        column.style.backgroundColor = "red";
    });
    });
}
gridMaker();

const btn = document.querySelector('.btn');
btn.addEventListener('click', () =>{
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    let size = prompt("Enter the number of boxes you want on each side of the grid (LIMIT: 100):", 16);
    if (size > 100){
        size = 16;
    }
    gridMaker(size);
})

