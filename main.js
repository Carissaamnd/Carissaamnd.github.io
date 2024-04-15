document.addEventListener('DOMContentLoaded', function() {
  // Ambil elemen-elemen yang dibutuhkan dari halaman HTML
  var hobiLink = document.getElementById('hobi-link');
  var lessonsLink = document.getElementById('lessons-link');
  var hobiSection = document.getElementById('hobi');
  var lessonsSection = document.getElementById('lessons');

  // Data scraping
  const scrapingData = [
    {
      "kategori": "Ameera",
      "waktu": "2024-04-15 11:32:55",
      "judul": "Drakor Populer dan Seru yang Dibintangi Kim Ji-won Selain 'Queen of Tears'",
      "waktu_scrapping": "2024-04-15 18:36:55.351076"
    },
    {
      "kategori": "News",
      "waktu": "2024-04-15 11:32:55",
      "judul": "Polres Cianjur Tangkap Dua Perempuan Tersangka TPPO Modus Kawin Kontrak",
      "waktu_scrapping": "2024-04-15 18:36:55.351076"
    },
    // Data scraping lainnya...
  ];

  // Fungsi untuk menampilkan atau menyembunyikan bagian hobi
  function toggleHobiSection() {
    if (hobiSection.style.display === 'none' || hobiSection.style.display === '') {
      hobiSection.style.display = 'block';
    } else {
      hobiSection.style.display = 'none';
    }
  }

  // Fungsi untuk menampilkan atau menyembunyikan bagian pelajaran yang dipelajari
  function toggleLessonsSection() {
    if (lessonsSection.style.display === 'none' || lessonsSection.style.display === '') {
      lessonsSection.style.display = 'block';
    } else {
      lessonsSection.style.display = 'none';
    }
  }

  // Fungsi untuk menampilkan hasil scraping di halaman
  function displayScrapingResults(data) {
    const scrapingList = document.getElementById('scraping-list');
    scrapingList.innerHTML = ''; // Bersihkan isi list sebelum menambahkan yang baru

    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `[${item.kategori}] ${item.judul} (${item.waktu})`;
      scrapingList.appendChild(li);
    });
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

  // Panggil fungsi displayScrapingResults dengan data scraping
  displayScrapingResults(scrapingData);
});
