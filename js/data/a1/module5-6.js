window.LESSONS_DATA = window.LESSONS_DATA || [];

window.LESSONS_DATA.push(
  /* =========================================================================
     MODULE 5: Reizen, Richtingen & Vervoer (50+ Vragenbank)
     ========================================================================= */
  {
    id: "a1_m5_l1",
    chapterTitle: "Module 5: Reizen & Vervoer",
    title: "1. Vervoersmiddelen & Kaartjes Kopen",
    description: "Leer reizen met het openbaar vervoer, vervoersmiddelen benoemen en kaartjes kopen.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "El tren", nl: "De trein", example: "El tren sale a las diez." },
      { es: "El autobús", nl: "De bus", example: "Voy en autobús al centro." },
      { es: "El billete", nl: "Het kaartje / ticket", example: "Un billete de ida y vuelta." },
      { es: "La estación", nl: "Het station", example: "La estación de tren está cerca." },
      { es: "El aeropuerto", nl: "De luchthaven", example: "Llego al aeropuerto en taxi." },
      { es: "El metro", nl: "De metro", example: "El metro es muy rápido." },
      { es: "El taxi", nl: "De taxi", example: "Tomamos un taxi al hotel." },
      { es: "El andén", nl: "Het perron", example: "El tren sale del andén tres." },
      { es: "La salida", nl: "De uitgang / het vertrek", example: "La salida es por aquí." },
      { es: "La llegada", nl: "De aankomst", example: "La llegada del vuelo es a las ocho." },
      { es: "El horario", nl: "De dienstregeling / openingstijd", example: "Consulta el horario de los trenes." },
      { es: "El carril", nl: "De rijstrook / baan", example: "El autobús va por su propio carril." }
    ],
    cheatsheet: `
      <h4>Reizen en Tickets</h4>
      <p>Voor een reisje gebruik je vaak de vraag <b>'¿Cuánto cuesta un billete para...?'</b> (Hoeveel kost een kaartje naar...?).</p>
      <p><b>Ida</b> = Enkele reis / <b>Ida y vuelta</b> = Retour.</p>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Wat betekent 'El tren'?", options: ["De trein", "De bus", "Het vliegtuig", "De auto"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het kaartje'", correctAnswer: "El billete" },
      { type: "multiple-choice", question: "Wat is 'La estación'?", options: ["Het station", "Het vliegveld", "De halte", "De weg"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De bus'", correctAnswer: "El autobús" },
      { type: "word-scramble", question: "Zet in volgorde: 'De trein'", shuffledWords: ["tren", "El"], correctSentence: "El tren" },
      { type: "multiple-choice", question: "Wat betekent 'El aeropuerto'?", options: ["De luchthaven", "Het treinstation", "De metro", "De haven"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De metro'", correctAnswer: "El metro" },
      { type: "multiple-choice", question: "Wat is een 'billete de ida y vuelta'?", options: ["Een retourkaartje", "Een enkele reis", "Een gratis kaartje", "Een treinkaartje"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Enkele reis'", correctAnswer: "Ida" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het kaartje'", shuffledWords: ["billete", "El"], correctSentence: "El billete" },
      { type: "multiple-choice", question: "Wat betekent 'El autobús'?", options: ["De bus", "De trein", "De tram", "De fiets"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het station'", correctAnswer: "La estación" },
      { type: "word-scramble", question: "Zet in volgorde: 'De luchthaven'", shuffledWords: ["aeropuerto", "El"], correctSentence: "El aeropuerto" },
      { type: "multiple-choice", question: "Wat is 'El metro'?", options: ["De metro", "De auto", "De boot", "De bus"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Retourkaartje'", correctAnswer: "Billete de ida y vuelta" },
      { type: "multiple-choice", question: "Wat betekent 'Ida'?", options: ["Heenweg / enkele reis", "Terugweg", "Vertrek", "Aankomst"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De trein'", correctAnswer: "El tren" },
      { type: "word-scramble", question: "Zet in volgorde: 'De bus'", shuffledWords: ["autobús", "El"], correctSentence: "El autobús" },
      { type: "multiple-choice", question: "Hoe vraag je om een kaartje?", options: ["Un billete, por favor", "La cuenta, por favor", "Un café, por favor", "El menú, por favor"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De luchthaven'", correctAnswer: "El aeropuerto" },
      { type: "multiple-choice", question: "Wat is 'El viaje'?", options: ["De reis", "De trein", "Het ticket", "Het station"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik reis met de trein'", correctAnswer: "Viajo en tren" },
      { type: "word-scramble", question: "Zet in volgorde: 'De metro'", shuffledWords: ["metro", "El"], correctSentence: "El metro" },
      { type: "multiple-choice", question: "Wat betekent 'Viajar'?", options: ["Reizen", "Werken", "Leren", "Eten"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Hoeveel kost het?'", correctAnswer: "¿Cuánto cuesta?" },
      { type: "multiple-choice", question: "Wat is 'El taxi'?", options: ["De taxi", "De bus", "De trein", "De fiets"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Een taxi, alstublieft'", correctAnswer: "Un taxi, por favor" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het station'", shuffledWords: ["estación", "La"], correctSentence: "La estación" },
      { type: "multiple-choice", question: "Wat betekent 'Cerca'?", options: ["Dichtbij", "Ver weg", "Duur", "Goedkoop"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ver weg'", correctAnswer: "Lejos" },
      { type: "multiple-choice", question: "Wat is 'El andén'?", options: ["Het perron", "De trein", "Het ticket", "De uitgang"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het perron'", correctAnswer: "El andén" },
      { type: "word-scramble", question: "Zet in volgorde: 'Enkele reis'", shuffledWords: ["ida", "Billete", "de"], correctSentence: "Billete de ida" },
      { type: "multiple-choice", question: "Wat betekent 'La salida'?", options: ["De uitgang / het vertrek", "De ingang", "De aankomst", "Het station"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De uitgang'", correctAnswer: "La salida" },
      { type: "multiple-choice", question: "Wat is 'La llegada'?", options: ["De aankomst", "Het vertrek", "De reis", "Het ticket"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De aankomst'", correctAnswer: "La llegada" },
      { type: "word-scramble", question: "Zet in volgorde: 'De luchthaven'", shuffledWords: ["aeropuerto", "El"], correctSentence: "El aeropuerto" },
      { type: "multiple-choice", question: "Wat betekent 'Pronto'?", options: ["Snel / binnenkort", "Laat", "Ver", "Duur"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Snelle trein'", correctAnswer: "Tren rápido" },
      { type: "multiple-choice", question: "Wat is 'El horario'?", options: ["De dienstregeling / openingstijd", "Het uur", "De kaart", "De prijs"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De dienstregeling'", correctAnswer: "El horario" },
      { type: "word-scramble", question: "Zet in volgorde: 'De taxi'", shuffledWords: ["taxi", "El"], correctSentence: "El taxi" },
      { type: "multiple-choice", question: "Wat betekent 'Barato'?", options: ["Goedkoop", "Duur", "Groot", "Klein"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Goedkoop ticket'", correctAnswer: "Billete barato" },
      { type: "multiple-choice", question: "Wat is 'Caro'?", options: ["Duur", "Goedkoop", "Snel", "Langzaam"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het is duur'", correctAnswer: "Es caro" },
      { type: "word-scramble", question: "Zet in volgorde: 'Een retour'", shuffledWords: ["vuelta", "y", "ida", "de", "Billete"], correctSentence: "Billete de ida y vuelta" },
      { type: "multiple-choice", question: "Wat betekent 'El carril'?", options: ["De rijstrook / baan", "De trein", "Het perron", "Het vliegveld"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Reizen'", correctAnswer: "Viajar" }
    ]
  },
  {
    id: "a1_m5_l2",
    chapterTitle: "Module 5: Reizen & Vervoer",
    title: "2. De Weg Vragen & Richtingen",
    description: "Ontdek hoe je de weg vraagt in de stad en navigeert met richtingen.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "A la derecha", nl: "Naar rechts", example: "Gire a la derecha en la esquina." },
      { es: "A la izquierda", nl: "Naar links", example: "El banco está a la izquierda." },
      { es: "Todo recto", nl: "Rechtdoor", example: "Siga todo recto hasta el semáforo." },
      { es: "La calle", nl: "De straat", example: "Vivo en esta calle." },
      { es: "La plaza", nl: "Het plein", example: "Nos vemos en la plaza mayor." },
      { es: "Cerca / Lejos", nl: "Dichtbij / Ver weg", example: "El museo está muy cerca." },
      { es: "El mapa", nl: "De kaart", example: "Miro el mapa de la ciudad." },
      { es: "La ciudad", nl: "De stad", example: "Madrid es una gran ciudad." },
      { es: "El semáforo", nl: "Het stoplicht", example: "Para en el semáforo rojo." },
      { es: "El puente", nl: "De brug", example: "Cruzamos el puente viejo." },
      { es: "El parque", nl: "Het park", example: "Paseamos por el parque." },
      { es: "El cruce", nl: "Het kruispunt", example: "Hay mucho tráfico en el cruce." },
      { es: "El edificio", nl: "Het gebouw", example: "Este edificio es muy alto." },
      { es: "La esquina", nl: "De hoek", example: "La tienda está en la esquina." },
      { es: "El hotel", nl: "Het hotel", example: "Nuestro hotel está en el centro." },
      { es: "El banco", nl: "De bank (geld/zitbank)", example: "El banco abre a las ocho." },
      { es: "La farmacia", nl: "De apotheek", example: "Voy a la farmacia a comprar medicinas." },
      { es: "El hospital", nl: "Het ziekenhuis", example: "El hospital está cerca de aquí." }
    ],
    cheatsheet: `
      <h4>De weg vragen</h4>
      <p>Handige zinnen om de weg te vinden:</p>
      <p><b>¿Dónde está...?</b> = Waar is...?</p>
      <p><b>Perdón, para ir a...</b> = Pardon, om naar ... te gaan?</p>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Wat betekent 'A la derecha'?", options: ["Naar rechts", "Naar links", "Rechtdoor", "Terug"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Naar links'", correctAnswer: "A la izquierda" },
      { type: "multiple-choice", question: "Wat is 'Todo recto'?", options: ["Rechtdoor", "Naar rechts", "Stoppen", "Omkeren"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De straat'", correctAnswer: "La calle" },
      { type: "word-scramble", question: "Zet in volgorde: 'Naar rechts'", shuffledWords: ["derecha", "la", "A"], correctSentence: "A la derecha" },
      { type: "multiple-choice", question: "Wat betekent 'La plaza'?", options: ["Het plein", "De straat", "Het gebouw", "De brug"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het plein'", correctAnswer: "La plaza" },
      { type: "multiple-choice", question: "Hoe vraag je 'Waar is...?'", options: ["¿Dónde está...?", "¿Cómo estás...?", "¿Qué hora es...?", "¿Cuánto cuesta...?"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Dichtbij'", correctAnswer: "Cerca" },
      { type: "word-scramble", question: "Zet in volgorde: 'Rechtdoor'", shuffledWords: ["recto", "Todo"], correctSentence: "Todo recto" },
      { type: "multiple-choice", question: "Wat betekent 'Lejos'?", options: ["Ver weg", "Dichtbij", "Groot", "Klein"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ver weg'", correctAnswer: "Lejos" },
      { type: "word-scramble", question: "Zet in volgorde: 'Naar links'", shuffledWords: ["izquierda", "la", "A"], correctSentence: "A la izquierda" },
      { type: "multiple-choice", question: "Wat is 'La calle'?", options: ["De straat", "Het plein", "Het huis", "De winkel"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Waar is het museum?'", correctAnswer: "¿Dónde está el museo?" },
      { type: "multiple-choice", question: "Wat betekent 'El mapa'?", options: ["De kaart", "Het boek", "De brief", "De foto"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De stad'", correctAnswer: "La ciudad" },
      { type: "word-scramble", question: "Zet in volgorde: 'De straat'", shuffledWords: ["calle", "La"], correctSentence: "La calle" },
      { type: "multiple-choice", question: "Wat is 'El semáforo'?", options: ["Het stoplicht", "Het bord", "De brug", "Het kruispunt"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het stoplicht'", correctAnswer: "El semáforo" },
      { type: "multiple-choice", question: "Wat betekent 'El puente'?", options: ["De brug", "De straat", "Het plein", "Het park"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De brug'", correctAnswer: "El puente" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het plein'", shuffledWords: ["plaza", "La"], correctSentence: "La plaza" },
      { type: "multiple-choice", question: "Wat is 'El parque'?", options: ["Het park", "Het hotel", "Het station", "Het museum"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het park'", correctAnswer: "El parque" },
      { type: "multiple-choice", question: "Wat betekent 'El cruce'?", options: ["Het kruispunt", "De straat", "Het plein", "De bocht"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het kruispunt'", correctAnswer: "El cruce" },
      { type: "word-scramble", question: "Zet in volgorde: 'Dichtbij'", shuffledWords: ["Cerca"], correctSentence: "Cerca" },
      { type: "multiple-choice", question: "Wat betekent 'Perdón'?", options: ["Pardon / sorry", "Dank je", "Alsjeblieft", "Tot ziens"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Pardon, waar is...?'", correctAnswer: "Perdón, ¿dónde está...?" },
      { type: "multiple-choice", question: "Wat is 'El edificio'?", options: ["Het gebouw", "Het huis", "De straat", "De kamer"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het gebouw'", correctAnswer: "El edificio" },
      { type: "word-scramble", question: "Zet in volgorde: 'Ver weg'", shuffledWords: ["Lejos"], correctSentence: "Lejos" },
      { type: "multiple-choice", question: "Wat betekent 'Girar'?", options: ["Draaien / afslaan", "Lopen", "Stoppen", "Beginnen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Sla links af'", correctAnswer: "Gire a la izquierda" },
      { type: "multiple-choice", question: "Wat is 'Seguir'?", options: ["Doorgaan / volgen", "Stoppen", "Wachten", "Kijken"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ga rechtdoor'", correctAnswer: "Siga todo recto" },
      { type: "word-scramble", question: "Zet in volgorde: 'De stad'", shuffledWords: ["ciudad", "La"], correctSentence: "La ciudad" },
      { type: "multiple-choice", question: "Wat betekent 'La esquina'?", options: ["De hoek", "Het plein", "De straat", "Het pad"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Op de hoek'", correctAnswer: "En la esquina" },
      { type: "multiple-choice", question: "Wat is 'El hotel'?", options: ["Het hotel", "Het restaurant", "Het museum", "Het station"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het hotel'", correctAnswer: "El hotel" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het stoplicht'", shuffledWords: ["semáforo", "El"], correctSentence: "El semáforo" },
      { type: "multiple-choice", question: "Wat betekent 'El banco'?", options: ["De bank (geld/zitbank)", "Het plein", "Het park", "De straat"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De bank'", correctAnswer: "El banco" },
      { type: "multiple-choice", question: "Wat is 'La farmacia'?", options: ["De apotheek", "De supermarkt", "Het ziekenhuis", "De winkel"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De apotheek'", correctAnswer: "La farmacia" },
      { type: "word-scramble", question: "Zet in volgorde: 'Sla rechts af'", shuffledWords: ["derecha", "la", "a", "Gire"], correctSentence: "Gire a la derecha" },
      { type: "multiple-choice", question: "Wat betekent 'El hospital'?", options: ["Het ziekenhuis", "De apotheek", "De dokter", "De tandarts"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het ziekenhuis'", correctAnswer: "El hospital" }
    ]
  },
  {
    id: "a1_m5_l3",
    chapterTitle: "Module 5: Reizen & Vervoer",
    title: "3. Getallen & Tijd (Números y la Hora)",
    description: "Leer tellen tot 100 en ontdek hoe je eenvoudig de tijd vraagt én aangeeft. Onmisbaar voor het maken van afspraken!",
    isOptional: false,
    points: 50,
    vocabulary: [
      { es: "Uno / Una", nl: "Eén", example: "Tengo un libro." },
      { es: "Diez", nl: "Tien", example: "Son las diez." },
      { es: "Cien", nl: "Honderd", example: "Cuesta cien euros." },
      { es: "¿Qué hora es?", nl: "Hoe laat is het?", example: "¿Qué hora es?" },
      { es: "Es la una", nl: "Het is één uur", example: "Es la una en punto." },
      { es: "Son las dos", nl: "Het is twee uur", example: "Son las dos y media." },
      { es: "Cero", nl: "Nul", example: "El número cero." },
      { es: "Veinte", nl: "Twintig", example: "Tengo veinte años." },
      { es: "Treinta", nl: "Dertig", example: "Son treinta minutos." },
      { es: "Cuarenta", nl: "Veertig", example: "Cuarenta personas." },
      { es: "Cincuenta", nl: "Vijftig", example: "Cincuenta euros." },
      { es: "Medianoche", nl: "Middernacht", example: "Llegamos a medianoche." },
      { es: "Mediodía", nl: "Middag / twaalf uur 's middags", example: "Comemos al mediodía." }
    ],
    cheatsheet: `<h3>Getallen & Klokkijken</h3>
<p><b>1. Getallen (0-100):</b><br>
0 = cero, 1 = uno, 2 = dos, 3 = tres, 4 = cuatro, 5 = cinco, 6 = seis, 7 = siete, 8 = ocho, 9 = nueve, 10 = diez.<br>
20 = veinte, 30 = treinta, 40 = cuarenta, 50 = cincuenta, 100 = cien.</p>
<p><b>2. Klokkijken:</b><br>
- <b>Es la una...</b> (Bij 1 uur / 1:xx)<br>
- <b>Son las dos / tres / etc.</b> (Bij alle andere uren)<br>
- <b>y media</b> = en half / half [uur]<br>
- <b>y cuarto</b> = en kwart</p>`,
    questionBank: [
      { type: "multiple-choice", question: "Hoe zeg je het getal '5' in het Spaans?", options: ["cinco", "cuatro", "seis", "diez"], correctIndex: 0 },
      { type: "input", question: "Vertaal het getal '10':", correctAnswer: "diez" },
      { type: "multiple-choice", question: "Wat is '20' in het Spaans?", options: ["veinte", "treinta", "doce", "diez"], correctIndex: 0 },
      { type: "input", question: "Vertaal het getal '15':", correctAnswer: "quince" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het is één uur'", shuffledWords: ["una", "es", "la"], correctSentence: "Es la una" },
      { type: "multiple-choice", question: "Wat betekent 'treinta'?", options: ["30", "13", "3", "300"], correctIndex: 0 },
      { type: "input", question: "Vertaal het getal '50':", correctAnswer: "cincuenta" },
      { type: "multiple-choice", question: "Welk werkwoord gebruik je bij het vragen naar de tijd ('¿Qué hora ...?')?", options: ["es", "está", "tiene", "hace"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Hoe laat is het?':", correctAnswer: "¿qué hora es?" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het is twee uur'", shuffledWords: ["dos", "Son", "las"], correctSentence: "Son las dos" },
      { type: "multiple-choice", question: "Wat betekent 'y media' bij de tijd?", options: ["en half", "en kwart", "over kwart", "voor half"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Het is half drie':", correctAnswer: "son las dos y media" },
      { type: "multiple-choice", question: "Wat is '100' in het Spaans?", options: ["cien", "ciento", "mil", "diez"], correctIndex: 0 },
      { type: "input", question: "Vertaal het getal '12':", correctAnswer: "doce" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het is kwart over vier'", shuffledWords: ["cuarto", "cuatro", "las", "y", "Son"], correctSentence: "Son las cuatro y cuarto" },
      { type: "multiple-choice", question: "Wat betekent 'y cuarto'?", options: ["en kwart", "en half", "minuut", "uur"], correctIndex: 0 },
      { type: "input", question: "Vertaal het getal '8':", correctAnswer: "ocho" },
      { type: "multiple-choice", question: "Hoe zeg je '35' (30 en 5)?", options: ["treinta y cinco", "treinta cinco", "cinco y treinta", "treinta con cinco"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Het is twaalf uur':", correctAnswer: "son las doce" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het is tien uur'", shuffledWords: ["diez", "Son", "las"], correctSentence: "Son las diez" },
      { type: "multiple-choice", question: "Wat is de vertaling van 'cero'?", options: ["0", "10", "100", "1"], correctIndex: 0 },
      { type: "input", question: "Vertaal het getal '40':", correctAnswer: "cuarenta" },
      { type: "multiple-choice", question: "Wat is correct voor '1 uur' bij de tijdsaanduiding?", options: ["Es la una", "Son las una", "Es un hora", "Son un uno"], correctIndex: 0 },
      { type: "input", question: "Vertaal het getal '60':", correctAnswer: "sesenta" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het is vijf uur'", shuffledWords: ["cinco", "Son", "las"], correctSentence: "Son las cinco" },
      { type: "multiple-choice", question: "Wat betekent 'setenta'?", options: ["70", "60", "17", "7"], correctIndex: 0 },
      { type: "input", question: "Vertaal het getal '80':", correctAnswer: "ochenta" },
      { type: "multiple-choice", question: "Hoe zeg je 'kwart voor' in het Spaans (bijv. kwart voor drie)?", options: ["menos cuarto", "y cuarto", "menos media", "y media"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Het is kwart voor drie':", correctAnswer: "son las tres menos cuarto" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het is middernacht' (medianoche)", shuffledWords: ["es", "medianoche", "La"], correctSentence: "Es la medianoche" },
      { type: "multiple-choice", question: "What is '90' in Spanish?", options: ["noventa", "ochenta", "setenta", "nueve"], correctIndex: 0 },
      { type: "input", question: "Vertaal het getal '21':", correctAnswer: "veintiuno" },
      { type: "multiple-choice", question: "Wat betekent 'mediodía'?", options: ["twaalf uur 's middags / middag", "middernacht", "avond", "ochtend"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Het is middag':", correctAnswer: "es mediodía" },
      { type: "word-scramble", question: "Zet in volgorde: 'Hoe laat vertrekt de trein?'", shuffledWords: ["tren", "el", "sale", "hora", "Qué", "¿"], correctSentence: "¿A qué hora sale el tren?" },
      { type: "multiple-choice", question: "Welk getal komt na 'nueve'?", options: ["diez", "ocho", "once", "nueve"], correctIndex: 0 },
      { type: "input", question: "Vertaal het getal '11':", correctAnswer: "once" },
      { type: "multiple-choice", question: "Wat is de vertaling van 'trece'?", options: ["13", "30", "3", "33"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Het is één uur precies' (en punto):", correctAnswer: "es la una en punto" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het is acht uur'", shuffledWords: ["ocho", "Son", "las"], correctSentence: "Son las ocho" },
      { type: "multiple-choice", question: "Wat betekent 'catorce'?", options: ["14", "40", "4", "24"], correctIndex: 0 },
      { type: "input", question: "Vertaal het getal '19':", correctAnswer: "diecinueve" },
      { type: "multiple-choice", question: "Hoe schrijf je '22' als één woord in het Spaans?", options: ["veintidós", "veinte y dos", "dos y veinte", "veinte dos"], correctIndex: 0 },
      { type: "input", question: "Vertaal het getal '25':", correctAnswer: "veinticinco" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het is negen uur'", shuffledWords: ["nueve", "Son", "las"], correctSentence: "Son las nueve" },
      { type: "multiple-choice", question: "Wat is 'dieciocho'?", options: ["18", "80", "16", "81"], correctIndex: 0 },
      { type: "input", question: "Vertaal het getal '99':", correctAnswer: "noventa y nueve" },
      { type: "multiple-choice", question: "Welk woord gebruiken we om 'en' te zeggen tussen tientallen en eenheden (bijv. 31)?", options: ["y", "con", "e", "o"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Het is zes uur':", correctAnswer: "son las seis" },
      { type: "word-scramble", question: "Zet in volgorde: 'Om hoelaat begin je?'", shuffledWords: ["empiezas", "hora", "Qué", "A", "¿"], correctSentence: "¿A qué hora empiezas?" }
    ]
  },
  {
    id: "a1_m5_eindtoets",
    chapterTitle: "Module 5: Reizen & Vervoer",
    title: "🏆 Eindtoets Module 5",
    description: "Stap in de reiswereld! Test je kennis over vervoersmiddelen, treinkaartjes en de weg vinden als een doorgewinterde ontdekkingsreiziger.",
    isOptional: false,
    points: 60,
    isExam: true,
    cheatsheet: `
      <h4>Examenrichtlijnen Module 5</h4>
      <p>Dit examen trekt telkens 15 willekeurige vragen uit de grote examenbank van 50 vragen over reizen en richtingen.</p>
    `,
    getDynamicQuestions: function() {
      let allQuestions = [];
      window.LESSONS_DATA.forEach(l => {
        if (l.id.startsWith("a1_m5") && !l.isExam && l.questionBank) {
          allQuestions = allQuestions.concat(l.questionBank);
        }
      });
      allQuestions.sort(() => Math.random() - 0.5);
      return allQuestions.slice(0, 15);
    }
  },

  /* =========================================================================
     MODULE 6: Huis, Wonen & Meubels (50+ Vragenbank)
     ========================================================================= */
  {
    id: "a1_m6_l1",
    chapterTitle: "Module 6: Huis & Wonen",
    title: "1. Ruimtes in Huis & Het Werkwoord VIVIR",
    description: "Verken verschillende ruimtes in huis en leer het werkwoord vivir vervoegen.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "La casa", nl: "Het huis", example: "Mi casa es grande." },
      { es: "El piso / El apartamento", nl: "Het appartement / de flat", example: "Vivo en un piso en el centro." },
      { es: "La habitación / El dormitorio", nl: "De slaapkamer", example: "Mi habitación tiene una ventana grande." },
      { es: "La cocina", nl: "De keuken", example: "Cocino en la cocina." },
      { es: "El salón", nl: "De woonkamer", example: "Ver la televisión en el salón." },
      { es: "El baño", nl: "De badkamer", example: "El baño está limpio." },
      { es: "El jardín", nl: "De tuin", example: "Las flores crecen en el jardín." },
      { es: "El balcón", nl: "Het balkon", example: "Tomo el sol en el balcón." },
      { es: "El garaje", nl: "De garage", example: "El coche está en el garaje." },
      { es: "La puerta", nl: "De deur", example: "Cierra la puerta, por favor." },
      { es: "La ventana", nl: "Het raam", example: "Abro la ventana para ventilar." },
      { es: "El techo", nl: "Het dak / plafond", example: "El techo de la sala es alto." },
      { es: "El suelo", nl: "De vloer / grond", example: "El suelo es de madera." },
      { es: "La pared", nl: "De muur", example: "Pinto la pared de blanco." },
      { es: "El pasillo", nl: "De gang", example: "El dormitorio está al final del pasillo." },
      { es: "Las escaleras", nl: "De trap", example: "Subo por las escaleras." },
      { es: "El ascensor", nl: "De lift", example: "Tomamos el ascensor hasta el cuarto piso." }
    ],
    cheatsheet: `
      <h4>Het werkwoord VIVIR (Wonen)</h4>
      <p>Vivir is een regelmatig -ir werkwoord:</p>
      <ul>
        <li>Yo <b>vivo</b> (ik woon)</li>
        <li>Tú <b>vives</b> (jij woont)</li>
        <li>Él/Ella/Usted <b>vive</b> (hij/zij/u woont)</li>
        <li>Nosotros/as <b>vivimos</b> (wij wonen)</li>
        <li>Vosotros/as <b>vivís</b> (jullie wonen)</li>
        <li>Ellos/Ellas/Ustedes <b>viven</b> (zij/u [mv] wonen)</li>
      </ul>
      <p><i>Gebruik:</i> Vivo en Madrid (Ik woon in Madrid).</p>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Wat betekent 'La casa'?", options: ["Het huis", "Het appartement", "De kamer", "De tuin"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De keuken'", correctAnswer: "La cocina" },
      { type: "multiple-choice", question: "Wat is 'El salón'?", options: ["De woonkamer", "De slaapkamer", "De badkamer", "De keuken"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De badkamer'", correctAnswer: "El baño" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het huis'", shuffledWords: ["casa", "La"], correctSentence: "La casa" },
      { type: "multiple-choice", question: "Wat betekent 'El dormitorio'?", options: ["De slaapkamer", "De woonkamer", "De keuken", "De badkamer"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De slaapkamer'", correctAnswer: "La habitación" },
      { type: "multiple-choice", question: "Wat is de 'yo'-vorm van vivir?", options: ["vivo", "vives", "vive", "vivimos"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik woon in Madrid'", correctAnswer: "Vivo en Madrid" },
      { type: "word-scramble", question: "Zet in volgorde: 'De keuken'", shuffledWords: ["cocina", "La"], correctSentence: "La cocina" },
      { type: "multiple-choice", question: "Wat betekent 'El piso'?", options: ["Het appartement / de verdieping", "Het huis", "De tuin", "Het dak"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het appartement'", correctAnswer: "El piso" },
      { type: "word-scramble", question: "Zet in volgorde: 'De woonkamer'", shuffledWords: ["salón", "El"], correctSentence: "El salón" },
      { type: "multiple-choice", question: "Wat is de 'tú'-vorm van vivir?", options: ["vives", "vivo", "vive", "vivís"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Jij woont hier'", correctAnswer: "Vives aquí" },
      { type: "multiple-choice", question: "Wat betekent 'Vivir'?", options: ["Wonen / leven", "Werken", "Reizen", "Leren"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Wonen'", correctAnswer: "Vivir" },
      { type: "word-scramble", question: "Zet in volgorde: 'De badkamer'", shuffledWords: ["baño", "El"], correctSentence: "El baño" },
      { type: "multiple-choice", question: "Wat is de 'nosotros'-vorm van vivir?", options: ["vivimos", "vivís", "viven", "vivo"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Wij wonen in Spanje'", correctAnswer: "Vivimos en España" },
      { type: "multiple-choice", question: "Wat betekent 'El jardín'?", options: ["De tuin", "Het dak", "Het balkon", "De garage"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De tuin'", correctAnswer: "El jardín" },
      { type: "word-scramble", question: "Zet in volgorde: 'De slaapkamer'", shuffledWords: ["habitación", "La"], correctSentence: "La habitación" },
      { type: "multiple-choice", question: "Wat is 'El balcón'?", options: ["Het balkon", "Het terras", "Het dak", "De deur"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het balkon'", correctAnswer: "El balcón" },
      { type: "multiple-choice", question: "Wat betekent 'El garaje'?", options: ["De garage", "De kelder", "De zolder", "De hal"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De garage'", correctAnswer: "El garaje" },
      { type: "word-scramble", question: "Zet in volgorde: 'De tuin'", shuffledWords: ["jardín", "El"], correctSentence: "El jardín" },
      { type: "multiple-choice", question: "Wat is de 'ellos'-vorm van vivir?", options: ["viven", "vivimos", "vivís", "vives"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Zij wonen samen'", correctAnswer: "Viven juntos" },
      { type: "multiple-choice", question: "Wat betekent 'La puerta'?", options: ["De deur", "Het raam", "De muur", "Het dak"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De deur'", correctAnswer: "La puerta" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het balkon'", shuffledWords: ["balcón", "El"], correctSentence: "El balcón" },
      { type: "multiple-choice", question: "Wat is 'La ventana'?", options: ["Het raam", "De deur", "De muur", "De vloer"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het raam'", correctAnswer: "La ventana" },
      { type: "multiple-choice", question: "Wat betekent 'El techo'?", options: ["Het dak / plafond", "De vloer", "De muur", "De deur"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het dak'", correctAnswer: "El techo" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het raam'", shuffledWords: ["ventana", "La"], correctSentence: "La ventana" },
      { type: "multiple-choice", question: "Wat is 'El suelo'?", options: ["De vloer / grond", "Het dak", "De muur", "Het raam"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De vloer'", correctAnswer: "El suelo" },
      { type: "multiple-choice", question: "Wat betekent 'La pared'?", options: ["De muur", "De deur", "Het raam", "Het dak"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De muur'", correctAnswer: "La pared" },
      { type: "word-scramble", question: "Zet in volgorde: 'De deur'", shuffledWords: ["puerta", "La"], correctSentence: "La puerta" },
      { type: "multiple-choice", question: "Wat is 'El pasillo'?", options: ["De gang", "De trap", "De lift", "De kamer"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De gang'", correctAnswer: "El pasillo" },
      { type: "multiple-choice", question: "Wat betekent 'Las escaleras'?", options: ["De trap", "De lift", "De deur", "Het raam"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De trap'", correctAnswer: "Las escaleras" },
      { type: "word-scramble", question: "Zet in volgorde: 'De muur'", shuffledWords: ["pared", "La"], correctSentence: "La pared" },
      { type: "multiple-choice", question: "Wat is 'El ascensor'?", options: ["De lift", "De trap", "De gang", "De deur"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De lift'", correctAnswer: "El ascensor" }
    ]
  },
  {
    id: "a1_m6_l2",
    chapterTitle: "Module 6: Huis & Wonen",
    title: "2. Meubels & Spullen in Huis",
    description: "Leer meubels benoemen en aangeven waar objecten zich bevinden in het huis.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "La mesa", nl: "De tafel", example: "Comemos en la mesa." },
      { es: "La silla", nl: "De stoel", example: "Me siento en la silla." },
      { es: "La cama", nl: "Het bed", example: "Duermo en mi cama." },
      { es: "El armario", nl: "De kast", example: "La ropa está en el armario." },
      { es: "El sofá", nl: "De bank", example: "Descanso en el sofá." },
      { es: "La lámpara", nl: "De lamp", example: "Enciendo la lámpara." },
      { es: "La televisión", nl: "De televisie", example: "Veo una película en la televisión." },
      { es: "El escritorio", nl: "Het bureau", example: "Estudio en el escritorio." },
      { es: "El sillón", nl: "De fauteuil / leunstoel", example: "El abuelo lee en el sillón." },
      { es: "La alfombra", nl: "Het tapijt", example: "La alfombra es suave." },
      { es: "Las cortinas", nl: "De gordijnen", example: "Cierro las cortinas por la noche." },
      { es: "El espejo", nl: "De spiegel", example: "Me miro en el espejo." },
      { es: "El cuadro", nl: "Het schilderij / lijst", example: "El cuadro cuelga de la pared." },
      { es: "La estantería", nl: "De boekenkast / plank", example: "Los libros están en la estantería." },
      { es: "El frigorífico", nl: "De koelkast", example: "La leche está en el frigorífico." },
      { es: "El horno", nl: "De oven", example: "Horneo el pan en el horno." },
      { es: "La ducha", nl: "De douche", example: "Me baño en la ducha." },
      { es: "El lavabo", nl: "De wastafel", example: "Me lavo la cara en el lavabo." },
      { es: "La almohada", nl: "Het kussen", example: "Duermo con dos almohadas." },
      { es: "La manta", nl: "De deken", example: "Tengo frío, necesito una manta." },
      { es: "Los muebles", nl: "De meubels", example: "Compramos nuevos muebles para la casa." }
    ],
    cheatsheet: `
      <h4>Locatie aangeven (Waar is het?)</h4>
      <p>Om te vertellen waar meubels of spullen staan gebruik je werkwoord <i>estar</i>:</p>
      <p><b>En</b> = In / Op / Bij (bijv. <i>en la mesa</i> = op de tafel).</p>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Wat betekent 'La mesa'?", options: ["De tafel", "De stoel", "Het bed", "De kast"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De stoel'", correctAnswer: "La silla" },
      { type: "multiple-choice", question: "Wat is 'La cama'?", options: ["Het bed", "De tafel", "De bank", "De kast"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De kast'", correctAnswer: "El armario" },
      { type: "word-scramble", question: "Zet in volgorde: 'De tafel'", shuffledWords: ["mesa", "La"], correctSentence: "La mesa" },
      { type: "multiple-choice", question: "Wat betekent 'El sofá'?", options: ["De bank", "De stoel", "Het bed", "De tafel"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De lamp'", correctAnswer: "La lámpara" },
      { type: "multiple-choice", question: "Welk werkwoord gebruik je om de locatie van meubels aan te geven?", options: ["Estar", "Ser", "Tener", "Vivir"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De stoel staat in de kamer'", correctAnswer: "La silla está en la habitación" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het bed'", shuffledWords: ["cama", "La"], correctSentence: "La cama" },
      { type: "multiple-choice", question: "Wat betekent 'La televisión'?", options: ["De televisie", "De computer", "De radio", "De telefoon"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De televisie'", correctAnswer: "La televisión" },
      { type: "word-scramble", question: "Zet in volgorde: 'De bank'", shuffledWords: ["sofá", "El"], correctSentence: "El sofá" },
      { type: "multiple-choice", question: "Wat is 'El escritorio'?", options: ["Het bureau", "De tafel", "De kast", "Het bed"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het bureau'", correctAnswer: "El escritorio" },
      { type: "multiple-choice", question: "Wat betekent 'El sillón'?", options: ["De fauteuil / leunstoel", "De stoel", "De bank", "Het bed"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De leunstoel'", correctAnswer: "El sillón" },
      { type: "word-scramble", question: "Zet in volgorde: 'De kast'", shuffledWords: ["armario", "El"], correctSentence: "El armario" },
      { type: "multiple-choice", question: "Wat is 'La alfombra'?", options: ["Het tapijt", "Het gordijn", "De lamp", "Het kussen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het tapijt'", correctAnswer: "La alfombra" },
      { type: "multiple-choice", question: "Wat betekent 'Las cortinas'?", options: ["De gordijnen", "De ramen", "De muren", "De deuren"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De gordijnen'", correctAnswer: "Las cortinas" },
      { type: "word-scramble", question: "Zet in volgorde: 'De lamp'", shuffledWords: ["lámpara", "La"], correctSentence: "La lámpara" },
      { type: "multiple-choice", question: "Wat is 'El espejo'?", options: ["De spiegel", "Het schilderij", "De foto", "De glas"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De spiegel'", correctAnswer: "El espejo" },
      { type: "multiple-choice", question: "Wat betekent 'El cuadro'?", options: ["Het schilderij / lijst", "De spiegel", "De muur", "De tafel"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het schilderij'", correctAnswer: "El cuadro" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het bureau'", shuffledWords: ["escritorio", "El"], correctSentence: "El escritorio" },
      { type: "multiple-choice", question: "Wat is 'La estantería'?", options: ["De boekenkast / plank", "De kledingkast", "De tafel", "De stoel"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De boekenkast'", correctAnswer: "La estantería" },
      { type: "multiple-choice", question: "Wat betekent 'La cocina'?", options: ["Het fornuis / de keuken", "De koelkast", "De oven", "De tafel"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De koelkast'", correctAnswer: "El frigorífico" },
      { type: "word-scramble", question: "Zet in volgorde: 'De televisie'", shuffledWords: ["televisión", "La"], correctSentence: "La televisión" },
      { type: "multiple-choice", question: "Wat is 'El horno'?", options: ["De oven", "De magnetron", "Het fornuis", "De koelkast"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De oven'", correctAnswer: "El horno" },
      { type: "multiple-choice", question: "Wat betekent 'La ducha'?", options: ["De douche", "Het bad", "Dekraan", "De wasbak"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De douche'", correctAnswer: "La ducha" },
      { type: "word-scramble", question: "Zet in volgorde: 'De spiegel'", shuffledWords: ["espejo", "El"], correctSentence: "El espejo" },
      { type: "multiple-choice", question: "Wat is 'El lavabo'?", options: ["De wastafel", "Het toilet", "De douche", "Het bad"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De wastafel'", correctAnswer: "El lavabo" },
      { type: "multiple-choice", question: "Wat betekent 'La cama grande'?", options: ["Groot bed", "Klein bed", "Tweepersoonsbed", "Stapelbed"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het kussen'", correctAnswer: "La almohada" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het schilderij'", shuffledWords: ["cuadro", "El"], correctSentence: "El cuadro" },
      { type: "multiple-choice", question: "Wat is 'La manta'?", options: ["De deken", "Het laken", "Het kussen", "Het kledingstuk"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De deken'", correctAnswer: "La manta" },
      { type: "multiple-choice", question: "Wat betekent 'El mueble'?", options: ["Het meubelstuk", "Het huis", "De kamer", "De wand"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De meubels'", correctAnswer: "Los muebles" },
      { type: "word-scramble", question: "Zet in volgorde: 'De koelkast'", shuffledWords: ["frigorífico", "El"], correctSentence: "El frigorífico" },
      { type: "multiple-choice", question: "Wat betekent 'Cómodo'?", options: ["Comfortabel / makkelijk", "Duur", "Groot", "Slecht"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het is comfortabel'", correctAnswer: "Es cómodo" }
    ]
  },
  {
    id: "a1_m6_l3",
    chapterTitle: "Module 6: Huis & Wonen",
    title: "3. Wederkerende werkwoorden (Verbos reflexivos)",
    description: "Praat moeiteloos over je dagelijkse routine! Leer werkwoorden zoals opstaan, douchen en aankleden correct te gebruiken.",
    isOptional: false,
    points: 50,
    vocabulary: [
      { es: "Levantarse", nl: "Opstaan", example: "Me levanto temprano." },
      { es: "Ducharse", nl: "Zich douchen", example: "Te duchas por la mañana." },
      { es: "Llamarse", nl: "Heten", example: "Me llamo Juan." },
      { es: "Acostarse", nl: "Naar bed gaan", example: "Nos acostamos tarde." },
      { es: "Lavarse", nl: "Zich wassen", example: "Se lava las manos." },
      { es: "Vestirse", nl: "Zich aankleden", example: "Me visto rápido." },
      { es: "Despertarse", nl: "Wakker worden", example: "Me despierto a las siete." },
      { es: "Afeitarse", nl: "Zich scheren", example: "Mi padre se afeita cada día." }
    ],
    cheatsheet: `<h3>Wederkerende Werkwoorden (Verbos Reflexivos)</h3>
<p>Bij handelingen die je bij jezelf doet, gebruik je een wederkerend voornaamwoord:</p>
<ul>
  <li><b>me</b> (ik) - <em>me levanto</em></li>
  <li><b>te</b> (jij) - <em>te levantas</em></li>
  <li><b>se</b> (hij/zij/u) - <em>se levanta</em></li>
  <li><b>nos</b> (wij) - <em>nos levantamos</em></li>
  <li><b>os</b> (jullie) - <em>os levantáis</em></li>
  <li><b>se</b> (zij/u-meervoud) - <em>se levantan</em></li>
</ul>`,
    questionBank: [
      { type: "multiple-choice", question: "Hoe zeg je 'Ik sta op' (levantarse)?", options: ["Me levanto", "Te levantas", "Se levanta", "Nos levantamos"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Hoe heet jij?' letterlijk als 'Hoe noem jij jezelf?':", correctAnswer: "¿cómo te llamas?" },
      { type: "multiple-choice", question: "Welk voornaamwoord hoort bij 'nosotros'?", options: ["nos", "me", "te", "os"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Wij douchen ons':", correctAnswer: "nos duchamos" },
      { type: "word-scramble", question: "Zet in volgorde: 'Ik douche me'", shuffledWords: ["ducho", "Me"], correctSentence: "Me ducho" },
      { type: "multiple-choice", question: "Wat betekent 'se levanta'?", options: ["Hij/zij staat op", "Ik sta op", "Jij staat op", "Wij staan op"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Jij staat op':", correctAnswer: "te levantas" },
      { type: "multiple-choice", question: "Welke vorm hoort bij 'ellos'?", options: ["se levantan", "os levantáis", "nos levantamos", "me levanto"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Zij gaan naar bed' (acostarse):", correctAnswer: "se acuestan" },
      { type: "word-scramble", question: "Zet in volgorde: 'Ik heet Maria'", shuffledWords: ["llamo", "Me", "Maria"], correctSentence: "Me llamo Maria" },
      { type: "multiple-choice", question: "Wat is de betekenis van 'ducharse'?", options: ["Zich douchen", "Zich wassen", "Opstaan", "Slapen"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Jullie douchen je':", correctAnswer: "os ducháis" },
      { type: "multiple-choice", question: "Waar staat het wederkerend voornaamwoord in de zin?", options: ["Vóór het vervoegde werkwoord", "Achter het werkwoord aan", "Aan het einde van de zin", "Los achter de persoonsvorm"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Ik was me' (lavarse):", correctAnswer: "me lavo" },
      { type: "word-scramble", question: "Zet in volgorde: 'Wij wassen ons'", shuffledWords: ["lavamos", "Nos"], correctSentence: "Nos lavamos" },
      { type: "multiple-choice", question: "Wat betekent 'te lavas'?", options: ["Jij was je", "Ik was me", "Hij was zich", "Wij wassen ons"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Hij wast zich':", correctAnswer: "se lava" },
      { type: "multiple-choice", question: "Welk voornaamwoord hoort bij 'yo'?", options: ["me", "te", "se", "nos"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Zij (vrouw) heet Anna':", correctAnswer: "se llama Anna" },
      { type: "word-scramble", question: "Zet in volgorde: 'Hoe heet u?' (formeel)", shuffledWords: ["llama", "se", "¿Cómo"], correctSentence: "¿Cómo se llama?" },
      { type: "multiple-choice", question: "Wat betekent 'acostarse'?", options: ["Naar bed gaan", "Opstaan", "Ontwaken", "Wassen"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Ik ga naar bed':", correctAnswer: "me acuesto" },
      { type: "multiple-choice", question: "Welke vorm hoort bij 'vosotros' voor acostarse?", options: ["os acostáis", "os acostaís", "os acostas", "os acostéis"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Jij gaat naar bed':", correctAnswer: "te acuestas" },
      { type: "word-scramble", question: "Zet in volgorde: 'Wij gaan naar bed'", shuffledWords: ["acostamos", "Nos"], correctSentence: "Nos acostamos" },
      { type: "multiple-choice", question: "Wat is een wederkerend werkwoord?", options: ["Een werkwoord waarbij het onderwerp en lijdend voorwerp dezelfde persoon zijn", "Een werkwoord in de verleden tijd", "Een onregelmatig werkwoord", "Een werkwoord zonder uitgang"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Zij kleden zich aan' (vestirse):", correctAnswer: "se visten" },
      { type: "multiple-choice", question: "Wat betekent 'me levanto'?", options: ["Ik sta op", "Ik ga liggen", "Ik douche", "Ik kleed me aan"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Ik kleed me aan':", correctAnswer: "me visto" },
      { type: "word-scramble", question: "Zet in volgorde: 'Jij kleedt je aan'", shuffledWords: ["vistes", "Te"], correctSentence: "Te vistes" },
      { type: "multiple-choice", question: "Welke zin is correct?", options: ["Me ducho por la mañana", "Ducho me por la mañana", "Yo me ducho", "Beide a en c zijn correct"], correctIndex: 3 },
      { type: "input", question: "Vertaal 'Wij staan vroeg op' (pronto):", correctAnswer: "nos levantamos pronto" },
      { type: "multiple-choice", question: "Wat betekent 'os ducháis'?", options: ["Jullie douchen je", "Wij douchen ons", "Zij douchen zich", "Ik douche me"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Zij wassen hun handen':", correctAnswer: "se lavan las manos" },
      { type: "word-scramble", question: "Zet in volgorde: 'Hij staat laat op' (tarde)", shuffledWords: ["tarde", "levanta", "se"], correctSentence: "Se levanta tarde" },
      { type: "multiple-choice", question: "Welk voornaamwoord hoort bij 'tú'?", options: ["te", "me", "se", "nos"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Ik heet...:", correctAnswer: "me llamo" },
      { type: "multiple-choice", question: "Wat betekent 'despertarse'?", options: ["Wakker worden", "In slapen vallen", "Opstaan", "Wassen"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Ik word wakker':", correctAnswer: "me despierto" },
      { type: "word-scramble", question: "Zet in volgorde: 'Jij wordt wakker'", shuffledWords: ["despiertas", "Te"], correctSentence: "Te despiertas" },
      { type: "multiple-choice", question: "Wat is de 'nosotros'-vorm van despertar?", options: ["despertamos", "despertéis", "despiertan", "despierto"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Wij worden wakker':", correctAnswer: "nos despertamos" },
      { type: "multiple-choice", question: "Welke zin klopt voor 'zij gaan naar bed'?", options: ["Se acuestan", "Se acoston", "Se acuesten", "Se acostamos"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Jullie gaan laat naar bed':", correctAnswer: "os acostáis tarde" },
      { type: "word-scramble", question: "Zet in volgorde: 'Ik schrob me / was me'", shuffledWords: ["lavo", "Me"], correctSentence: "Me lavo" },
      { type: "multiple-choice", question: "Wat betekent 'se afeita'?", options: ["Hij/zij scheert zich", "Hij wast zich", "Hij doucht zich", "Hij kleedt zich aan"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Ik scheer me' (afeitarse):", correctAnswer: "me afeito" },
      { type: "multiple-choice", question: "Welke vorm hoort bij 'ustedes'?", options: ["se", "os", "nos", "te"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'U staat op' (formeel enkelvoud):", correctAnswer: "se levanta" },
      { type: "word-scramble", question: "Zet in volgorde: 'Hoe heet je?'", shuffledWords: ["llamas", "te", "¿Cómo"], correctSentence: "¿Cómo te llamas?" }
    ]
  },
  {
    id: "a1_m6_eindtoets",
    chapterTitle: "Module 6: Huis & Wonen",
    title: "🏆 Eindtoets Module 6",
    description: "Tover je Spaanse woordenschat om tot een thuis! Laat zien hoe goed je de ruimtes in huis, meubels en het werkwoord 'vivir' beheerst.",
    isOptional: false,
    points: 60,
    isExam: true,
    cheatsheet: `
      <h4>Examenrichtlijnen Module 6</h4>
      <p>Dit examen trekt telkens 15 willekeurige vragen uit de grote examenbank van 50 vragen over het huis, meubels en wonen.</p>
    `,
    getDynamicQuestions: function() {
      let allQuestions = [];
      window.LESSONS_DATA.forEach(l => {
        if (l.id.startsWith("a1_m6") && !l.isExam && l.questionBank) {
          allQuestions = allQuestions.concat(l.questionBank);
        }
      });
      allQuestions.sort(() => Math.random() - 0.5);
      return allQuestions.slice(0, 15);
    }
  }
);
