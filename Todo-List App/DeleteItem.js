//delete item
export function deleteItem(
  event,
  position,
  itemsContainerDivElement,
  taskCountDivElement
) {
  const deleteIcon = event.target.closest(".fa-circle-minus");
  if (deleteIcon) {
    const itemHolder = deleteIcon.closest(".item-holder-class");
    console.log(itemHolder.id + " deleted from the list");
    if (itemHolder) {
      itemHolder.remove();
    }
  }
}
