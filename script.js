// Dark Mode Toggle
function initDarkMode() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = '🌙 Dark Mode';
    darkModeToggle.style.cssText = 'position: fixed; top: 10px; right: 10px; padding: 10px 15px; background: #333; color: #fff; border: none; border-radius: 5px; cursor: pointer; z-index: 1000;';
    
    document.body.appendChild(darkModeToggle);

    // Check for saved preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        enableDarkMode();
    }

    darkModeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
}

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    document.body.style.backgroundColor = '#1A1A1A';
    document.body.style.color = '#ccc';
    localStorage.setItem('darkMode', 'enabled');
}


function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    localStorage.setItem('darkMode', 'disabled');
}

// Carousel functions
let currentIndex = 0;

function showSlide(index) {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    
    if (index >= items.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = items.length - 1;
    } else {
        currentIndex = index;
    }
    
    // Update carousel position
    const carousel = document.querySelector('.carousel-items');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentIndex) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function previousSlide() {
    showSlide(currentIndex - 1);
}

function currentSlide(index) {
    showSlide(index);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDarkMode);
} else {
    initDarkMode();
}