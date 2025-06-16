// Toggle search box visibility
const searchBtn = document.getElementById('searchBtn');
const searchContainer = document.getElementById('searchContainer');
const searchBox = document.getElementById('searchBox');

searchBtn.addEventListener('click', function(e) {
    e.preventDefault();
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchBox.focus();
    }
});

// Optional: Hide search box when clicking outside
document.addEventListener('click', function(e) {
    if (!searchContainer.contains(e.target) && e.target !== searchBtn) {
        searchContainer.classList.remove('active');
    }
});

// Responsive navbar hamburger toggle
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
    navToggle.classList.toggle('active');
});