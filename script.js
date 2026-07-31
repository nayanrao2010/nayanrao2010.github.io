// Wait for the browser to fully load before running our script
document.addEventListener("DOMContentLoaded", () => {
    
    console.log("Website loaded successfully with tabs ready!");

});

// Global function to handle tab switching
function openTab(evt, tabName) {
    // 1. Get all elements with class="tab-content" and hide them
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-content");
    }

    // 2. Get all elements with class="tab-btn" and remove the "active" class
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // 3. Show the current tab's content, and add an "active" class to the button that was clicked
    document.getElementById(tabName).classList.add("active-content");
    evt.currentTarget.classList.add("active");
}
