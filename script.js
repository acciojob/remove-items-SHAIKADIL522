// Get the dropdown
const select = document.getElementById("colorSelect");

// Get the button (IMPORTANT: correct capitalization)
const button = document.querySelector('input[type="button"][value="Select and Remove"]');

// Attach click handler
button.addEventListener("click", function () {
    // selectedIndex gives index of chosen option
    const index = select.selectedIndex;

    // Safety check (not strictly required, but good practice)
    if (index !== -1) {
        select.remove(index);
    }
});