window.LESSONS_DATA = window.LESSONS_DATA || [];

window.LESSONS_DATA.push(
  /* =========================================================================
     MODULE 7: Eten, Drinken & Restaurant (50+ Vragenbank)
     ========================================================================= */
  {
    id: "a1_m7_l1",
    chapterTitle: "Module 7: Eten, Drinken & Restaurant",
    title: "1. Voedsel, Dranken & Het Werkwoord COMER / BEBER",
    description: "Ontdek de lekkerste Spaanse woorden voor al je favoriete eten en drinken en leer hoe je 'comer' en 'beber' gebruikt in een gesprek.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "El agua", nl: "Het water", example: "Bebo agua fría." },
      { es: "El café", nl: "De koffie", example: "Un café con leche, por favor." },
      { es: "El pan", nl: "Het brood", example: "Compro pan fresco." },
      { es: "La fruta", nl: "Het fruit", example: "Como fruta todos los días." },
      { es: "La manzana", nl: "De appel", example: "La manzana es roja." },
      { es: "La carne", nl: "Het vlees", example: "No como mucha carne." },
      { es: "El pescado", nl: "De vis", example: "Comemos pescado los viernes." },
      { es: "El pollo", nl: "De kip", example: "El pollo al horno está rico." },
      { es: "La leche", nl: "De melk", example: "Bebo un vaso de leche." },
      { es: "El zumo / El jugo", nl: "Het sap", example: "Quiero zumo de naranja." },
      { es: "El queso", nl: "De kaas", example: "El queso manchego es delicioso." },
      { es: "El huevo", nl: "Het ei", example: "Desayuno un huevo frito." },
      { es: "El arroz", nl: "De rijst", example: "Comemos arroz con pollo." },
      { es: "La patata / La papa", nl: "De aardappel", example: "Compro patatas para la cena." },
      { es: "La verdura", nl: "De groente", example: "Es importante comer verdura." },
      { es: "El té", nl: "De thee", example: "Prefiero té con limón." },
      { es: "El vino", nl: "De wijn", example: "Una copa de vino tinto, por favor." },
      { es: "La cerveza", nl: "Het bier", example: "Una cerveza fría en verano es perfecta." },
      { es: "El azúcar", nl: "De suiker", example: "No pongo azúcar en el café." }
    ],
    cheatsheet: `
      <h4>De werkwoorden COMER (eten) en BEBER (drinken)</h4>
      <p>Dit zijn regelmatige -er werkwoorden:</p>
      <ul>
        <li>Yo <b>como / bebo</b> (ik eet / drink)</li>
        <li>Tú <b>comes / bebes</b> (jij eet / drinkt)</li>
        <li>Él/Ella <b>come / bebe</b> (hij/zij eet / drinkt)</li>
        <li>Nosotros/as <b>comemos / bebemos</b> (wij eten / drinken)</li>
        <li>Vosotros/as <b>coméis / bebéis</b> (jullie eten / drinken)</li>
        <li>Ellos/as <b>comen / beben</b> (zij eten / drinken)</li>
      </ul>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Wat betekent 'El agua'?", options: ["Het water", "De melk", "De thee", "Het sap"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De koffie'", correctAnswer: "El café" },
      { type: "multiple-choice", question: "Wat is 'El pan'?", options: ["Het brood", "De kaas", "De boter", "Het vlees"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het fruit'", correctAnswer: "La fruta" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het water'", shuffledWords: ["agua", "El"], correctSentence: "El agua" },
      { type: "multiple-choice", question: "Wat betekent 'La manzana'?", options: ["De appel", "De banaan", "De sinaasappel", "De peer"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De appel'", correctAnswer: "La manzana" },
      { type: "multiple-choice", question: "Wat is de 'yo'-vorm van comer?", options: ["como", "comes", "come", "comemos"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik eet brood'", correctAnswer: "Como pan" },
      { type: "word-scramble", question: "Zet in volgorde: 'De koffie'", shuffledWords: ["café", "El"], correctSentence: "El café" },
      { type: "multiple-choice", question: "Wat betekent 'La carne'?", options: ["Het vlees", "De vis", "De kip", "Het ei"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het vlees'", correctAnswer: "La carne" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het brood'", shuffledWords: ["pan", "El"], correctSentence: "El pan" },
      { type: "multiple-choice", question: "Wat is de 'yo'-vorm van beber?", options: ["bebo", "bebes", "bebe", "bebemos"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik drink water'", correctAnswer: "Bebo agua" },
      { type: "multiple-choice", question: "Wat betekent 'El pescado'?", options: ["De vis", "Het vlees", "De kip", "De soep"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De vis'", correctAnswer: "El pescado" },
      { type: "word-scramble", question: "Zet in volgorde: 'De appel'", shuffledWords: ["manzana", "La"], correctSentence: "La manzana" },
      { type: "multiple-choice", question: "Wat is 'El pollo'?", options: ["De kip", "Het rundvlees", "Het varkensvlees", "De vis"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De kip'", correctAnswer: "El pollo" },
      { type: "multiple-choice", question: "Wat betekent 'La leche'?", options: ["De melk", "Het water", "De thee", "Het sap"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De melk'", correctAnswer: "La leche" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het vlees'", shuffledWords: ["carne", "La"], correctSentence: "La carne" },
      { type: "multiple-choice", question: "Wat is 'El zumo / El jugo'?", options: ["Het sap", "De melk", "De wijn", "Het bier"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Sinaasappelsap'", correctAnswer: "Zumo de naranja" },
      { type: "multiple-choice", question: "Wat betekent 'El queso'?", options: ["De kaas", "De boter", "De melk", "Het ei"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De kaas'", correctAnswer: "El queso" },
      { type: "word-scramble", question: "Zet in volgorde: 'De melk'", shuffledWords: ["leche", "La"], correctSentence: "La leche" },
      { type: "multiple-choice", question: "Wat is de 'tú'-vorm van comer?", options: ["comes", "como", "come", "coméis"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Jij eet kaas'", correctAnswer: "Comes queso" },
      { type: "multiple-choice", question: "Wat betekent 'El huevo'?", options: ["Het ei", "De kip", "Het brood", "De boter"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het ei'", correctAnswer: "El huevo" },
      { type: "word-scramble", question: "Zet in volgorde: 'De kaas'", shuffledWords: ["queso", "El"], correctSentence: "El queso" },
      { type: "multiple-choice", question: "Wat is 'El arroz'?", options: ["De rijst", "De aardappel", "De pasta", "Het brood"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De rijst'", correctAnswer: "El arroz" },
      { type: "multiple-choice", question: "Wat betekent 'La patata / La papa'?", options: ["De aardappel", "De tomaat", "De ui", "De wortel"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De aardappel'", correctAnswer: "La patata" },
      { type: "word-scramble", question: "Zet in volgorde: 'De rijst'", shuffledWords: ["arroz", "El"], correctSentence: "El arroz" },
      { type: "multiple-choice", question: "Wat is 'La verdura'?", options: ["De groente", "Het fruit", "Het vlees", "De vis"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De groente'", correctAnswer: "La verdura" },
      { type: "multiple-choice", question: "Wat betekent 'El té'?", options: ["De thee", "De koffie", "De melk", "Het water"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De thee'", correctAnswer: "El té" },
      { type: "word-scramble", question: "Zet in volgorde: 'De groente'", shuffledWords: ["verdura", "La"], correctSentence: "La verdura" },
      { type: "multiple-choice", question: "Wat is 'El vino'?", options: ["De wijn", "Het bier", "Het water", "De melk"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De wijn'", correctAnswer: "El vino" },
      { type: "multiple-choice", question: "Wat betekent 'La cerveza'?", options: ["Het bier", "De wijn", "Het sap", "De thee"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het bier'", correctAnswer: "La cerveza" },
      { type: "word-scramble", question: "Zet in volgorde: 'De wijn'", shuffledWords: ["vino", "El"], correctSentence: "El vino" },
      { type: "multiple-choice", question: "Wat is 'El azúcar'?", options: ["De suiker", "Het zout", "De peper", "De olie"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De suiker'", correctAnswer: "El azúcar" }
    ]
  },
  {
    id: "a1_m7_l2",
    chapterTitle: "Module 7: Eten, Drinken & Restaurant",
    title: "2. In het Restaurant & Bestellen",
    description: "Schuif aan en leer moeiteloos de menukaart te lezen, je favoriete gerechten te bestellen en om de rekening te vragen.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "El restaurante", nl: "Het restaurant", example: "Cenamos en el restaurante." },
      { es: "El camarero / La camarera", nl: "De ober / serveerster", example: "El camarero trae la carta." },
      { es: "La carta / El menú", nl: "De menukaart", example: "Por favor, la carta." },
      { es: "La cuenta", nl: "De rekening", example: "La cuenta, por favor." },
      { es: "Delicioso / Rico", nl: "Heerlijk / Lekker", example: "La comida está deliciosa." },
      { es: "Quisiera / Me gustaría", nl: "Ik zou graag willen", example: "Quisiera un café." },
      { es: "El desayuno", nl: "Het ontbijt", example: "El desayuno está incluido." },
      { es: "El almuerzo / La comida", nl: "De lunch / het middageten", example: "Almuerzo a las dos de la tarde." },
      { es: "La cena", nl: "Het avondeten", example: "Cenamos tarde en España." },
      { es: "El postre", nl: "Het nagerecht / dessert", example: "De postre quiero flan." },
      { es: "La propina", nl: "De fooi", example: "Dejamos una buena propina." },
      { es: "El vaso", nl: "Het glas", example: "Un vaso de agua, por favor." },
      { es: "La taza", nl: "De kop / mok", example: "Una taza de café con leche." },
      { es: "El plato", nl: "Het bord / gerecht", example: "El primer plato es sopa." },
      { es: "El tenedor", nl: "De vork", example: "Necesito un tenedor." },
      { es: "El cuchillo", nl: "Het mes", example: "Corto la carne con el cuchillo." },
      { es: "La cuchara", nl: "De lepel", example: "Como la sopa con la cuchara." },
      { es: "Caliente", nl: "Heet / warm", example: "La sopa está muy caliente." },
      { es: "Sal y pimienta", nl: "Zout en peper", example: "Un poco de sal y pimienta." }
    ],
    cheatsheet: `
      <h4>Bestellen in het restaurant</h4>
      <p>Handige zinnen:</p>
      <p><b>¿Qué desea?</b> = Wat wenst u?</p>
      <p><b>Para mí...</b> = Voor mij...</p>
      <p><b>La cuenta, por favor</b> = De rekening, alstublieft.</p>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Wat betekent 'El restaurante'?", options: ["Het restaurant", "Het café", "De bar", "De winkel"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De ober'", correctAnswer: "El camarero" },
      { type: "multiple-choice", question: "Wat is 'La carta'?", options: ["De menukaart", "De brief", "De rekening", "Het ticket"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De rekening'", correctAnswer: "La cuenta" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het restaurant'", shuffledWords: ["restaurante", "El"], correctSentence: "El restaurante" },
      { type: "multiple-choice", question: "Wat betekent 'La cuenta, por favor'?", options: ["De rekening, alstublieft", "De menukaart, alstublieft", "Het water, alstublieft", "De koffie, alstublieft"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik zou graag willen...'", correctAnswer: "Quisiera" },
      { type: "multiple-choice", question: "Hoe vraag je om de menukaart?", options: ["La carta, por favor", "La cuenta, por favor", "El baño, por favor", "La mesa, por favor"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Voor mij...'", correctAnswer: "Para mí" },
      { type: "word-scramble", question: "Zet in volgorde: 'De menukaart'", shuffledWords: ["carta", "La"], correctSentence: "La carta" },
      { type: "multiple-choice", question: "Wat betekent 'Rico / Delicioso'?", options: ["Lekker / heerlijk", "Slecht", "Duur", "Koud"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het is lekker'", correctAnswer: "Está rico" },
      { type: "word-scramble", question: "Zet in volgorde: 'De rekening'", shuffledWords: ["cuenta", "La"], correctSentence: "La cuenta" },
      { type: "multiple-choice", question: "Wat is 'El desayuno'?", options: ["Het ontbijt", "De lunch", "Het avondeten", "Het tussendoortje"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het ontbijt'", correctAnswer: "El desayuno" },
      { type: "multiple-choice", question: "Wat betekent 'El almuerzo / La comida'?", options: ["De lunch / het middageten", "Het ontbijt", "Het avondeten", "De snack"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De lunch'", correctAnswer: "El almuerzo" },
      { type: "word-scramble", question: "Zet in volgorde: 'De ober'", shuffledWords: ["camarero", "El"], correctSentence: "El camarero" },
      { type: "multiple-choice", question: "Wat is 'La cena'?", options: ["Het avondeten", "Het ontbijt", "De lunch", "Het dessert"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het avondeten'", correctAnswer: "La cena" },
      { type: "multiple-choice", question: "Wat betekent 'Cenar'?", options: ["Avondeten", "Ontbijten", "Lunchen", "Koken"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Wij dineren'", correctAnswer: "Cenamos" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het ontbijt'", shuffledWords: ["desayuno", "El"], correctSentence: "El desayuno" },
      { type: "multiple-choice", question: "Wat is 'El postre'?", options: ["Het nagerecht / dessert", "Het voorgerecht", "Het hoofdgerecht", "De drank"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het dessert'", correctAnswer: "El postre" },
      { type: "multiple-choice", question: "Wat betekent 'La propina'?", options: ["De fooi", "De rekening", "De belasting", "De prijs"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De fooi'", correctAnswer: "La propina" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het avondeten'", shuffledWords: ["cena", "La"], correctSentence: "La cena" },
      { type: "multiple-choice", question: "Wat is 'El vaso'?", options: ["Het glas", "De kop", "Het bord", "De fles"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het glas'", correctAnswer: "El vaso" },
      { type: "multiple-choice", question: "Wat betekent 'La taza'?", options: ["De kop / mok", "Het glas", "Het bord", "De lepel"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De kop'", correctAnswer: "La taza" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het dessert'", shuffledWords: ["postre", "El"], correctSentence: "El postre" },
      { type: "multiple-choice", question: "Wat is 'El plato'?", options: ["Het bord / gerecht", "Het glas", "De lepel", "Het mes"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het bord'", correctAnswer: "El plato" },
      { type: "multiple-choice", question: "Wat betekent 'El tenedor'?", options: ["De vork", "Het mes", "De lepel", "Het bord"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De vork'", correctAnswer: "El tenedor" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het glas'", shuffledWords: ["vaso", "El"], correctSentence: "El vaso" },
      { type: "multiple-choice", question: "Wat is 'El cuchillo'?", options: ["Het mes", "De vork", "De lepel", "Het glas"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het mes'", correctAnswer: "El cuchillo" },
      { type: "multiple-choice", question: "Wat betekent 'La cuchara'?", options: ["De lepel", "Het mes", "De vork", "Het bord"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De lepel'", correctAnswer: "La cuchara" },
      { type: "word-scramble", question: "Zet in volgorde: 'De vork'", shuffledWords: ["tenedor", "El"], correctSentence: "El tenedor" },
      { type: "multiple-choice", question: "Wat is 'Caliente'?", options: ["Heet / warm", "Koud", "Vers", "Zout"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het is koud'", correctAnswer: "Está frío" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het mes'", shuffledWords: ["cuchillo", "El"], correctSentence: "El cuchillo" },
      { type: "multiple-choice", question: "Wat betekent 'Sal'?", options: ["Zout", "Peper", "Suiker", "Olie"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Zout en peper'", correctAnswer: "Sal y pimienta" }
    ]
  },
  {
    id: "a1_m7_eindtoets",
    chapterTitle: "Module 7: Eten, Drinken & Restaurant",
    title: "🏆 Eindtoets Module 7",
    description: "Proef de Spaanse cultuur! Test je kennis over gerechten, boodschappen doen, gerechten bestellen in het restaurant en culinaire woordenschat.",
    isOptional: false,
    points: 60,
    isExam: true,
    cheatsheet: `
      <h4>Examenrichtlijnen Module 7</h4>
      <p>Dit examen trekt telkens 15 willekeurige vragen uit de grote examenbank van 50 vragen over eten, drinken en horeca.</p>
    `,
    getDynamicQuestions: function() {
      let allQuestions = [];
      window.LESSONS_DATA.forEach(l => {
        if (l.id.startsWith("a1_m7") && !l.isExam && l.questionBank) {
          allQuestions = allQuestions.concat(l.questionBank);
        }
      });
      allQuestions.sort(() => Math.random() - 0.5);
      return allQuestions.slice(0, 15);
    }
  },

  /* =========================================================================
     MODULE 8: Reizen, Vakantie & Vrije Tijd (50+ Vragenbank)
     ========================================================================= */
  {
    id: "a1_m8_l1",
    chapterTitle: "Module 8: Reizen, Vakantie & Vrije Tijd",
    title: "1. Vakantie, Hotel & Reserveren",
    description: "Maak je klaar voor vertrek! Leer hoe je een hotel boekt, soepel incheckt bij de balie en geniet van een zorgeloze vakantie.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "Las vacaciones", nl: "De vakantie", example: "Me encantan las vacaciones." },
      { es: "La reserva", nl: "De reservering", example: "Tengo una reserva a nombre de Juan." },
      { es: "La habitación individual", nl: "De eenpersoonskamer", example: "Una habitación individual, por favor." },
      { es: "La habitación doble", nl: "De tweepersoonskamer", example: "Prefiero una habitación doble." },
      { es: "La llave", nl: "De sleutel", example: "Aquí tiene la llave de su habitación." },
      { es: "La playa", nl: "Het strand", example: "Vamos a la playa en verano." },
      { es: "La montaña", nl: "De berg", example: "Nos gusta caminar por la montaña." },
      { es: "La piscina", nl: "Het zwembad", example: "El hotel tiene una piscina grande." },
      { es: "El mar", nl: "De zee", example: "El agua del mar está fría." },
      { es: "El pasaporte", nl: "Het paspoort", example: "Necesito mi pasaporte para viajar." },
      { es: "La maleta / El equipaje", nl: "De koffer / bagage", example: "Llevo dos maletas." },
      { es: "El turista / La turista", nl: "De toerist", example: "Hay muchos turistas en la ciudad." },
      { es: "La recepción", nl: "De receptie", example: "Pregunto en la recepción." },
      { es: "Descansar", nl: "Rusten / uitrusten", example: "Quiero descansar en la playa." },
      { es: "La vista", nl: "Het uitzicht", example: "La habitación tiene vista al mar." },
      { es: "Incluido", nl: "Inbegrepen", example: "El desayuno está incluido." },
      { es: "El norte / sur / este / oeste", nl: "Noord / zuid / oost / west", example: "Vivimos en el sur de España." }
    ],
    cheatsheet: `
      <h4>In het hotel inchecken</h4>
      <p>Handige zinnen bij de receptie:</p>
      <p><b>Tengo una reserva...</b> = Ik heb een reservering...</p>
      <p><b>¿A nombre de quién?</b> = Op wiens naam?</p>
      <p><b>¿Cuál es la contraseña del WiFi?</b> = Wat is het WiFi-wachtwoord?</p>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Wat betekent 'Las vacaciones'?", options: ["De vakantie", "Het werk", "De school", "De reis"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De reservering'", correctAnswer: "La reserva" },
      { type: "multiple-choice", question: "Wat is 'La habitación individual'?", options: ["De eenpersoonskamer", "De tweepersoonskamer", "De suite", "De familiekamer"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De tweepersoonskamer'", correctAnswer: "La habitación doble" },
      { type: "word-scramble", question: "Zet in volgorde: 'De vakantie'", shuffledWords: ["vacaciones", "Las"], correctSentence: "Las vacaciones" },
      { type: "multiple-choice", question: "Wat betekent 'La llave'?", options: ["De sleutel", "De deur", "Het slot", "De kaart"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De sleutel'", correctAnswer: "La llave" },
      { type: "multiple-choice", question: "Hoe zeg je 'Ik heb een reservering'?", options: ["Tengo una reserva", "Quiero una reserva", "Busco una reserva", "Es una reserva"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het strand'", correctAnswer: "La playa" },
      { type: "word-scramble", question: "Zet in volgorde: 'De reservering'", shuffledWords: ["reserva", "La"], correctSentence: "La reserva" },
      { type: "multiple-choice", question: "Wat betekent 'La playa'?", options: ["Het strand", "De berg", "Het zwembad", "De zee"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De berg'", correctAnswer: "La montaña" },
      { type: "word-scramble", question: "Zet in volgorde: 'De sleutel'", shuffledWords: ["llave", "La"], correctSentence: "La llave" },
      { type: "multiple-choice", question: "Wat is 'La piscina'?", options: ["Het zwembad", "De zee", "Het strand", "Het meer"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het zwembad'", correctAnswer: "La piscina" },
      { type: "multiple-choice", question: "Wat betekent 'El mar'?", options: ["De zee", "Het meer", "De rivier", "Het strand"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De zee'", correctAnswer: "El mar" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het strand'", shuffledWords: ["playa", "La"], correctSentence: "La playa" },
      { type: "multiple-choice", question: "Wat is 'El sol'?", options: ["De zon", "De maan", "De ster", "De lucht"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De zon'", correctAnswer: "El sol" },
      { type: "multiple-choice", question: "Wat betekent 'El pasaporte'?", options: ["Het paspoort", "De ID-kaart", "Het ticket", "Het visum"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het paspoort'", correctAnswer: "El pasaporte" },
      { type: "word-scramble", question: "Zet in volgorde: 'De berg'", shuffledWords: ["montaña", "La"], correctSentence: "La montaña" },
      { type: "multiple-choice", question: "Wat is 'El equipaje / La maleta'?", options: ["De koffer / bagage", "De tas", "De rugzak", "De doos"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De koffer'", correctAnswer: "La maleta" },
      { type: "multiple-choice", question: "Wat betekent 'Viajar'?", options: ["Reizen", "Werken", "Rusten", "Slapen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik reis naar Spanje'", correctAnswer: "Viajo a España" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het zwembad'", shuffledWords: ["piscina", "La"], correctSentence: "La piscina" },
      { type: "multiple-choice", question: "Wat is 'El turismo'?", options: ["Het toerisme", "De reis", "De wandeling", "Het hotel"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De toerist'", correctAnswer: "El turista" },
      { type: "multiple-choice", question: "Wat betekent 'La recepción'?", options: ["De receptie", "De ingang", "De lobby", "De uitgang"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De receptie'", correctAnswer: "La reception / La recepción" },
      { type: "word-scramble", question: "Zet in volgorde: 'De koffer'", shuffledWords: ["maleta", "La"], correctSentence: "La maleta" },
      { type: "multiple-choice", question: "Wat is 'El turista'?", options: ["De toerist", "De reiziger", "De gast", "De baliemedewerker"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De gast'", correctAnswer: "El huésped" },
      { type: "multiple-choice", question: "Wat betekent 'Descansar'?", options: ["Rusten / uitrusten", "Werken", "Lopen", "Zwemmen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik wil uitrusten'", correctAnswer: "Quiero descansar" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het paspoort'", shuffledWords: ["pasaporte", "El"], correctSentence: "El pasaporte" },
      { type: "multiple-choice", question: "Wat is 'La vista'?", options: ["Het uitzicht", "Het raam", "De foto", "De spiegel"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Uitzicht op zee'", correctAnswer: "Vista al mar" },
      { type: "multiple-choice", question: "Wat betekent 'Incluido'?", options: ["Inbegrepen", "Exclusief", "Gratis", "Duur"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ontbijt inbegrepen'", correctAnswer: "Desayuno incluido" },
      { type: "word-scramble", question: "Zet in volgorde: 'De receptie'", shuffledWords: ["recepción", "La"], correctSentence: "La recepción" },
      { type: "multiple-choice", question: "Wat is 'El norte / sur / este / oeste'?", options: ["Noord / zuid / oost / west", "Groot / klein", "Dichtbij / ver", "Heet / koud"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het noorden'", correctAnswer: "El norte" },
      { type: "multiple-choice", question: "Wat betekent 'El sur'?", options: ["Het zuiden", "Het noorden", "Het oosten", "Het westen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het zuiden'", correctAnswer: "El sur" },
      { type: "word-scramble", question: "Zet in volgorde: 'Uitzicht op zee'", shuffledWords: ["mar", "al", "Vista"], correctSentence: "Vista al mar" },
      { type: "multiple-choice", question: "Wat betekent 'Fantástico'?", options: ["Fantastisch", "Slecht", "Saai", "Duur"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het is fantastisch'", correctAnswer: "Es fantástico" }
    ]
  },
  {
    id: "a1_m8_l2",
    chapterTitle: "Module 8: Reizen, Vakantie & Vrije Tijd",
    title: "2. Vrije Tijd, Hobby's & Het Werkwoord JUGAR / HACER",
    description: "Vertel vol passie over je hobby's en favoriete sporten door te ontdekken hoe je 'me gusta' en actieve werkwoorden gebruikt.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "El tiempo libre", nl: "De vrije tijd", example: "En mi tiempo libre leo libros." },
      { es: "El deporte", nl: "De sport", example: "Hago deporte todos los días." },
      { es: "Jugar", nl: "Spelen / sporten (met bal)", example: "Juego al fútbol con amigos." },
      { es: "Hacer", nl: "Doen / maken", example: "Hago fotos en la playa." },
      { es: "Leer", nl: "Lezen", example: "Me gusta leer novelas." },
      { es: "Escuchar música", nl: "Naar muziek luisteren", example: "Escucho música pop." },
      { es: "El fútbol", nl: "Voetbal", example: "El fútbol es muy popular." },
      { es: "El tenis", nl: "Tennis", example: "Juego al tenis los sábados." },
      { es: "El cine", nl: "De bioscoop", example: "Vamos al cine esta noche." },
      { es: "La película", nl: "De film", example: "La película es muy interesante." },
      { es: "Bailar", nl: "Dansen", example: "Me encanta bailar flamenco." },
      { es: "Cantar", nl: "Zingen", example: "Le gusta cantar en la ducha." },
      { es: "Nadar", nl: "Zwemmen", example: "Nado en la piscina del hotel." },
      { es: "Correr", nl: "Rennen / hardlopen", example: "Corro por el parque por la mañana." },
      { es: "Pintar", nl: "Schilderen", example: "Mi abuela pinta cuadros bonitos." },
      { es: "Sacar fotos", nl: "Foto's maken", example: "Saco fotos durante el viaje." },
      { es: "El libro", nl: "Het boek", example: "Leo un libro de misterio." },
      { es: "Interesante", nl: "Interessant", example: "Es un libro muy interesante." }
    ],
    cheatsheet: `
      <h4>Hobby's en Vrije Tijd</h4>
      <p>Om te zeggen wat je leuk vindt om te doen gebruik je vaak <b>'Me gusta + heel werkwoord'</b> (Ik vind het leuk om...).</p>
      <p>Bij sport met een bal gebruik je <i>jugar al...</i> (bijv. <i>jugar al fútbol</i>).</p>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Wat betekent 'El tiempo libre'?", options: ["De vrije tijd", "De werktijd", "De reistijd", "De schooltijd"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De sport'", correctAnswer: "El deporte" },
      { type: "multiple-choice", question: "Wat is 'Jugar'?", options: ["Spelen", "Lezen", "Werken", "Slapen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Voetballen'", correctAnswer: "Jugar al fútbol" },
      { type: "word-scramble", question: "Zet in volgorde: 'De vrije tijd'", shuffledWords: ["libre", "tiempo", "El"], correctSentence: "El tiempo libre" },
      { type: "multiple-choice", question: "Wat betekent 'Hacer'?", options: ["Doen / maken", "Zeggen", "Gaan", "Kijken"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik doe sport'", correctAnswer: "Hago deporte" },
      { type: "multiple-choice", question: "Hoe zeg je 'Ik vind het leuk om te lezen'?", options: ["Me gusta leer", "Tengo leer", "Soy leer", "Voy leer"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Lezen'", correctAnswer: "Leer" },
      { type: "word-scramble", question: "Zet in volgorde: 'De sport'", shuffledWords: ["deporte", "El"], correctSentence: "El deporte" },
      { type: "multiple-choice", question: "Wat betekent 'Escuchar música'?", options: ["Naar muziek luisteren", "Muziek maken", "Zingen", "Dansen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Muziek luisteren'", correctAnswer: "Escuchar música" },
      { type: "word-scramble", question: "Zet in volgorde: 'Spelen'", shuffledWords: ["Jugar"], correctSentence: "Jugar" },
      { type: "multiple-choice", question: "Wat is 'El fútbol'?", options: ["De voetbalsport / voetbal", "Tennis", "Basketball", "Zwemmen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Voetbal'", correctAnswer: "El fútbol" },
      { type: "multiple-choice", question: "Wat betekent 'El tenis'?", options: ["Tennis", "Voetbal", "Basketbal", "Golf"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Tennis'", correctAnswer: "El tenis" },
      { type: "word-scramble", question: "Zet in volgorde: 'Doen / maken'", shuffledWords: ["Hacer"], correctSentence: "Hacer" },
      { type: "multiple-choice", question: "Wat is 'El cine'?", options: ["De bioscoop", "Het theater", "Het museum", "Het park"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Naar de bioscoop gaan'", correctAnswer: "Ir al cine" },
      { type: "multiple-choice", question: "Wat betekent 'La película'?", options: ["De film", "Het boek", "Het lied", "De foto"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De film'", correctAnswer: "La película" },
      { type: "word-scramble", question: "Zet in volgorde: 'Naar muziek luisteren'", shuffledWords: ["música", "Escuchar"], correctSentence: "Escuchar música" },
      { type: "multiple-choice", question: "Wat is 'Bailar'?", options: ["Dansen", "Zingen", "Lopen", "Praten"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Dansen'", correctAnswer: "Bailar" },
      { type: "multiple-choice", question: "Wat betekent 'Cantar'?", options: ["Zingen", "Dansen", "Spelen", "Schrijven"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Zingen'", correctAnswer: "Cantar" },
      { type: "word-scramble", question: "Zet in volgorde: 'De bioscoop'", shuffledWords: ["cine", "El"], correctSentence: "El cine" },
      { type: "multiple-choice", question: "Wat is 'Nadar'?", options: ["Zwemmen", "Lopen", "Fietsen", "Rennen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Zwemmen'", correctAnswer: "Nadar" },
      { type: "multiple-choice", question: "Wat betekent 'Correr'?", options: ["Rennen / hardlopen", "Lopen", "Zwemmen", "Springen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Rennen'", correctAnswer: "Correr" },
      { type: "word-scramble", question: "Zet in volgorde: 'De film'", shuffledWords: ["película", "La"], correctSentence: "La película" },
      { type: "multiple-choice", question: "Wat is 'Viajar'?", options: ["Reizen", "Werken", "Studeren", "Koken"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Reizen'", correctAnswer: "Viajar" },
      { type: "multiple-choice", question: "Wat betekent 'El hobby / La afición'?", options: ["De hobby / liefhebberij", "Het werk", "De taak", "De studie"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Mijn hobby'", correctAnswer: "Mi hobby / Mi afición" },
      { type: "word-scramble", question: "Zet in volgorde: 'Zwemmen'", shuffledWords: ["Nadar"], correctSentence: "Nadar" },
      { type: "multiple-choice", question: "Wat is 'Pintar'?", options: ["Schilderen", "Schrijven", "Tekenen", "Lezen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Schilderen'", correctAnswer: "Pintar" },
      { type: "multiple-choice", question: "Wat betekent 'Sacar fotos'?", options: ["Foto's maken", "Foto's kijken", "Schilderen", "Tekenen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Foto's maken'", correctAnswer: "Sacar fotos / Tomar fotos" },
      { type: "word-scramble", question: "Zet in volgorde: 'Dansen'", shuffledWords: ["Bailar"], correctSentence: "Bailar" },
      { type: "multiple-choice", question: "Wat is 'El libro'?", options: ["Het boek", "Het schrift", "De krant", "Het tijdschrift"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het boek'", correctAnswer: "El libro" },
      { type: "multiple-choice", question: "Wat betekent 'Interesante'?", options: ["Interessant", "Saai", "Moeilijk", "Makkelijk"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het is interessant'", correctAnswer: "Es interesante" }
    ]
  },
  {
    id: "a1_m8_eindtoets",
    chapterTitle: "Module 8: Reizen, Vakantie & Vrije Tijd",
    title: "🏆 Eindtoets Module 8",
    description: "Wat doe jij in het weekend? Laat zien hoe goed je sporten, hobby's, vrije tijd en weersomstandigheden in het Spaans kunt uitdrukken.",
    isOptional: false,
    points: 60,
    isExam: true,
    cheatsheet: `
      <h4>Examenrichtlijnen Module 8</h4>
      <p>Dit examen trekt telkens 15 willekeurige vragen uit de grote examenbank van 50 vragen over vrije tijd, hobby's en sporten.</p>
    `,
    getDynamicQuestions: function() {
      let allQuestions = [];
      window.LESSONS_DATA.forEach(l => {
        if (l.id.startsWith("a1_m8") && !l.isExam && l.questionBank) {
          allQuestions = allQuestions.concat(l.questionBank);
        }
      });
      allQuestions.sort(() => Math.random() - 0.5);
      return allQuestions.slice(0, 15);
    }
  }
);
