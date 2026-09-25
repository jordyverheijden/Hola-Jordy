// js/app.js

document.addEventListener('DOMContentLoaded', () => {
    setupAuthListeners();
    setupDarkMode();
});

// Firebase Authenticatie status afhandeling
function setupAuthListeners() {
    const authScreen = document.getElementById('auth-screen');
    const emailInput = document.getElementById('auth-email');
    const passwordInput = document.getElementById('auth-password');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const errorField = document.getElementById('auth-error');

    if (loginBtn) {
        loginBtn.addEventListener('click', async () => {
            try {
                if (errorField) errorField.textContent = '';
                await auth.signInWithEmailAndPassword(emailInput.value, passwordInput.value);
            } catch (error) {
                if (errorField) errorField.textContent = error.message;
            }
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener('click', async () => {
            try {
                if (errorField) errorField.textContent = '';
                await auth.createUserWithEmailAndPassword(emailInput.value, passwordInput.value);
            } catch (error) {
                if (errorField) errorField.textContent = error.message;
            }
        });
    }

    if (typeof auth !== 'undefined') {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                if (authScreen) authScreen.style.display = 'none';
                console.log('Ingelogd als:', user.email);
                await initializeCloudStorage();
                initializeApp();
            } else {
                if (authScreen) authScreen.style.display = 'flex';
            }
        });
    } else {
        // Fallback als Firebase niet geladen is
        initializeApp();
    }
}

async function initializeApp() {
    // Aanroepen van functies uit andere bestanden (met veiligheidscheck)
    if (typeof checkAndUpdateStreak === 'function') await checkAndUpdateStreak();
    if (typeof setupNavigation === 'function') setupNavigation();
    if (typeof renderLearningPath === 'function') renderLearningPath();
    
    // Render de vaardigheden (met veiligheidscheck)
    if (typeof renderSkillsTab === 'function') {
        renderSkillsTab();
    }
    
    if (typeof renderSRSTab === 'function') renderSRSTab();
    if (typeof renderProfileTab === 'function') renderProfileTab();
    if (typeof updateHeaderStats === 'function') updateHeaderStats();
}

// Dark Mode Instellingen
function setupDarkMode() {
    const darkModeBtn = document.getElementById('dark-mode-toggle');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (darkModeBtn) darkModeBtn.innerText = '☀️';
    }

    if (darkModeBtn) {
        darkModeBtn.onclick = () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            darkModeBtn.innerText = isDark ? '☀️' : '🌙';
        };
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const forgotLink = document.getElementById('forgot-password-link');
    
    if (forgotLink) {
        forgotLink.addEventListener('click', async (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('login-email');
            const email = emailInput ? emailInput.value.trim() : '';

            if (!email) {
                alert('Vul eerst je e-mailadres in bij het e-mailveld en klik dan op "Wachtwoord vergeten?".');
                if (emailInput) emailInput.focus();
                return;
            }

            try {
                // Firebase methode om een herstelmail te sturen
                await firebase.auth().sendPasswordResetEmail(email);
                alert('Er is een e-mail verzonden om je wachtwoord te resetten. Controleer ook je spamfolder!');
            } catch (error) {
                console.error("Fout bij verzenden reset-mail:", error);
                
                if (error.code === 'auth/user-not-found') {
                    alert('Er is geen account bekend met dit e-mailadres.');
                } else if (error.code === 'auth/invalid-email') {
                    alert('Het ingevulde e-mailadres is ongeldig.');
                } else {
                    alert('Er is iets misgegaan: ' + error.message);
                }
            }
        });
    }
});
