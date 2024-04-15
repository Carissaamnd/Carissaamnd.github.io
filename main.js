document.addEventListener('DOMContentLoaded', function() {
  var hobiLink = document.getElementById('hobi-link');
  var lessonsLink = document.getElementById('lessons-link');
  var hobiSection = document.getElementById('hobi');
  var lessonsSection = document.getElementById('lessons');

  // Fungsi untuk menampilkan atau menyembunyikan bagian pelajaran yang dipelajari
  function toggleLessonsSection() {
    if (lessonsSection.style.display === 'none' || lessonsSection.style.display === '') {
      lessonsSection.style.display = 'block';
    } else {
      lessonsSection.style.display = 'none';
    }
  }

  // Fungsi untuk menampilkan atau menyembunyikan menu hamburger
  function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.style.display = menuLinks.style.display === 'flex' ? 'none' : 'flex';
  }

  // Tambahkan event listener untuk tautan "hobi"
  hobiLink.addEventListener('click', function(event) {
    event.preventDefault(); // Menghentikan perilaku default dari tautan
    toggleHobiSection();
  });

  // Tambahkan event listener untuk tautan "pelajaran yang dipelajari"
  lessonsLink.addEventListener('click', function(event) {
    event.preventDefault(); // Menghentikan perilaku default dari tautan
    toggleLessonsSection();
  });

  // Ambil elemen <ul> untuk menampilkan hasil scraping
const scrapingList = document.getElementById('scraping-list');

// Data hasil scraping
const scrapingData = [
  // Data hasil scraping dari JSON yang Anda berikan
];

// Fungsi untuk menampilkan data hasil scraping
function displayScrapingData() {
  // Kosongkan konten sebelumnya
  scrapingList.innerHTML = '';

  // Loop melalui data hasil scraping dan buat elemen <li> untuk setiap item
  scrapingData.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.kategori}</strong> - ${item.judul} - ${item.waktu}`;
    scrapingList.appendChild(li);
  });
}

// Panggil fungsi untuk menampilkan data hasil scraping
displayScrapingData();

});