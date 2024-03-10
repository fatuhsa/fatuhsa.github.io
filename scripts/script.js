// Fungsi untuk menampilkan atau menyembunyikan konten saat paragraf diklik
function toggleContent(menuNumber) {
  // Menentukan id konten yang sesuai dengan nomor menu yang diklik
  var contentId = "content" + menuNumber;
  var content = document.getElementById(contentId);

  // Memeriksa apakah konten sudah terbuka
  var isOpen = content.style.display === "block";

  // Menyembunyikan semua konten terlebih dahulu
  var allContents = document.querySelectorAll(".opsi");
  allContents.forEach(function(content) {
    content.style.display = "none";
  });

  // Jika konten belum terbuka, buka; jika sudah terbuka, tutup kembali
  if (!isOpen) {
    content.style.display = "block";
  }
}
