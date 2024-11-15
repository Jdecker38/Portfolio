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
