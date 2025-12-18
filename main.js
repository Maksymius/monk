document.addEventListener('DOMContentLoaded', function() {

    // --- Loader ---
    const loader = document.querySelector('.loader');
    window.addEventListener('load', () => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    });

    // --- Cursor Glow ---
    const cursorGlow = document.querySelector('.cursor-glow');
    if (cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    }

    // --- Parallax Setup ---
    const parallaxSections = document.querySelectorAll('.parallax');
    parallaxSections.forEach(section => {
        const bg = section.getAttribute('data-bg');
        if (bg) {
            section.style.backgroundImage = `url(${bg})`;
        }
    });

    // --- Scroll-Triggered Animations ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- SIMPLE FORM HANDLING ---

    // Offer Form (Email subscription)
    const offerForm = document.getElementById('offer-form');
    if (offerForm) {
        offerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Спасибо! Информация скоро будет на вашей почте.');
            offerForm.reset();
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
            contactForm.reset();
        });
    }
});
