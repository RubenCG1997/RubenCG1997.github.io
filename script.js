// --- Menú responsive ---
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Cerrar menú al hacer click en un link (modo móvil)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
        }
    });
});

// --- Scroll suave personalizado ---
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 62, // ajustar por el header
                behavior: 'smooth'
            });
        }
    });
});

// --- Cambiar el nav-link activo según scroll ---
const sections = document.querySelectorAll('main[id], section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');
function changeActiveLink() {
    let scrollY = window.pageYOffset;
    let selectedId = '';
    sections.forEach(sec => {
        if (sec.offsetTop <= scrollY + 64 && (sec.offsetTop + sec.offsetHeight) > scrollY + 64) {
            selectedId = sec.id;
        }
    });
    navLinkEls.forEach(nl => {
        nl.classList.toggle('selected', nl.getAttribute('href').slice(1) === selectedId);
    });
}
window.addEventListener('scroll', changeActiveLink);
window.addEventListener('load', changeActiveLink);

// --- Animaciones al hacer scroll ---
function animateOnScroll() {
    document.querySelectorAll('.section, .project-block, .formacion-card, .contact-card').forEach(el => {
        if (!el.classList.contains('scroll-animate')) {
            el.classList.add('scroll-animate');
        }
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
            el.classList.add('active');
        }
    });
}
document.addEventListener('DOMContentLoaded', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// --- Mostrar año actual en el footer ---
document.getElementById('current-year').textContent = new Date().getFullYear();