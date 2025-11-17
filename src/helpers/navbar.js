document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.querySelector('.header-container');
    const headerNavigation = document.querySelector('.header-navigation');

    const hamburgerMenu = document.createElement('div');
    hamburgerMenu.className = 'hamburger-menu';
    hamburgerMenu.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    headerContainer.insertBefore(hamburgerMenu, headerNavigation);

    hamburgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        headerNavigation.classList.toggle('active');
    });

    const menuLinks = headerNavigation.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerMenu.classList.remove('active');
            headerNavigation.classList.remove('active');
        });
    });

    document.addEventListener('click', function(event) {
        const isClickInsideMenu = headerNavigation.contains(event.target);
        const isClickOnHamburger = hamburgerMenu.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger && headerNavigation.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            headerNavigation.classList.remove('active');
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 690) {
            hamburgerMenu.classList.remove('active');
            headerNavigation.classList.remove('active');
        }
    });
});