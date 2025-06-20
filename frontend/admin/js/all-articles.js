// frontend/assets/js/admin_articles.js
document.addEventListener('DOMContentLoaded', function() {
    // This script runs when the 'admin_articles.html' page is fully loaded.

    // Select all navigation items in the sidebar
    const navItems = document.querySelectorAll('.admin-nav .nav-item');

    // Get the current page's filename from the URL (e.g., "admin_articles.html")
    // window.location.pathname gives "/admin/admin_articles.html"
    // .split('/').pop() extracts "admin_articles.html"
    const currentPageFilename = window.location.pathname.split('/').pop();

    // Iterate over each navigation item
    navItems.forEach(item => {
        // Remove 'active' class from all items first to ensure only one is active
        item.classList.remove('active');

        // Get the 'data-page' attribute from the navigation item
        // This attribute holds a simple identifier for the page (e.g., "admin_articles")
        const dataPage = item.getAttribute('data-page');

        // Check if the current page's filename contains the dataPage identifier
        // This makes it flexible (e.g., "admin_articles.html" contains "admin_articles")
        // You could also do a direct string match if your filenames are exact matches for data-page
        if (dataPage && currentPageFilename.includes(dataPage)) {
            item.classList.add('active'); // Add the 'active' class to the matching item
        }
    });

    // --- You can add other page-specific JavaScript for admin_articles.html here ---
    // Example: Handle search input, dynamically load table data, etc.
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            console.log('Search input changed:', this.value);
            // Implement your search filtering logic here
        });
    }

    const addArticleForm = document.querySelector('.add-article-form');
    if (addArticleForm) {
        addArticleForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            console.log('Add article form submitted!');
            // Get form data
            const articleTitle = document.getElementById('articleTitle').value;
            const category = document.getElementById('category').value;
            console.log('New Article Title:', articleTitle);
            console.log('Category:', category);
            // Implement AJAX request to send data to backend here
            alert('Article added! (This is an example, replace with proper feedback)'); // Using alert for demo
            addArticleForm.reset(); // Clear the form
        });
    }

});
