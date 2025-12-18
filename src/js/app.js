// Главный файл. Координирует все модули.

import { initLoader } from './ui/loader.js';
import { initCursorGlow } from './ui/cursor.js';
import { initParallax } from './ui/parallax.js';
import { initReveal } from './ui/reveal.js';
import { initFormHandling } from './firebase/forms.js';

document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initCursorGlow();
    initParallax();
    initReveal();
    initFormHandling(); 
});
