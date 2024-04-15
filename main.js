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
});

document.addEventListener("DOMContentLoaded", function() {
  // Data scraping yang diberikan
  var dataScraping = [
    // Data scraping disini
  ];

  // Pilih elemen <ul> dengan id "scraping-list"
  var scrapingList = document.getElementById("scraping-list");

  // Iterasi melalui setiap objek dalam data scraping
  dataScraping.forEach(function(item) {
    // Buat elemen <li>
    var listItem = document.createElement("li");

    // Buat konten untuk elemen <li>
    var content = document.createTextNode(item.kategori + " - " + item.judul + " (" + item.waktu + ")");

    // Tambahkan konten ke dalam elemen <li>
    listItem.appendChild(content);

    // Tambahkan elemen <li> ke dalam elemen <ul>
    scrapingList.appendChild(listItem);
  });
});
