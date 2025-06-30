// script.js

// Wait until the entire page content is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find the button using its ID
    const button = document.getElementById('clickMeButton');

    // Find the paragraph where we'll display the message
    const messageParagraph = document.getElementById('message');

    // Add a click event listener to the button
    button.addEventListener('click', function() {
        // Change the content of the message paragraph
        messageParagraph.textContent = "You clicked the button! 🎉";
    });
});
