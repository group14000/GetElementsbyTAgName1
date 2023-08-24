// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the filter input and list items
    const filterInput = document.getElementById("filter");
    const items = document.querySelectorAll(".list-group-item");
  
    // Add event listener to filter input for live search
    filterInput.addEventListener("input", function () {
      const searchTerm = filterInput.value.trim().toLowerCase();
  
      // Iterate through each list item
      items.forEach(function (item) {
        const itemText = item.textContent.trim().toLowerCase();
        if (itemText.includes(searchTerm)) {
          item.style.display = "block"; // Show matching items
        } else {
          item.style.display = "none"; // Hide non-matching items
        }
      });
    });
  
    // Get the add form and list container
    const addForm = document.getElementById("addForm");
    const itemsList = document.getElementById("items");
  
    // Add event listener to add form for submitting items
    addForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Get input values for new items
      const input1 = document.getElementById("item1");
      const input2 = document.getElementById("item2");
  
      const newItemText1 = input1.value;
      const newItemText2 = input2.value;
  
      // Check if both input fields are filled
      if (newItemText1.trim() === "" || newItemText2.trim() === "") {
        alert("Please enter both items.");
        return;
      }
  
      // Create a new list item element
      const newItem = document.createElement("li");
      newItem.className = "list-group-item";
  
      // Set the HTML content of the new list item
      newItem.innerHTML = `
        ${newItemText1}
        <button class="btn btn-danger btn-sm float-right delete">X</button>
        <button class="btn btn-secondary btn-sm float-right edit">Edit</button>
      `;
  
      // Add event listener to delete button
      const deleteButton = newItem.querySelector(".delete");
      deleteButton.addEventListener("click", function () {
        itemsList.removeChild(newItem); // Remove the clicked item
      });
  
      // Add event listener to edit button
      const editButton = newItem.querySelector(".edit");
      editButton.addEventListener("click", function () {
        const editText = prompt("Edit the item:", newItemText1);
        if (editText !== null) {
          newItemText1 = editText;
          newItem.innerHTML = `
            ${newItemText1}
            <button class="btn btn-danger btn-sm float-right delete">X</button>
            <button class="btn btn-secondary btn-sm float-right edit">Edit</button>
          `;
        }
      });
  
      // Append the new item to the list
      itemsList.appendChild(newItem);
  
      // Clear input fields after adding an item
      input1.value = "";
      input2.value = "";
    });
  });
  