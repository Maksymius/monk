export function initParallax() {
    const parallaxSections = document.querySelectorAll('.parallax');
    if (!parallaxSections.length) return;

    const parallaxSpeed = 0.3; // Adjust this value for stronger/weaker parallax

    function updateParallax() {
        parallaxSections.forEach(section => {
            const bg = section.dataset.bg;
            if (bg) {
                // Ensure background image is set
                if (!section.style.backgroundImage) {
                    section.style.backgroundImage = `url(${bg})`;
                }

                const rect = section.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                // Calculate how much of the section is visible
                const scrollPosition = window.pageYOffset;
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                // Calculate background Y position
                // When the section is in the middle of the viewport, position should be 50%
                // When it's at the top, it moves down, when at the bottom, it moves up
                const yPos = (sectionTop - scrollPosition) * parallaxSpeed;
                
                // Apply transform for smoother animation (hardware accelerated)
                // Using transformY for parallax effect
                section.style.backgroundPositionY = `${yPos}px`;
            }
        });
    }

    // Initial update
    updateParallax();

    // Update on scroll and resize
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    });

    window.addEventListener('resize', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    });
}
