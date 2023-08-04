// Select the grid container
const gridContainer = document.querySelector('.grid-container');

// Set the initial grid size
let table = 16;

// Function to create the grid
function createGrid(table) {
    // Clear the grid container
    gridContainer.innerHTML = "";
    const boxNo = (table * table);
    // Create grid boxes and append them to the grid container
    for (let i = 0; i < boxNo; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-boxes");
        gridContainer.appendChild(gridBox);
    }

    // Apply grid color on mouse hover
    applyGridColor();
}

// Function to apply grid color on mouse hover
function applyGridColor() {
    const gridboxes = document.querySelectorAll('.grid-boxes');
    gridboxes.forEach(box => {
        box.addEventListener("mouseenter", function onMouseHover() {
            box.style.backgroundColor = "skyblue"; // Use a valid color value here, like "red"
        });
    });
}

// Initialize the grid with the default size
createGrid(table);

// Select all buttons with class "buttonFunction"
const buttons = document.querySelectorAll('.buttonFunction');

// Add event listeners for mouseenter and mouseleave on buttons
buttons.forEach(button => {
    button.addEventListener("mouseenter", function onMouseHover() {
        button.style.backgroundColor = "#1B1212";
        button.style.padding = "12px";
        button.style.color = "white"; // Use a valid color value here, like "red"
    });

    button.addEventListener("mouseleave", function onMouseLeave() {
        // Reset the background color, padding, and text color of the buttons
        button.style.backgroundColor = "";
        button.style.padding = "";
        button.style.color = "";
    });
});

// Apply grid color on mouse hover for all grid boxes
const gridboxes = document.querySelectorAll('.grid-boxes');
gridboxes.forEach(box => {
    box.addEventListener("mouseenter", function onMouseHover() {
        box.style.backgroundColor = "skyblue"; // Use a valid color value here, like "red"
    });
});

// Select the "Clear" button
const clearButton = document.querySelector('#clear');

// Add a click event listener to the "Clear" button
clearButton.addEventListener("click", function onClick() {
    // Reset the background color of all grid boxes to white
    const gridboxes = document.querySelectorAll('.grid-boxes');
    gridboxes.forEach(box => {
        box.style.backgroundColor = "white";
    });
});

// Select the grid container and grid buttons for different sizes
const gridBox = document.querySelector('.grid-container');
const gridButton20 = document.querySelector('#changeGrid20');
const gridButton30 = document.querySelector('#changeGrid30');
const gridButton16 = document.querySelector('#changeGrid16');

// Add click event listeners to the grid buttons to change the grid size
gridButton20.addEventListener("click", function changeGrid() {
    // Set the table size to 20 and create a new grid
    table = 20;
    createGrid(table);
    // Adjust the grid template columns and rows for the new grid size
    gridContainer.style.gridTemplateColumns = `repeat(20, 24px)`;
    gridContainer.style.gridTemplateRows = `repeat(20, 24px)`;
    // Resize the grid boxes to match the new grid size
    const newBoxSize = 24;
    const gridSmallParts = document.querySelectorAll('.grid-boxes');
    gridSmallParts.forEach(smallBox => {
        smallBox.style.height = newBoxSize + "px";
        smallBox.style.width = newBoxSize + "px";
    });
});

gridButton30.addEventListener("click", function changeGrid() {
    // Set the table size to 30 and create a new grid
    table = 30;
    createGrid(table);
    // Adjust the grid template columns and rows for the new grid size
    gridContainer.style.gridTemplateColumns = `repeat(30, 16px)`;
    gridContainer.style.gridTemplateRows = `repeat(30, 16px)`;
});

gridButton16.addEventListener("click", function changeGrid() {
    // Set the table size to 16 and create a new grid
    table = 16;
    createGrid(table);
    // Adjust the grid template columns and rows for the new grid size
    gridContainer.style.gridTemplateColumns = `repeat(16, 30px)`;
    gridContainer.style.gridTemplateRows = `repeat(16, 30px)`;
});
