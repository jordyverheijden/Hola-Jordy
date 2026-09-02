document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupDarkMode();
});

function initializeApp() {
    // Aanroepen van functies uit andere bestanden (met veiligheidscheck)
    if (typeof checkAndUpdateStreak === 'function') checkAndUpdateStreak();
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
        // Zorg dat we oude listeners voorkomen en klik direct registreren
        darkModeBtn.onclick = () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            darkModeBtn.innerText = isDark ? '☀️' : '🌙';
        };
    }
}

