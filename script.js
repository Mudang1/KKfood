// Initialize Swiper.js
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
// Toggle Navigation Menu (Hamburger Menu)
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbarMenu = document.getElementById('navbar-menu');

// Toggle the 'active' class to show/hide the menu
hamburgerMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Close the menu when clicking outside the navbar
document.addEventListener('click', (e) => {
    if (!navbarMenu.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        navbarMenu.classList.remove('active');
    }
});

// Form Submission
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('ส่งข้อความเรียบร้อยแล้ว!');
    e.target.reset();
});
