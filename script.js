// This file is currently set up for basic smooth scrolling.
// You can expand this file to add more interactive JavaScript functionality in the future.

// Example: Smooth scrolling for anchor links within the page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Add a click event listener to each anchor tag that starts with "#"
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default jump-to-anchor behavior

        // Get the target element using the href attribute
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scroll to the target element smoothly
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Enable smooth scrolling
            });
        }
    });
});

// You could add more JavaScript here, for example:
// - Form submission handling (e.g., sending contact form data)
// - Dynamic content loading (e.g., fetching projects from an API)
// - Interactive animations or effects
// - Modals or pop-ups

