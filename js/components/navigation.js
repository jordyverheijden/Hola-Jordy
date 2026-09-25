// Globale variabele om het actieve niveau en de tab bij te houden
window.currentLevel = 'a1';
let currentActiveTab = 'path';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
});

function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Vind de geklikte knop (ook als er op het icoon/badge geklikt wordt)
            const targetBtn = e.target.closest('.nav-btn');
            if (!targetBtn) return;

            const tabName = targetBtn.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    // Zorg ervoor dat het niveau synchroon staat bij eerste geladen pagina
    updateLevelVisibility();
}

function switchTab(tabName) {
    currentActiveTab = tabName;

    // 1. Update actieve knop in de navigatiebalk
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        if (btn.getAttribute('data-tab') === tabName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 2. Update zichtbare tab-content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    const activeTargetContent = document.getElementById(`tab-${tabName}`);
    if (activeTargetContent) {
        activeTargetContent.classList.add('active');
    }

    // 3. Specifieke tab-logica uitvoeren bij het openen (aangepast naar renderSkillsTab voor consistentie)
    if (tabName === 'path') {
        if (typeof renderLearningPath === 'function') {
            renderLearningPath();
        }
    } else if (tabName === 'skills') {
        if (typeof renderSkillsTab === 'function') {
            renderSkillsTab();
        }
    } else if (tabName === 'srs') {
        if (typeof renderSRSTab === 'function') {
            renderSRSTab();
        }
    } else if (tabName === 'profile') {
        if (typeof renderProfileTab === 'function') {
            renderProfileTab();
        }
    }

    // 4. Niveau-weergave opnieuw toepassen op de nieuw geopende tab
    updateLevelVisibility();

    // 5. Header-statistieken verversen
    if (typeof updateHeaderStats === 'function') {
        updateHeaderStats();
    }
}

function switchLevel(level) {
    window.currentLevel = level.toLowerCase();

    // Synchroniseer de waarde in de header dropdown
    const selectEl = document.getElementById('level-select');
    if (selectEl) {
        selectEl.value = window.currentLevel;
    }

    // Pas de titel in de rode header-kaart dynamisch aan
    const heroTitle = document.querySelector('.hero-card h1, .hero-card h2, #hero-title, .path-hero-title');
    if (heroTitle) {
        heroTitle.innerText = `Jouw Spaanse Avontuur (${window.currentLevel.toUpperCase()})`;
    }

    if (typeof updateLevelVisibility === 'function') {
        updateLevelVisibility();
    }

    // Herteken het lespad of de vaardigheden
    const activeTab = window.currentActiveTab || 'path';
    if (activeTab === 'path' && typeof renderLearningPath === 'function') {
        renderLearningPath();
    } else if (activeTab === 'skills' && typeof renderSkillsTab === 'function') {
        renderSkillsTab();
    }
}

function updateLevelVisibility() {
    const activeLevel = window.currentLevel || 'a1';

    // 1. Verberg of toon alleen de specifieke niveau-content wrappers
    const levelWrappers = document.querySelectorAll('.a1-level-wrapper, .a2-level-wrapper, .b1-level-wrapper');
    levelWrappers.forEach(el => {
        if (el.classList.contains(`${activeLevel}-level-wrapper`)) {
            el.classList.remove('hidden-content');
            el.style.display = '';
        } else {
            el.classList.add('hidden-content');
            el.style.display = 'none';
        }
    });

    // 2. Zorg ervoor dat de header-wrapper altijd zichtbaar blijft
    const headerWrapper = document.querySelector('.user-level-wrapper');
    if (headerWrapper) {
        headerWrapper.classList.remove('hidden-content');
        headerWrapper.style.display = '';
    }
}

// Alleen event listeners voor knoppen die specifiek bij navigatie/quiz-stop horen
document.addEventListener('DOMContentLoaded', () => {
    // Event listener voor de Stoppen / Terug-knoppen
    const quitBtn = document.getElementById('quiz-quit-btn');
    if (quitBtn) {
        quitBtn.addEventListener('click', () => switchTab('path'));
    }

    const theoryQuitBtn = document.getElementById('theory-quit-btn');
    if (theoryQuitBtn) {
        theoryQuitBtn.addEventListener('click', () => switchTab('path'));
    }
});
