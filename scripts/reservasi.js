// Fungsi untuk menyimpan booking data ke localStorage
function simpanDataBooking(nama, tanggal, nomorKamar) {
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push({ nama, tanggal, nomorKamar });
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

// Fungsi untuk menampilkan daftar booking (CRUD - Read)
function tampilkanDaftarBooking() {
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const tableBody = document.getElementById('customerTableBody');
    tableBody.innerHTML = ''; // Bersihkan isi tabel sebelum menambahkan baris baru

    bookings.forEach((booking, index) => {
        const row = document.createElement('tr');
        row.classList.add('bg-white', 'border-b', 'hover:bg-gray-100', 'transition');

        row.innerHTML = `
            <td class="px-4 py-3 text-left">${index + 1}</td>
            <td class="px-6 py-3 text-left">${booking.nama}</td>
            <td class="px-6 py-3 text-left">${booking.tanggal}</td>
            <td class="px-6 py-3 text-left">${booking.nomorKamar}</td>
            <td class="px-6 py-3 flex gap-4">
                <button onclick="editBooking(${index})" class="text-blue-500 hover:text-blue-700">
                    <i class="fas fa-edit text-xl"></i>
                </button>
                <button onclick="hapusBooking(${index})" class="text-red-500 hover:text-red-700">
                    <i class="fas fa-trash text-xl"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Fungsi untuk menghapus booking (CRUD - Delete)
function hapusBooking(index) {
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.splice(index, 1); // Hapus booking berdasarkan index
    localStorage.setItem('bookings', JSON.stringify(bookings));
    // Update tabel dan denah setelah penghapusan
    tampilkanDaftarBooking();
    updateDenah();
}

// Fungsi untuk memperbarui status kamar (diubah jadi merah jika booked)
function updateDenah() {
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    // Reset semua kamar ke status available (hijau)
    document.querySelectorAll('[id^="villa"]').forEach(kamar => {
        kamar.classList.remove('bg-red-700', 'border-none', 'text-white');
        kamar.classList.add('bg-yellow-50', 'border-yellow-500');
    });
    // Update status kamar yang booked
    bookings.forEach(booking => {
        const kamarElement = document.getElementById(`villa-${booking.nomorKamar}`);
        if (kamarElement) {
            kamarElement.classList.remove('bg-yellow-50', 'border-yellow-500');
            kamarElement.classList.add('bg-red-700', 'border-none', 'text-white');
        }
    });
}

// Event listener untuk form booking submission
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const tanggal = document.getElementById('tanggal').value;
    const nomorKamar = document.getElementById('nomorKamar').value;
    // Simpan booking ke localStorage
    simpanDataBooking(nama, tanggal, nomorKamar);
    // Update denah dan tampilkan daftar booking
    updateDenah();
    tampilkanDaftarBooking();
    // Reset form
    this.reset();
});

// Update denah dan daftar booking pada saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => {
    updateDenah();
    tampilkanDaftarBooking();
});

document.getElementById('clearData').addEventListener('click', () => {
    // Hapus semua data dari localStorage
    localStorage.removeItem('bookings');
    // Bersihkan tabel dan update denah
    tampilkanDaftarBooking();
    updateDenah();
});
