const SearchContainer = document.getElementById('searchContainer');
const SearchBox = document.getElementById('searchBox');
const searchIcon = document.getElementById('searchIcon');

searchIcon.addEventListener('click', () => {
  SearchBox.classList.toggle('mySearch');
  searchIcon.classList.toggle('myIcon');
});

