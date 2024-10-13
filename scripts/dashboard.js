function loadContent(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            if (page === 'reservasi' || page === 'landingpage') {
                loadScript('/scripts/reservasi.js', () => {
                    if (page === 'reservasi') {
                        updateDenah();
                        tampilkanDaftarBooking();
                    }
                    if (page === 'landingpage') {
                        updateDenah();
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
