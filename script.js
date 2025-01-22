const toggleButton = document.querySelector('.toggle-button');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.querySelector('.search-results');

  searchInput.addEventListener('input', function() {
    if (this.value.length > 0) {
      searchResults.classList.add('show');
    } else {
      searchResults.classList.remove('show');
    }
  });
});

const searchInput = document.getElementById('search-input');
const searchIcon = document.querySelector('.search-icon');

searchInput.addEventListener('focus', function() {
  searchIcon.style.opacity = 0;
  searchIcon.style.visibility = 'hidden';
});

