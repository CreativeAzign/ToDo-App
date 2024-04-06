export function updateTaskCount(itemsContainerDivElement, paraElement) {
  // Get all the child elements of items-container with the class item-holder-class
  const itemHolders =
    itemsContainerDivElement.getElementsByClassName("item-holder-class");
  // Get the count of item-holder elements
  const itemCount = itemHolders.length;
  //   update p tag content which lies inside task count div
  paraElement.classList.add("total-count-class");
  paraElement.textContent = `Total tasks : ${itemCount}`;
  console.log("total tasks now : " + itemCount);
}
