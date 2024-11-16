// Smooth Scroll to Section Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-In Animation on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        }
    });
});

// Open Popup Function
function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
}

// Close Popup Function
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}
// Welcome Screen Functionality
document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const launchButton = document.getElementById('launch-button');
    const rocket = document.querySelector('.rocket img');

    // Handle Launch Button Click
    launchButton.addEventListener('click', () => {
        // Trigger rocket launch animation
        rocket.style.animation = 'launch 2s ease forwards';

        // Fade out welcome screen after rocket animation
        setTimeout(() => {
            welcomeScreen.classList.add('fade-out');
        }, 2000); // Matches rocket animation duration
    });
});

