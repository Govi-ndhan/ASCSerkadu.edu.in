// main.js
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Handle navigation
forward = "../assests/pages/";
function navigate(dir){
    location.href= forward + dir;
}