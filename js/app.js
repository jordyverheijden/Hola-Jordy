// js/app.js

document.addEventListener('DOMContentLoaded', () => {
    setupAuthListeners();
    setupDarkMode();
    setupForgotPassword();
});

// Firebase Authenticatie status afhandeling
function setupAuthListeners() {
    const loginContainer = document.getElementById('login-container');
    const appContainer = document.getElementById('app-container');
    
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const loginBtn = document.getElementById('login-submit-btn');
    const registerBtn = document.getElementById('register-toggle-btn');
    const errorField = document.getElementById('auth-error-message');

    if (loginBtn) {
        loginBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            try {
                if (errorField) {
                    errorField.textContent = '';
                    errorField.style.display = 'none';
                }
                await firebase.auth().signInWithEmailAndPassword(emailInput.value, passwordInput.value);
            } catch (error) {
                if (errorField) {
                    errorField.textContent = error.message;
                    errorField.style.display = 'block';
                }
            }
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            try {
                if (errorField) {
                    errorField.textContent = '';
                    errorField.style.display = 'none';
                }
                await firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value);
            } catch (error) {
                if (errorField) {
                    errorField.textContent = error.message;
                    errorField.style.display = 'block';
                }
            }
        });
    }

    if (typeof firebase.auth !== 'undefined') {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                // Wel ingelogd: Verberg inlogscherm, toon de app container
                if (loginContainer) loginContainer.style.display = 'none';
                if (appContainer) appContainer.style.display = 'block';
                
                console.log('Ingelogd als:', user.email);
                if (typeof initializeCloudStorage === 'function') await initializeCloudStorage();
                initializeApp();
            } else {
                // Niet ingelogd: Toon inlogscherm, verberg de app container
                if (loginContainer) loginContainer.style.display = 'flex';
                if (appContainer) appContainer.style.display = 'none';
            }
        });
    } else {
        // Fallback als Firebase niet geladen is
        if (appContainer) appContainer.style.display = 'block';
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

// Wachtwoord vergeten functionaliteit
function setupForgotPassword() {
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
}
