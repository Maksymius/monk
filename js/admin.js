import { auth, db } from './firebase-config.js';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { collection, query, orderBy, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { initCursorGlow } from './ui/cursor.js';

const loginSection = document.getElementById('login-section');
const adminDashboard = document.getElementById('admin-dashboard');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const logoutBtn = document.getElementById('logout-btn');
const tableHead = document.getElementById('table-head');
const tableBody = document.getElementById('table-body');
const tabButtons = document.querySelectorAll('.tab-btn');

let currentTab = 'contact-requests';

// Initialize UI elements that are common
document.addEventListener('DOMContentLoaded', () => {
    // Optionally disable cursor glow on admin page if it's too laggy
    // or just ensure it's initialized correctly.
    // Comment out initCursorGlow() below if you want to remove it completely from admin
    initCursorGlow();
});

// Check Auth State
onAuthStateChanged(auth, (user) => {
    if (user) {
        showDashboard();
    } else {
        showLogin();
    }
});

// Login Handler
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    try {
        await signInWithEmailAndPassword(auth, email, password);
        loginError.textContent = '';
    } catch (error) {
        loginError.textContent = 'Ошибка входа: ' + error.message;
    }
});

// Logout Handler
logoutBtn.addEventListener('click', () => {
    signOut(auth);
});

// Tab Switching
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTab = btn.dataset.type;
        fetchAndRenderData();
    });
});

function showDashboard() {
    loginSection.style.display = 'none';
    adminDashboard.style.display = 'block';
    fetchAndRenderData();
}

function showLogin() {
    loginSection.style.display = 'block';
    adminDashboard.style.display = 'none';
}

async function fetchAndRenderData() {
    tableBody.innerHTML = '<tr><td colspan="5">Загрузка...</td></tr>';
    
    try {
        const q = query(collection(db, currentTab), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        
        renderTable(querySnapshot);
    } catch (error) {
        console.error("Error fetching data: ", error);
        tableBody.innerHTML = `<tr><td colspan="5">Ошибка загрузки данных: ${error.message}</td></tr>`;
    }
}

function renderTable(snapshot) {
    tableHead.innerHTML = '';
    tableBody.innerHTML = '';

    if (snapshot.empty) {
        tableBody.innerHTML = '<tr><td colspan="5">Заявок пока нет</td></tr>';
        return;
    }

    // Set Headers
    const headers = currentTab === 'contact-requests' 
        ? ['Имя', 'Email', 'Телефон', 'Дата'] 
        : ['Email', 'Дата'];
    
    headers.forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        tableHead.appendChild(th);
    });

    // Fill Rows
    snapshot.forEach((doc) => {
        const data = doc.data();
        const tr = document.createElement('tr');
        const date = data.timestamp ? new Date(data.timestamp.seconds * 1000).toLocaleString('ru-RU') : '---';

        if (currentTab === 'contact-requests') {
            tr.innerHTML = `
                <td>${data.name || '---'}</td>
                <td>${data.email || '---'}</td>
                <td>${data.phone || '---'}</td>
                <td>${date}</td>
            `;
        } else {
            tr.innerHTML = `
                <td>${data.email || '---'}</td>
                <td>${date}</td>
            `;
        }
        tableBody.appendChild(tr);
    });
}
