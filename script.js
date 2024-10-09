// Konfigurasi Menu Navbar Mobile
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

let menuOpen = false;


menuToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
    menuOpen = true;
});

// Close menu when "X" button is clicked
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
    menuOpen = false;
});


// =========================================


// Ambil elemen navbar
const navbar = document.getElementById('navbar');

// Fungsi untuk mengubah warna background navbar saat scroll
window.onscroll = function() {
    if (window.pageYOffset > 50) {  // Jika sudah di-scroll lebih dari 50px
        menuToggle.classList.remove('text-white');
        navbar.classList.remove('bg-opacity-0', 'text-white');  
        menuToggle.classList.add('text-black');
        navbar.classList.add('bg-opacity-100', 'text-black', 'shadow-lg');
    } else {  // Jika di bagian atas
        menuToggle.classList.remove('text-black');
        navbar.classList.remove('bg-opacity-100', 'text-black', 'shadow-lg');
        menuToggle.classList.add('text-white');  
        navbar.classList.add('bg-opacity-0', 'text-white'); 
    }
};

function toggleAccordion(faqNumber) {
    const content = document.getElementById(`faq-content-${faqNumber}`);
    const icon = document.getElementById(`toggle-icon-${faqNumber}`);

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.textContent = '-';
    } else {
        content.classList.add('hidden');
        icon.textContent = '+';
    }
};

//====================================================

var swiper = new Swiper(".mySwiper", {
    loop: true,  // Slide will loop
    autoplay: {
        delay: 4000,  // Waktu delay antara perpindahan slide dalam milidetik
        disableOnInteraction: false,  // Slide akan tetap autoplay meskipun diinteraksi
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});