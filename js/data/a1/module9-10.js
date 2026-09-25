window.LESSONS_DATA = window.LESSONS_DATA || [];

window.LESSONS_DATA.push(
  /* =========================================================================
     MODULE 9: Vrije tijd, Hobbies & Weer (50+ Vragenbank)
     ========================================================================= */
  {
    id: "a1_m9_l1",
    chapterTitle: "Module 9: Vrije tijd & Weer",
    title: "1. Hobbies & Het Werkwoord GUSTAR (Leuk vinden)",
    description: "Duik in je vrije tijd! Ontdek hoe je met 'me gusta' al je favoriete hobby's en passies deelt in het Spaans.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "Me gusta", nl: "Ik vind ... leuk", example: "Me gusta viajar." },
      { es: "El tiempo libre", nl: "De vrije tijd", example: "En mi tiempo libre leo." },
      { es: "Escuchar música", nl: "Naar muziek luisteren", example: "Me gusta escuchar música." },
      { es: "Practicar deporte", nl: "Sporten", example: "Practico deporte los martes." },
      { es: "Leer un libro", nl: "Een boek lezen", example: "Me gusta leer un libro en casa." },
      { es: "Ver la televisión", nl: "Televisie kijken", example: "Por la noche veo la televisión." },
      { es: "Bailar", nl: "Dansen", example: "Me gusta bailar salsa." },
      { es: "Cantar", nl: "Zingen", example: "Canta muy bien." },
      { es: "La naturaleza", nl: "De natuur", example: "Disfruto de la naturaleza." },
      { es: "Pintar", nl: "Schilderen", example: "Pinta paisajes." },
      { es: "Cocinar", nl: "Koken", example: "Me gusta cocinar para amigos." },
      { es: "La fotografía", nl: "De fotografie", example: "La fotografía es mi pasión." },
      { es: "Nadar", nl: "Zwemmen", example: "Nadamos en el mar." },
      { es: "Viajar", nl: "Reizen", example: "Viajar abre la mente." },
      { es: "El cine", nl: "De bioscoop", example: "Vamos al cine los domingos." },
      { es: "El teatro", nl: "Het theater", example: "Vemos una obra de teatro." },
      { es: "El concierto", nl: "Het concert", example: "El concierto de rock es genial." },
      { es: "Jugar", nl: "Spelen", example: "Jugamos a las cartas." }
    ],
    cheatsheet: `
      <h4>Hoe werkt GUSTAR?</h4>
      <p>Je zegt niet letterlijk 'ik vind leuk', maar <i>'het bevalt mij'</i>. Gebruik <b>Me gusta</b> + heel werkwoord (bijv. <i>Me gusta leer</i> = lezen vind ik leuk).</p>
      <p>Bij meervoudige woorden gebruik je <b>Me gustan</b> (bijv. <i>Me gustan los libros</i>).</p>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Hoe zeg je 'Ik vind reizen leuk'?", options: ["Me gusta viajar", "Quiero viajar", "Tengo viajar", "Voy viajar"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Vrije tijd' naar het Spaans:", correctAnswer: "El tiempo libre" },
      { type: "multiple-choice", question: "Wat betekent 'Escuchar música'?", options: ["Naar muziek luisteren", "Muziek maken", "Zingen", "Dansen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Sporten'", correctAnswer: "Practicar deporte" },
      { type: "word-scramble", question: "Zet in volgorde: 'Ik vind het leuk om te lezen'", shuffledWords: ["leer", "gusta", "Me"], correctSentence: "Me gusta leer" },
      { type: "multiple-choice", question: "Wat gebruik je bij een meervoudig object achter gustar?", options: ["Me gusta", "Me gustan", "Me gusto", "Me gustas"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Ik hou van muziek'", correctAnswer: "Me gusta la música" },
      { type: "multiple-choice", question: "Wat betekent 'Practicar deporte'?", options: ["Sporten", "Lezen", "Reizen", "Werken"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'In mijn vrije tijd'", correctAnswer: "En mi tiempo libre" },
      { type: "word-scramble", question: "Zet in volgorde: 'Vrije tijd'", shuffledWords: ["libre", "tiempo", "El"], correctSentence: "El tiempo libre" },
      { type: "multiple-choice", question: "Wat is 'Ver la televisión'?", options: ["Televisie kijken", "Naar de radio luisteren", "Een film lezen", "Spelletjes spelen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik vind sport leuk'", correctAnswer: "Me gusta el deporte" },
      { type: "word-scramble", question: "Zet in volgorde: 'Ik luister naar muziek'", shuffledWords: ["música", "escuchar", "Me", "gusta"], correctSentence: "Me gusta escuchar música" },
      { type: "multiple-choice", question: "Wat betekent 'El hobby'?", options: ["De hobby", "Het werk", "De school", "De sport"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Mijn hobby'", correctAnswer: "Mi hobby" },
      { type: "multiple-choice", question: "Wat is 'Bailar'?", options: ["Dansen", "Zingen", "Lopen", "Rennen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik hou van dansen'", correctAnswer: "Me gusta bailar" },
      { type: "word-scramble", question: "Zet in volgorde: 'Dansen'", shuffledWords: ["Bailar"], correctSentence: "Bailar" },
      { type: "multiple-choice", question: "Wat betekent 'Cantar'?", options: ["Zingen", "Dansen", "Lezen", "Schrijven"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Zingen'", correctAnswer: "Cantar" },
      { type: "multiple-choice", question: "Wat is 'Naturaleza'?", options: ["De natuur", "De stad", "Het huis", "De zee"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De natuur'", correctAnswer: "La naturaleza" },
      { type: "word-scramble", question: "Zet in volgorde: 'Ik vind reizen leuk'", shuffledWords: ["viajar", "gusta", "Me"], correctSentence: "Me gusta viajar" },
      { type: "multiple-choice", question: "Wat betekent 'Pintar'?", options: ["Schilderen", "Tekenen", "Schrijven", "Koken"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Schilderen'", correctAnswer: "Pintar" },
      { type: "multiple-choice", question: "Wat is 'Cocinar'?", options: ["Koken", "Eten", "Drinken", "Bakken"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Koken'", correctAnswer: "Cocinar" },
      { type: "word-scramble", question: "Zet in volgorde: 'Koken'", shuffledWords: ["Cocinar"], correctSentence: "Cocinar" },
      { type: "multiple-choice", question: "Wat betekent 'Fotografiar'?", options: ["Fotograferen", "Kijken", "Filmen", "Leren"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Fotografie'", correctAnswer: "La fotografía" },
      { type: "multiple-choice", question: "Wat is 'Nadar'?", options: ["Zwemmen", "Lopen", "Fietsen", "Rennen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Zwemmen'", correctAnswer: "Nadar" },
      { type: "word-scramble", question: "Zet in volgorde: 'Zwemmen'", shuffledWords: ["Nadar"], correctSentence: "Nadar" },
      { type: "multiple-choice", question: "Wat betekent 'Viajar'?", options: ["Reizen", "Vliegen", "Rijden", "Lopen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Reizen'", correctAnswer: "Viajar" },
      { type: "multiple-choice", question: "Wat is 'El cine'?", options: ["De bioscoop", "Het theater", "Het museum", "Het park"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Naar de bioscoop gaan'", correctAnswer: "Ir al cine" },
      { type: "word-scramble", question: "Zet in volgorde: 'De bioscoop'", shuffledWords: ["cine", "El"], correctSentence: "El cine" },
      { type: "multiple-choice", question: "Wat betekent 'El teatro'?", options: ["Het theater", "De bioscoop", "Het concert", "De club"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het theater'", correctAnswer: "El teatro" },
      { type: "multiple-choice", question: "Wat is 'El concierto'?", options: ["Het concert", "Het feest", "De les", "De film"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het concert'", correctAnswer: "El concierto" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het concert'", shuffledWords: ["concierto", "El"], correctSentence: "El concierto" },
      { type: "multiple-choice", question: "Wat betekent 'Jugar'?", options: ["Spelen", "Werken", "Leren", "Maken"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Spelen'", correctAnswer: "Jugar" },
      { type: "multiple-choice", question: "Wat is 'El juego'?", options: ["Het spel", "De sport", "De wedstrijd", "Het boek"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het spel'", correctAnswer: "El juego" },
      { type: "word-scramble", question: "Zet in volgorde: 'Spelen'", shuffledWords: ["Jugar"], correctSentence: "Jugar" },
      { type: "multiple-choice", question: "Wat betekent 'Me gusta leer'?", options: ["Ik vind lezen leuk", "Ik wil lezen", "Ik kan lezen", "Ik heb gelezen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik hou van koken'", correctAnswer: "Me gusta cocinar" }
    ]
  },
  {
    id: "a1_m9_l2",
    chapterTitle: "Module 9: Vrije tijd & Weer",
    title: "2. Het Weer (El Tiempo)",
    description: "Van stralende zon tot frisse regenbuien: leer alles over het weer en de seizoenen in het Spaans.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "Hace sol", nl: "Het is zonnig", example: "Hoy hace sol en Madrid." },
      { es: "Hace frío / calor", nl: "Het is koud / warm", example: "En invierno hace frío." },
      { es: "Llueve", nl: "Het regent", example: "No me gusta cuando llueve." },
      { es: "Nieva", nl: "Het sneeuwt", example: "En la montaña nieva en enero." },
      { es: "El tiempo", nl: "Het weer / de tijd", example: "¿Qué tiempo hace hoy?" },
      { es: "La primavera / El verano", nl: "De lente / De zomer", example: "Me encanta el verano." },
      { es: "El otoño", nl: "De herfst", example: "En otoño caen las hojas." },
      { es: "El invierno", nl: "De winter", example: "Hace frío en invierno." },
      { es: "El viento", nl: "De wind", example: "Hace mucho viento hoy." },
      { es: "El cielo", nl: "De hemel", example: "El cielo está despejado." },
      { es: "La nube", nl: "De wolk", example: "Hay nubes negras en el cielo." },
      { es: "Nublado", nl: "Bewolkt", example: "El día está nublado." },
      { es: "La tormenta", nl: "De storm / onweer", example: "Viene una gran tormenta." },
      { es: "Buen tiempo / Mal tiempo", nl: "Mooi weer / slecht weer", example: "Tenemos buen tiempo para viajar." },
      { es: "La temperatura", nl: "De temperatuur", example: "La temperatura es alta." },
      { es: "Grados", nl: "Graden", example: "Estamos a veinticinco grados." },
      { es: "El sol", nl: "De zon", example: "El sol brilla fuerte." }
    ],
    cheatsheet: `
      <h4>Het weer in het Spaans</h4>
      <p>Om te vertellen wat voor weer het is gebruik je vaak het werkwoord <b>hacer</b> (maken/doen) of losse werkwoorden:</p>
      <p><b>Hace sol</b> (zonnig), <b>Hace calor</b> (warm), <b>Hace frío</b> (koud), <b>Llueve</b> (regen), <b>Nieva</b> (sneeuw).</p>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Wat betekent 'Hace sol'?", options: ["Het is zonnig", "Het regent", "Het is koud", "Het waait"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het is koud'", correctAnswer: "Hace frío" },
      { type: "multiple-choice", question: "Wat is 'Hace calor'?", options: ["Het is warm", "Het is koud", "Het is zonnig", "Het is mooi weer"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het regent'", correctAnswer: "Llueve" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het is zonnig'", shuffledWords: ["sol", "hace", "Hoy"], correctSentence: "Hoy hace sol" },
      { type: "multiple-choice", question: "Wat betekent 'Nieva'?", options: ["Het sneeuwt", "Het regent", "Het stormt", "Het waait"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het sneeuwt'", correctAnswer: "Nieva" },
      { type: "multiple-choice", question: "Wat betekent 'El tiempo'?", options: ["Het weer / de tijd", "De wind", "De zon", "De regen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Wat voor weer is het?'", correctAnswer: "¿Qué tiempo hace?" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het is koud'", shuffledWords: ["frío", "hace"], correctSentence: "Hace frío" },
      { type: "multiple-choice", question: "Wat is 'La primavera'?", options: ["De lente", "De zomer", "De herfst", "De winter"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De lente'", correctAnswer: "La primavera" },
      { type: "word-scramble", question: "Zet in volgorde: 'De zomer'", shuffledWords: ["verano", "El"], correctSentence: "El verano" },
      { type: "multiple-choice", question: "Wat betekent 'El verano'?", options: ["De zomer", "De winter", "De lente", "De herfst"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De zomer'", correctAnswer: "El verano" },
      { type: "multiple-choice", question: "Wat is 'El otoño'?", options: ["De herfst", "De lente", "De zomer", "De winter"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De herfst'", correctAnswer: "El otoño" },
      { type: "word-scramble", question: "Zet in volgorde: 'De herfst'", shuffledWords: ["otoño", "El"], correctSentence: "El otoño" },
      { type: "multiple-choice", question: "Wat betekent 'El invierno'?", options: ["De winter", "De zomer", "De lente", "De herfst"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De winter'", correctAnswer: "El invierno" },
      { type: "multiple-choice", question: "Wat is 'El viento'?", options: ["De wind", "De zon", "De regen", "De sneeuw"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De wind'", correctAnswer: "El viento" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het waait'", shuffledWords: ["viento", "hace"], correctSentence: "Hace viento" },
      { type: "multiple-choice", question: "Wat betekent 'Hace viento'?", options: ["Het waait", "Het is warm", "Het is koud", "Het is zonnig"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het waait'", correctAnswer: "Hace viento" },
      { type: "multiple-choice", question: "Wat is 'El cielo'?", options: ["De hemel", "De wolk", "De zon", "De maan"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De hemel'", correctAnswer: "El cielo" },
      { type: "word-scramble", question: "Zet in volgorde: 'De hemel'", shuffledWords: ["cielo", "El"], correctSentence: "El cielo" },
      { type: "multiple-choice", question: "Wat betekent 'La nube'?", options: ["De wolk", "De zon", "De ster", "De regen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De wolk'", correctAnswer: "La nube" },
      { type: "multiple-choice", question: "Wat is 'Nublado'?", options: ["Bewolkt", "Zonnig", "Helder", "Regenachtig"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het is bewolkt'", correctAnswer: "Está nublado" },
      { type: "word-scramble", question: "Zet in volgorde: 'Bewolkt'", shuffledWords: ["nublado", "Está"], correctSentence: "Está nublado" },
      { type: "multiple-choice", question: "Wat betekent 'La tormenta'?", options: ["De storm / onweer", "De regen", "De sneeuw", "De wind"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De storm'", correctAnswer: "La tormenta" },
      { type: "multiple-choice", question: "What is 'Buen tiempo'?", options: ["Mooi weer", "Slecht weer", "Koud weer", "Heet weer"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Mooi weer'", correctAnswer: "Buen tiempo" },
      { type: "word-scramble", question: "Zet in volgorde: 'Mooi weer'", shuffledWords: ["tiempo", "Buen"], correctSentence: "Buen tiempo" },
      { type: "multiple-choice", question: "Wat betekent 'Mal tiempo'?", options: ["Slecht weer", "Mooi weer", "Warm weer", "Fris weer"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Slecht weer'", correctAnswer: "Mal tiempo" },
      { type: "multiple-choice", question: "Wat is 'La temperatura'?", options: ["De temperatuur", "Het weer", "De hitte", "De kou"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De temperatuur'", correctAnswer: "La temperatura" },
      { type: "word-scramble", question: "Zet in volgorde: 'De temperatuur'", shuffledWords: ["temperatura", "La"], correctSentence: "La temperatura" },
      { type: "multiple-choice", question: "Wat betekent 'Grados'?", options: ["Graden", "Uren", "Dagen", "Maanden"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Twintig graden'", correctAnswer: "Veinte grados" },
      { type: "multiple-choice", question: "Wat is 'El sol'?", options: ["De zon", "De maan", "De ster", "De wolk"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De zon'", correctAnswer: "El sol" },
      { type: "word-scramble", question: "Zet in volgorde: 'De zon'", shuffledWords: ["sol", "El"], correctSentence: "El sol" },
      { type: "multiple-choice", question: "Wat betekent 'Hacer buen tiempo'?", options: ["Mooi weer zijn", "Slecht weer zijn", "Koud zijn", "Warm zijn"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het is mooi weer vandaag'", correctAnswer: "Hoy hace buen tiempo" }
    ]
  },
  {
    id: "a1_m9_eindtoets",
    chapterTitle: "Module 9: Vrije tijd & Weer",
    title: "🏆 Eindtoets Module 9",
    description: "Laat zien wat je waard bent! Test je kennis over hobby's, het werkwoord gustar en alles over het weer en de seizoenen.",
    isOptional: false,
    points: 60,
    isExam: true,
    cheatsheet: `
      <h4>Examenrichtlijnen Module 9</h4>
      <p>Dit examen trekt telkens 15 willekeurige vragen uit de grote examenbank van 50 vragen over vrije tijd, hobby's en het weer.</p>
    `,
    getDynamicQuestions: function() {
      let allQuestions = [];
      window.LESSONS_DATA.forEach(l => {
        if (l.id.startsWith("a1_m9") && !l.isExam && l.questionBank) {
          allQuestions = allQuestions.concat(l.questionBank);
        }
      });
      allQuestions.sort(() => Math.random() - 0.5);
      return allQuestions.slice(0, 15);
    }
  },

  /* =========================================================================
     MODULE 10: Eindexamen A1 (Integrale Vragenbank)
     ========================================================================= */
  {
    id: "a1_m10_eindtoets",
    chapterTitle: "Module 10: Eindexamen A1",
    title: "🏆 Eindtoets Module 10 (Eindexamen)",
    description: "De ultieme proef op de som! Laat zien dat jij klaar bent voor de Spaanse zon. Dit eindexamen test al je opgedane kennis in een spannende eindtest over alles wat je tot nu toe hebt geleerd. ¡Mucho éxito!",
    isOptional: false,
    points: 100,
    isExam: true,
    cheatsheet: `
      <h4>Examenrichtlijnen Eindexamen A1</h4>
      <p>Dit eindexamen selecteert automatisch en evenredig 40 willekeurige vragen uit de vraagbanken van alle voorgaande modules (1 t/m 9) om je volledige A1-niveau te testen.</p>
    `,
    getDynamicQuestions: function() {
      let modules = ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m9"];
      let questionsPerModule = Math.ceil(40 / modules.length);
      let finalQuestions = [];

      modules.forEach(mod => {
        let modQuestions = [];
        window.LESSONS_DATA.forEach(l => {
          if (l.id.includes(`a1_${mod}`) && !l.isExam && l.questionBank) {
            modQuestions = modQuestions.concat(l.questionBank);
          }
        });
        modQuestions.sort(() => Math.random() - 0.5);
        finalQuestions = finalQuestions.concat(modQuestions.slice(0, questionsPerModule));
      });

      finalQuestions.sort(() => Math.random() - 0.5);
      return finalQuestions.slice(0, 40);
    }
  }
);
