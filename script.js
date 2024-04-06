//import necessary functions
import { addItem } from "./AddItem.js";
import { updateTaskCount } from "./UpdateTaskCount.js";
import { deleteItem } from "./DeleteItem.js";
import { handleCheckboxChange } from "./HandleChecked.js";

//fetch required html elements
const addItemIconElement = document.querySelector("#add-item-icon");
const userInputTextBoxElement = document.querySelector("#user-input-textbox");
const itemsContainerDivElement = document.querySelector("#items-container");
const taskCountDivElement = document.querySelector("#task-count-div");

let position = 1;

//Addition of new item
addItemIconElement.addEventListener("click", () => {
  addItem(userInputTextBoxElement, itemsContainerDivElement, position);
  position++;
  updateTaskCount(
    itemsContainerDivElement,
    taskCountDivElement.querySelector("p")
  );
});

// Event delegation to handle delete icon clicks
itemsContainerDivElement.addEventListener("click", (event) => {
  deleteItem(event);
  position--;
  updateTaskCount(
    itemsContainerDivElement,
    taskCountDivElement.querySelector("p")
  );
});

//  Event delegation to handle checked status
itemsContainerDivElement.addEventListener("change", handleCheckboxChange);
