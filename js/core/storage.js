// js/core/storage.js

const STORAGE_KEY = 'Hola_Jordy_v2';

const defaultData = {
    points: 0,
    level: 1,
    streak: 1,
    lastActiveDate: null,
    completedLessons: [],
    srsCards: []
};

/**
 * Haalt de opgeslagen data op uit LocalStorage.
 * Valt terug op defaultData bij afwezigheid of fouten.
 */
function getStoredData() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return { ...defaultData };
        
        const parsed = JSON.parse(stored);
        return {
            ...defaultData,
            ...parsed,
            completedLessons: parsed.completedLessons || [],
            srsCards: parsed.srsCards || []
        };
    } catch (e) {
        console.error("Fout bij ophalen van LocalStorage:", e);
        return { ...defaultData };
    }
}

/**
 * Slaat het data-object op in LocalStorage.
 */
function saveStoredData(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.error("Fout bij opslaan in LocalStorage:", e);
    }
}

/**
 * Controleert en werkt de dagelijkse streak bij.
 */
function checkAndUpdateStreak() {
    let data = getStoredData();
    const today = new Date().toDateString();
    
    if (!data.lastActiveDate) {
        data.lastActiveDate = today;
        data.streak = 1;
    } else if (data.lastActiveDate !== today) {
        const lastDate = new Date(data.lastActiveDate);
        const currentDate = new Date();
        const diffTime = Math.abs(currentDate - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            data.streak = (data.streak || 0) + 1;
        } else if (diffDays > 1) {
            data.streak = 1;
        }
        data.lastActiveDate = today;
    }
    
    saveStoredData(data);
    updateHeaderStats();
}

/**
 * Registreert het voltooien van een les en slaat de hoogst behaalde score op.
 */
function recordLessonCompletion(lessonId, scorePercentage = 100) {
    let data = getStoredData();
    
    if (!data.completedLessons.includes(lessonId)) {
        data.completedLessons.push(lessonId);
    }
    
    // Houd de hoogst behaalde score bij per les
    if (!data.lessonScores) {
        data.lessonScores = {};
    }
    
    const currentHighScore = data.lessonScores[lessonId] || 0;
    if (scorePercentage > currentHighScore) {
        data.lessonScores[lessonId] = scorePercentage;
    }
    
    data.points = (data.points || 0) + Math.round(scorePercentage / 10);
    data.level = Math.floor(data.points / 100) + 1;
    
    saveStoredData(data);
    updateHeaderStats();
}

/**
 * Bepaalt de medaille en CSS-klasse op basis van de score.
 */
function getMedalClass(score) {
    if (score >= 100) return { key: 'gold', class: 'completed-gold', icon: '🥇' };
    if (score >= 80) return { key: 'silver', class: 'completed-silver', icon: '🥈' };
    if (score >= 60) return { key: 'bronze', class: 'completed-bronze', icon: '🥉' };
    return { key: 'none', class: '', icon: '✅' };
}


/**
 * Geeft de algemene voortgang van de gebruiker terug.
 */
function getUserProgress() {
    return getStoredData();
}

/**
 * Haalt alle kaarten op die in Box 1 zitten OF klaarstaan voor herhaling (nextReview <= nu).
 */
function getDueSrsCards() {
    const data = getStoredData();
    const now = new Date();
    
    return data.srsCards.filter(card => {
        // Controleer of de kaart in Box 1 zit
        const isBox1 = card.box === 1 || card.repetitions === 0 || card.interval === 1;
        
        // Controleer of de reviewdatum verstreken/vandaag is
        const isDue = !card.nextReview || new Date(card.nextReview) <= now;

        return isBox1 || isDue;
    });
}

/**
 * Werkt de visuele tellers in de header en de herhalingsbadge bij.
 */
function updateHeaderStats() {
    const data = getStoredData();
    const streakEl = document.getElementById('streak-count');
    const xpEl = document.getElementById('xp-count');
    
    // Zoekt het badge-element op (via ID of selector)
    const srsBadgeEl = document.getElementById('srs-count') 
                    || document.querySelector('#nav-srs .badge') 
                    || document.querySelector('button[onclick*="srs"] span');

    if (streakEl) streakEl.innerText = data.streak || 1;
    if (xpEl) xpEl.innerText = data.points || 0;

    // Bijwerken van de herhalingsbadge
    if (srsBadgeEl) {
        const dueCards = getDueSrsCards();
        srsBadgeEl.innerText = dueCards.length;
    }
}

/* ==========================================
   SRS (Spaced Repetition System) Logica
   ========================================== */

/**
 * Voegt een nieuwe kaart toe aan het SRS-systeem of werkt een bestaande bij.
 */
function addOrUpdateSrsCard(word, translation, difficulty = 'medium') {
    let data = getStoredData();
    const now = new Date();
    
    let cardIndex = data.srsCards.findIndex(c => c.word.toLowerCase() === word.toLowerCase());
    
    if (cardIndex > -1) {
        updateSrsCard(word, difficulty);
    } else {
        const newCard = {
            id: 'srs_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
            word: word,
            translation: translation,
            box: 1,
            interval: 1,
            repetitions: 0,
            easeFactor: 2.5,
            nextReview: now.toISOString()
        };
        data.srsCards.push(newCard);
        saveStoredData(data);
    }
    
    updateHeaderStats();
}

/**
 * Werkt de herhalingsinterval bij op basis van het antwoord (SM-2 algoritme).
 */
function updateSrsCard(word, performance) {
    let data = getStoredData();
    let card = data.srsCards.find(c => c.word.toLowerCase() === word.toLowerCase());
    
    if (!card) return;

    let score;
    switch (performance) {
        case 'easy': score = 5; break;
        case 'medium': score = 4; break;
        case 'hard': score = 3; break;
        case 'wrong': default: score = 1; break;
    }

    if (score >= 3) {
        if (card.repetitions === 0) {
            card.interval = 1;
        } else if (card.repetitions === 1) {
            card.interval = 6;
        } else {
            card.interval = Math.round(card.interval * card.easeFactor);
        }
        card.repetitions += 1;
        card.box = Math.min((card.box || 1) + 1, 5);
    } else {
        card.repetitions = 0;
        card.interval = 1;
        card.box = 1;
    }

    card.easeFactor = card.easeFactor + (0.1 - (5 - score) * (0.08 + (5 - score) * 0.02));
    if (card.easeFactor < 1.3) card.easeFactor = 1.3;

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + card.interval);
    card.nextReview = nextDate.toISOString();

    saveStoredData(data);
    updateHeaderStats();
}
