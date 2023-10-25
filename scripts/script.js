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


var infoButton = document.getElementById('info_button');
    var marginLeft = 72; 
    infoButton.addEventListener('click', function() {
        if (marginLeft === 1 ) {
            infoButton.style.marginLeft = '72vw';
            infoButton.style.backgroundImage = 'url(../assets/arrow_left.svg)';
            marginLeft = 72;
        } else {
            infoButton.style.marginLeft = '1rem';
            infoButton.style.backgroundImage = 'url(../assets/arrow_right.svg)';
            marginLeft = 1;
        }
});