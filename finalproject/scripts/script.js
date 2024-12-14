document.addEventListener("DOMContentLoaded", () => {
    const stickForm = document.getElementById("stick-form");
    const stickInput = document.getElementById("stick-input");
    const stickList = document.getElementById("stick-list");
  
    const savedSticks = JSON.parse(localStorage.getItem("sticks")) || [];
    savedSticks.forEach(stick => {
      addStickToList(stick);
    });
  
    stickForm.addEventListener("submit", event => {
      event.preventDefault();
      const stick = stickInput.value.trim();
      if (stick) {
        addStickToList(stick);
        saveStick(stick);
        stickInput.value = "";
      }
    });
  
    function addStickToList(stick) {
      const listItem = document.createElement("li");
      listItem.textContent = stick;
      stickList.appendChild(listItem);
    }
  
    function saveStick(stick) {
      savedSticks.push(stick);
      localStorage.setItem("sticks", JSON.stringify(savedSticks));
    }
  });
  