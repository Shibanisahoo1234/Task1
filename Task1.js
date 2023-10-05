const navbar = document.getElementById('navbar');

// Function to change the background color when scrolled
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555'; // New background color on scroll
    } else {
        navbar.style.backgroundColor = '#333'; // Restore initial background color
    }
});
