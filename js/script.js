document.addEventListener('DOMContentLoaded', function() {
    const aboutNavItem = document.getElementById('about-nav-item');
    const aboutDropdown = document.getElementById('about-dropdown');
    const navbar = document.querySelector('.custom-navbar');
    const searchModal = document.getElementById('searchModal');
    let hoverTimeout;

    // Close search modal when clicking outside
    document.addEventListener('mousedown', function(event) {
        if (searchModal.classList.contains('show') && !searchModal.querySelector('.modal-content').contains(event.target)) {
            const modal = bootstrap.Modal.getInstance(searchModal);
            modal.hide();
        }
    });

    function showAboutSection() {
        clearTimeout(hoverTimeout);
        aboutDropdown.style.display = 'block';
        navbar.classList.add('white-bg');
    }

    function hideAboutSection() {
        hoverTimeout = setTimeout(function() {
            aboutDropdown.style.display = 'none';
            navbar.classList.remove('white-bg');
        }, 200); 
    }

    aboutNavItem.addEventListener('mouseenter', showAboutSection);
    aboutNavItem.addEventListener('mouseleave', hideAboutSection);
    aboutDropdown.addEventListener('mouseenter', showAboutSection);
    aboutDropdown.addEventListener('mouseleave', hideAboutSection);
});
