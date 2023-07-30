const container = document.querySelector('#container');

for(let i = 0; i < 16; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    for(let i = 0; i< 16; i++){
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('column');
        rowDiv.appendChild(columnDiv);
    }

    container.appendChild(rowDiv);
}