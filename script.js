function createGrid(gridSize = 10) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    
    for (let i = 0; i < gridSize ** 2; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        
        cell.addEventListener("mouseover", () => {// Ensure opacity is numeric and within the valid range
            let currentOpacity = parseFloat(cell.style.opacity) || 0; // Default to 0 if not set
            currentOpacity += 0.1; // Increment by 0.1
            if (currentOpacity > 1) currentOpacity = 1; // Clamp to max 1
            cell.style.opacity = currentOpacity.toString();  
            let color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
            cell.style.backgroundColor = color;
        });
        container.appendChild(cell);
    }

    const cellSize = container.offsetWidth / gridSize;
    document.querySelectorAll(".cell").forEach(cell => {
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
    });
}

function getSize() {
    return parseInt(prompt("What size would you like? "));
}

createGrid(10);