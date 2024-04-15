document.addEventListener('DOMContentLoaded', function() {
  const hobiLink = document.querySelector('#hobi-link');
  const lessonsLearnedLink = document.querySelector('#lessons-learned-link');
  const hobiSection = document.querySelector('#hobi');
  const lessonsLearnedSection = document.querySelector('#lessons-learned');

  // Fungsi untuk menampilkan atau menyembunyikan bagian pelajaran yang dipelajari
  function toggleLessonsLearnedSection() {
    if (!lessonsLearnedSection) return; // Tambahkan penanganan kesalahan
    if (lessonsLearnedSection.style.display === 'none' || lessonsLearnedSection.style.display === '') {
      lessonsLearnedSection.style.display = 'block';
    } else {
      lessonsLearnedSection.style.display = 'none';
    }
  }

  // Fungsi untuk menampilkan atau menyembunyikan menu hamburger
  function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    if (!menuLinks) return; // Tambahkan penanganan kesalahan
    menuLinks.style.display = menuLinks.style.display === 'flex' ? 'none' : 'flex';
  }

  // Tambahkan event listener untuk tautan "hobi"
  if (hobiLink) { // Tambahkan penanganan kesalahan
    hobiLink.addEventListener('click', function(event) {
      event.preventDefault(); // Menghentikan perilaku default dari tautan
      toggleHobiSection();
    });
  }

  // Tambahkan event listener untuk tautan "pelajaran yang dipelajari"
  if (lessonsLearnedLink) { // Tambahkan penanganan kesalahan
    lessonsLearnedLink.addEventListener('click', function(event) {
      event.preventDefault(); // Menghentikan perilaku default dari tautan
      toggleLessonsLearnedSection();
    });
  }

  function displayScrapingResults(data) {
    const scrapingList = document.getElementById('scraping-list');
    scrapingList.innerHTML = '';
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `[${item.kategori}] ${item.judul} (${item.waktu})`;
      scrapingList.appendChild(li);
    });
  }

  displayScrapingResults(scrapingData);
});