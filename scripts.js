document.addEventListener('click', function (e) {
    var contextMenu = document.getElementById('context-menu');
    var contextImage = document.getElementById('context-image');

    if (e.target.id === 'context-image') {
        e.preventDefault();

        
        contextMenu.style.position = 'fixed';
        contextMenu.style.display = 'block';
        contextMenu.style.left = e.clientX + 'px';
        contextMenu.style.top = e.clientY + 'px';
    } else {
        contextMenu.style.display = 'none';
    }
});




function handleOption(option) {
    
    console.log('Выбрана опция:', option);
    
}

document.addEventListener('click', function (e) {
    var themeButton = document.getElementById('theme-button');

    if (e.target.id === 'theme-button') {
        e.preventDefault();

        themeButton.disabled = true;
        themeButton.style.transition = 'transform 0.3s ease';

        setTimeout(function () {
            themeButton.style.transform = 'rotate(360deg)';
        }, 10);

        themeButton.addEventListener('transitionend', function () {
            themeButton.style.transition = 'none';
            themeButton.style.transform = 'rotate(0deg)';

            setTimeout(function () {
                themeButton.style.transition = 'transform 0.3s ease';
            }, 10);

            toggleThemeAndImage();

            themeButton.disabled = false;
        }, { once: true });
    }
});

function toggleThemeAndImage() {
    var body = document.body;

    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');

    var currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);

    var logo = document.getElementById('theme-logo');

    logo.onload = function () {
        changeImage();
    };
    changeImage();
}

function changeImage() {
    var body = document.body;
    var logo = document.getElementById('theme-logo');
    var theme = body.classList.contains('light-theme') ? 'light' : 'dark';
    var imagePath = `killsideweb_${theme}.jpg`;

    logo.src = imagePath;
}

document.addEventListener('DOMContentLoaded', function() {
    var savedTheme = localStorage.getItem('theme');
    var body = document.body;
    var logo = document.getElementById('theme-logo');

    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        logo.src = 'killsideweb_dark.jpg';
    } else {
        body.classList.add('light-theme');
        logo.src = 'killsideweb_light.jpg';
    }
});



