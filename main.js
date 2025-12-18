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

        document.addEventListener('mousedown', () => {
            cursorGlow.style.width = '15px';
            cursorGlow.style.height = '15px';
        });

        document.addEventListener('mouseup', () => {
            cursorGlow.style.width = '25px';
            cursorGlow.style.height = '25px';
        });
    }

    // --- Parallax Setup and Effect ---
    const parallaxSections = document.querySelectorAll('.parallax');
    parallaxSections.forEach(section => {
        const bg = section.getAttribute('data-bg');
        if (bg) {
            section.style.backgroundImage = `url(${bg})`;
        }
    });

    function smoothParallaxEffect() {
        if (window.innerWidth > 768) { // Only run on desktop
            parallaxSections.forEach(section => {
                const rect = section.getBoundingClientRect();
                // Check if the section is in the viewport
                if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
                    const speed = 0.4;
                    // Calculate the vertical position of the background
                    const yPos = (rect.top) * -speed;
                    section.style.backgroundPosition = `center ${yPos}px`;
                }
            });
        }
        requestAnimationFrame(smoothParallaxEffect);
    }
    
    // Start the parallax effect loop
    smoothParallaxEffect();


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

    // --- Form Validation ---
    const priceForm = document.getElementById('price-form');
    if(priceForm) {
        priceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
            priceForm.reset();
        });
    }

    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        const emailField = contactForm.querySelector('input[name="email"]');
        const phoneField = contactForm.querySelector('input[name="phone"]');
        const nameField = contactForm.querySelector('input[name="name"]');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            let isValid = true;

            // Reset invalid states
            [emailField, phoneField, nameField].forEach(field => field.classList.remove('invalid'));

            // Validate Name
            if (!nameField.value.trim()) {
                nameField.classList.add('invalid');
                isValid = false;
            }
            
            // Validate Email
            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (!emailField.value.trim() || !emailRegex.test(emailField.value)) {
                emailField.classList.add('invalid');
                isValid = false;
            }

            // Validate Phone
            if (!phoneField.value.trim()) {
                phoneField.classList.add('invalid');
                isValid = false;
            }

            if (isValid) {
                alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
                contactForm.reset();
            } 
        });
    }

});
