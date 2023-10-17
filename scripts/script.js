var menuButton = document.getElementById('menuButton');
var dropdown = document.getElementById('dropdown');

menuButton.addEventListener('click', function() {
    dropdown.classList.toggle('dropdown_active');

    if (dropdown.classList.contains('dropdown_active')) {
        dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
    } else {
        dropdown.style.maxHeight = '0';
    }

    menuButton.classList.toggle('menuButton_active');
});

dropdown.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        dropdown.classList.remove('dropdown_active');
        dropdown.style.maxHeight = '0';
        menuButton.classList.remove('menuButton_active');
    }
});
