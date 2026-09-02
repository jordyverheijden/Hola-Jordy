// ==========================================
// SRS / FLASHCARDS LOGICA - srs.js
// ==========================================

let currentSrsCards = [];
let currentSrsIndex = 0;
let currentSrsMode = 'es-nl';
let isAnswerRevealed = false;

/**
 * Voegt woorden uit een les toe aan de SRS-database, maar voorkomt duplicaten.
 * Verwacht een array van objecten met minimaal een 'es' en 'nl' eigenschap.
 * @param {Array} wordList 
 */
function addWordsToSRS(wordList) {
    if (!Array.isArray(wordList) || wordList.length === 0) return;

    let data = typeof getStoredData === 'function' ? getStoredData() : { srsCards: [] };
    if (!data.srsCards) data.srsCards = [];

    let addedCount = 0;

    wordList.forEach(wordObj => {
        if (!wordObj.es || !wordObj.nl) return;

        // Controleer of dit woord al in de SRS-lijst staat (op basis van Spaanse woord, case-insensitive)
        const exists = data.srsCards.some(card => 
            (card.es || '').toLowerCase().trim() === (wordObj.es || '').toLowerCase().trim()
        );

        if (!exists) {
            data.srsCards.push({
                es: wordObj.es.trim(),
                nl: wordObj.nl.trim(),
                box: 1,
                nextReview: new Date().toISOString()
            });
            addedCount++;
        }
    });

    // Sla de opgeschoonde data weer op als er nieuwe woorden zijn toegevoegd
    if (addedCount > 0 && typeof saveStoredData === 'function') {
        saveStoredData(data);
    }
}



function renderSRSTab() {
    const data = typeof getStoredData === 'function' ? getStoredData() : { srsCards: [] };
    const cards = data.srsCards || [];
    const area = document.getElementById('flashcard-active-area');

    if (!area) return;

    if (cards.length === 0) {
        area.innerHTML = `
            <div style="background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius); padding: 2.5rem 1.5rem; text-align: center; box-shadow: var(--shadow);">
                <h3 style="color: var(--primary); font-size: 1.3rem; margin-bottom: 0.5rem;">🧠 Geen herhaalwoorden openstaan</h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; max-width: 400px; margin: 0 auto 1.5rem auto;">
                    Je hebt momenteel geen woorden die herhaald moeten worden. Maak lessen op het lespad of rond lessen af om je herhaallijst op te bouwen!
                </p>
                <button onclick="switchTab('path')" class="btn-primary" style="padding: 0.8rem 1.5rem;">
                    🚀 Ga naar het Lespad
                </button>
            </div>
        `;
        return;
    }

    currentSrsCards = cards;
    startFlashcardSession('es-nl');
}

function toggleSrsInfo() {
    const infoBox = document.getElementById('srs-info-box');
    const btn = document.getElementById('srs-info-toggle-btn');
    if (infoBox && btn) {
        if (infoBox.style.display === 'none') {
            infoBox.style.display = 'block';
            btn.innerText = '✖️ Sluit uitleg';
        } else {
            infoBox.style.display = 'none';
            btn.innerText = 'ℹ️ Hoe werkt het box-systeem?';
        }
    }
}



function startFlashcardSession(mode) {
    currentSrsMode = mode;
    currentSrsIndex = 0;
    isAnswerRevealed = false;
    renderFlashcard();
}

function renderFlashcard() {
    const area = document.getElementById('flashcard-active-area');
    if (!area) return;

    if (currentSrsIndex >= currentSrsCards.length) {
        area.innerHTML = `
            <div style="background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius); padding: 2rem; text-align: center; box-shadow: var(--shadow);">
                <h3 style="color: var(--success); margin-bottom: 0.5rem;">Gefeliciteerd! 🎉</h3>
                <p style="color: var(--text-muted);">Je hebt alle herhaalwoorden van deze sessie doorgenomen.</p>
                <button onclick="renderSRSTab()" class="btn-primary" style="margin-top: 1rem;">Opnieuw bekijken</button>
            </div>
        `;
        return;
    }

    const card = currentSrsCards[currentSrsIndex];

    const esText = card.es || 'Onbekend';
    const nlText = card.nl || 'Geen vertaling';

    const questionText = currentSrsMode === 'es-nl' ? esText : nlText;
    const answerText = currentSrsMode === 'es-nl' ? nlText : esText;
    
    // Correcte labels per oefenmodus
    const promptLabel = currentSrsMode === 'es-nl' 
        ? `Vertaal vanuit het Spaans:<br><span style="color: var(--primary); font-size: 1.6rem; font-weight: 800; display: inline-block; margin-top: 0.5rem;">${questionText}</span>` 
        : `Vertaal vanuit het Nederlands:<br><span style="color: var(--primary); font-size: 1.6rem; font-weight: 800; display: inline-block; margin-top: 0.5rem;">${questionText}</span>`;

    area.innerHTML = `
        <div style="background: var(--card-bg); border: 1px solid var(--border-color); border-radius: var(--radius); padding: 2rem; text-align: center; box-shadow: var(--shadow);">
            <span style="font-size: 0.85rem; color: var(--text-muted);">Kaart ${currentSrsIndex + 1} van ${currentSrsCards.length} (Box ${card.box || 1})</span>
            
            <h2 style="margin: 1.5rem 0 1rem 0; font-size: 1.1rem; color: var(--text-main);">${promptLabel}</h2>
            
            <div style="min-height: 50px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                ${isAnswerRevealed 
                    ? `<h2 style="color: var(--success); font-size: 1.6rem; font-weight: 800;">${answerText}</h2>`
                    : `<button onclick="revealFlashcardAnswer()" class="btn-secondary-outline" style="padding: 0.6rem 1.2rem;">👁️ Toon Antwoord</button>`
                }
            </div>

            ${isAnswerRevealed ? `
                <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem;">
                    <button onclick="handleFlashcardResult(false)" class="btn-secondary-outline" style="flex: 1; border-color: var(--primary); color: var(--primary);">
                        ❌ Fout / Moeilijk
                    </button>
                    <button onclick="handleFlashcardResult(true)" class="btn-primary" style="flex: 1; background: var(--success);">
                        ✔️ Goed / Makkelijk
                    </button>
                </div>
            ` : ''}
        </div>
    `;
}


function revealFlashcardAnswer() {
    isAnswerRevealed = true;
    renderFlashcard();
}

function handleFlashcardResult(isCorrect) {
    const card = currentSrsCards[currentSrsIndex];
    
    if (typeof updateWordSRS === 'function' && card.es) {
        updateWordSRS(card.es, isCorrect, currentSrsMode, card.nl);
    }

    currentSrsIndex++;
    isAnswerRevealed = false;
    renderFlashcard();
}

function updateWordSRS(spanishWord, isCorrect) {
    let data = typeof getStoredData === 'function' ? getStoredData() : { srsCards: [] };
    if (!data.srsCards) data.srsCards = [];

    const cardIndex = data.srsCards.findIndex(card => 
        (card.es || '').toLowerCase().trim() === (spanishWord || '').toLowerCase().trim()
    );

    if (cardIndex !== -1) {
        let card = data.srsCards[cardIndex];
        if (isCorrect) {
            // Verhoog box tot maximaal box 5
            card.box = Math.min((card.box || 1) + 1, 5);
        } else {
            // Terug naar box 1 bij fout
            card.box = 1;
        }
        card.nextReview = new Date().toISOString();
        data.srsCards[cardIndex] = card;
        
        if (typeof saveStoredData === 'function') {
            saveStoredData(data);
        }
    }
}
