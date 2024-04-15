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

  function displayScrapingResults(data) {
    const scrapingList = document.getElementById('scraping-list');
    scrapingList.innerHTML = ''; // Hapus dulu isi list yang lama
  
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `[${item.kategori}] ${item.judul} (${item.waktu})`;
      scrapingList.appendChild(li);
    });
  }
  displayScrapingResults(scrapingData);
});
