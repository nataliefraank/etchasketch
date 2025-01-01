function createGrid() {
    const container = document.querySelector(".container");
    container.innerHTML = "";

    const gridSize = 10;

    for (let i = 0; i < gridSize**2; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "lightblue";
        });

        container.appendChild(cell);
    }
}
    
createGrid();