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


document.addEventListener("DOMContentLoaded", function () {
    const infoButton = document.getElementById("info_button");
    const infoList = document.getElementById("info_list");
    let isInfoOpen = false;

    infoButton.addEventListener("click", function () {
        if (isInfoOpen) {
            infoButton.style.height = "5rem"; 
            infoList.style.display = "none";
            infoButton.style.backgroundImage = "url(../assets/arrow_down.svg)"; 
        } else {
            infoButton.style.height = "22rem";
            infoList.style.display = "block"; 
            infoButton.style.backgroundImage = "url(../assets/arrow_up.svg)";
        }
        isInfoOpen = !isInfoOpen; 
    });
});

function updateHeaderLineValue() {
    const headerLine = document.getElementById("header_line");
    const maxScrollHeight = document.body.scrollHeight - window.innerHeight;
    const currentScrollPosition = window.scrollY;
    const percentageScrolled = (currentScrollPosition / maxScrollHeight) * 100;
    
    headerLine.value = percentageScrolled;
    }
    
    window.addEventListener("scroll", updateHeaderLineValue);
    
    updateHeaderLineValue();