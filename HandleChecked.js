// Function to handle checkbox change event
export function handleCheckboxChange(event) {
  if (event.target.matches('input[type="checkbox"]')) {
    const itemHolder = event.target.closest(".item-holder-class");
    if (itemHolder) {
      itemHolder.classList.toggle("checked", event.target.checked);
    }
  }
}
