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

  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
      x.style.display = "block";
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
