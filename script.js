// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Collapsible modules
const moduleHeaders = document.querySelectorAll('.module h3');

moduleHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const module = header.parentElement;
        module.classList.toggle('collapsed');
    });
});
