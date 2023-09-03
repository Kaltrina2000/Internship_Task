document.addEventListener("DOMContentLoaded", function () {
  const checkboxForm = document.getElementById("checkboxForm");
  const shuffleButton = document.getElementById("shuffleButton");
  const changeButton = document.getElementById("changeButton");
  const showSelectedButton = document.getElementById("showSelectedButton");
  const result = document.getElementById("result");

  // Function to shuffle the checkboxes and their labels
  function shuffleCheckboxes() {
    const checkboxLabelPairs = Array.from(
      checkboxForm.querySelectorAll("label")
    );
    checkboxLabelPairs.sort(() => Math.random() - 0.5);

    // Reorder the checkbox-label pairs within the form
    checkboxLabelPairs.forEach((pair) => {
      checkboxForm.appendChild(pair);
    });
  }

  // Add a click event listener to the "Shuffle Values" button
  shuffleButton.addEventListener("click", function (e) {
    e.preventDefault();
    shuffleCheckboxes();
  });

  // Function to change the values and labels of the checkboxes
  function changeCheckboxValuesAndLabels() {
    const checkboxes = Array.from(
      checkboxForm.querySelectorAll('input[type="checkbox"]')
    );
    const newValues = [
      "New Value 1",
      "New Value 2",
      "New Value 3",
      "New Value 4",
    ];

    checkboxes.forEach((checkbox, index) => {
      // Create a new label element
      const newLabel = document.createElement("label");
      const newCheckbox = document.createElement("input");
      newCheckbox.type = "checkbox";
      newCheckbox.value = newValues[index];
      newLabel.appendChild(newCheckbox);
      newLabel.appendChild(document.createTextNode(newValues[index]));

      // Replace the existing checkbox with the new one
      checkbox.parentElement.replaceWith(newLabel);
    });
  }

  // Add a click event listener to the "Change Values" button
  changeButton.addEventListener("click", function (e) {
    e.preventDefault();
    changeCheckboxValuesAndLabels();
  });

  // Function to show selected values
  function showSelectedValues() {
    const checkboxes = Array.from(
      checkboxForm.querySelectorAll('input[type="checkbox"]')
    );
    const selectedValues = checkboxes
      .filter((checkbox) => checkbox.checked) // Filter for checked checkboxes
      .map((checkbox) => checkbox.value);

    result.textContent = "Selected Values: " + selectedValues.join(", ");
  }

  // Add a click event listener to the "Show selected values" button
  showSelectedButton.addEventListener("click", function (e) {
    e.preventDefault();
    showSelectedValues();
  });
});
