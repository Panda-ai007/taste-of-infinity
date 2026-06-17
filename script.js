// ===============================
// MOBILE MENU TOGGLE
// ===============================

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {

    menuToggle.addEventListener('click', () => {

        if (navLinks.style.display === 'flex') {

            navLinks.style.display = 'none';

        } else {

            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.right = '20px';
            navLinks.style.background = '#111';
            navLinks.style.padding = '20px';
            navLinks.style.borderRadius = '10px';
            navLinks.style.gap = '15px';
            navLinks.style.zIndex = '9999';

        }

    });

}

// ===============================
// CLOSE MOBILE MENU ON CLICK
// ===============================

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', () => {

        if (window.innerWidth <= 768) {

            navLinks.style.display = 'none';

        }

    });

});

// ===============================
// HEADER SHADOW ON SCROLL
// ===============================

window.addEventListener('scroll', () => {

    const header = document.querySelector('.header');

    if (window.scrollY > 50) {

        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.4)';

    } else {

        header.style.boxShadow = 'none';

    }

});

// ===============================
// FADE-IN ANIMATION
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

        }

    });

}, {
    threshold: 0.1
});

document.querySelectorAll(
    '.feature-card, .menu-card, .gallery-item, .contact-box, .catering-box'
).forEach(el => {

    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease';

    observer.observe(el);

});

// ===============================
// CURRENT YEAR IN FOOTER
// ===============================

const footer = document.querySelector('.footer p');

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Taste of Infinity. All Rights Reserved.`;

}

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
    "Taste of Infinity Website Loaded Successfully"
);