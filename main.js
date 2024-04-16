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

  // Tambahkan event listener untuk tautan "pelajaran yang dipelajari"
  lessonsLink.addEventListener('click', function(event) {
    event.preventDefault(); // Menghentikan perilaku default dari tautan
    toggleLessonsSection();
  });

  // Ambil elemen-elemen yang dibutuhkan dari halaman HTML
  var scrapingList = document.getElementById('scraping-list');

  // Fungsi untuk menampilkan hasil scraping di halaman
  function displayScrapingResults(data) {
    scrapingList.innerHTML = ''; // Bersihkan isi list sebelum menambahkan yang baru

    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `[${item.kategori}] ${item.judul} (${item.waktu})`;
      scrapingList.appendChild(li);
    });
  }

  // Fetch data from JSON file
  fetch("C:\\Users\\Carissa Amanda\\Documents\\Semester 2 Carissa\\Proyek 1 Pengembangan Perangkat Lunak\\Minggu 8\\data.json") // Adjust the path as per your directory structure
    .then(response => response.json())
    .then(data => {
      displayScrapingResults(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});
