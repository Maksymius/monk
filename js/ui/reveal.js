export function initReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve after revealing to save resources
                revealObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1 
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}
