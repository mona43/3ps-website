document.addEventListener('DOMContentLoaded', function() {
    const aboutNavItem = document.getElementById('about-nav-item');
    const aboutDropdown = document.getElementById('about-dropdown');
    const navbar = document.querySelector('.custom-navbar');
    let hoverTimeout;

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
