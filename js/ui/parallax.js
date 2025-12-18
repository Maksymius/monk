export function initParallax() {
    const parallaxSections = document.querySelectorAll('.parallax');
    if (!parallaxSections.length) return;

    // Set background images initially
    parallaxSections.forEach(section => {
        const bg = section.dataset.bg;
        if (bg) {
            section.style.backgroundImage = `url(${bg})`;
        }
    });

    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        parallaxSections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            // Only apply parallax when section is in viewport
            if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
                const speed = 0.3;
                const yPos = (scrolled - sectionTop) * speed;
                section.style.backgroundPositionY = `${yPos}px`;
            }
        });
    }

    // Optimized scroll handling
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', function() {
        requestTick();
        ticking = false;
    });

    // Initial update
    updateParallax();
}
