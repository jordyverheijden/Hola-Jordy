let currentQuizQueue = [];
let currentQuizIndex = 0;
let currentQuizScore = 0;
let totalMistakesCount = 0;
let currentQuestionAttempts = 1;
let currentLessonData = null; // Veilig gedefinieerd

function triggerFullscreenConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 120,
            spread: 100,
            origin: { y: 0.5 },
            zIndex: 9999
        });
    }
}

function playSpanishAudio(textToSpeak) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = 'es-ES';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Je browser ondersteunt helaas geen audio-spraak.");
    }
}

function normalizeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function normalizeSentence(text) {
    if (!text) return '';
    return text
        .toLowerCase()
        .replace(/[.,?!¡¿]/g, '')
        .trim()
        .replace(/\s+/g, ' ');
}

function normalizeScramble(text) {
    if (!text) return '';
    return text
        .toLowerCase()
        .replace(/[.,?!¡¿]/g, '')
        .replace(/\s+/g, '');
}

function startQuizSession(lesson) {
    window.currentLessonId = lesson.id;
    currentLessonData = lesson;
    currentQuizIndex = 0;
    currentQuizScore = 0;
    totalMistakesCount = 0;

    const rawQuizzes = lesson.quizzes || lesson.questionBank || [];
    
    if (rawQuizzes.length === 0) {
        alert("Geen vragen gevonden voor deze les!");
        return;
    }

    currentQuizQueue = [...rawQuizzes].sort(() => Math.random() - 0.5);

    if (typeof switchTab === 'function') {
        switchTab('quiz');
    }
    renderQuizStep();
}

function renderQuizStep() {
    const box = document.getElementById('quiz-card-box');
    if (!box) return;

    const quitBtn = document.getElementById('quiz-quit-btn');
    if (quitBtn) quitBtn.onclick = quitQuiz;

    const theoryQuitBtn = document.getElementById('theory-quit-btn');
    if (theoryQuitBtn) theoryQuitBtn.onclick = quitQuiz;

    if (currentQuizIndex >= currentQuizQueue.length) {
        finishQuiz();
        return;
    }

    currentQuestionAttempts = 1;

    const qData = currentQuizQueue[currentQuizIndex];
    const progressPercent = (currentQuizIndex / currentQuizQueue.length) * 100;
    
    const progressFill = document.getElementById('quiz-progress-fill');
    const stepCounter = document.getElementById('quiz-step-counter');

    if (progressFill) progressFill.style.width = `${progressPercent}%`;
    if (stepCounter) stepCounter.innerText = `${currentQuizIndex + 1} / ${currentQuizQueue.length}`;

    box.innerHTML = `
        <h3 style="margin-bottom: 1.25rem; font-size: 1.1rem; line-height: 1.5;">${qData.question}</h3>
        <div id="quiz-options-area"></div>
        <div id="quiz-feedback-area" style="margin-top: 1rem;"></div>
    `;
    const inputArea = document.getElementById('quiz-options-area');

    // ==========================================
    // SCHRIJFVAARDIGHEID LOGICA
    // ==========================================
    if (qData.type === 'writing') {
        const writingBox = document.createElement('div');
        writingBox.style.cssText = 'display: flex; flex-direction: column; gap: 1rem;';

        if (qData.hint) {
            const hintBtn = document.createElement('button');
            hintBtn.type = 'button';
            hintBtn.style.cssText = 'background: none; border: none; color: var(--text-muted); font-size: 0.85rem; padding: 0; margin-bottom: 0.8rem; cursor: pointer; display: flex; align-items: center; gap: 0.3rem;';
            hintBtn.innerHTML = '💡 <span>Toon hint</span>';
            
            hintBtn.onclick = function() {
                this.innerHTML = `💡 <i>${qData.hint}</i>`;
                this.style.cursor = 'default';
                this.onclick = null;
            };
            writingBox.appendChild(hintBtn);
        }

        const textArea = document.createElement('textarea');
        textArea.id = 'writing-input-field';
        textArea.className = 'quiz-input';
        textArea.rows = 3;
        textArea.placeholder = 'Typ hier je Spaanse zin...';
        textArea.style.cssText = 'width: 100%; padding: 0.8rem; border-radius: 8px; border: 1px solid var(--border-color); font-size: 1rem; box-sizing: border-box; resize: vertical;';

        const submitBtn = document.createElement('button');
        submitBtn.className = 'btn-primary';
        submitBtn.style.cssText = 'width: 100%; cursor: pointer;';
        submitBtn.innerText = 'Controleer antwoord';

        const feedbackSection = document.createElement('div');
        feedbackSection.style.cssText = 'display: none; margin-top: 1rem; background: var(--bg-main, #f8fafc); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color);';

        submitBtn.addEventListener('click', () => {
            const val = textArea.value.trim();
            if (!val) {
                alert("Typ eerst een antwoord in!");
                return;
            }

            textArea.disabled = true;
            submitBtn.style.display = 'none';

            let keywordFeedback = '';
            if (qData.keywords && Array.isArray(qData.keywords)) {
                const cleanInput = normalizeAccents(val);
                const foundKeywords = qData.keywords.filter(kw => cleanInput.includes(normalizeAccents(kw)));
                const missingKeywords = qData.keywords.filter(kw => !cleanInput.includes(normalizeAccents(kw)));

                keywordFeedback = `
                    <div style="margin-bottom: 0.75rem; font-size: 0.85rem;">
                        <b>Sleutelwoorden check:</b><br>
                        ${foundKeywords.map(kw => `<span style="color: var(--success, #2e7d32); margin-right: 0.5rem;">✅ ${kw}</span>`).join('')}
                        ${missingKeywords.map(kw => `<span style="color: var(--primary, #c62828); margin-right: 0.5rem;">❌ ${kw}</span>`).join('')}
                    </div>
                `;
            }

            feedbackSection.innerHTML = `
                <h4 style="margin-bottom: 0.5rem; color: var(--primary);">✨ Modelantwoord:</h4>
                <div style="background: var(--card-bg, #fff); padding: 0.75rem; border-radius: 6px; border: 1px solid var(--border-color); font-weight: 600; margin-bottom: 0.75rem; color: var(--text-main);">
                    ${qData.modelAnswer}
                </div>
                ${keywordFeedback}
                <p style="font-size: 0.9rem; margin-bottom: 0.75rem;">Vergelijk jouw antwoord met het modelantwoord. Klopt je zin?</p>
                <div style="display: flex; gap: 0.5rem;">
                    <button id="self-correct-btn" class="btn-primary" style="flex: 1; background: var(--success, #2e7d32); cursor: pointer;">✅ Goed / Vrijwel goed</button>
                    <button id="self-incorrect-btn" class="btn-secondary-outline" style="flex: 1; border-color: var(--primary, #c62828); color: var(--primary, #c62828); cursor: pointer;">❌ Niet goed</button>
                </div>
            `;
            feedbackSection.style.display = 'block';

            document.getElementById('self-correct-btn').onclick = () => {
                const earnedPoints = (currentQuestionAttempts === 1) ? 1 : 0.5;
                currentQuizScore += earnedPoints;
                showSuccessPopup();
            };

            document.getElementById('self-incorrect-btn').onclick = () => {
                totalMistakesCount++;
                showMistakeFeedback(qData, qData.modelAnswer);
            };
        });

        writingBox.appendChild(textArea);
        writingBox.appendChild(submitBtn);
        writingBox.appendChild(feedbackSection);
        inputArea.appendChild(writingBox);
        return;
    }

    // ==========================================
    // MULTIPLE CHOICE / LEZEN / LUISTEREN
    // ==========================================
    if (qData.type === 'multiple-choice' || qData.type === 'reading' || qData.type === 'listening' || (qData.options && qData.type !== 'word-scramble')) {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'quiz-options';
        
        if (qData.type === 'listening') {
            const audioBox = document.createElement('div');
            audioBox.style.cssText = 'background: rgba(198, 40, 40, 0.05); padding: 1.25rem; border-radius: 10px; margin-bottom: 1.25rem; border: 1px solid var(--primary); text-align: center;';
            
            const textMatch = qData.question.match(/'([^']+)'/);
            const textToPlay = textMatch ? textMatch[1] : (qData.correctAnswer || (qData.options ? qData.options[qData.correctIndex] : ''));

            const title = document.createElement('p');
            title.style.cssText = 'font-size: 0.95rem; margin-bottom: 0.75rem; font-weight: 600; color: var(--text-main);';
            title.innerText = '🎧 Luistertoets: Typ of kies het juiste antwoord';
            audioBox.appendChild(title);

            const playBtn = document.createElement('button');
            playBtn.className = 'btn-primary';
            playBtn.style.cssText = 'background: var(--primary); padding: 0.7rem 1.4rem; font-size: 1rem; margin-bottom: 0.75rem; cursor: pointer;';
            playBtn.innerText = '🔊 Beluister Audio';
            playBtn.addEventListener('click', () => {
                playSpanishAudio(textToPlay);
            });
            audioBox.appendChild(playBtn);

            const hintContainer = document.createElement('div');
            const hintBtn = document.createElement('button');
            hintBtn.className = 'btn-secondary-outline';
            hintBtn.style.cssText = 'font-size: 0.8rem; padding: 0.3rem 0.6rem; background: var(--card-bg); cursor: pointer;';
            hintBtn.innerText = '👁️ Toon tekst (Spiekbriefje)';
            
            const hintDiv = document.createElement('div');
            hintDiv.style.cssText = 'display: none; background: var(--card-bg); padding: 0.6rem; border-radius: 6px; border: 1px dashed var(--border-color); font-style: italic; color: var(--text-muted); margin-top: 0.5rem; font-size: 0.9rem;';
            hintDiv.innerText = `"${textToPlay}"`;

            hintBtn.addEventListener('click', () => {
                const isHidden = hintDiv.style.display === 'none';
                hintDiv.style.display = isHidden ? 'block' : 'none';
                hintBtn.innerText = isHidden ? '🙈 Verberg tekst' : '👁️ Toon tekst (Spiekbriefje)';
            });

            hintContainer.appendChild(hintBtn);
            hintContainer.appendChild(hintDiv);
            audioBox.appendChild(hintContainer);
            inputArea.appendChild(audioBox);

            if (!qData.options) {
                const inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.className = 'quiz-input';
                inputField.placeholder = 'Typ wat je gehoord hebt...';
                inputField.style.marginTop = '1rem';

                const submitBtn = document.createElement('button');
                submitBtn.className = 'btn-primary';
                submitBtn.style.cssText = 'width: 100%; margin-top: 0.75rem; cursor: pointer;';
                submitBtn.innerText = 'Controleer antwoord';

                submitBtn.addEventListener('click', () => {
                    const val = inputField.value.trim();
                    const correctVal = (qData.correctAnswer || '').trim();
                    const isCorrect = (val.toLowerCase() === correctVal.toLowerCase());

                    if (isCorrect) {
                        submitBtn.disabled = true;
                        inputField.disabled = true;
                        inputField.style.borderColor = 'var(--success)';
                        
                        const earnedPoints = (currentQuestionAttempts === 1) ? 1 : 0.5;
                        currentQuizScore += earnedPoints;

                        showSuccessPopup();
                    } else {
                        if (currentQuestionAttempts === 1) {
                            currentQuestionAttempts = 2;
                            totalMistakesCount++;
                            showFirstMistakeTip(qData, val);
                        } else {
                            submitBtn.disabled = true;
                            inputField.disabled = true;
                            inputField.style.borderColor = 'var(--primary)';

                            totalMistakesCount++;
                            showMistakeFeedback(qData, qData.correctAnswer);
                        }
                    }
                });

                inputArea.appendChild(inputField);
                inputArea.appendChild(submitBtn);
                return; 
            }
        }

        if (qData.options) {
            qData.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = 'quiz-option-btn';
                btn.innerText = opt;
                btn.disabled = false;
                
                btn.addEventListener('click', () => {
                    const correctVal = (qData.correctAnswer || qData.options[qData.correctIndex] || '').trim().toLowerCase();
                    const isCorrect = (opt.trim().toLowerCase() === correctVal) || (qData.correctIndex === idx);
                    
                    if (isCorrect) {
                        optionsDiv.querySelectorAll('button').forEach((b, bIdx) => {
                            b.disabled = true;
                            if (b.innerText.trim().toLowerCase() === correctVal || bIdx === qData.correctIndex) {
                                b.classList.add('correct');
                            }
                        });

                        const earnedPoints = (currentQuestionAttempts === 1) ? 1 : 0.5;
                        currentQuizScore += earnedPoints;

                        showSuccessPopup();
                    } else {
                        if (currentQuestionAttempts === 1) {
                            currentQuestionAttempts = 2;
                            btn.classList.add('incorrect');
                            btn.disabled = true;
                            totalMistakesCount++;
                            showFirstMistakeTip(qData, opt);
                        } else {
                            optionsDiv.querySelectorAll('button').forEach((b, bIdx) => {
                                b.disabled = true;
                                if (b.innerText.trim().toLowerCase() === correctVal || bIdx === qData.correctIndex) {
                                    b.classList.add('correct');
                                }
                            });
                            btn.classList.add('incorrect');

                            totalMistakesCount++;
                            showMistakeFeedback(qData, correctVal);
                        }
                    }
                });
                optionsDiv.appendChild(btn);
            });
            inputArea.appendChild(optionsDiv);
        }
    } 
    // ==========================================
    // WORD-SCRAMBLE LOGICA
    // ==========================================
    else if (qData.type === 'word-scramble') {
        let selectedWords = [];
        let availableWords = [...(qData.shuffledWords || [])].sort(() => Math.random() - 0.5);

        const containerDiv = document.createElement('div');
        containerDiv.innerHTML = `
            <div id="target-sentence-box" style="min-height: 52px; border: 2px dashed var(--border-color); border-radius: 10px; padding: 0.5rem; display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; margin-bottom: 1.25rem; background: var(--bg);">
                <span style="color: var(--text-muted); font-size: 0.85rem; width: 100%; text-align: center;" id="placeholder-text">Tik op de woorden om ze hier te plaatsen</span>
            </div>
            <div id="source-words-box" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;"></div>
            <button id="check-scramble-btn" class="btn-primary" style="width: 100%;" disabled>Controleer antwoord</button>
        `;
        inputArea.appendChild(containerDiv);

        const targetBox = document.getElementById('target-sentence-box');
        const sourceBox = document.getElementById('source-words-box');
        const checkBtn = document.getElementById('check-scramble-btn');

        function updateScrambleUI() {
            targetBox.innerHTML = '';
            if (selectedWords.length === 0) {
                targetBox.innerHTML = '<span style="color: var(--text-muted); font-size: 0.85rem; width: 100%; text-align: center;">Tik op de woorden om ze hier te plaatsen</span>';
            } else {
                selectedWords.forEach((item, idx) => {
                    const chip = document.createElement('button');
                    chip.className = 'btn-secondary-outline';
                    chip.style.cssText = 'background: var(--card-bg); border-color: var(--primary); color: var(--primary); padding: 0.4rem 0.8rem; font-weight: 600; cursor: pointer;';
                    chip.innerText = item.word;
                    chip.onclick = () => {
                        selectedWords.splice(idx, 1);
                        availableWords.push(item);
                        updateScrambleUI();
                    };
                    targetBox.appendChild(chip);
                });
            }

            sourceBox.innerHTML = '';
            availableWords.forEach((item, idx) => {
                const chip = document.createElement('button');
                chip.className = 'btn-secondary-outline';
                chip.style.cssText = 'background: var(--card-bg); padding: 0.4rem 0.8rem; font-weight: 600; cursor: pointer;';
                chip.innerText = item.word;
                chip.onclick = () => {
                    availableWords.splice(idx, 1);
                    selectedWords.push(item);
                    updateScrambleUI();
                };
                sourceBox.appendChild(chip);
            });

            checkBtn.disabled = selectedWords.length === 0;
            checkBtn.style.opacity = selectedWords.length === 0 ? '0.5' : '1';
        }

        availableWords = availableWords.map((w, i) => ({ id: i, word: w }));
        updateScrambleUI();

        checkBtn.onclick = () => {
            const userSentence = selectedWords.map(i => (i.word || '').trim()).join(' ');
            const correctSentence = qData.correctSentence || qData.correctAnswer || '';
            
            const cleanUser = normalizeScramble(userSentence);
            const cleanCorrect = normalizeScramble(correctSentence);
            
            const isCorrect = (cleanUser === cleanCorrect);

            if (isCorrect) {
                checkBtn.disabled = true;
                const earnedPoints = (currentQuestionAttempts === 1) ? 1 : 0.5;
                currentQuizScore += earnedPoints;

                showSuccessPopup();
            } else {
                if (currentQuestionAttempts === 1) {
                    currentQuestionAttempts = 2;
                    totalMistakesCount++;
                    showFirstMistakeTip(qData, userSentence);
                } else {
                    checkBtn.disabled = true;
                    totalMistakesCount++;
                    showMistakeFeedback(qData, correctSentence);
                }
            }
        };
    } 
    // ==========================================
    // STANDAARD TYP- / SPREEKVRAGEN
    // ==========================================
    else {
        if (qData.type === 'speaking') {
            const micNotice = document.createElement('div');
            micNotice.style.cssText = 'background: rgba(198, 40, 40, 0.05); padding: 1rem; border-radius: 10px; margin-bottom: 1rem; font-size: 0.9rem; border: 1px solid var(--primary); text-align: center;';
            micNotice.innerHTML = `
                <p style="margin-bottom: 0.75rem; font-weight: 600; color: var(--primary);">🎤 Spreekopdracht: Spreek de correcte zin luid en duidelijk in.</p>
                <button id="speech-mic-btn" class="btn-primary" style="padding: 0.6rem 1.2rem; font-size: 0.95rem; background: var(--primary);">🎙️ Start Microfoon</button>
            `;
            inputArea.appendChild(micNotice);

            setTimeout(() => {
                const micBtn = document.getElementById('speech-mic-btn');
                const targetInput = document.getElementById('speaking-input-field');
                if (micBtn && targetInput) {
                    micBtn.onclick = () => {
                        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                        if (!SpeechRecognition) {
                            alert("Je browser ondersteunt geen spraakherkenning. Gebruik Google Chrome.");
                            return;
                        }

                        const recognition = new SpeechRecognition();
                        recognition.lang = 'es-ES';
                        recognition.interimResults = false;
                        recognition.maxAlternatives = 1;

                        micBtn.innerText = '🔴 Luisteren... (Praat nu)';
                        micBtn.style.background = '#d32f2f';

                        recognition.onresult = (event) => {
                            const speechResult = event.results[0][0].transcript;
                            targetInput.value = speechResult;
                            micBtn.innerText = '🎙️ Opnieuw inspreken';
                            micBtn.style.background = 'var(--primary)';
                        };

                        recognition.onerror = () => {
                            micBtn.innerText = '🎙️ Start Microfoon';
                            micBtn.style.background = 'var(--primary)';
                        };

                        recognition.onend = () => {
                            micBtn.innerText = '🎙️ Start Microfoon';
                            micBtn.style.background = 'var(--primary)';
                        };

                        recognition.start();
                    };
                }
            }, 50);
        }

        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.id = 'speaking-input-field';
        inputField.className = 'quiz-input';
        inputField.placeholder = qData.type === 'speaking' ? 'Typ of spreek je antwoord in...' : 'Typ je antwoord hier...';
        
        const submitBtn = document.createElement('button');
        submitBtn.className = 'btn-primary';
        submitBtn.style.width = '100%';
        submitBtn.innerText = 'Controleer antwoord';
        
        submitBtn.addEventListener('click', () => {
            const val = inputField.value;
            let validAnswers = [];
            if (Array.isArray(qData.correctAnswers)) {
                validAnswers = qData.correctAnswers;
            } else if (qData.correctAnswer) {
                validAnswers = [qData.correctAnswer];
            }
            const isCorrect = validAnswers.some(correct => normalizeSentence(val) === normalizeSentence(correct));

            if (isCorrect) {
                submitBtn.disabled = true;
                inputField.disabled = true;
                inputField.style.borderColor = 'var(--success)';
                
                const earnedPoints = (currentQuestionAttempts === 1) ? 1 : 0.5;
                currentQuizScore += earnedPoints;

                showSuccessPopup();
            } else {
                if (currentQuestionAttempts === 1) {
                    currentQuestionAttempts = 2;
                    totalMistakesCount++;
                    showFirstMistakeTip(qData, val);
                } else {
                    submitBtn.disabled = true;
                    inputField.disabled = true;
                    inputField.style.borderColor = 'var(--primary)';

                    totalMistakesCount++;
                    showMistakeFeedback(qData, qData.correctAnswer);
                }
            }
        });

        inputArea.appendChild(inputField);
        inputArea.appendChild(submitBtn);
    }
}

function showFirstMistakeTip(qData, userAttempt = '') {
    const feedbackArea = document.getElementById('quiz-feedback-area');
    if (!feedbackArea) return;

    const correctVal = (qData.correctAnswer || qData.correctSentence || qData.options?.[qData.correctIndex] || '');
    const cleanUser = normalizeAccents(userAttempt);
    const cleanCorrect = normalizeAccents(correctVal);
    
    const isOnlyAccentMistake = userAttempt && correctVal && (cleanUser === cleanCorrect);

    let hintText = '';
    if (isOnlyAccentMistake) {
        hintText = `💡 <b>Tip:</b> Je hebt het woord nagenoeg goed gespeld, maar de fout zit in het <b>accentteken (´)</b>!`;
    } else {
        hintText = qData.hint ? `💡 <b>Tip:</b> ${qData.hint}` : `💡 <b>Tip:</b> Let goed op de spelling of vervoeging.`;
    }

    feedbackArea.innerHTML = `
        <div style="background: #FFF3E0; border: 1px solid #FFA726; padding: 0.85rem; border-radius: 10px; color: #E65100; font-size: 0.95rem; line-height: 1.4;">
            <b>Oeps, bijna goed!</b> Probeer het nog eens.<br>${hintText}
        </div>
    `;
}

function showSuccessPopup() {
    triggerFullscreenConfetti();

    const box = document.getElementById('quiz-card-box');
    if (!box) return;

    const popupDiv = document.createElement('div');
    popupDiv.style.cssText = 'position: fixed; bottom: 0; left: 0; width: 100%; background: #E8F5E9; border-top: 3px solid var(--success); padding: 1.5rem; box-shadow: 0 -4px 20px rgba(0,0,0,0.15); z-index: 1000; text-align: center; animation: slideUp 0.3s ease-out;';
    popupDiv.innerHTML = `
        <h3 style="color: var(--success); margin-bottom: 0.3rem; font-size: 1.3rem;">Geweldig! 🎉</h3>
        <p style="color: var(--text-main); margin-bottom: 1rem; font-size: 0.95rem;">Je hebt dit antwoord goed.</p>
        <button id="popup-next-btn" class="btn-primary" style="background: var(--success); width: 100%; max-width: 400px; padding: 0.85rem; font-size: 1rem;">Volgende vraag →</button>
    `;
    document.body.appendChild(popupDiv);

    document.getElementById('popup-next-btn').onclick = () => {
        popupDiv.remove();
        currentQuizIndex++;
        renderQuizStep();
    };
}

function showMistakeFeedback(qData, correctVal = null) {
    const feedbackArea = document.getElementById('quiz-feedback-area');
    if (!feedbackArea) return;

    const correctText = correctVal || qData.correctAnswer || qData.options[qData.correctIndex] || qData.correctSentence;

    feedbackArea.innerHTML = `
        <div style="background: #FFEBEE; border: 1px solid var(--primary); padding: 1rem; border-radius: 10px; color: var(--primary); font-size: 0.95rem; margin-bottom: 1rem; line-height: 1.5;">
            <b>Helaas, weer onjuist!</b><br>💡 <b>Juiste antwoord:</b> ${correctText}
        </div>
        <button id="next-after-error-btn" class="btn-primary" style="width: 100%; background: var(--text-muted);">Volgende vraag →</button>
    `;

    document.getElementById('next-after-error-btn').onclick = () => {
        currentQuizIndex++;
        renderQuizStep();
    };
}

function finishQuiz() {
    const box = document.getElementById('quiz-card-box');
    if (!box) return;

    const totalQ = currentQuizQueue.length;
    const percentage = Math.round((currentQuizScore / totalQ) * 100);
    const passingGrade = 60; 

    if (percentage < passingGrade) {
        box.innerHTML = `
            <h2 style="color: var(--primary); margin-bottom: 0.5rem;">Helaas, niet gehaald (${percentage}%)</h2>
            <p style="margin-bottom: 1.5rem; color: var(--text-muted);">Je hebt te veel punten laten liggen om deze les te halen. Probeer het nog eens om je score te verbeteren!</p>
            <button id="retry-lesson-btn" class="btn-primary" style="width: 100%; margin-bottom: 0.75rem;">Opnieuw proberen 🔄</button>
            <button id="finish-back-btn" class="btn-secondary-outline" style="width: 100%;">Terug naar het pad</button>
        `;
        document.getElementById('retry-lesson-btn').onclick = () => startQuizSession(currentLessonData);
        document.getElementById('finish-back-btn').onclick = () => { if (typeof renderLearningPath === 'function') renderLearningPath(); if (typeof switchTab === 'function') switchTab('path'); };
        return;
    }

    let medal = '🥉 Brons';
    let medalColor = '#CD7F32';
    if (percentage === 100) {
        medal = '🥇 Goud (100%)';
        medalColor = '#FFD700';
    } else if (percentage >= 80) {
        medal = '🥈 Zilver';
        medalColor = '#C0C0C0';
    }

    if (currentLessonData && currentLessonData.vocabulary && typeof addWordsToSRS === 'function') {
        addWordsToSRS(currentLessonData.vocabulary);
    }

    const lessonIdToSave = currentLessonData?.id || window.currentLessonId;
    
    // Alleen recordLessonCompletion aanroepen; deze regelt puntenopbouw en cloud-sync via storage.js feilloos zonder dubbeltelling!
    if (typeof recordLessonCompletion === 'function') {
        recordLessonCompletion(lessonIdToSave, percentage);
    }

    triggerFullscreenConfetti();

    box.innerHTML = `
        <h2 style="color: var(--success); margin-bottom: 0.3rem;">Les Gehaald! 🎉</h2>
        <div style="font-size: 1.2rem; font-weight: 700; color: ${medalColor}; margin-bottom: 0.5rem;">Behaalde medaille: ${medal}</div>
        <p style="margin-bottom: 1.5rem; color: var(--text-muted);">Score: ${percentage}% correct. Je hebt punten verdiend!</p>
        <button id="finish-back-btn" class="btn-primary" style="width: 100%;">Terug naar het pad 🗺️</button>
    `;
    
    document.getElementById('finish-back-btn').onclick = () => {
        if (typeof renderLearningPath === 'function') renderLearningPath();
        if (typeof switchTab === 'function') switchTab('path');
    };
}

function quitQuiz() {
    if (typeof renderLearningPath === 'function') renderLearningPath();
    if (typeof switchTab === 'function') switchTab('path');
}

// Helper om de skills data van het actieve niveau op te halen
function getActiveSkillData(skillType) {
    const level = (window.currentLevel || 'a1').toUpperCase();
    const varName = `skill${skillType}${level}`;
    
    if (window[varName] && Array.isArray(window[varName])) {
        return window[varName];
    }
    
    const skillsObj = level === 'A2' ? window.a2Skills : window.a1Skills;
    if (skillsObj && skillsObj[skillType.toLowerCase()]) {
        return skillsObj[skillType.toLowerCase()];
    }

    return [];
}

function renderLeesvaardigheidLessen() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    const level = (window.currentLevel || 'a1').toUpperCase();
    const data = getActiveSkillData('Leesvaardigheid');

    let html = `
        <div style="grid-column: 1 / -1; margin-bottom: 0.5rem;">
            <button onclick="switchTab('skills')" class="btn-secondary-outline" style="margin-bottom: 1rem; padding: 0.4rem 0.8rem; font-size: 0.85rem;">← Terug naar Skills</button>
            <h2 style="color: var(--primary); margin-bottom: 0.2rem;">📖 Leesvaardigheid ${level}</h2>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Kies een les om te beginnen met examentraining:</p>
        </div>
    `;

    if (data.length === 0) {
        html += `<p>Geen leeslessen beschikbaar voor niveau ${level}.</p>`;
        container.innerHTML = html;
        return;
    }

    data.forEach((les, index) => {
        const titleText = les.title && les.title.includes(': ') ? les.title.split(': ')[1] : (les.title || 'Naamloze les');
        html += `
            <div class="skill-card" style="cursor: pointer; text-align: left;" onclick='startRandomLeesLes(${index})'>
                <div class="skill-icon">📄</div>
                <div class="skill-info">
                    <span class="skill-category">Les ${index + 1}</span>
                    <h3>${titleText}</h3>
                    <p>${les.description || ''}</p>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}
