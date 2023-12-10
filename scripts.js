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


window.addEventListener("load", function () {
    var loadingScreen = document.getElementById("loading-screen");

    // По завершении анимации (3 секунды), добавим класс "loaded"
    setTimeout(function () {
      loadingScreen.classList.add("loaded");
    }, 2000);
  });

  document.addEventListener('DOMContentLoaded', function () {
    var fullscreenButton = document.getElementById('fullscreen-button');
    
    if (fullscreenButton) {
      fullscreenButton.addEventListener('click', toggleFullscreen);
    }
    function toggleFullscreen() {
        if (!document.fullscreenElement && !document.mozFullScreenElement &&
            !document.webkitFullscreenElement && !document.msFullscreenElement) {
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          } else if (document.documentElement.mozRequestFullScreen) { // Firefox
            document.documentElement.mozRequestFullScreen();
          } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
            document.documentElement.webkitRequestFullscreen();
          } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
            document.documentElement.msRequestFullscreen();
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
          }
        }
      }
      
      var fullscreenButton = document.getElementById('fullscreen-button');
      fullscreenButton.addEventListener('click', toggleFullscreen);
      
      // Прослуховування події для зміни стилів при входженні/виходженні з повноекранного режиму
      document.addEventListener('fullscreenchange', function () {
        document.body.classList.toggle('fullscreen', !!document.fullscreenElement);
      });
      
      document.addEventListener('mozfullscreenchange', function () {
        document.body.classList.toggle('fullscreen', !!document.mozFullScreenElement);
      });
      
      document.addEventListener('webkitfullscreenchange', function () {
        document.body.classList.toggle('fullscreen', !!document.webkitFullscreenElement);
      });
      
      document.addEventListener('msfullscreenchange', function () {
        document.body.classList.toggle('fullscreen', !!document.msFullscreenElement);
      });
  });
      
  






