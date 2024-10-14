function loadContent(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            if (page === 'reservasi' || page === 'landingpage') {
                loadScript('../scripts/reservasi.js', () => {
                    if (page === 'reservasi') {
                        updateDenah();
                        tampilkanDaftarBooking();
                    }
                });
            }
        });
}

function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}

// Memuat konten awal
loadContent('landingpage');

const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

// Toggle sidebar on hamburger click
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Menghentikan event bubbling
    sidebar.classList.toggle('-translate-x-full');
});

// Hide sidebar on click outside
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.add('-translate-x-full');
    }
});

// Optional: Prevent sidebar hide on click inside sidebar
sidebar.addEventListener('click', (e) => {
    e.stopPropagation(); // Menghentikan event bubbling
});


// Fungsi untuk toggle submenu
function toggleDropdown(id) {
    const menu = document.getElementById(id);
    menu.classList.toggle('hidden');
}