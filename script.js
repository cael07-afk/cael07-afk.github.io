const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

function applyDarkMode(isDark) {
    if (isDark) {
        body.style.background =
            'linear-gradient(140deg, rgb(0, 0, 0), #1276a5)';
        body.style.color = 'white';
        toggle.className = 'bi bi-brightness-high-fill';
        
    } else {
        body.style.background =
            'linear-gradient(140deg, rgb(16, 13, 43), #021721)';
        body.style.color = 'white';
        
        toggle.className = 'bi bi-moon';
    }
}


const savedMode = localStorage.getItem('darkMode') === 'enabled';
applyDarkMode(savedMode);


toggle.addEventListener('click', function () {
    const isCurrentlyDark =
        localStorage.getItem('darkMode') === 'enabled';

    const newMode = !isCurrentlyDark;

    localStorage.setItem(
        'darkMode',
        newMode ? 'enabled' : 'disabled'
    );

    applyDarkMode(newMode);
});