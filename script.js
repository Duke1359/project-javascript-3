// Array to store to-do list items
let todoItems = [];

// Function to display the list
function displayList() {
    const listContainer = document.getElementById('todo-list');
    listContainer.innerHTML = ''; // Clear previous list

    // Loop through items and add each as a paragraph
    todoItems.forEach((item, index) => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${index + 1}. ${item}`;
        listContainer.appendChild(itemElement);
    });
}

// Function to add a new item to the list
function addItem() {
    const newItemInput = document.getElementById('new-item');
    const newItem = newItemInput.value.trim();

    if (newItem) {
        todoItems.push(newItem); // Add to array
        newItemInput.value = ''; // Clear input field
        displayList(); // Update display
    } else {
        alert("Please enter an item.");
    }
}

// Event listener for button click
document.getElementById('add-item').addEventListener('click', addItem);

// Initialize display
displayList();
