export function initCursorGlow() {
    const cursorGlow = document.querySelector('.cursor-glow');
    if (!cursorGlow) return;

    // Only activate for non-touch devices
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (hasTouch) {
        cursorGlow.style.display = 'none';
        return;
    }

    // Optimization: Add pointer-events: none via JS to ensure it doesn't block clicks
    cursorGlow.style.pointerEvents = 'none';

    document.addEventListener('mousemove', (e) => {
        // Use requestAnimationFrame for performance
        requestAnimationFrame(() => {
            // Use transform instead of top/left for better performance (hardware acceleration)
            cursorGlow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });
    });
}
