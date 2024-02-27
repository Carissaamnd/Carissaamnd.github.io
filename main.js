document.addEventListener('DOMContentLoaded', function() {
  var hobiLink = document.getElementById('hobi-link');
  var lessonsLink = document.getElementById('lessons-link');
  var hobiSection = document.getElementById('hobi');
  var lessonsSection = document.getElementById('lessons');

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
