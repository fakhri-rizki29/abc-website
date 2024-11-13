const menuIcon = document.getElementById('menu-icon');
const searchIcon = document.getElementById('search-icon');
const secondNavToggle = document.getElementById('second-nav-toggle');


function toggleSecondNav() {
    // Jika elemen sedang tersembunyi, tampilkan
    if (secondNavToggle.style.display === 'none' || secondNavToggle.style.display === '') {
        secondNavToggle.style.display = 'block'; // tampilkan
    } else {
        secondNavToggle.style.display = 'none'; // sembunyikan
    }
}

menuIcon.addEventListener('click', toggleSecondNav);
searchIcon.addEventListener('click', toggleSecondNav);

