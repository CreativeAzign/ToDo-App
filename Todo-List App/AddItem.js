export function addItem(input, output, position, taskCount) {
  //   user input text extracted
  const inputValue = input.value;
  input.value = "";

  //   if not valid input, alert customer
  if (inputValue == "") {
    alert("Enter a task");
    return;
  } else if (inputValue.length > 100) {
    alert("please enter the task instruction within 40 characters");
    return;
  }

  //   if valid input , create a item and affix it to items container
  const newItem = document.createElement("div");
  newItem.id = "item-holder-" + position;
  console.log(newItem.id + " has added to the list");
  newItem.classList.add("item-holder-class");
  newItem.classList.add("border-2");
  const idName = `task-detail-${position}`;
  const newTaskName = `${idName}-name`;

  newItem.innerHTML = `
    <!-- The item value with check box -->
    <div class = "item-content-class">
        <form>
            <input type = "checkbox" id = ${idName} name = ${newTaskName}>
            <label for="task-detail">${inputValue}</label>
        </form>
    </div>
    <!-- The delete icon -->
    <div class = "delete-item-class">
        <i class="fa-solid fa-circle-minus"></i>
    </div>`;

  output.appendChild(newItem);
}
