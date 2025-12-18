import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { firebaseConfig } from '../firebase-config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- Form Handling ---

async function handleFormSubmit(form, collectionName) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.timestamp = new Date();

    try {
        const docRef = await addDoc(collection(db, collectionName), data);
        console.log("Document written with ID: ", docRef.id);
        return true;
    } catch (e) {
        console.error("Error adding document: ", e);
        return false;
    }
}

export function initFormHandling() {
    // --- Offer Form ---
    const offerForm = document.getElementById('offer-form');
    const formFeedback = document.getElementById('form-feedback');

    if (offerForm) {
        offerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitButton = offerForm.querySelector('button');
            submitButton.disabled = true;
            submitButton.textContent = 'Отправка...';

            const success = await handleFormSubmit(offerForm, 'offer-requests');

            if (success) {
                formFeedback.textContent = 'Спасибо! Информация скоро будет на вашей почте.';
                formFeedback.style.color = 'green';
                offerForm.reset();
            } else {
                formFeedback.textContent = 'Ошибка отправки. Пожалуйста, попробуйте еще раз.';
                formFeedback.style.color = 'red';
            }
            
            submitButton.disabled = false;
            submitButton.textContent = 'Получить';
        });
    }

    // --- Contact Form ---
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const submitButton = contactForm.querySelector('button');
            submitButton.disabled = true;
            submitButton.textContent = 'Отправка...';

            const success = await handleFormSubmit(contactForm, 'contact-requests');

            if (success) {
                alert('Спасибо! Мы свяжемся с вами в ближайшее время.'); // Simple alert for now
                contactForm.reset();
            } else {
                alert('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
            }

            submitButton.disabled = false;
            submitButton.textContent = 'Отправить';
        });
    }
}
