document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mengambil nilai dari form
    const name = document.getElementById('name').value;
    const food = document.getElementById('food').value;

    // Menampilkan pesan konfirmasi
    const message = `Terima kasih, ${name}! Pesanan Anda untuk ${food} telah diterima.`;
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = message;
    confirmationMessage.style.display = 'block';

    // Mengosongkan form
    this.reset();
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Menambahkan atau menghapus kelas 'active'
});