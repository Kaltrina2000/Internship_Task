document.addEventListener("DOMContentLoaded", function () {
  const checkboxForm = document.getElementById("checkboxForm");
  const shuffleButton = document.getElementById("shuffleButton");
  const changeButton = document.getElementById("changeButton");
  const showSelectedButton = document.getElementById("showSelectedButton");
  const result = document.getElementById("result");

  function shuffleCheckboxes() {
    const checkboxContainer = document.querySelector(".checkbox-container");
    const checkboxLabelPairs = Array.from(
      checkboxContainer.querySelectorAll("label")
    );

    for (let i = checkboxLabelPairs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [checkboxLabelPairs[i], checkboxLabelPairs[j]] = [
        checkboxLabelPairs[j],
        checkboxLabelPairs[i],
      ];
    }

    checkboxContainer.innerHTML = "";
    checkboxLabelPairs.forEach((pair) => {
      checkboxContainer.appendChild(pair);
    });
  }

  shuffleButton.addEventListener("click", function (e) {
    e.preventDefault();
    shuffleCheckboxes();
  });

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
      const newLabel = document.createElement("label");
      const newCheckbox = document.createElement("input");
      newCheckbox.type = "checkbox";
      newCheckbox.value = newValues[index];
      newLabel.appendChild(newCheckbox);
      newLabel.appendChild(document.createTextNode(newValues[index]));

      checkbox.parentElement.replaceWith(newLabel);
    });
  }

  changeButton.addEventListener("click", function (e) {
    e.preventDefault();
    changeCheckboxValuesAndLabels();
  });

  function showSelectedValues() {
    const checkboxes = Array.from(
      checkboxForm.querySelectorAll('input[type="checkbox"]')
    );
    const selectedValues = checkboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    result.textContent = "Selected Values: " + selectedValues.join(", ");
  }

  showSelectedButton.addEventListener("click", function (e) {
    e.preventDefault();
    showSelectedValues();
  });
});
