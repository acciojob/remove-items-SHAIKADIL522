const select = document.getElementById("colorSelect");
const button = document.queryselector('input[type="button"]');

button.addEventListener("click", function () {
    // Get selected index
    const selectedIndex = select.selectedIndex;

    // Remove only if an option is selected
    if (selectedIndex !== -1) {
        select.remove(selectedIndex);
    }
});