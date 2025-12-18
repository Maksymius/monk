import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
import { db } from '../firebase-config.js';

// --- Form Handling ---

async function handleFormSubmit(form, collectionName) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.timestamp = new Date();

    console.log('Attempting to submit form data:', data);
    console.log('Collection name:', collectionName);
    console.log('Database instance:', db);

    try {
        const docRef = await addDoc(collection(db, collectionName), data);
        console.log("✅ Document written with ID: ", docRef.id);
        return { success: true, id: docRef.id };
    } catch (e) {
        console.error("❌ Error adding document: ", e);
        return { success: false, error: e.message };
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

            const result = await handleFormSubmit(offerForm, 'offer-requests');

            if (result.success) {
                formFeedback.textContent = 'Спасибо! Информация скоро будет на вашей почте.';
                formFeedback.style.color = 'green';
                offerForm.reset();
                console.log('✅ Offer form submitted successfully:', result.id);
            } else {
                formFeedback.textContent = `Ошибка отправки: ${result.error}`;
                formFeedback.style.color = 'red';
                console.error('❌ Offer form submission failed:', result.error);
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

            const result = await handleFormSubmit(contactForm, 'contact-requests');

            if (result.success) {
                alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
                contactForm.reset();
                console.log('✅ Contact form submitted successfully:', result.id);
            } else {
                alert(`Произошла ошибка при отправке: ${result.error}`);
                console.error('❌ Contact form submission failed:', result.error);
            }

            submitButton.disabled = false;
            submitButton.textContent = 'Отправить';
        });
    }
}
