// Простой скрипт для сравнения функциональности версий
// Запустить в консоли браузера на каждой версии

console.log('🔍 Проверка функциональности лендинга');

// Проверка загрузки элементов
const checks = {
    loader: !!document.querySelector('.loader'),
    cursorGlow: !!document.querySelector('.cursor-glow'),
    parallaxSections: document.querySelectorAll('.parallax').length,
    revealElements: document.querySelectorAll('.reveal').length,
    offerForm: !!document.getElementById('offer-form'),
    contactForm: !!document.getElementById('contact-form'),
    images: document.querySelectorAll('img').length
};

console.table(checks);

// Проверка CSS переменных
const rootStyles = getComputedStyle(document.documentElement);
const cssVars = {
    primaryColorStart: rootStyles.getPropertyValue('--primary-color-start'),
    primaryColorEnd: rootStyles.getPropertyValue('--primary-color-end'),
    fontHeading: rootStyles.getPropertyValue('--font-heading'),
    fontBody: rootStyles.getPropertyValue('--font-body')
};

console.log('🎨 CSS Variables:', cssVars);

// Проверка модулей (только для рефакторенной версии)
if (window.location.port === '8000') {
    console.log('📦 Модульная версия обнаружена');
    
    // Проверка импортов
    setTimeout(() => {
        const scripts = Array.from(document.querySelectorAll('script[type="module"]'));
        console.log('📜 Модульные скрипты:', scripts.length);
    }, 1000);
}

console.log('✅ Проверка завершена');