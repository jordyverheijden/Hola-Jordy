function renderProfileTab() {
    const container = document.getElementById('profile-container');
    if (!container) return;
    
    const data = getStoredData();

    container.innerHTML = `
        <div class="profile-cards-grid" style="margin-bottom: 2rem;">
            <div class="stat-card"><span>⭐ Totale Punten</span><h3>${data.points}</h3></div>
            <div class="stat-card"><span>🔥 Huidige Streak</span><h3>${data.streak} dagen</h3></div>
            <div class="stat-card"><span>📚 Voltooide Lessen</span><h3>${data.completedLessons.length}</h3></div>
        </div>

        <div class="quiz-card-container">
            <details style="cursor: pointer;">
                <summary style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; outline: none; list-style: none;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <h3 style="color: var(--primary); margin: 0;">🚀 Versiegeschiedenis & Features</h3>
                        <span style="font-size: 0.8rem; color: var(--text-muted);">(Klik om open te klappen)</span>
                    </div>
                    <span style="background: var(--primary); color: #FFF; padding: 0.2rem 0.6rem; border-radius: 8px; font-size: 0.8rem; font-weight: 700;">v1.5</span>
                </summary>
                
                <div style="display: flex; flex-direction: column; gap: 1.5rem; font-size: 0.95rem; line-height: 1.5; margin-top: 1rem; border-top: 2px solid var(--border-color); padding-top: 1rem;">
                    <!-- VERSIE 1.5 -->
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <strong style="color: var(--text-main);">✨ Versie 1.5 (Huidige release)</strong>
                            <span style="font-size: 0.75rem; color: var(--text-muted);">25 september 2026</span>
                        </div>
                        <ul style="padding-left: 1.2rem; margin-top: 0.3rem; color: var(--text-muted);">
                            <li><b>Navigatie & Architectuur:</b> Harmonisatie van tab-functies en opruimen van dubbele initialisatie voor stabielere prestaties.</li>
                            <li><b>Leertraject & Medaille-styling:</b> Dynamische kleuren en icoontjes per les op basis van scores (goud, zilver, brons) en slim openklappen van actieve modules.</li>
                            <li><b>Theorie & Quiz Integratie:</b> Verbeterde weergave van spiekbriefjes, woordenlijsten en soepele overgangen naar oefensessies.</li>
                        </ul>
                    </div>

                    <!-- VERSIE 1.4 -->
                    <div style="border-top: 1px dashed var(--border-color); padding-top: 1rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <strong style="color: var(--text-main);">✨ Versie 1.4</strong>
                            <span style="font-size: 0.75rem; color: var(--text-muted);">7 augustus 2026</span>
                        </div>
                        <ul style="padding-left: 1.2rem; margin-top: 0.3rem; color: var(--text-muted);">
                            <li><b>Schrijf- & Luistervaardigheid:</b> Integratie van interactieve schrijfopdrachten met modelantwoorden en geoptimaliseerde luistervragen.</li>
                            <li><b>Weergave Theorie & Spiekbriefjes:</b> Ondersteuning voor spiekbriefjes (cheat sheets) en woordenlijsten direct op het theoriescherm.</li>
                        </ul>
                    </div>

                    <!-- VERSIE 1.3 -->
                    <div style="border-top: 1px dashed var(--border-color); padding-top: 1rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <strong style="color: var(--text-main);">✨ Versie 1.3</strong>
                            <span style="font-size: 0.75rem; color: var(--text-muted);">5 augustus 2026</span>
                        </div>
                        <ul style="padding-left: 1.2rem; margin-top: 0.3rem; color: var(--text-muted);">
                            <li><b>Inklapbare Versiegeschiedenis:</b> Overzichtelijk weggestopt in het profiel met automatische AI-update-trigger.</li>
                            <li><b>Nachtstand Hersteld:</b> Dark mode knop werkt nu feilloos via directe onclick-koppeling.</li>
                            <li><b>Navigatie Fixes:</b> Terugknop bij vaardigheden brengt je nu correct terug naar het hoofdscherm van de vaardigheden.</li>
                        </ul>
                    </div>

                    <!-- VERSIE 1.2 -->
                    <div style="border-top: 1px dashed var(--border-color); padding-top: 1rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <strong style="color: var(--text-main);">✨ Versie 1.2</strong>
                            <span style="font-size: 0.75rem; color: var(--text-muted);">4 augustus 2026</span>
                        </div>
                        <ul style="padding-left: 1.2rem; margin-top: 0.3rem; color: var(--text-muted);">
                            <li><b>Vaardigheden Tab:</b> Volledig vernieuwd met een directe en snelle weergave van alle skill-kaarten.</li>
                            <li><b>Leesvaardigheid (📖):</b> Woordenschat vervangen door praktische lees- en begrippoefeningen.</li>
                        </ul>
                    </div>

                    <!-- VERSIE 1.0 -->
                    <div style="border-top: 1px dashed var(--border-color); padding-top: 1rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <strong style="color: var(--text-main);">⚡ Versie 1.0</strong>
                            <span style="font-size: 0.75rem; color: var(--text-muted);">31 juli 2026</span>
                        </div>
                        <ul style="padding-left: 1.2rem; margin-top: 0.3rem; color: var(--text-muted);">
                            <li><b>SRS Flashcard Trainer:</b> Slim herhalen van moeilijke woorden met box-niveaus.</li>
                            <li><b>Versiebeheer:</b> Inzicht in alle updates direct vanuit je profiel.</li>
                        </ul>
                    </div>
                </div>
            </details>
        </div>
    `;
}

/* 
  ================================================================================
  🤖 AI_AUTO_CHANGELOG_TRIGGER: 
  PROJECT: Hola-Espanol-Jordy (A1 Cursus)
  CURRENT_VERSION: 1.5
  INSTRUCTIONS FOR AI: When this block is provided in context, automatically extract 
  the latest changes, increment the minor version by 0.1 (unless major rewrite), 
  and generate a new changelog entry.
  ================================================================================
*/
