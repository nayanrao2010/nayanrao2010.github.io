// Wait for the browser to fully load before running our script
document.addEventListener("DOMContentLoaded", () => {
    
    // Grab our button and card elements from the HTML using their IDs and classes
    const colorBtn = document.getElementById("colorBtn");
    const card = document.querySelector(".card");

    // Array of fun background colors to cycle through
    const colors = ["#ffeaa7", "#55efc4", "#81ecec", "#fab1a0", "#dfe6e9"];

    // Add a 'click' event listener to the button
    colorBtn.addEventListener("click", () => {
        // Pick a random color from our array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Change the background color of the card dynamically
        card.style.backgroundColor = randomColor;
        
        // Log a friendly message to the browser console
        console.log("Button clicked! Card background changed to: " + randomColor);
    });

});
