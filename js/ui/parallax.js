export function initParallax() {
    const parallaxSections = document.querySelectorAll('.parallax');
    if (!parallaxSections.length) return;

    // Set images initially
    parallaxSections.forEach(section => {
        const bg = section.dataset.bg; // Use dataset for cleaner access
        if (bg) {
            section.style.backgroundImage = `url(${bg})`;
        }
    });

    // Add scroll listener for parallax effect (optional, can be added later for more advanced effect)
    // For now, just setting the background is enough as per original code.
}
