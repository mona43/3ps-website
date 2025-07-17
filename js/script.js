document.addEventListener('DOMContentLoaded', function() {
    const aboutNavItem = document.getElementById('about-nav-item');
    const aboutDropdown = document.getElementById('about-dropdown');
    const navbar = document.querySelector('.custom-navbar');
    
    aboutNavItem.addEventListener('mouseenter', function() {
        aboutDropdown.style.display = 'block';
        navbar.classList.add('white-bg');
    });
    aboutNavItem.addEventListener('mouseleave', function() {
        aboutDropdown.style.display = 'none';
        navbar.classList.remove('white-bg');
    });
    aboutDropdown.addEventListener('mouseenter', function() {
        aboutDropdown.style.display = 'block';
        navbar.classList.add('white-bg');
    });
    aboutDropdown.addEventListener('mouseleave', function() {
        aboutDropdown.style.display = 'none';
        navbar.classList.remove('white-bg');
    });
});
