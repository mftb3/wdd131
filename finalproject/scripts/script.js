document.addEventListener("DOMContentLoaded", () => {
    const stickForm = document.getElementById("stick-form");
    const stickInput = document.getElementById("stick-input");
    const stickList = document.getElementById("stick-list");

    // Load saved sticks from localStorage
    const savedSticks = JSON.parse(localStorage.getItem("sticks")) || [];
    savedSticks.forEach(stick => addStickToList(stick));

    // Form submission event listener
    stickForm.addEventListener("submit", event => {
        event.preventDefault();
        const stickName = stickInput.value.trim();
        if (stickName) {
            addStickToList(stickName);
            saveStick(stickName);
            stickInput.value = ""; // Clear the input field
        }
    });

    // Function to add a stick to the DOM
    function addStickToList(stickName) {
        const listItem = document.createElement("li");
        listItem.textContent = stickName;

        // Add a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", () => {
            deleteStick(stickName, listItem);
        });

        listItem.appendChild(deleteButton);
        stickList.appendChild(listItem);
    }

    // Function to save a stick to localStorage
    function saveStick(stickName) {
        savedSticks.push(stickName);
        localStorage.setItem("sticks", JSON.stringify(savedSticks));
    }

    // Function to delete a stick from the list and localStorage
    function deleteStick(stickName, listItem) {
        stickList.removeChild(listItem);
        const updatedSticks = savedSticks.filter(stick => stick !== stickName);
        localStorage.setItem("sticks", JSON.stringify(updatedSticks));
    }
});
