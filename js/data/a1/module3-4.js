window.LESSONS_DATA = window.LESSONS_DATA || [];

window.LESSONS_DATA.push(
  /* =========================================================================
     MODULE 3: In het Restaurant, Eten & Drinken
     ========================================================================= */
  {
    id: "a1_m3_l1",
    chapterTitle: "Module 3: In het Restaurant & Eten",
    title: "1. Drankjes & Bestellen in de Horeca",
    description: "Leer drankjes bestellen, beleefd communiceren en betalen in een Spaans café.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "Un café", nl: "Een koffie", example: "Un café con leche, por favor." },
      { es: "Una cerveza", nl: "Een bier", example: "Una cerveza muy fría, por favor." },
      { es: "Agua", nl: "Water", example: "Un vaso de agua sin gas." },
      { es: "Vino tinto / blanco", nl: "Rode / witte wijn", example: "Dos copas de vino tinto." },
      { es: "Un té", nl: "Een thee", example: "Un té con limón." },
      { es: "El zumo de naranja", nl: "De jus d'orange", example: "Un zumo de naranja natural." },
      { es: "La cuenta", nl: "De rekening", example: "Camarero, la cuenta, por favor." },
      { es: "El camarero / La camarera", nl: "De ober / serveerster", example: "El camarero es muy amable." },
      { es: "Un vaso", nl: "Een glas", example: "Un vaso de agua, por favor." },
      { es: "Una taza", nl: "Een kop / mok", example: "Una taza de té caliente." },
      { es: "Sin gas / Con gas", nl: "Zonder koolzuur / Met koolzuur", example: "Agua sin gas, por favor." },
      { es: "La propina", nl: "De fooi", example: "Dejo una propina en la mesa." }
    ],
    cheatsheet: `
      <h4>Beleefd bestellen in het Spaans</h4>
      <p>Om iets te bestellen gebruik je vaak <b>'Por favor'</b> (alstublieft) en het werkwoord <i>querer</i> of de vaste formule:</p>
      <p><b>Quiero...</b> = Ik wil... / <b>¿Me da...?</b> = Geeft u mij...?</p>
      <p><i>Voorbeeld:</i> ¿Me da una cerveza, por favor?</p>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Hoe vraag je om de rekening?", options: ["El menú, por favor", "La cuenta, por favor", "¿Cuánto cuesta?", "Gracias"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Een koffie met melk'", correctAnswer: "Un café con leche" },
      { type: "multiple-choice", question: "Wat betekent 'Vino tinto'?", options: ["Witte wijn", "Rode wijn", "Rosé wijn", "Water"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'De ober'", correctAnswer: "El camarero" },
      { type: "word-scramble", question: "Zet in volgorde: 'Een bier, alstublieft'", shuffledWords: ["por", "cerveza,", "Una", "favor"], correctSentence: "Una cerveza, por favor" },
      { type: "multiple-choice", question: "Wat is 'El zumo de naranja'?", options: ["De thee", "De jus d'orange", "De rode wijn", "De koffie"], correctIndex: 1 },
      { type: "input", question: "Vertaal het woord voor 'Water':", correctAnswer: "Agua" },
      { type: "multiple-choice", question: "Wat betekent 'Un té'?", options: ["Een thee", "Een koffie", "Een bier", "Een glas"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'De rekening' naar het Spaans:", correctAnswer: "La cuenta" },
      { type: "word-scramble", question: "Zet in volgorde: 'Een koffie, alstublieft'", shuffledWords: ["por", "café,", "Un", "favor"], correctSentence: "Un café, por favor" },
      { type: "multiple-choice", question: "Wat is 'Vino blanco'?", options: ["Rode wijn", "Witte wijn", "Bier", "Koffie"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Een koud biertje'", correctAnswer: "Una cerveza fría" },
      { type: "word-scramble", question: "Zet in volgorde: 'Geeft u mij water, alstublieft'", shuffledWords: ["agua,", "por", "favor?", "¿Me", "da"], correctSentence: "¿Me da agua, por favor?" },
      { type: "multiple-choice", question: "Hoe zeg je 'alstublieft' in het Spaans?", options: ["Gracias", "Por favor", "Hola", "Adiós"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'De thee'", correctAnswer: "El té" },
      { type: "multiple-choice", question: "Wat betekent 'Una cerveza'?", options: ["Een wijn", "Een bier", "Een water", "Een jus d'orange"], correctIndex: 1 },
      { type: "word-scramble", question: "Zet in volgorde: 'De rekening, alstublieft'", shuffledWords: ["cuenta,", "favor", "La", "por"], correctSentence: "La cuenta, por favor" },
      { type: "input", question: "Vertaal: 'Een rode wijn'", correctAnswer: "Un vino tinto" },
      { type: "multiple-choice", question: "Wie bedient je in een restaurant?", options: ["El camarero", "El cocinero", "El cliente", "El niño"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Een koffie'", correctAnswer: "Un café" },
      { type: "multiple-choice", question: "Wat is 'Un vaso de agua'?", options: ["Een fles water", "Een glas water", "Een kopje thee", "Een glas wijn"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Twee rode wijnen'", correctAnswer: "Dos vinos tintos" },
      { type: "word-scramble", question: "Zet in volgorde: 'Een koffie, alstublieft'", shuffledWords: ["favor", "por", "café,", "Un"], correctSentence: "Un café, por favor" },
      { type: "multiple-choice", question: "Wat betekent 'Sin gas' bij water?", options: ["Met prik", "Zonder prik", "Warm", "Koud"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'De ober is vriendelijk'", correctAnswer: "El camarero es amable" },
      { type: "multiple-choice", question: "Hoe bestel je beleefd 'Geeft u mij...'?", options: ["¿Me da...?", "Quiero...", "Tengo...", "Soy..."], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Een kopje thee met citroen'", correctAnswer: "Un té con limón" },
      { type: "word-scramble", question: "Zet in volgorde: 'Witte wijn'", shuffledWords: ["blanco", "Vino"], correctSentence: "Vino blanco" },
      { type: "multiple-choice", question: "Wat betekent 'El café con leche'?", options: ["Koffie verkeerd / met melk", "Zwarte koffie", "Koffie met ijs", "Espresso"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Jus d'orange'", correctAnswer: "El zumo de naranja" },
      { type: "multiple-choice", question: "Wat is 'Una copa de vino'?", options: ["Een fles wijn", "Een glas wijn", "Een vat wijn", "Druivensap"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Water zonder prik'", correctAnswer: "Agua sin gas" },
      { type: "word-scramble", question: "Zet in volgorde: 'Rode wijn'", shuffledWords: ["tinto", "Vino"], correctSentence: "Vino tinto" },
      { type: "multiple-choice", question: "Welk woord betekent 'rekening'?", options: ["La cuenta", "El menú", "La propina", "El camarero"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Een glas water'", correctAnswer: "Un vaso de agua" },
      { type: "multiple-choice", question: "Wat betekent 'Natural' bij vruchtensap?", options: ["Natuurlijk / vers", "Kunstmatig", "Koud", "Uit pak"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De bar'", correctAnswer: "El bar" },
      { type: "word-scramble", question: "Zet in volgorde: 'De rekening, alstublieft'", shuffledWords: ["por", "cuenta,", "La", "favor"], correctSentence: "La cuenta, por favor" },
      { type: "multiple-choice", question: "Wat is een correcte bestelling voor bier?", options: ["Una cerveza, por favor", "Un cerveza, por favor", "La cerveza, por favor", "Unas cerveza"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Een thee met citroen'", correctAnswer: "Un té con limón" },
      { type: "multiple-choice", question: "Wat betekent 'Muy fría' bij een drankje?", options: ["Heel koud", "Heel warm", "Lauw", "Duur"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik wil een koffie'", correctAnswer: "Quiero un café" },
      { type: "word-scramble", question: "Zet in volgorde: 'Vers sinaasappelsap'", shuffledWords: ["naranja", "de", "zumo", "El"], correctSentence: "El zumo de naranja" },
      { type: "multiple-choice", question: "Wat is 'El agua'?", options: ["Het water", "Het bier", "De wijn", "De melk"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Dank u wel, ober'", correctAnswer: "Gracias, camarero" },
      { type: "multiple-choice", question: "Wat betekent 'Con leche'?", options: ["Met melk", "Zonder melk", "Met suiker", "Zonder suiker"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Een witte wijn'", correctAnswer: "Un vino blanco" },
      { type: "word-scramble", question: "Zet in volgorde: 'Koffie met melk'", shuffledWords: ["leche", "con", "café", "Un"], correctSentence: "Un café con leche" },
      { type: "multiple-choice", question: "Hoe zeg je 'een glas' in het Spaans?", options: ["Un vaso", "Una botella", "Un plato", "Una taza"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Alstublieft (bij een vraag)'", correctAnswer: "Por favor" }
    ]
  },
  {
    id: "a1_m3_l2",
    chapterTitle: "Module 3: In het Restaurant & Eten",
    title: "2. Tapas, Gerechten & Menukaarten",
    description: "Ontdek populaire Spaanse tapas, traditionele gerechten en leer hoe je smaak uitdrukt.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "Las tapas", nl: "De tapas (kleine hapjes)", example: "Comemos tapas en el bar." },
      { es: "La tortilla española", nl: "De Spaanse aardappelomelet", example: "La tortilla de patatas es riquísima." },
      { es: "El pan con tomate", nl: "Brood met tomaat", example: "Desayuno pan con tomate." },
      { es: "La carne", nl: "Het vlees", example: "No como carne, soy vegetariano." },
      { es: "El pescado", nl: "De vis", example: "El pescado fresco del día." },
      { es: "Delicioso / Riquísimo", nl: "Heerlijk / Ontzettend lekker", example: "¡La comida está riquísima!" },
      { es: "El plato principal", nl: "Het hoofdgerecht", example: "El plato principal es paella." },
      { es: "El postre", nl: "Het dessert / nagerecht", example: "De postre quiero helado." },
      { es: "El menú del día", nl: "Het dagmenu", example: "El menú del día es barato." },
      { es: "La ensalada", nl: "De salade", example: "Una ensalada mixta, por favor." },
      { es: "El marisco", nl: "De schaaldieren / zeevoedsel", example: "Me gusta mucho el marisco." },
      { es: "Buen provecho", nl: "Eet smakelijk", example: "¡Buen provecho a todos!" }
    ],
    cheatsheet: `
      <h4>Smaak en Voorkeuren uitdrukken</h4>
      <p>Om te zeggen dat je ergens trek in hebt of dat iets lekker is:</p>
      <p><b>Me gusta...</b> (Ik vind het leuk/lekker) of <b>Está delicioso</b> (Het is heerlijk).</p>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Wat is 'La carne'?", options: ["De vis", "Het vlees", "De kip", "Het brood"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Heerlijk / Ontzettend lekker'", correctAnswer: "Riquísimo" },
      { type: "multiple-choice", question: "Wat zijn 'Las tapas'?", options: ["Grote maaltijden", "Kleine Spaanse hapjes", "Drankjes", "Nagerechten"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'De vis'", correctAnswer: "El pescado" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het vlees'", shuffledWords: ["carne", "La"], correctSentence: "La carne" },
      { type: "multiple-choice", question: "Wat betekent 'El pescado'?", options: ["Het vlees", "De kip", "De vis", "De groente"], correctIndex: 2 },
      { type: "input", question: "Vertaal 'De tapas' naar het Spaans:", correctAnswer: "Las tapas" },
      { type: "multiple-choice", question: "Wat is 'El pan con tomate'?", options: ["Brood met kaas", "Brood met tomaat", "Soep met tomaat", "Vis met brood"], correctIndex: 1 },
      { type: "input", question: "Vertaal 'Heerlijk' (mannelijke vorm):", correctAnswer: "Delicioso" },
      { type: "word-scramble", question: "Zet in volgorde: 'De vis'", shuffledWords: ["pescado", "El"], correctSentence: "El pescado" },
      { type: "multiple-choice", question: "Wat is de Spaanse omelet genaamd?", options: ["Tortilla francesa", "Tortilla española", "Paella", "Gazpacho"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Brood met tomaat'", correctAnswer: "El pan con tomate" },
      { type: "word-scramble", question: "Zet in volgorde: 'De Spaanse omelet'", shuffledWords: ["española", "La", "tortilla"], correctSentence: "La tortilla española" },
      { type: "multiple-choice", question: "Wat betekent 'Riquísimo'?", options: ["Heel lekker", "Heel duur", "Slecht", "Heel koud"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het vlees'", correctAnswer: "La carne" },
      { type: "multiple-choice", question: "Wat is 'El pescado'?", options: ["Vlees", "Vis", "Brood", "Fruit"], correctIndex: 1 },
      { type: "word-scramble", question: "Zet in volgorde: 'De tapas'", shuffledWords: ["tapas", "Las"], correctSentence: "Las tapas" },
      { type: "input", question: "Vertaal: 'Heerlijk'", correctAnswer: "Riquísimo" },
      { type: "multiple-choice", question: "Welk gerecht komt oorspronkelijk uit Catalonië qua brood?", options: ["El pan con tomate", "La paella", "El cocido", "La tortilla"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De aardappelomelet'", correctAnswer: "La tortilla española" },
      { type: "multiple-choice", question: "Wat betekent 'Me gusta'?", options: ["Ik vind het lekker / leuk", "Ik haat het", "Ik wil het", "Ik heb het"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Verse vis'", correctAnswer: "El pescado fresco" },
      { type: "word-scramble", question: "Zet in volgorde: 'Brood met tomaat'", shuffledWords: ["tomate", "con", "pan", "El"], correctSentence: "El pan con tomate" },
      { type: "multiple-choice", question: "Wat is 'La comida'?", options: ["Het eten / de maaltijd", "Het drinken", "De rekening", "De menukaart"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het eten is heerlijk'", correctAnswer: "La comida está deliciosa" },
      { type: "multiple-choice", question: "Wat betekent 'Vegetariano'?", options: ["Vegetariër", "Vleeseter", "Viseter", "Kok"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik eet geen vlees'", correctAnswer: "No como carne" },
      { type: "word-scramble", question: "Zet in volgorde: 'Heerlijke tortilla'", shuffledWords: ["deliciosa", "tortilla", "La"], correctSentence: "La tortilla deliciosa" },
      { type: "multiple-choice", question: "Wat is 'El restaurante'?", options: ["Het restaurant", "Het café", "De bar", "De markt"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De menukaart'", correctAnswer: "El menú" },
      { type: "multiple-choice", question: "Wat betekent 'Delicioso'?", options: ["Heerlijk", "Vies", "Zout", "Zoet"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Vis en vlees'", correctAnswer: "Pescado y carne" },
      { type: "word-scramble", question: "Zet in volgorde: 'De menukaart, alstublieft'", shuffledWords: ["favor", "por", "menú,", "El"], correctSentence: "El menú, por favor" },
      { type: "multiple-choice", question: "Wat is een 'Tapa'?", options: ["Een klein Spaans hapje", "Een hoofdgerecht", "Een toetje", "Een drankje"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik vind het lekker'", correctAnswer: "Me gusta" },
      { type: "multiple-choice", question: "Wat betekent 'La tortilla de patatas'?", options: ["Aardappelomelet", "Spaanse pannenkoek", "Kippensoep", "Broodje kaas"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De aardappel'", correctAnswer: "La patata" },
      { type: "word-scramble", question: "Zet in volgorde: 'Verse vis van de dag'", shuffledWords: ["día", "del", "fresco", "pescado", "El"], correctSentence: "El pescado fresco del día" },
      { type: "multiple-choice", question: "Wat is 'El desayuno'?", options: ["Het ontbijt", "De lunch", "Het avondeten", "Het snackje"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik ontbijt met brood'", correctAnswer: "Desayuno pan" },
      { type: "multiple-choice", question: "Wat betekent 'Rico'?", options: ["Lekker / rijk", "Arm", "Slecht", "Klein"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het restaurant'", correctAnswer: "El restaurante" },
      { type: "word-scramble", question: "Zet in volgorde: 'Vis of vlees'", shuffledWords: ["carne", "o", "Pescado"], correctSentence: "Pescado o carne" },
      { type: "multiple-choice", question: "Wat betekent 'El plato'?", options: ["Het bord / gerecht", "Het glas", "De lepel", "Het mes"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Een tapasbar'", correctAnswer: "Un bar de tapas" },
      { type: "multiple-choice", question: "Wat is 'La cena'?", options: ["Het avondeten", "Het ontbijt", "De lunch", "Het snackje"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Eet smakelijk'", correctAnswer: "Buen provecho" },
      { type: "word-scramble", question: "Zet in volgorde: 'Heerlijk eten'", shuffledWords: ["comida", "riquísima", "La"], correctSentence: "La comida riquísima" },
      { type: "multiple-choice", question: "Wat betekent 'El almuerzo'?", options: ["De lunch", "Het ontbijt", "Het avondeten", "De borrel"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De ober'", correctAnswer: "El camarero" }
    ]
  },
  {
    id: "a1_m3_l3",
    chapterTitle: "Module 3: In het Restaurant & Eten",
    title: "3. Grammatica: Het werkwoord 'Zijn' (Ser vs. Estar)",
    description: "Ontdek wanneer je 'ser' of 'estar' gebruikt bij het beschrijven van gerechten, temperaturen, locaties en smaken.",
    isOptional: false,
    points: 50,
    vocabulary: [
      { es: "Ser", nl: "Zijn (permanente eigenschap / herkomst)", example: "La paella es típica de España." },
      { es: "Estar", nl: "Zijn (tijdelijke toestand / smaak / locatie)", example: "La sopa está muy caliente." },
      { es: "Caliente", nl: "Warm / Heet", example: "El café está caliente." },
      { es: "Frío / Fría", nl: "Koud", example: "La cerveza está fría." },
      { es: "Dulce", nl: "Zoet", example: "El postre es muy dulce." },
      { es: "Salado / Salada", nl: "Zout", example: "La comida está un poco salada." },
      { es: "Picante", nl: "Pittig", example: "La salsa es picante." },
      { es: "Rico / Rica", nl: "Lekker / Smakelijk", example: "Este plato está muy rico." },
      { es: "Bueno / Buena", nl: "Goed / Kwalitatief", example: "El vino de la casa es bueno." },
      { es: "Malo / Mala", nl: "Slecht", example: "El servicio is malo." }
    ],
    cheatsheet: `<h3>Ser vs. Estar in het Restaurant</h3>
<p>Het Spaans gebruikt twee werkwoorden voor 'zijn'. In de horeca en bij eten is het verschil heel belangrijk:</p>
<ul>
  <li><b>SER (soy, eres, es, somos, sois, son):</b> Gebruik je voor vaste eigenschappen van eten/drinken, prijzen, identiteit en type gerechten.<br><em>Voorbeeld: La tortilla es un plato español.</em></li>
  <li><b>ESTAR (estoy, estás, está, estamos, estáis, están):</b> Gebruik je voor temperatuur, actuele smaak, toestand en locaties.<br><em>Voorbeeld: La sopa está caliente.</em></li>
</ul>`,
    questionBank: [
      { type: "multiple-choice", question: "Welk werkwoord gebruik je als de soep op dit moment koud is?", options: ["estar (está fría)", "ser (es fría)", "tener", "haber"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'De soep is koud' (toestand):", correctAnswer: "La sopa está fría" },
      { type: "multiple-choice", question: "Welk werkwoord gebruik je voor de locatie van een restaurant?", options: ["estar", "ser", "hacer", "tener"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Wij zijn in het restaurant':", correctAnswer: "Estamos en el restaurante" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het bier is koud'", shuffledWords: ["fría", "está", "cerveza", "La"], correctSentence: "La cerveza está fría" },
      { type: "multiple-choice", question: "Kies de juiste vorm: 'El café ... caliente'", options: ["está", "es", "somos", "están"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Waar is het restaurant?':", correctAnswer: "¿Dónde está el restaurante?" },
      { type: "multiple-choice", question: "Wat betekent 'La paella está rica'?", options: ["De paella is (nu) lekker", "De paella is een rijk gerecht", "De paella is duur", "De paella is koud"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Het eten is lekker':", correctAnswer: "La comida está rica" },
      { type: "word-scramble", question: "Zet in volgorde: 'De thee is heet'", shuffledWords: ["caliente", "está", "té", "El"], correctSentence: "El té está caliente" },
      { type: "multiple-choice", question: "Kies de juiste vorm: 'El vino tinto ... de España' (herkomst)", options: ["es", "está", "somos", "están"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Het toetje is zoet' (vaste eigenschap):", correctAnswer: "El postre es dulce" },
      { type: "multiple-choice", question: "Wat is de 'están'-vorm voor glazen water die koud staan?", options: ["Los vasos de agua están fríos", "Los vasos de agua son fríos", "Los vasos de agua es frío", "Los vasos de agua está fríos"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'De vis is erg lekker':", correctAnswer: "El pescado está muy rico" },
      { type: "word-scramble", question: "Zet in volgorde: 'Waar is mijn koffie?'", shuffledWords: ["mi", "está", "café?", "¿Dónde"], correctSentence: "¿Dónde está mi café?" },
      { type: "multiple-choice", question: "Wat betekent 'El camarero está ocupado'?", options: ["De ober is (nu) bezig", "De ober is een man", "De ober is vriendelijk", "De ober is thuis"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'De tafel is schoon':", correctAnswer: "La mesa está limpia" },
      { type: "multiple-choice", question: "Welke zin geeft herkomst of identiteit van een gerecht aan?", options: ["La tortilla es española", "La tortilla está española", "La tortilla está cocina", "La tortilla soy española"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Het restaurant is erg mooi':", correctAnswer: "El restaurante es muy bonito" },
      { type: "word-scramble", question: "Zet in volgorde: 'De rekening is tien euro'", shuffledWords: ["euros", "diez", "es", "La cuenta"], correctSentence: "La cuenta es diez euros" },
      { type: "multiple-choice", question: "Wat is het verschil tussen 'es dulce' en 'está dulce'?", options: ["es = zoet van zichzelf, está = zoet van smaak (bijv. extra toegevoegd)", "Er is geen verschil", "es gebruik je voor de rekening", "está gebruik je voor de ober"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Ik ben in de bar':", correctAnswer: "Estoy en el bar" },
      { type: "multiple-choice", question: "Kies de juiste vorm: 'Las tapas ... deliciosas'", options: ["están", "son", "es", "está"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Het glas is leeg':", correctAnswer: "El vaso está vacío" },
      { type: "word-scramble", question: "Zet in volgorde: 'Wij zijn klaar om te bestellen'", shuffledWords: ["pedir", "para", "listos", "Estamos"], correctSentence: "Estamos listos para pedir" },
      { type: "multiple-choice", question: "Wat gebruik je bij de vraag 'Hoe is het eten?'", options: ["¿Cómo está la comida?", "¿Dónde es la comida?", "¿Qué está la comida?", "¿Quién es la comida?"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'De ober is vriendelijk':", correctAnswer: "El camarero es amable" },
      { type: "multiple-choice", question: "Wat betekent 'El agua está fría'?", options: ["Het water is koud", "Het water is warm", "Het water is op", "Het water is duur"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'De borden zijn warm':", correctAnswer: "Los platos están calientes" },
      { type: "word-scramble", question: "Zet in volgorde: 'De wijn is erg goed'", shuffledWords: ["bueno", "muy", "está", "El vino"], correctSentence: "El vino está muy bueno" },
      { type: "multiple-choice", question: "Wat is de 'yo'-vorm als je zegt dat je klaar bent? 'Yo ... listo'", options: ["estoy", "soy", "es", "son"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'De soep is heet':", correctAnswer: "La sopa está caliente" },
      { type: "multiple-choice", question: "Welke werkwoordsvorm hoort bij 'Los clientes ... en la mesa'?", options: ["están", "son", "es", "está"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Ik ben vegetariër':", correctAnswer: "Soy vegetariano" },
      { type: "word-scramble", question: "Zet in volgorde: 'De keuken is open'", shuffledWords: ["abierta", "está", "cocina", "La"], correctSentence: "La cocina está abierta" },
      { type: "multiple-choice", question: "Wat betekent 'La fruta es fresca'?", options: ["Fruit is vers (algemene eigenschap)", "Fruit is koud", "Fruit is duur", "Fruit is koud gezet"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Het restaurant is gesloten':", correctAnswer: "El restaurante está cerrado" },
      { type: "multiple-choice", question: "Kies de juiste vorm voor 'Dit gerecht ... typisch Spaans':", options: ["es", "está", "están", "somos"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'De koffie is klaar':", correctAnswer: "El café está listo" },
      { type: "word-scramble", question: "Zet in volgorde: 'Het eten is heerlijk'", shuffledWords: ["deliciosa", "está", "comida", "La"], correctSentence: "La comida está deliciosa" },
      { type: "multiple-choice", question: "Wat is de juiste vorm: 'Ustedes ... en het centro'?", options: ["están", "son", "estamos", "somos"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Waar is de wc?':", correctAnswer: "¿Dónde está el baño?" },
      { type: "multiple-choice", question: "Welke zin is correct voor de rekening?", options: ["La cuenta es de 20 euros", "La cuenta está de 20 euros", "La cuenta somos de 20 euros", "La cuenta están 20 euros"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Het bier is erg koud':", correctAnswer: "La cerveza está muy fría" },
      { type: "word-scramble", question: "Zet in volgorde: 'De vis is vers'", shuffledWords: ["fresco", "está", "pescado", "El"], correctSentence: "El pescado está fresco" },
      { type: "multiple-choice", question: "Wat betekent 'Estoy satisfecho' na een maaltijd?", options: ["Ik zit vol / ben voldaan", "Ik ben hongerig", "Ik ben de ober", "Ik ben op zoek naar de kaart"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'De wijn is rood':", correctAnswer: "El vino es tinto" },
      { type: "multiple-choice", question: "Wat is de juiste vorm: 'Nosotros ... contentos con la comida'?", options: ["estamos", "somos", "son", "están"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Het bord is heet':", correctAnswer: "El plato está caliente" },
      { type: "word-scramble", question: "Zet in volgorde: 'De kaas is erg goed'", shuffledWords: ["bueno", "muy", "es", "El queso"], correctSentence: "El queso es muy bueno" }
    ]
  },
  {
    id: "a1_m3_eindtoets",
    chapterTitle: "Module 3: In het Restaurant & Eten",
    title: "🏆 Eindtoets Module 3",
    description: "Klaar om jezelf te testen? Laat zien wat je hebt geleerd over drankjes, tapas, gerechten en restaurantvaardigheden!",
    isOptional: false,
    isExam: true,
    points: 50,
    getDynamicQuestions: function() {
      let allQuestions = [];
      window.LESSONS_DATA.forEach(l => {
        if (l.id.startsWith("a1_m3") && !l.isExam && l.questionBank) {
          allQuestions = allQuestions.concat(l.questionBank);
        }
      });
      allQuestions.sort(() => Math.random() - 0.5);
      return allQuestions.slice(0, 15);
    }
  },

  /* =========================================================================
     MODULE 4: Familie, Relaties & Het Werkwoord QUERER
     ========================================================================= */
  {
    id: "a1_m4_l1",
    chapterTitle: "Module 4: Familie & Relaties",
    title: "1. Familieleden & Het Bezit (Mi familia)",
    description: "Maak kennis met alle familieleden en leer hoe je bezit aangeeft met mi en mis.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "La familia", nl: "De familie / Het gezin", example: "Mi familia es muy grande." },
      { es: "Los padres", nl: "De ouders", example: "Mis padres viven en Madrid." },
      { es: "El padre / Papá", nl: "De vader / Papa", example: "Mi padre trabaja en un banco." },
      { es: "La madre / Mamá", nl: "De moeder / Mama", example: "Mi madre se llama Ana." },
      { es: "El hermano / La hermana", nl: "De broer / De zus", example: "Tengo un hermano y dos hermanas." },
      { es: "Los abuelos", nl: "De grootouders", example: "Mis abuelos viven en Sevilla." },
      { es: "El abuelo / La abuela", nl: "De opa / De oma", example: "Mi abuelo tiene ochenta años." },
      { es: "El hijo / La hija", nl: "De zoon / De dochter", example: "Su hija estudia medicina." },
      { es: "El tío / La tía", nl: "De oom / De tante", example: "Mis tíos vienen de visita." },
      { es: "El pariente", nl: "Het familielid", example: "Invitamos a todos los parientes." }
    ],
    cheatsheet: `
      <h4>Bezit aangeven met MI / MIS</h4>
      <p>Om aan te geven dat iets van jou is gebruik je:</p>
      <p><b>Mi</b> + enkelvoud (bijv. <i>mi madre</i> = mijn moeder)</p>
      <p><b>Mis</b> + meervoud (bijv. <i>mis hermanos</i> = mijn broers/zussen)</p>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Wat betekent 'El hermano'?", options: ["De oom", "De broer", "De zoon", "De vader"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Mijn moeder'", correctAnswer: "Mi madre" },
      { type: "multiple-choice", question: "Wanneer gebruik je 'mis' in plaats van 'mi'?", options: ["Voor meervoudige woorden", "Voor vrouwelijke woorden", "Voor formele personen", "Voor werkwoorden"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De grootouders'", correctAnswer: "Los abuelos" },
      { type: "word-scramble", question: "Zet in volgorde: 'Mijn broer'", shuffledWords: ["hermano", "Mi"], correctSentence: "Mi hermano" },
      { type: "multiple-choice", question: "Wat is 'La hermana'?", options: ["De zus", "De moeder", "De tante", "De dochter"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'De vader' naar het Spaans:", correctAnswer: "El padre" },
      { type: "multiple-choice", question: "Wat betekent 'El hijo'?", options: ["De oom", "De zoon", "De broer", "De neef"], correctIndex: 1 },
      { type: "input", question: "Vertaal 'Mijn vader':", correctAnswer: "Mi padre" },
      { type: "word-scramble", question: "Zet in volgorde: 'Mijn zus'", shuffledWords: ["hermana", "Mi"], correctSentence: "Mi hermana" },
      { type: "multiple-choice", question: "Wat betekent 'La tía'?", options: ["De tante", "De moeder", "De zus", "De dochter"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De oom'", correctAnswer: "El tío" },
      { type: "word-scramble", question: "Zet in volgorde: 'Mijn grootouders'", shuffledWords: ["abuelos", "Mis"], correctSentence: "Mis abuelos" },
      { type: "multiple-choice", question: "Wat is de dochter in het Spaans?", options: ["La hija", "El hijo", "La hermana", "La madre"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Mijn zus'", correctAnswer: "Mi hermana" },
      { type: "multiple-choice", question: "Wat betekent 'El padre'?", options: ["De vader", "De oom", "De broer", "De zoon"], correctIndex: 0 },
      { type: "word-scramble", question: "Zet in volgorde: 'Mijn oom'", shuffledWords: ["tío", "Mi"], correctSentence: "Mi tío" },
      { type: "input", question: "Vertaal: 'De zoon'", correctAnswer: "El hijo" },
      { type: "multiple-choice", question: "Wat zijn 'Los abuelos'?", options: ["De ouders", "De grootouders", "De ooms", "De kinderen"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'De moeder'", correctAnswer: "La madre" },
      { type: "multiple-choice", question: "Wat betekent 'La hija'?", options: ["De dochter", "De zus", "De moeder", "De tante"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Mijn kinderen'", correctAnswer: "Mis hijos" },
      { type: "word-scramble", question: "Zet in volgorde: 'Mijn ouders'", shuffledWords: ["padres", "Mis"], correctSentence: "Mis padres" },
      { type: "multiple-choice", question: "Wat is 'El tío'?", options: ["De oom", "De vader", "De broer", "De opa"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De familie'", correctAnswer: "La familia" },
      { type: "multiple-choice", question: "Wat betekent 'Mis amigos'?", options: ["Mijn vrienden", "Mijn familie", "Mijn broers", "Mijn ooms"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Mijn tantes'", correctAnswer: "Mis tías" },
      { type: "word-scramble", question: "Zet in volgorde: 'Mijn moeder'", shuffledWords: ["madre", "Mi"], correctSentence: "Mi madre" },
      { type: "multiple-choice", question: "Wat is de opa / grootvader?", options: ["El abuelo", "El padre", "El tío", "El hermano"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De oma'", correctAnswer: "La abuela" },
      { type: "multiple-choice", question: "Wat betekent 'El pariente'?", options: ["Het familielid", "De vriend", "De buurman", "De collega"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Mijn broers'", correctAnswer: "Mis hermanos" },
      { type: "word-scramble", question: "Zet in volgorde: 'Mijn dochter'", shuffledWords: ["hija", "Mi"], correctSentence: "Mi hija" },
      { type: "multiple-choice", question: "Wanneer gebruik je 'mi'?", options: ["Bij enkelvoudig bezit", "Bij meervoudig bezit", "Altijd", "Nooit"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De zus'", correctAnswer: "La hermana" },
      { type: "multiple-choice", question: "Wat is 'La madre'?", options: ["De moeder", "De vader", "De zus", "De dochter"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Mijn zoon'", correctAnswer: "Mi hijo" },
      { type: "word-scramble", question: "Zet in volgorde: 'Mijn vader'", shuffledWords: ["padre", "Mi"], correctSentence: "Mi padre" },
      { type: "multiple-choice", question: "Wat betekent 'Los padres'?", options: ["De ouders", "De grootouders", "De ooms", "De kinderen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De tante'", correctAnswer: "La tía" },
      { type: "multiple-choice", question: "Wat is 'El hermano'?", options: ["De broer", "De zus", "De vader", "De oom"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Mijn familie'", correctAnswer: "Mi familia" },
      { type: "word-scramble", question: "Zet in volgorde: 'Mijn vrienden'", shuffledWords: ["amigos", "Mis"], correctSentence: "Mis amigos" },
      { type: "multiple-choice", question: "Wat betekent 'La abuela'?", options: ["De oma", "De moeder", "De tante", "De zus"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De broer'", correctAnswer: "El hermano" },
      { type: "multiple-choice", question: "Wat is de meervoudsvorm van 'mi'?", options: ["Mis", "Me", "Mas", "Mios"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Mijn opa'", correctAnswer: "Mi abuelo" },
      { type: "word-scramble", question: "Zet in volgorde: 'Mijn zus'", shuffledWords: ["hermana", "Mi"], correctSentence: "Mi hermana" },
      { type: "multiple-choice", question: "Wat betekent 'El abuelo'?", options: ["De opa", "De vader", "De oom", "De zoon"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De vader'", correctAnswer: "El padre" }
    ]
  },
  {
    id: "a1_m4_l2",
    chapterTitle: "Module 4: Familie & Relaties",
    title: "2. Het Werkwoord QUERER (Willen / Liefhebben)",
    description: "Leer het onregelmatige werkwoord querer vervoegen en bespreek relatiestatussen.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "Querer", nl: "Willen / Liefhebben", example: "Quiero aprender español." },
      { es: "La familia", nl: "De familie / Het gezin", example: "Mi familia es muy unida." },
      { es: "El amigo / La amiga", nl: "De vriend / De vriendin", example: "Mis amigos son muy divertidos." },
      { es: "Casado / Casada", nl: "Getrouwd", example: "Mi hermano está casado." },
      { es: "Soltero / Soltera", nl: "Vrijgezel", example: "Soy soltero." },
      { es: "Divorciado / Divorciada", nl: "Gescheiden", example: "Ella está divorciada." },
      { es: "El novio / La novia", nl: "De vriend / De vriendin / De partner", example: "Mi novio es muy simpático." },
      { es: "La persona", nl: "De persoon", example: "Es una persona muy amable." },
      { es: "La gente", nl: "De mensen", example: "Hay mucha gente en la fiesta." },
      { es: "Joven", nl: "Jong", example: "Mi hermano es joven." }
    ],
    cheatsheet: `
      <h4>Vervoeging van QUERER (Klinkerwisseling e -> ie)</h4>
      <p>Querer is een belangrijk onregelmatig werkwoord:</p>
      <ul>
        <li>Yo <b>quiero</b> (ik wil)</li>
        <li>Tú <b>quieres</b> (jij wilt)</li>
        <li>Él/Ella/Usted <b>quiere</b> (hij/zij/u wilt)</li>
        <li>Nosotros/as <b>queremos</b> (wij willen)</li>
        <li>Vosotros/as <b>queréis</b> (jullie willen)</li>
        <li>Ellos/Ellas/Ustedes <b>quieren</b> (zij/u [mv] willen)</li>
      </ul>
      <p><i>Volgend werkwoord blijft in de heel-vorm (infinitief):</i> Quiero <b>viajar</b> (Ik wil reizen).</p>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Welke vorm hoort bij 'Yo' van querer?", options: ["quieres", "quiero", "quiere", "queremos"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Wij willen'", correctAnswer: "Queremos" },
      { type: "word-scramble", question: "Zet in volgorde: 'Ik wil Spaans leren'", shuffledWords: ["español", "Quiero", "aprender"], correctSentence: "Quiero aprender español" },
      { type: "input", question: "Vertaal: 'Vrijgezel'", correctAnswer: "Soltero" },
      { type: "multiple-choice", question: "Wat betekent 'Quiero'?", options: ["Ik wil", "Jij wilt", "Wij willen", "Zij willen"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Jij wilt' (werkwoord querer):", correctAnswer: "Quieres" },
      { type: "multiple-choice", question: "Wat is de vorm van querer bij 'Nosotros'?", options: ["quieren", "queréis", "queremos", "quiero"], correctIndex: 2 },
      { type: "input", question: "Vertaal 'Getrouwd':", correctAnswer: "Casado" },
      { type: "word-scramble", question: "Zet in volgorde: 'Ik wil water'", shuffledWords: ["agua", "Quiero"], correctSentence: "Quiero agua" },
      { type: "input", question: "Vertaal 'De vriendin':", correctAnswer: "La amiga" },
      { type: "multiple-choice", question: "Wat betekent 'Soltero'?", options: ["Getrouwd", "Vrijgezel", "Gescheiden", "Weduwe"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Getrouwd'", correctAnswer: "Casado" },
      { type: "word-scramble", question: "Zet in volgorde: 'Jij wilt water'", shuffledWords: ["agua?", "¿Quieres"], correctSentence: "¿Quieres agua?" },
      { type: "multiple-choice", question: "Wat is de 'ellos/ellas'-vorm van querer?", options: ["quiero", "quieres", "quieren", "queremos"], correctIndex: 2 },
      { type: "input", question: "Vertaal: 'De vriend'", correctAnswer: "El amigo" },
      { type: "multiple-choice", question: "Wat betekent 'La familia'?", options: ["De vrienden", "De familie / het gezin", "Het huis", "Het werk"], correctIndex: 1 },
      { type: "word-scramble", question: "Zet in volgorde: 'Mijn vriend'", shuffledWords: ["amigo", "Mi"], correctSentence: "Mi amigo" },
      { type: "input", question: "Vertaal: 'Willen / Liefhebben'", correctAnswer: "Querer" },
      { type: "multiple-choice", question: "Welk type klinkerwisseling heeft querer in de vervoeging?", options: ["e -> ie", "o -> ue", "e -> i", "geen wisseling"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De vriendin'", correctAnswer: "La amiga" },
      { type: "multiple-choice", question: "Wat is de 'él/ella' vorm van querer?", options: ["quiere", "quiero", "quieres", "queremos"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Jij wilt reizen'", correctAnswer: "Quieres viajar" },
      { type: "word-scramble", question: "Zet in volgorde: 'Wij willen Spaans'", shuffledWords: ["español", "queremos", "Nosotros"], correctSentence: "Nosotros queremos español" },
      { type: "multiple-choice", question: "Wat betekent 'Casado'?", options: ["Getrouwd", "Vrijgezel", "Verliefd", "Vriendelijk"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Zij willen'", correctAnswer: "Quieren" },
      { type: "multiple-choice", question: "Wat is de 'vosotros' vorm van querer?", options: ["queréis", "quieren", "queremos", "quieres"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik ben vrijgezel'", correctAnswer: "Soy soltero" },
      { type: "word-scramble", question: "Zet in volgorde: 'Ik wil spreken'", shuffledWords: ["hablar", "Quiero"], correctSentence: "Quiero hablar" },
      { type: "multiple-choice", question: "Wat betekent 'El amigo'?", options: ["De vriend", "De broer", "De oom", "De zoon"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De vrienden'", correctAnswer: "Los amigos" },
      { type: "multiple-choice", question: "Wat gebeurt er met het werkwoord na 'quiero'?", options: ["Blijft in de heel-vorm (infinitief)", "Wordt vervoegd", "Krijgt een verleden tijd", "Verdwijnt"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Wij willen eten'", correctAnswer: "Queremos comer" },
      { type: "word-scramble", question: "Zet in volgorde: 'Wil jij eten?'", shuffledWords: ["comer?", "¿Quieres"], correctSentence: "¿Quieres comer?" },
      { type: "multiple-choice", question: "Wat betekent 'La amiga'?", options: ["De vriendin", "De zus", "De moeder", "De tante"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Mijn vrienden'", correctAnswer: "Mis amigos" },
      { type: "multiple-choice", question: "Wat is de juiste vorm: 'Tú ... un café'?", options: ["quieres", "quiero", "quiere", "queremos"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Hij wil water'", correctAnswer: "Él quiere agua" },
      { type: "word-scramble", question: "Zet in volgorde: 'Zij willen reizen'", shuffledWords: ["viajar", "quieren", "Ellos"], correctSentence: "Ellos quieren viajar" },
      { type: "multiple-choice", question: "Wat betekent 'Querer' als zelfstandig naamwoord of vertaling?", options: ["Willen / liefhebben", "Kunnen", "Hebben", "Zijn"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Jullie willen'", correctAnswer: "Queréis" },
      { type: "multiple-choice", question: "Wat is de juiste vorm: 'Yo ... aprender'?", options: ["quiero", "quieres", "quiere", "queremos"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Getrouwd man'", correctAnswer: "Hombre casado" },
      { type: "word-scramble", question: "Zet in volgorde: 'Ik wil werken'", shuffledWords: ["trabajar", "Quiero"], correctSentence: "Quiero trabajar" },
      { type: "multiple-choice", question: "Wat betekent 'Soltero'?", options: ["Vrijgezel", "Getrouwd", "Broer", "Vriend"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De familie is groot'", correctAnswer: "La familia es grande" },
      { type: "multiple-choice", question: "Welk voornaamwoord hoort bij 'queremos'?", options: ["Nosotros", "Yo", "Tú", "Ellos"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Goede vriend'", correctAnswer: "Buen amigo" },
      { type: "word-scramble", question: "Zet in volgorde: 'Mijn vriendin'", shuffledWords: ["amiga", "Mi"], correctSentence: "Mi amiga" },
      { type: "multiple-choice", question: "Wat is de 'yo' vorm van querer?", options: ["quiero", "quieres", "quiere", "queremos"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik wil slapen'", correctAnswer: "Quiero dormir" }
    ]
  },
  {
    id: "a1_m4_l3",
    chapterTitle: "Module 4: Familie & Relaties",
    title: "3. Grammatica: Regelmatige werkwoorden (-AR, -ER, -IR)",
    description: "Meester de basis van de Spaanse werkwoorden! Leer hoe je regelmatige werkwoorden vervoegt om te praten over familie en het dagelijks leven.",
    isOptional: false,
    points: 50,
    vocabulary: [
      { es: "Hablar", nl: "Spreken", example: "Hablo español con mi familia." },
      { es: "Comer", nl: "Eten", example: "Comemos juntos los domingos." },
      { es: "Vivir", nl: "Wonen / Leven", example: "Vivimos en una casa grande." },
      { es: "Trabajar", nl: "Werken", example: "Mi padre trabaja mucho." },
      { es: "Escribir", nl: "Schrijven", example: "Escribo una carta a mi abuela." },
      { es: "Estudiar", nl: "Studeren", example: "Mi hermana estudia en la universidad." },
      { es: "Cenar", nl: "'s Avonds eten", example: "Cenamos a las ocho." },
      { es: "Comprar", nl: "Kopen", example: "Compramos pan." },
      { es: "Beber", nl: "Drinken", example: "Bebo agua fresca." },
      { es: "Aprender", nl: "Leren", example: "Aprendemos español todos los días." }
    ],
    cheatsheet: `<h3>Regelmatige Werkwoorden (-AR, -ER, -IR)</h3>
<p>Om een regelmatig werkwoord te vervoegen, haal je de uitgang (-ar, -er, -ir) eraf en voeg je de juiste persoonsuitgang toe:</p>
<ul>
  <li><b>-AR (Hablar):</b> yo hablo, tú hablas, él habla, nosotros hablamos, vosotros habláis, ellos hablan</li>
  <li><b>-ER (Comer):</b> yo como, tú comes, él come, nosotros comemos, vosotros coméis, ellos comen</li>
  <li><b>-IR (Vivir):</b> yo vivo, tú vives, él vive, nosotros vivimos, vosotros vivís, ellos viven</li>
</ul>`,
    questionBank: [
      { type: "multiple-choice", question: "Wat is de juiste vorm van 'hablar' voor 'yo'?", options: ["hablo", "hablas", "habla", "hablamos"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Wij wonen' (vivir):", correctAnswer: "Vivimos" },
      { type: "multiple-choice", question: "Wat is de 'nosotros'-vorm van 'comer'?", options: ["comemos", "comimos", "comamos", "comen"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Jij drinkt water' (beber):", correctAnswer: "Bebes agua" },
      { type: "word-scramble", question: "Zet in volgorde: 'Mijn vader werkt'", shuffledWords: ["trabaja", "padre", "Mi"], correctSentence: "Mi padre trabaja" },
      { type: "multiple-choice", question: "Welke werkwoordsuitgang hoort bij 'tú' voor -ar werkwoorden?", options: ["-as", "-es", "-is", "-an"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Wij eten een appel':", correctAnswer: "Comemos una manzana" },
      { type: "multiple-choice", question: "Wat is de juiste vorm: 'Mi hermana ... mucho' (estudiar)?", options: ["estudia", "estudio", "estudias", "estudian"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Jij werkt hier' (trabajar):", correctAnswer: "Trabajas aquí" },
      { type: "word-scramble", question: "Zet in volgorde: 'Ik spreek Spaans'", shuffledWords: ["español", "Hablo"], correctSentence: "Hablo español" },
      { type: "multiple-choice", question: "Wat is de 'ellos'-vorm van 'vivir'?", options: ["viven", "vivimos", "vives", "vivo"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Zij schrijven een brief' (escribir):", correctAnswer: "Escriben una carta" },
      { type: "multiple-choice", question: "Wat is de uitgang voor 'vosotros' bij -ir werkwoorden?", options: ["-ís", "-éis", "-áis", "-es"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Mijn broer studeert':", correctAnswer: "Mi hermano estudia" },
      { type: "word-scramble", question: "Zet in volgorde: 'Wij eten 's avonds samen'", shuffledWords: ["juntos", "Cenamos"], correctSentence: "Cenamos juntos" },
      { type: "multiple-choice", question: "Wat betekent 'comprenden'?", options: ["Zij begrijpen", "Wij begrijpen", "Jullie begrijpen", "Ik begrijp"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Jullie kopen brood' (comprar):", correctAnswer: "Compráis pan" },
      { type: "multiple-choice", question: "Welke vorm hoort bij 'yo' voor 'escribir'?", options: ["escribo", "escribes", "escribe", "escribimos"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Ik open de deur' (abrir):", correctAnswer: "Abro la puerta" },
      { type: "word-scramble", question: "Zet in volgorde: 'Zij wonen in Madrid'", shuffledWords: ["Madrid", "en", "Viven"], correctSentence: "Viven en Madrid" },
      { type: "multiple-choice", question: "Welke vorm hoort bij 'usted' voor -er werkwoorden?", options: ["-e", "-es", "-en", "-emos"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Ik drink koffie' (beber):", correctAnswer: "Bebo café" },
      { type: "multiple-choice", question: "Wat betekent 'vivir'?", options: ["Wonen / Leven", "Werken", "Eten", "Spreken"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Mijn moeder kookt' (cocinar):", correctAnswer: "Mi madre cocina" },
      { type: "word-scramble", question: "Zet in volgorde: 'Wij studeren in Spanje'", shuffledWords: ["España", "en", "Estudiamos"], correctSentence: "Estudiamos en España" },
      { type: "multiple-choice", question: "Wat is de uitgang voor 'yo' bij alle regelmatige werkwoorden?", options: ["-o", "-as", "-es", "-e"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Jullie spreken Spaans':", correctAnswer: "Habláis español" },
      { type: "multiple-choice", question: "Wat betekent 'beben'?", options: ["Zij drinken", "Wij drinken", "Jullie drinken", "Ik drink"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Mijn ouders wonen hier':", correctAnswer: "Mis padres viven aquí" },
      { type: "word-scramble", question: "Zet in volgorde: 'Jij luistert naar muziek'", shuffledWords: ["música", "Escuchas"], correctSentence: "Escuchas música" },
      { type: "multiple-choice", question: "Welke zin klopt voor 'wij wonen'?", options: ["vivimos", "viven", "viváis", "vivo"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Jij schrijft een boek' (escribir):", correctAnswer: "Escribes un libro" },
      { type: "multiple-choice", question: "Wat is de vorm voor 'él' bij 'comer'?", options: ["come", "como", "comen", "comemos"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Ik werk in een kantoor':", correctAnswer: "Trabajo en una oficina" },
      { type: "word-scramble", question: "Zet in volgorde: 'Wij spreken Nederlands'", shuffledWords: ["neerlandés", "Hablamos"], correctSentence: "Hablamos neerlandés" },
      { type: "multiple-choice", question: "Wat is de 'tú'-vorm van 'trabajar'?", options: ["trabajas", "trabajo", "trabaja", "trabajamos"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Mijn zus leest een boek' (leer):", correctAnswer: "Mi hermana lee un libro" },
      { type: "multiple-choice", question: "Welk werkwoord eindigt op -ir?", options: ["vivir", "hablar", "comer", "trabajar"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Wij kopen fruit' (comprar):", correctAnswer: "Compramos fruta" },
      { type: "word-scramble", question: "Zet in volgorde: 'Zij leren Spaans'", shuffledWords: ["español", "Aprenden"], correctSentence: "Aprenden español" },
      { type: "multiple-choice", question: "Wat is de 'vosotros'-vorm van 'hablar'?", options: ["habláis", "hablamos", "hablan", "hablas"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Ik begrijp de les' (comprender):", correctAnswer: "Comprendo la lección" },
      { type: "multiple-choice", question: "Wat is de juiste vervoeging voor 'Ellos ... en la casa' (entrar)?", options: ["entran", "entramos", "entra", "entras"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Jij woont in een stad':", correctAnswer: "Vives en una ciudad" },
      { type: "word-scramble", question: "Zet in volgorde: 'Ik luister naar de leraar'", shuffledWords: ["profesor", "al", "Escucho"], correctSentence: "Escucho al profesor" },
      { type: "multiple-choice", question: "Wat is de uitgang van 'nosotros' voor -er werkwoorden?", options: ["-emos", "-amos", "-imos", "-en"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Zij eten vis' (comer):", correctAnswer: "Comen pescado" },
      { type: "multiple-choice", question: "Wat betekent 'abrimos'?", options: ["Wij openen", "Zij openen", "Ik open", "Jullie openen"], correctIndex: 0 },
      { type: "input", question: "Vertaal 'Mijn familie woont in Spanje':", correctAnswer: "Mi familia vive en España" },
      { type: "word-scramble", question: "Zet in volgorde: 'Jullie drinken water'", shuffledWords: ["agua", "Bebéis"], correctSentence: "Bebéis agua" }
    ]
  },
  {
    id: "a1_m4_eindtoets",
    chapterTitle: "Module 4: Familie & Relaties",
    title: "🏆 Eindtoets Module 4",
    description: "Klaar om jezelf te testen? Laat zien wat je hebt geleerd over familie, bezit en het werkwoord querer in deze ultieme uitdaging!",
    isOptional: false,
    isExam: true,
    points: 50,
    getDynamicQuestions: function() {
      let allQuestions = [];
      window.LESSONS_DATA.forEach(l => {
        if (l.id.startsWith("a1_m4") && !l.isExam && l.questionBank) {
          allQuestions = allQuestions.concat(l.questionBank);
        }
      });
      allQuestions.sort(() => Math.random() - 0.5);
      return allQuestions.slice(0, 15);
    }
  }
);
