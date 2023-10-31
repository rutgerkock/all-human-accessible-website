const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const header = document.getElementById('header');

menuButton.addEventListener('click', function () {
    toggleMenu();
});

const menuLinks = document.querySelectorAll('#dropdownMenu a');
menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        toggleMenu();
    });
});

function toggleMenu() {
    if (dropdownMenu.style.height === '0px' || dropdownMenu.style.height === '') {
        dropdownMenu.style.height = '60vh';
        menuButton.classList.add('expanded');
        header.classList.add('header-expanded');
    } else {
        dropdownMenu.style.height = '0';
        menuButton.classList.remove('expanded');
        header.classList.remove('header-expanded');
    }
}
