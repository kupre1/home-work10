let taskBtn = document.getElementById("add-task-button");

taskBtn.addEventListener("click", function (event) {
  let taskInput = document.getElementById("task-input");
  let list = document.getElementById("task-list");

  let inputValue = taskInput.value.trim();
  if (inputValue !== "") {
    let listItem = document.createElement("li");
    listItem.classList.add("li");

    let text = document.createElement("p");
    text.classList.add("text");
    text.textContent = inputValue;
    listItem.appendChild(text);
    list.appendChild(listItem);

    let addbtn = document.createElement("button");
    let addbtnImage = document.createElement("img");
    addbtnImage.src = "vector (5).png";
    addbtn.appendChild(addbtnImage);
    addbtn.classList.add("add-btn");
    addbtn.addEventListener("click", function (event) {
      text.style.color = "#78CFB0";
      text.style.textDecoration = "line-through";
      addbtnImage.src = "Check.png";
    });
    listItem.append(addbtn);

    let removeBtn = document.createElement("button");
    let addRemoveImage = document.createElement("img");
    addRemoveImage.src = "TrashSimple.png";
    addRemoveImage.classList.add("add-btn1");
    removeBtn.appendChild(addRemoveImage);
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", function () {
      list.removeChild(listItem);
    });
    listItem.append(removeBtn);
  }
  taskInput.value = "";
});
