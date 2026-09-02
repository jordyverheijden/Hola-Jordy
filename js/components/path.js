function renderLearningPath() {
    const container = document.getElementById('learning-path-container');
    if (!container) return;
    
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.width = '100%';
    container.style.boxSizing = 'border-box';
    container.innerHTML = '';

    


    const activeLevel = (window.currentLevel || 'a1').toLowerCase();

// 1. Rode welkomstbanner
    const welcomeBanner = document.createElement('div');
    welcomeBanner.className = 'welcome-banner';
    welcomeBanner.style.cssText = 'background: #e11d48; color: white; padding: 1.5rem; border-radius: 16px; margin-bottom: 1.5rem; text-align: left;';
    welcomeBanner.innerHTML = `
        <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 0.5rem; color: white;">Jouw Spaanse Avontuur (${activeLevel.toUpperCase()})</h2>
        <p style="font-size: 0.95rem; opacity: 0.95; margin: 0; line-height: 1.4;">Volg het pad, behaal medailles en beheers de Spaanse taal stap voor stap.</p>
    `;
    container.appendChild(welcomeBanner);

    // Update eventuele statische level-banners als die in de HTML staan
    const levelBannerTitle = document.querySelector('.level-banner-title');
    if (levelBannerTitle) {
        levelBannerTitle.innerText = `Jouw Spaanse Avontuur (${activeLevel.toUpperCase()})`;
    }

    // ==========================================
    // B1 COMING SOON MELDING
    // ==========================================
    if (activeLevel === 'b1') {
        const comingSoon = document.createElement('div');
        comingSoon.innerHTML = `
            <div class="coming-soon-card" style="padding: 2rem; text-align: center; background: var(--card-bg, #fff); border-radius: var(--radius, 16px); border: 1px solid var(--border-color, #e2e8f0); margin-top: 1rem;">
                <div class="coming-soon-icon" style="font-size: 3rem; margin-bottom: 0.5rem;">🚀</div>
                <h2 style="color: var(--primary, #e11d48); margin-bottom: 0.5rem;">B1 Lessen zijn onderweg!</h2>
                <p style="color: var(--text-muted, #64748b);">We leggen momenteel de laatste hand aan de B1-modules. Binnenkort beschikbaar!</p>
            </div>
        `;
        container.appendChild(comingSoon);
        return;
    }

    if (typeof getAllLessons !== 'function') {
        const err = document.createElement('p');
        err.innerText = 'Lessen-loader niet gevonden.';
        container.appendChild(err);
        return;
    }

    // 1. Haal alle lessen op
    const allLessons = getAllLessons();
    
    // 2. Strikte filtering op niveau
    const lessons = allLessons.filter(lesson => {
        const idLower = (lesson.id || '').toLowerCase();
        const levelLower = (lesson.level || '').toLowerCase();

        if (levelLower) {
            return levelLower === activeLevel;
        }
        if (idLower.startsWith(activeLevel)) {
            return true;
        }
        // Fallback: toe-eigenen aan A1 als het geen A2/B1 prefix heeft
        if (activeLevel === 'a1' && !idLower.startsWith('a2') && !idLower.startsWith('b1')) {
            return true;
        }
        return false;
    });

    if (!lessons || lessons.length === 0) {
        const emptyCard = document.createElement('div');
        emptyCard.innerHTML = `
            <div class="coming-soon-card" style="padding: 2rem; text-align: center; background: var(--card-bg, #fff); border-radius: var(--radius, 16px); border: 1px solid var(--border-color, #e2e8f0); margin-top: 1rem;">
                <div class="coming-soon-icon" style="font-size: 3rem; margin-bottom: 0.5rem;">🚧</div>
                <h2 style="color: var(--primary, #e11d48); margin-bottom: 0.5rem;">Niveau ${activeLevel.toUpperCase()}</h2>
                <p style="color: var(--text-muted, #64748b);">Geen lessen gevonden voor dit niveau.</p>
            </div>
        `;
        container.appendChild(emptyCard);
        return;
    }

    // 3. Unieke groepering per module en niveau
    const modulesMap = {};

    lessons.forEach((lesson, idx) => {
        let modId = lesson.moduleId || lesson.module;

        if (!modId) {
            const checkString = `${lesson.id || ''} ${lesson.title || ''} ${lesson.moduleTitle || ''}`;
            const match = checkString.match(/(?:module|mod|m)\s*[-_]?\s*(\d+)/i);
            if (match) {
                modId = parseInt(match[1], 10);
            }
        }

        if (!modId) {
            modId = Math.floor(idx / 5) + 1;
        }

        const uniqueModKey = `${activeLevel}_mod_${modId}`;
        const modTitle = lesson.chapterTitle || lesson.moduleTitle || `Module ${modId}`;

        if (!modulesMap[uniqueModKey]) {
            modulesMap[uniqueModKey] = {
                id: modId,
                title: modTitle,
                lessons: []
            };
        }
        modulesMap[uniqueModKey].lessons.push(lesson);
    });

    // Voortgang ophalen
    let userProgress = { completedLessons: [] };
    if (typeof getUserProgress === 'function') {
        userProgress = getUserProgress() || userProgress;
    } else if (typeof getProgress === 'function') {
        userProgress = getProgress() || userProgress;
    } else if (typeof state !== 'undefined' && state.userProgress) {
        userProgress = state.userProgress;
    }

    const completedLessonIds = userProgress.completedLessons || [];
    const sortedKeys = Object.keys(modulesMap).sort((a, b) => modulesMap[a].id - modulesMap[b].id);

// Bepaal welke module als eerste een onvoltooide les heeft
let activeModuleIndex = sortedKeys.findIndex(key => {
    const moduleData = modulesMap[key];
    return moduleData.lessons.some(lesson => !completedLessonIds.includes(lesson.id));
});

// Als alles al gehaald is (of geen onvoltooide modules), open dan de laatste module
if (activeModuleIndex === -1 && sortedKeys.length > 0) {
    activeModuleIndex = sortedKeys.length - 1;
}


    // 4. Bouw de module-accordeons op
    sortedKeys.forEach((key, index) => {
        const moduleData = modulesMap[key];
        const moduleCard = document.createElement('div');
        moduleCard.className = 'module-accordion-card';
        moduleCard.style.marginBottom = '1rem';
        moduleCard.style.background = 'var(--card-bg, #fff)';
        moduleCard.style.borderRadius = 'var(--radius, 16px)';
        moduleCard.style.border = '1px solid var(--border-color, #e2e8f0)';
        moduleCard.style.overflow = 'hidden';

        const header = document.createElement('div');
        header.className = 'module-header';
        header.style.padding = '1rem 1.25rem';
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.cursor = 'pointer';
        header.style.fontWeight = '700';
        header.style.color = 'var(--primary, #e11d48)';

        const isOpenInitially = index === activeModuleIndex;

        header.innerHTML = `
            <span>${moduleData.title}</span>
            <span class="accordion-icon" style="color: #e11d48;">${isOpenInitially ? '▲' : '▼'}</span>
        `;

        const content = document.createElement('div');
        content.className = 'module-content';
        content.style.display = isOpenInitially ? 'block' : 'none';
        content.style.padding = '0 1.25rem 1.25rem 1.25rem';

        header.addEventListener('click', () => {
            const isVisible = content.style.display === 'block';
            content.style.display = isVisible ? 'none' : 'block';
            header.querySelector('.accordion-icon').textContent = isVisible ? '▼' : '▲';
        });

        moduleData.lessons.forEach((lesson) => {
    const isCompleted = completedLessonIds.includes(lesson.id);
    
    const data = typeof getStoredData === 'function' ? getStoredData() : { lessonScores: {} };
    const score = data.lessonScores ? (data.lessonScores[lesson.id] || 0) : 0;
    const medal = getMedalClass(score);

    const lessonRow = document.createElement('div');
    lessonRow.classList.add('path-lesson-row');
    if (medal && medal.class) {
        lessonRow.classList.add(medal.class);
    }

    // --- BASISTIJL VOOR HET BLOK ---
    lessonRow.style.display = 'flex';
    lessonRow.style.justifyContent = 'space-between';
    lessonRow.style.alignItems = 'center';
    lessonRow.style.padding = '1rem';
    lessonRow.style.marginBottom = '0.75rem';
    lessonRow.style.borderRadius = '12px';
    lessonRow.style.border = '1px solid #e2e8f0';

    // --- KLEUR INSTELLEN OP BASIS VAN DE MEDAILLE ---
    if (score >= 90) {
        // Goud
        lessonRow.style.backgroundColor = '#fef3c7';
        lessonRow.style.borderColor = '#f59e0b';
    } else if (score >= 75) {
        // Zilver
        lessonRow.style.backgroundColor = '#f1f5f9';
        lessonRow.style.borderColor = '#94a3b8';
    } else if (score >= 50) {
        // Brons
        lessonRow.style.backgroundColor = '#ffedd5';
        lessonRow.style.borderColor = '#ea580c';
    } else {
        // Standaard / Niet behaald
        lessonRow.style.backgroundColor = '#ffffff';
    }

    lessonRow.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="font-size: 1.5rem;">${isCompleted ? medal.icon : '📖'}</span>
            <div>
                <div style="font-weight: 600; font-size: 0.95rem; color: #1e293b;">${lesson.title || lesson.name}</div>
                <div style="font-size: 0.8rem; color: #64748b;">${lesson.description || ''}</div>
            </div>
        </div>
        <button class="btn btn-primary start-lesson-btn" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; background-color: #e11d48; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">
            ${isCompleted ? 'Herhalen' : 'Start'}
        </button>
    `;



    


            const startBtn = lessonRow.querySelector('.start-lesson-btn');
startBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    
    // --- VOEG DIT BOVENAAN TOE (ALTIJD OPSLAAN) ---
    window.currentLessonId = lesson.id;
    const fullLesson = typeof getLessonById === 'function' ? getLessonById(lesson.id) : lesson;
    window.currentLessonData = fullLesson; // <-- Deze stond eerst te diep ingeklapt!

    if (!fullLesson) {
        alert("Les kon niet geladen worden.");
        return;
    }

    const activeCheatSheet = fullLesson.cheatSheet || fullLesson.cheatsheet;

    if (fullLesson.theory || activeCheatSheet || fullLesson.vocabulary) {
        // Rest van je theorie-logica...

                    window.currentLessonData = fullLesson;
                    
                    const theoryTitle = document.getElementById('lesson-theory-title');
                    const theoryContent = document.getElementById('lesson-theory-content');
                    
                    if (theoryTitle && theoryContent) {
                        theoryTitle.innerText = `📖 ${fullLesson.title || fullLesson.name}`;
                        
                        let htmlContent = fullLesson.theory ? `<div class="theory-section">${fullLesson.theory}</div>` : '';
                        
                        if (activeCheatSheet) {
                            htmlContent += `
                                <div class="cheatsheet-section" style="margin-top: 1.5rem; background: var(--card-bg, #f8fafc); border: 1px solid var(--border-color, #e2e8f0); padding: 1rem; border-radius: 12px;">
                                    <h3 style="color: var(--primary, #e11d48); margin-bottom: 0.5rem; font-size: 1rem;">💡 Spiekbrief</h3>
                                    <div>${activeCheatSheet}</div>
                                </div>
                            `;
                        }

                        if (fullLesson.vocabulary && fullLesson.vocabulary.length > 0) {
                            const vocabRows = fullLesson.vocabulary.map(item => `
                                <tr style="border-bottom: 1px solid var(--border-color, #e2e8f0);">
                                    <td style="padding: 0.5rem; font-weight: 600;">${item.es || item.spanish}</td>
                                    <td style="padding: 0.5rem;">${item.nl || item.dutch}</td>
                                </tr>
                            `).join('');

                            htmlContent += `
                                <div class="vocab-section" style="margin-top: 1.5rem;">
                                    <h3 style="color: var(--primary, #e11d48); margin-bottom: 0.5rem; font-size: 1rem;">📚 Woordenlijst</h3>
                                    <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                                        <thead>
                                            <tr style="text-align: left; background: var(--border-color, #f1f5f9);">
                                                <th style="padding: 0.5rem;">Spaans</th>
                                                <th style="padding: 0.5rem;">Nederlands</th>
                                            </tr>
                                        </thead>
                                        <tbody>${vocabRows}</tbody>
                                    </table>
                                </div>
                            `;
                        }

                        theoryContent.innerHTML = htmlContent;
                        
                        let startQuizBtn = document.getElementById('start-quiz-from-theory');
                        if (!startQuizBtn) {
                            startQuizBtn = document.createElement('button');
                            startQuizBtn.id = 'start-quiz-from-theory';
                            startQuizBtn.className = 'btn-primary';
                            startQuizBtn.style.cssText = 'width: 100%; margin-top: 1.5rem; cursor: pointer; padding: 0.8rem; font-weight: bold; background-color: #e11d48; color: white; border: none; border-radius: 8px;';
                            theoryContent.parentNode.appendChild(startQuizBtn);
                        }
                        startQuizBtn.innerText = 'Start oefening →';
                        startQuizBtn.onclick = () => {
                            if (typeof startQuizSession === 'function') {
                                startQuizSession(fullLesson);
                            }
                        };
                    }
                    
                    if (typeof switchTab === 'function') {
                        switchTab('theory');
                    }
                } else {
                    if (typeof startQuizSession === 'function') {
                        startQuizSession(fullLesson);
                    }
                }
            });

            content.appendChild(lessonRow);
        });

        moduleCard.appendChild(header);
        moduleCard.appendChild(content);
        container.appendChild(moduleCard);
    });
}
