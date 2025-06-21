document.addEventListener('DOMContentLoaded', function () {
    const sidebarContainer = document.getElementById('admin-sidebar');
    if (!sidebarContainer) return;

    // Load the sidebar HTML
    fetch('/frontend/components/admin-navs/side-bar.html')
        .then(res => res.text())
        .then(html => {
            sidebarContainer.innerHTML = html;
            setupSidebarToggle();
        });

    function setupSidebarToggle() {
        const hamburger = document.querySelector('.hamburger-menu');
        const adminWrapper = document.querySelector('.admin-wrapper');
        const body = document.body;

        // Create overlay if it doesn't exist
        let overlay = document.querySelector('.sidebar-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'sidebar-overlay';
            adminWrapper.insertBefore(overlay, adminWrapper.firstChild);
        }

        function openSidebar() {
            adminWrapper.classList.add('sidebar-open');
            body.classList.add('no-scroll');
        }

        function closeSidebar() {
            adminWrapper.classList.remove('sidebar-open');
            body.classList.remove('no-scroll');
        }

        if (hamburger) {
            hamburger.addEventListener('click', function () {
                if (adminWrapper.classList.contains('sidebar-open')) {
                    closeSidebar();
                } else {
                    openSidebar();
                }
            });
        }

        overlay.addEventListener('click', closeSidebar);

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeSidebar();
        });
    }
});