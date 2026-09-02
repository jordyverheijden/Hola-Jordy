window.LESSONS_DATA = window.LESSONS_DATA || [];

window.LESSONS_DATA.push(
  /* ==========================================================================
     MODULE 1 (A2): Indefinido I – Basis, Reizen & Vervoer
     ========================================================================== */

  /* --------------------------------------------------------------------------
     Les 1: Indefinido: Regelmatige werkwoorden op -AR
     -------------------------------------------------------------------------- */
  {
    id: "a2_m1_l1",
    chapterTitle: "Module 1: Indefinido I – Basis, Reizen & Vervoer",
    title: "Les 1: Indefinido: Regelmatige werkwoorden op -AR",
    description: "Leer afgeronde acties in het verleden uitdrukken met de Pretérito Indefinido voor regelmatige werkwoorden op -AR.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "Hablar", nl: "Spreken / Praten", example: "Hablé con el recepcionista." },
      { es: "Viajar", nl: "Reizen", example: "Viajé a España en verano." },
      { es: "Comprar", nl: "Kopen", example: "Compré un billete de avión." },
      { es: "Reservar", nl: "Reserveren", example: "Reservamos un hotel céntrico." },
      { es: "Llegar", nl: "Aankomen", example: "Llegué a la estación a tiempo." },
      { es: "Trabajar", nl: "Werken", example: "Trabajaron todo el día." }
    ],
    cheatsheet: `
      <h4>Grammatica: Pretérito Indefinido (-AR)</h4>
      <p>Gebruik de Indefinido voor eenmalige, afgeronde acties in het verleden.</p>
      <ul>
        <li><b>yo:</b> -é (<i>hablé</i>)</li>
        <li><b>tú:</b> -aste (<i>hablaste</i>)</li>
        <li><b>él/ella/usted:</b> -ó (<i>habló</i>)</li>
        <li><b>nosotros/as:</b> -amos (<i>hablamos</i>)</li>
        <li><b>vosotros/as:</b> -asteis (<i>hablasteis</i>)</li>
        <li><b>ellos/ellas/ustedes:</b> -aron (<i>hablaron</i>)</li>
      </ul>
      <p><b>Let op:</b> De vormen voor <i>yo</i> en <i>él/ella</i> hebben altijd een geschreven accent!</p>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Wat is de 'yo'-vorm van *hablar* in de Indefinido?", options: ["hablo", "hablé", "hablaba", "hablaré"], correctIndex: 1 },
      { type: "input", question: "Vul in: 'Ayer yo ___ (comprar) un billete.'", correctAnswer: "compré" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik praatte met de gids'", shuffledWords: ["con", "el", "guía.", "Hablé"], correctSentence: "Hablé con el guía." },
      { type: "multiple-choice", question: "Hoe vervoeg je *viajar* voor 'tú' in de Indefinido?", options: ["viajas", "viajaste", "viajó", "viajaron"], correctIndex: 1 },
      { type: "input", question: "Vertaal naar het Spaans: 'Hij reserveerde een kamer'", correctAnswer: "Reservó una habitación" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Zij reisden naar Madrid'", shuffledWords: ["a", "Madrid.", "Viajaron"], correctSentence: "Viajaron a Madrid." },
      { type: "multiple-choice", question: "Wat is de 'nosotros'-vorm van *trabajar* in de Indefinido?", options: ["trabajamos", "trabajasteis", "trabajaron", "trabajaba"], correctIndex: 0 },
      { type: "input", question: "Vul in: '¿Tú ___ (visitar) el museo ayer?'", correctAnswer: "visitaste" },
      { type: "input", question: "Vertaal: 'Wij kochten de tickets'", correctAnswer: "Compramos los billetes" },
      { type: "multiple-choice", question: "Welke uitgang krijgt 'ellos/ellas' bij regelmatige -AR werkwoorden?", options: ["-aron", "-ieron", "-aban", "-an"], correctIndex: 0 },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Jullie werkten veel'", shuffledWords: ["mucho.", "Trabajasteis"], correctSentence: "Trabajasteis mucho." },
      { type: "input", question: "Vul in: 'El avión ___ (despegar) a tiempo.'", correctAnswer: "despegó" },
      { type: "multiple-choice", question: "Wat betekent 'Cenamos a las nueve' als het in de Indefinido staat?", options: ["Wij eten om negen uur", "Wij gaan om negen uur eten", "Wij hebben om negen uur gegeten / aten om negen uur", "Wij wilden eten om negen uur"], correctIndex: 2 },
      { type: "input", question: "Vertaal: 'Ik luisterde naar de gids'", correctAnswer: "Escuché al guía" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Zij bevestigden de reservering'", shuffledWords: ["la", "reserva.", "Confirmaron"], correctSentence: "Confirmaron la reserva." },
      { type: "multiple-choice", question: "Wat is de 'vosotros'-vorm van *tomar*?", options: ["tomasteis", "tomamos", "tomaron", "tomaste"], correctIndex: 0 },
      { type: "input", question: "Vul in: 'Ella ___ (preguntar) por la estación.'", correctAnswer: "preguntó" },
      { type: "input", question: "Vertaal: 'Jij passeerde de douane'", correctAnswer: "Pasaste la aduana" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik pakte mijn koffer in'", shuffledWords: ["mi", "maleta.", "Preparé"], correctSentence: "Preparé mi maleta." },
      { type: "multiple-choice", question: "Welke klinker draagt het accent in de 'él/ella'-vorm van -AR werkwoorden?", options: ["a", "e", "o", "i"], correctIndex: 2 },
      { type: "input", question: "Vertaal: 'Zij (enkelvoud) veranderde van trein'", correctAnswer: "Cambió de tren" },
      { type: "input", question: "Vul in: 'Vosotros ___ (alquilar) un coche.'", correctAnswer: "alquilasteis" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Wachtte je op de bus?'", shuffledWords: ["el", "autobús?", "¿Esperaste"], correctSentence: "¿Esperaste el autobús?" },
      { type: "multiple-choice", question: "Wat is de vervoeging van *ayudar* bij 'yo'?", options: ["ayudé", "ayudo", "ayudó", "ayudaste"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Wij wandelden door de stad'", correctAnswer: "Caminamos por la ciudad" },
      { type: "input", question: "Vul in: 'Mis amigos ___ (ganar) un viaje.'", correctAnswer: "ganaron" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik betaalde met kaart'", shuffledWords: ["con", "tarjeta.", "Pagué"], correctSentence: "Pagué con tarjeta." },
      { type: "multiple-choice", question: "Wat betekent '¿Hablaste con él?'?", options: ["Praat je met hem?", "Ga je met hem praten?", "Sprak je met hem?", "Praatte hij met jou?"], correctIndex: 2 },
      { type: "input", question: "Vertaal: 'Ik verbleef in een hotel'", correctAnswer: "Me alojé en un hotel" },
      { type: "input", question: "Vul in: '¿Usted ___ (llamar) a un taxi?'", correctAnswer: "llamó" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Zij ontkoppelden op vakantie'", shuffledWords: ["en", "vacaciones.", "Desconectaron"], correctSentence: "Desconectaron en vacaciones." },
      { type: "multiple-choice", question: "Welke stam-uitgang combinatie is JUIST voor *viajar* (tú)?", options: ["viajó", "viajaste", "viajasteis", "viajeron"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Zij (meervoud) landden om 8 uur'", correctAnswer: "Aterrizaron a las ocho" },
      { type: "input", question: "Vul in: 'Yo ___ (mencionar) la reserva.'", correctAnswer: "mencioné" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Wij genoten van de reis'", shuffledWords: ["del", "viaje.", "Disfrutamos"], correctSentence: "Disfrutamos del viaje." },
      { type: "multiple-choice", question: "Wat is het verschil tussen *hablo* en *hablé*?", options: ["Hablo is verleden tijd, hablé is tegenwoordige tijd", "Hablo is tegelijkertijd, hablé is toekomst", "Hablo is heden (ik spreek), hablé is verleden (ik sprak)", "Er is geen verschil"], correctIndex: 2 },
      { type: "input", question: "Vertaal: 'Jij keek naar de kaart'", correctAnswer: "Miraste el mapa" },
      { type: "input", question: "Vul in: '¿Qué ___ (comprar) vosotros?'", correctAnswer: "comprasteis" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Hij antwoordde in het Spaans'", shuffledWords: ["en", "español.", "Contestó"], correctSentence: "Contestó en español." },
      { type: "multiple-choice", question: "Hoe zeg je 'Zij ontmoetten elkaar/spraken af' (quedar, ellos)?", options: ["Quedaron", "Quedaronse", "Quedasteis", "Quedó"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik nodigde mijn vrienden uit'", correctAnswer: "Invité a mis amigos" },
      { type: "input", question: "Vul in: 'Ustedes ___ (cancelar) el vuelo.'", correctAnswer: "cancelaron" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ze gaven veel geld uit'", shuffledWords: ["mucho", "dinero.", "Gastaron"], correctSentence: "Gastaron mucho dinero." },
      { type: "multiple-choice", question: "Wat is de Indefinido van *tomar* voor 'yo'?", options: ["tomé", "tomó", "tomaste", "tomo"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik werkte gisteren'", correctAnswer: "Trabajé ayer" },
      { type: "input", question: "Vul in: 'Nosotros ___ (esperar) una hora.'", correctAnswer: "esperamos" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ze veranderden van plannen'", shuffledWords: ["de", "planes.", "Cambiaron"], correctSentence: "Cambiaron de planes." },
      { type: "multiple-choice", question: "Welke vorm is 'vosotros' bij *viajar*?", options: ["viajamos", "viajasteis", "viajaron", "viajaste"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Jij nam een foto'", correctAnswer: "Tomaste una foto" },
      { type: "input", question: "Vertaal: 'Hij luisterde niet'", correctAnswer: "No escuchó" }
    ]
  },

  /* --------------------------------------------------------------------------
     Les 2: Indefinido: Regelmatige werkwoorden op -ER en -IR
     -------------------------------------------------------------------------- */
  {
    id: "a2_m1_l2",
    chapterTitle: "Module 1: Indefinido I – Basis, Reizen & Vervoer",
    title: "Les 2: Indefinido: Regelmatige werkwoorden op -ER en -IR",
    description: "Beheers de vervoegingen van regelmatige -ER en -IR werkwoorden in de Pretérito Indefinido.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "Comer", nl: "Eten", example: "Comí en un restaurante típico." },
      { es: "Beber", nl: "Drinken", example: "Bebieron agua de coco." },
      { es: "Vivir", nl: "Wonen / Leven", example: "Viví dos años en Valencia." },
      { es: "Escribir", nl: "Schrijven", example: "Escribiste una postal hermosa." },
      { es: "Salir", nl: "Vertrekken / Uitgaan", example: "El tren salió a las diez." },
      { es: "Comprender", nl: "Begrijpen", example: "Comprendimos todas las instrucciones." }
    ],
    cheatsheet: `
      <h4>Grammatica: Pretérito Indefinido (-ER / -IR)</h4>
      <p>Werkwoorden op <b>-ER</b> en <b>-IR</b> delen exact dezelfde uitgangen in de Indefinido!</p>
      <ul>
        <li><b>yo:</b> -í (<i>comí, viví</i>)</li>
        <li><b>tú:</b> -iste (<i>comiste, viviste</i>)</li>
        <li><b>él/ella/usted:</b> -ió (<i>comió, vivió</i>)</li>
        <li><b>nosotros/as:</b> -imos (<i>comimos, vivimos</i>)</li>
        <li><b>vosotros/as:</b> -isteis (<i>comisteis, vivisteis</i>)</li>
        <li><b>ellos/ellas/ustedes:</b> -ieron (<i>comieron, vivieron</i>)</li>
      </ul>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Wat is de 'yo'-vorm van *comer* in de Indefinido?", options: ["como", "comí", "comió", "comía"], correctIndex: 1 },
      { type: "input", question: "Vul in: 'Ayer nosotros ___ (comer) paella.'", correctAnswer: "comimos" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik schreef een e-mail'", shuffledWords: ["un", "correo.", "Escribí"], correctSentence: "Escribí un correo." },
      { type: "multiple-choice", question: "Hoe vervoeg je *vivir* voor 'él/ella' in de Indefinido?", options: ["vive", "vivió", "viví", "vivieron"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Zij (meervoud) dronken een sapje'", correctAnswer: "Bebieron un zumo" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'De trein vertrok op tijd'", shuffledWords: ["a", "tiempo.", "El", "tren", "salió"], correctSentence: "El tren salió a tiempo." },
      { type: "multiple-choice", question: "Wat is de uitgang voor 'tú' bij -ER/-IR werkwoorden?", options: ["-aste", "-iste", "-ió", "-isteis"], correctIndex: 1 },
      { type: "input", question: "Vul in: '¿___ (comprender) tú la explicación?'", correctAnswer: "Comprendiste" },
      { type: "input", question: "Vertaal: 'Ik woonde in Barcelona'", correctAnswer: "Viví en Barcelona" },
      { type: "multiple-choice", question: "Welke uitgang krijgen 'ellos/ellas' bij -ER/-IR werkwoorden?", options: ["-aron", "-ieron", "-en", "-ían"], correctIndex: 1 },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Jullie vertrokken heel vroeg'", shuffledWords: ["muy", "temprano.", "Salisteis"], correctSentence: "Salisteis muy temprano." },
      { type: "input", question: "Vul in: 'Ella ___ (abrir) la maleta.'", correctAnswer: "abrió" },
      { type: "multiple-choice", question: "Wat betekent 'Corrimos cinco kilómetros'?", options: ["Wij rennen 5 km", "Wij renden 5 km", "Wij gaan 5 km rennen", "Wij rennen altijd 5 km"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Hij verloor zijn paspoort'", correctAnswer: "Perdió su pasaporte" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Zij ontvingen het ticket'", shuffledWords: ["el", "billete.", "Recibieron"], correctSentence: "Recibieron el billete." },
      { type: "multiple-choice", question: "Wat is de 'vosotros'-vorm van *escribir*?", options: ["escribisteis", "escribimos", "escribieron", "escribís"], correctIndex: 0 },
      { type: "input", question: "Vul in: 'Yo no ___ (entender) el mapa.'", correctAnswer: "entendí" },
      { type: "input", question: "Vertaal: 'Jij verkocht je auto'", correctAnswer: "Vendiste tu coche" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'We besloten te reizen'", shuffledWords: ["viajar.", "Decidimos"], correctSentence: "Decidimos viajar." },
      { type: "multiple-choice", question: "Welke werkwoorden delen dezelfde uitgangen in de Indefinido?", options: ["-AR en -ER", "-ER en -IR", "-AR en -IR", "Geen enkele"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Zij (enkelvoud) koos de vlucht'", correctAnswer: "Eligió el vuelo" },
      { type: "input", question: "Vul in: 'Vosotros ___ (aprender) mucho.'", correctAnswer: "aprendisteis" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Schreef je de adresgegevens op?'", shuffledWords: ["la", "dirección?", "¿Escribiste"], correctSentence: "¿Escribiste la dirección?" },
      { type: "multiple-choice", question: "Wat is de vervoeging van *responder* bij 'yo'?", options: ["respondí", "respondió", "respondé", "respondo"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Wij verstonden de gids'", correctAnswer: "Comprendimos al guía" },
      { type: "input", question: "Vul in: 'Mis padres ___ (vender) su casa.'", correctAnswer: "vendieron" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik dronk een koffie'", shuffledWords: ["un", "café.", "Bebí"], correctSentence: "Bebí un café." },
      { type: "multiple-choice", question: "Wat betekent '¿Salisteis anoche?'?", options: ["Gaan jullie vanavond uit?", "Zijn jullie gisteravond uitgeweest?", "Vertrekken jullie nu?", "Blijven jullie thuis?"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Ik vertrok om negen uur'", correctAnswer: "Salí a las nueve" },
      { type: "input", question: "Vul in: '¿Usted ___ (recibir) la confirmación?'", correctAnswer: "recibió" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ze renden naar de poort'", shuffledWords: ["a", "la", "puerta.", "Corrieron"], correctSentence: "Corrieron a la puerta." },
      { type: "multiple-choice", question: "Wat is de Indefinido van *subir* voor 'tú'?", options: ["subiste", "subió", "subes", "subieron"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Zij (meervoud) aten vis'", correctAnswer: "Comieron pescado" },
      { type: "input", question: "Vul in: 'Yo ___ (abrir) la ventana.'", correctAnswer: "abrí" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'We verloren de sleutels'", shuffledWords: ["las", "llaves.", "Perdimos"], correctSentence: "Perdimos las llaves." },
      { type: "multiple-choice", question: "Wat is het verschil tussen *vivimos* (presente) en *vivimos* (indefinido)?", options: ["Er is een accent verschil", "Geen verschil in vorm, de context bepaalt de tijd", "Presente is met -e", "Indefinido heeft -ais"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Jij begreep alles'", correctAnswer: "Entendiste todo" },
      { type: "input", question: "Vul in: '¿Qué ___ (beber) vosotros?'", correctAnswer: "bebisteis" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Hij beloofde te bellen'", shuffledWords: ["llamar.", "Prometió"], correctSentence: "Prometió llamar." },
      { type: "multiple-choice", question: "Hoe zeg je 'Zij ontvingen de koffers' (recibir, ellos)?", options: ["Recibieron", "Recibieronse", "Recibisteis", "Recibió"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik schreef de details op'", correctAnswer: "Escribí los detalles" },
      { type: "input", question: "Vul in: 'Ustedes ___ (asistir) a la reunión.'", correctAnswer: "asistieron" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ze leefden gelukkig'", shuffledWords: ["felices.", "Vivieron"], correctSentence: "Vivieron felices." },
      { type: "multiple-choice", question: "Wat is de Indefinido van *vender* voor 'él'?", options: ["vendió", "vendi", "vende", "vendieron"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik at gisteren erg laat'", correctAnswer: "Comí muy tarde ayer" },
      { type: "input", question: "Vul in: 'Nosotros ___ (salir) a cenar.'", correctAnswer: "salimos" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ze leerden veel op reis'", shuffledWords: ["mucho", "en", "el", "viaje.", "Aprendieron"], correctSentence: "Aprendieron mucho en el viaje." },
      { type: "multiple-choice", question: "Welke vorm is 'vosotros' bij *comer*?", options: ["comimos", "comisteis", "comieron", "comiste"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Jij stapte in de bus'", correctAnswer: "Subiste al autobús" },
      { type: "input", question: "Vertaal: 'Hij antwoordde niet'", correctAnswer: "No respondió" }
    ]
  },

  /* --------------------------------------------------------------------------
     Les 3: Tijdsaanduidingen van het verleden (ayer, anoche, el año pasado)
     -------------------------------------------------------------------------- */
  {
    id: "a2_m1_l3",
    chapterTitle: "Module 1: Indefinido I – Basis, Reizen & Vervoer",
    title: "Les 3: Tijdsaanduidingen van het verleden",
    description: "Herken en gebruik specifieke tijdsindicatoren die de Pretérito Indefinido oproepen.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "Ayer", nl: "Gisteren", example: "Ayer llegué tarde al aeropuerto." },
      { es: "Anoche", nl: "Gisteravond / Gisternacht", example: "Anoche cenamos en el puerto." },
      { es: "Anteayer", nl: "Eergisteren", example: "Anteayer visitamos la catedral." },
      { es: "El año pasado", nl: "Vorig jaar", example: "El año pasado viajé a Perú." },
      { es: "La semana pasada", nl: "Vorige week", example: "La semana pasada compré el billete." },
      { es: "Hace tres días", nl: "Drie dagen geleden", example: "Llegaron hace tres días." }
    ],
    cheatsheet: `
      <h4>Signaalwoorden voor de Pretérito Indefinido</h4>
      <p>Deze woorden geven een specifiek, afgesloten tijdstip in het verleden aan:</p>
      <ul>
        <li><b>Ayer:</b> Gisteren</li>
        <li><b>Anoche:</b> Gisteravond</li>
        <li><b>Anteayer:</b> Eergisteren</li>
        <li><b>El año / mes / siglo pasado:</b> Vorig jaar / vorige maand / vorige eeuw</li>
        <li><b>La semana pasada:</b> Vorige week</li>
        <li><b>Hace + tijdsduur:</b> ... geleden (bijv. <i>hace dos meses</i> = twee maanden geleden)</li>
        <li><b>En + jaartal / maand:</b> En 2020 / en mayo</li>
      </ul>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Wat betekent 'anoche'?", options: ["Vanavond", "Gisteravond", "Morgenavond", "Eergisteren"], correctIndex: 1 },
      { type: "input", question: "Vertaal naar het Spaans: 'Gisteren'", correctAnswer: "Ayer" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Gisteren arriveerde ik'", shuffledWords: ["Llegué", "ayer."], correctSentence: "Llegué ayer." },
      { type: "multiple-choice", question: "Hoe zeg je 'Vorige week' in het Spaans?", options: ["La semana pasada", "La semana que viene", "Esta semana", "Hace una semana pasada"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Vorig jaar'", correctAnswer: "El año pasado" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Gisteravond aten we vis'", shuffledWords: ["cenamos", "pescado.", "Anoche"], correctSentence: "Anoche cenamos pescado." },
      { type: "multiple-choice", question: "Wat betekent 'hace tres días'?", options: ["Binnen drie dagen", "Drie dagen geleden", "Drie dagen lang", "Sinds drie dagen"], correctIndex: 1 },
      { type: "input", question: "Vul in: '___ (Eergisteren) fuimos al museo.'", correctAnswer: "Anteayer" },
      { type: "input", question: "Vertaal: 'Twee maanden geleden'", correctAnswer: "Hace dos meses" },
      { type: "multiple-choice", question: "Welke tijdsaanduiding past het beste bij Indefinido?", options: ["Hoy", "Este mes", "Ayer", "Siempre"], correctIndex: 2 },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Vorige maand reisde ik'", shuffledWords: ["pasado", "viajé.", "El", "mes"], correctSentence: "El mes pasado viajé." },
      { type: "input", question: "Vul in: 'Llegaron ___ (vorige week).'", correctAnswer: "la semana pasada" },
      { type: "multiple-choice", question: "Wat betekent 'En 2015 viví en Madrid'?", options: ["Sinds 2015 woon ik in Madrid", "In 2015 woonde ik in Madrid", "Vanaf 2015 ga ik naar Madrid", "Ik woon er al 2015 jaar"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Gisterochtend'", correctAnswer: "Ayer por la mañana" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Vorig jaar kochten ze het huis'", shuffledWords: ["la", "casa.", "Compraron", "el", "año", "pasado"], correctSentence: "El año pasado compraron la casa." },
      { type: "multiple-choice", question: "Hoe vertaal je 'vijf jaar geleden'?", options: ["Hace cinco años", "Cinco años pasado", "Por cinco años", "Desde cinco años"], correctIndex: 0 },
      { type: "input", question: "Vul in: '___ (Gisteravond) salí con amigos.'", correctAnswer: "Anoche" },
      { type: "input", question: "Vertaal: 'Vorige maand'", correctAnswer: "El mes pasado" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Eergisteren belde hij me'", shuffledWords: ["llamó.", "Anteayer", "me"], correctSentence: "Anteayer me llamó." },
      { type: "multiple-choice", question: "Wat is het tegenovergestelde van 'el año pasado'?", options: ["El año que viene", "Ayer", "Hace un año", "El mes pasado"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Op een dag'", correctAnswer: "Un día" },
      { type: "input", question: "Vul in: 'Viajé a España ___ (vier jaar geleden).'", correctAnswer: "hace cuatro años" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Gisteren sprak ik met haar'", shuffledWords: ["con", "ella.", "Hablé", "ayer"], correctSentence: "Ayer hablé con ella." },
      { type: "multiple-choice", question: "Welke tijdaanduiding wijst géén specifiek afgesloten verleden aan?", options: ["Ayer", "Anoche", "Siempre", "Anteayer"], correctIndex: 2 },
      { type: "input", question: "Vertaal: 'Vorige zomer'", correctAnswer: "El verano pasado" },
      { type: "input", question: "Vul in: '___ (Gisteren) compré los billetes.'", correctAnswer: "Ayer" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Twee weken geleden vertrokken we'", shuffledWords: ["dos", "semanas.", "Salimos", "hace"], correctSentence: "Salimos hace dos semanas." },
      { type: "multiple-choice", question: "Wat betekent 'el fin de semana pasado'?", options: ["Aankomend weekend", "Vorig weekend", "Elk weekend", "Het hele weekend"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Gistermiddag'", correctAnswer: "Ayer por la tarde" },
      { type: "input", question: "Vul in: 'Visité el museo ___ (vorig weekend).'", correctAnswer: "el fin de semana pasado" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'In 2020 studeerde ik af'", shuffledWords: ["estudié.", "En", "2020"], correctSentence: "En 2020 estudié." },
      { type: "multiple-choice", question: "Hoe zeg je 'een uur geleden'?", options: ["Hace una hora", "Una hora pasada", "Por una hora", "Antes una hora"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Eergisteren'", correctAnswer: "Anteayer" },
      { type: "input", question: "Vul in: 'Cenamos juntos ___ (gisteravond).'", correctAnswer: "anoche" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Vorige winter sneeuwde het'", shuffledWords: ["pasado.", "Nevó", "el", "invierno"], correctSentence: "El invierno pasado nevó." },
      { type: "multiple-choice", question: "Wat betekent 'hace mucho tiempo'?", options: ["Korte tijd geleden", "Lange tijd geleden / Lang geleden", "Veel tijd hebben", "Voor een lange tijd"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Vorige eeuw'", correctAnswer: "El siglo pasado" },
      { type: "input", question: "Vul in: '___ (Lang geleden) viví allí.'", correctAnswer: "Hace mucho tiempo" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Drie dagen geleden kwamen ze aan'", shuffledWords: ["días.", "Llegaron", "hace", "tres"], correctSentence: "Llegaron hace tres días." },
      { type: "multiple-choice", question: "Welk woord vult aan: '___ lunes pasado'?", options: ["El", "La", "Los", "En"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Afgelopen maandag'", correctAnswer: "El lunes pasado" },
      { type: "input", question: "Vul in: 'Regresé a casa ___ (gisteren).'", correctAnswer: "ayer" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Gisteravond sliep ik goed'", shuffledWords: ["bien.", "Anoche", "dormí"], correctSentence: "Anoche dormí bien." },
      { type: "multiple-choice", question: "Wat is de juiste combinatie voor 'tien minuten geleden'?", options: ["Hace diez minutos", "Diez minutos pasados", "En diez minutos", "Antes diez minutos"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Afgelopen nacht'", correctAnswer: "Anoche" },
      { type: "input", question: "Vul in: 'Nací ___ (in) 1998.'", correctAnswer: "en" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Vorige week zagen we hem'", shuffledWords: ["lo", "vimos.", "La", "semana", "pasada"], correctSentence: "La semana pasada lo vimos." },
      { type: "multiple-choice", question: "Welk woord hoort NIET bij de Indefinido?", options: ["Ayer", "Anoche", "Hoy", "Anteayer"], correctIndex: 2 },
      { type: "input", question: "Vertaal: 'Afgelopen lente'", correctAnswer: "La primavera pasada" },
      { type: "input", question: "Vertaal: 'Vier dagen geleden'", correctAnswer: "Hace cuatro días" }
    ]
  },

  /* --------------------------------------------------------------------------
     Les 4: Klankveranderingen in de stam (-gar, -zar, -car)
     -------------------------------------------------------------------------- */
  {
    id: "a2_m1_l4",
    chapterTitle: "Module 1: Indefinido I – Basis, Reizen & Vervoer",
    title: "Les 4: Klankveranderingen in de stam (-gar, -zar, -car)",
    description: "Leer de spellingveranderingen in de eerste persoon enkelvoud ('yo') voor werkwoorden die eindigen op -gar, -zar en -car.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "Llegar -> Llegué", nl: "Aankomen -> Ik kwam aan", example: "Llegué a tiempo al aeropuerto." },
      { es: "Pagar -> Pagué", nl: "Betalen -> Ik betaalde", example: "Pagué la cuenta en efectivo." },
      { es: "Empezar -> Empecé", nl: "Beginnen -> Ik begon", example: "Empecé el viaje el lunes." },
      { es: "Organizar -> Organicé", nl: "Organiseren -> Ik organiseerde", example: "Organicé las excursiones." },
      { es: "Buscar -> Busqué", nl: "Zoeken -> Ik zocht", example: "Busqué las llaves del hotel." },
      { es: "Tocar -> Toqué", nl: "Aanraken / Spelen (instrument) -> Ik raakte aan / speelde", example: "Toqué la guitarra en la playa." }
    ],
    cheatsheet: `
      <h4>Spellingveranderingen in de 'yo'-vorm (Indefinido)</h4>
      <p>Om de originele klank voor de klinker <b>-é</b> te behouden, verandert de spelling alleen bij <b>yo</b>:</p>
      <ul>
        <li><b>-GAR &rarr; -gués:</b> Pagar &rarr; yo pa<b>gué</b> (andere vormen regelmatig: <i>pagaste, pagó...</i>)</li>
        <li><b>-ZAR &rarr; -cé:</b> Empezar &rarr; yo empe<b>cé</b> (andere vormen: <i>empezaste, empezó...</i>)</li>
        <li><b>-CAR &rarr; -qué:</b> Buscar &rarr; yo bus<b>qué</b> (andere vormen: <i>buscaste, buscó...</i>)</li>
      </ul>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Wat is de 'yo'-vorm van *buscar* in de Indefinido?", options: ["buscé", "busqué", "buscado", "buscó"], correctIndex: 1 },
      { type: "input", question: "Vul in: 'Ayer yo ___ (pagar) la cuenta.'", correctAnswer: "pagué" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik begon de reis gisteren'", shuffledWords: ["el", "viaje", "ayer.", "Empecé"], correctSentence: "Empecé el viaje ayer." },
      { type: "multiple-choice", question: "Wat is de 'yo'-vorm van *llegar*?", options: ["llegé", "llegué", "llegó", "llegaste"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Ik zocht de straat'", correctAnswer: "Busqué la calle" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik organiseerde de koffers'", shuffledWords: ["las", "maletas.", "Organicé"], correctSentence: "Organicé las maletas." },
      { type: "multiple-choice", question: "Verandert de 'tú'-vorm bij werkwoorden op -car, -gar, -zar?", options: ["Ja, altijd", "Nee, de verandering is ALLEEN bij 'yo'", "Alleen bij -zar werkwoorden", "Alleen in het meervoud"], correctIndex: 1 },
      { type: "input", question: "Vul in: 'Yo ___ (tocar) el timbre.'", correctAnswer: "toqué" },
      { type: "input", question: "Vertaal: 'Ik landde om vijf uur' (aterrizar)", correctAnswer: "Aterricé a las cinco" },
      { type: "multiple-choice", question: "Wat is de 'yo'-vorm van *comenzar*?", options: ["comenzé", "comencé", "comienzo", "comenzó"], correctIndex: 1 },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik betaalde het ticket'", shuffledWords: ["el", "billete.", "Pagué"], correctSentence: "Pagué el billete." },
      { type: "input", question: "Vul in: 'Yo ___ (explicar) la situación.'", correctAnswer: "expliqué" },
      { type: "multiple-choice", question: "Hoe spel je de 'yo'-vorm van *jugar* in het verleden?", options: ["jugé", "jugué", "juegué", "juguéi"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Ik kwam laat aan'", correctAnswer: "Llegué tarde" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik begon vroeg'", shuffledWords: ["temprano.", "Empecé"], correctSentence: "Empecé temprano." },
      { type: "multiple-choice", question: "Wat is de 'él'-vorm van *buscar*?", options: ["buscó", "busqué", "busque", "buscas"], correctIndex: 0 },
      { type: "input", question: "Vul in: 'Yo ___ (cruzar) la calle.'", correctAnswer: "crucé" },
      { type: "input", question: "Vertaal: 'Ik speelde gitaar' (tocar)", correctAnswer: "Toqué la guitarra" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik legde het probleem uit'", shuffledWords: ["el", "problema.", "Expliqué"], correctSentence: "Expliqué el problema." },
      { type: "multiple-choice", question: "Waarom verandert -car in -qué bij 'yo'?", options: ["Om de k-klank te behouden", "Om het mooier te laten lijken", "Het is een willekeurige regel", "Om verwarring met -ER te voorkomen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik zocht een hotel'", correctAnswer: "Busqué un hotel" },
      { type: "input", question: "Vul in: 'Yo ___ (apagar) las luces.'", correctAnswer: "apagué" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik stak de grens over' (cruzar)", shuffledWords: ["la", "frontera.", "Crucé"], correctSentence: "Crucé la frontera." },
      { type: "multiple-choice", question: "Wat is de 'yo'-vorm van *practicar*?", options: ["practiqué", "practicé", "practicó", "practique"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik begon de les'", correctAnswer: "Empecé la clase" },
      { type: "input", question: "Vul in: 'Yo ___ (sacar) las fotos.'", correctAnswer: "saqué" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik zette de motor uit' (apagar)", shuffledWords: ["el", "motor.", "Apagué"], correctSentence: "Apagué el motor." },
      { type: "multiple-choice", question: "Wat is de 'tú'-vorm van *pagar*?", options: ["paguaste", "pagaste", "pagué", "pagó"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Ik haalde geld uit' (sacar dinero)", correctAnswer: "Saqué dinero" },
      { type: "input", question: "Vul in: 'Yo ___ (almorzar) en un restaurante.'", correctAnswer: "almorcé" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik nam veel foto's'", shuffledWords: ["muchas", "fotos.", "Saqué"], correctSentence: "Saqué muchas fotos." },
      { type: "multiple-choice", question: "Wat is de 'yo'-vorm van *marcar* (bellen/kiezen)?", options: ["marqué", "marcé", "marcó", "marcas"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik lunchte om twee uur'", correctAnswer: "Almorcé a las dos" },
      { type: "input", question: "Vul in: 'Yo ___ (entregar) el pasaporte.'", correctAnswer: "entregué" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik overhandigde de documenten'", shuffledWords: ["los", "documentos.", "Entregué"], correctSentence: "Entregué los documentos." },
      { type: "multiple-choice", question: "Wat gebeurt er met -zar in de 'yo'-vorm?", options: ["Z wordt C", "Z wordt G", "Z wordt QU", "Er verandert niets"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik speelde voetbal' (jugar)", correctAnswer: "Jugué al fútbol" },
      { type: "input", question: "Vul in: 'Yo ___ (aparcar) el coche.'", correctAnswer: "aparqué" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik parkeerde bij de ingang'", shuffledWords: ["cerca", "de", "la", "entrada.", "Aparqué"], correctSentence: "Aparqué cerca de la entrada." },
      { type: "multiple-choice", question: "Wat is de 'yo'-vorm van *aparcar*?", options: ["aparqué", "aparcé", "aparcó", "aparco"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik lanceerde het project' (lanzar)", correctAnswer: "Lancé el proyecto" },
      { type: "input", question: "Vul in: 'Yo ___ (negar) la información.'", correctAnswer: "negué" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik ontkende de feiten'", shuffledWords: ["los", "hechos.", "Negué"], correctSentence: "Negué los hechos." },
      { type: "multiple-choice", question: "Welke spelling is JUIST voor 'yo' + *realizar*?", options: ["realizé", "realicé", "realiqué", "realizo"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Ik raakte het scherm aan'", correctAnswer: "Toqué la pantalla" },
      { type: "input", question: "Vul in: 'Yo ___ (investigar) la zona.'", correctAnswer: "investigué" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik onderzocht de route'", shuffledWords: ["la", "ruta.", "Investigué"], correctSentence: "Investigué la ruta." },
      { type: "multiple-choice", question: "Wat is de 'nosotros'-vorm van *jugar* in Indefinido?", options: ["juguemos", "jugamos", "juguamos", "jugasteis"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Ik zocht de uitgang'", correctAnswer: "Busqué la salida" },
      { type: "input", question: "Vertaal: 'Ik betaalde contant'", correctAnswer: "Pagué en efectivo" }
    ]
  },

  /* --------------------------------------------------------------------------
     Les 5: Woordenschat: Reizen, vliegveld & bagage
     -------------------------------------------------------------------------- */
  {
    id: "a2_m1_l5",
    chapterTitle: "Module 1: Indefinido I – Basis, Reizen & Vervoer",
    title: "Les 5: Woordenschat: Reizen, vliegveld & bagage",
    description: "Breid je woordenschat uit rondom vliegreizen, bagageafhandeling en de luchthaven.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "El vuelo", nl: "De vlucht", example: "El vuelo salió con retraso." },
      { es: "La maleta", nl: "De koffer", example: "Perdí mi maleta en el aeropuerto." },
      { es: "El equipaje de mano", nl: "De handbagage", example: "Llevo solo equipaje de mano." },
      { es: "La tarjeta de embarque", nl: "De boardingpass", example: "Mostré la tarjeta de embarque." },
      { es: "La puerta de embarque", nl: "De gate", example: "Fuimos a la puerta 12." },
      { es: "El control de seguridad", nl: "De veiligheidscontrole", example: "Pasamos el control de seguridad." }
    ],
    cheatsheet: `
      <h4>Woordenschat: Vliegveld & Bagage</h4>
      <ul>
        <li><b>El aeropuerto:</b> De luchthaven</li>
        <li><b>El billete de avión:</b> Het vliegticket</li>
        <li><b>El mostrador de facturación:</b> De incheckbalie</li>
        <li><b>Facturar la maleta:</b> De koffer inchecken</li>
        <li><b>El despegue / El aterrizaje:</b> Het opstijgen / Het landen</li>
        <li><b>El retraso:</b> De vertraging</li>
        <li><b>La aduana:</b> De douane</li>
      </ul>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Wat betekent 'la tarjeta de embarque'?", options: ["Het paspoort", "De boardingpass", "De koffer", "Het vliegticket"], correctIndex: 1 },
      { type: "input", question: "Vertaal naar het Spaans: 'De koffer'", correctAnswer: "La maleta" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik verloor mijn handbagage'", shuffledWords: ["equipaje", "de", "mano.", "Perdí", "mi"], correctSentence: "Perdí mi equipaje de mano." },
      { type: "multiple-choice", question: "Hoe zeg je 'De gate' in het Spaans?", options: ["La puerta de embarque", "El control de seguridad", "La aduana", "El mostrador"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De vlucht'", correctAnswer: "El vuelo" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'We gingen door de douane'", shuffledWords: ["la", "aduana.", "Pasamos", "por"], correctSentence: "Pasamos por la aduana." },
      { type: "multiple-choice", question: "Wat is 'el retraso'?", options: ["De vertraging", "De korting", "De aankomst", "Het vertrek"], correctIndex: 0 },
      { type: "input", question: "Vul in: 'Mostré mi ___ (boardingpass) al agente.'", correctAnswer: "tarjeta de embarque" },
      { type: "input", question: "Vertaal: 'De incheckbalie'", correctAnswer: "El mostrador de facturación" },
      { type: "multiple-choice", question: "Wat doe je bij 'facturar el equipaje'?", options: ["Je koffer inchecken", "Je koffer kwijtraken", "Je koffer dragen", "Je koffer kopen"], correctIndex: 0 },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'De vlucht had vertraging'", shuffledWords: ["con", "retraso.", "El", "vuelo", "salió"], correctSentence: "El vuelo salió con retraso." },
      { type: "input", question: "Vul in: 'Buscamos la ___ (gate) número 5.'", correctAnswer: "puerta de embarque" },
      { type: "multiple-choice", question: "Wat betekent 'aterrizar'?", options: ["Opstijgen", "Landen", "Vliegen", "Inchecken"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Het opstijgen'", correctAnswer: "El despegue" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik checkte twee koffers in'", shuffledWords: ["dos", "maletas.", "Facturé"], correctSentence: "Facturé dos maletas." },
      { type: "multiple-choice", question: "Hoe zeg je 'handbagage'?", options: ["Equipaje de mano", "Maleta grande", "Bolsa de viaje", "Mochila escolar"], correctIndex: 0 },
      { type: "input", question: "Vul in: 'El avión ___ (landde) a las seis.'", correctAnswer: "aterrizó" },
      { type: "input", question: "Vertaal: 'Het paspoort'", correctAnswer: "El pasaporte" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'We passeerden de veiligheidscontrole'", shuffledWords: ["el", "control", "de", "seguridad.", "Pasamos"], correctSentence: "Pasamos el control de seguridad." },
      { type: "multiple-choice", question: "Wat betekent 'el mostrador'?", options: ["De balie", "De spiegel", "De klok", "De ingang"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De luchthaven'", correctAnswer: "El aeropuerto" },
      { type: "input", question: "Vul in: 'Guardé el pasaporte en mi ___ (rugzak).'", correctAnswer: "mochila" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Het vliegtuig steeg op om acht uur'", shuffledWords: ["a", "las", "ocho.", "El", "avión", "despegó"], correctSentence: "El avión despegó a las ocho." },
      { type: "multiple-choice", question: "Wat is 'la reclamación de equipaje'?", options: ["Bagageband / Bagageclaim", "Incheckbalie", "Douanecontrole", "Informatiebalie"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De douane'", correctAnswer: "La aduana" },
      { type: "input", question: "Vul in: 'Perdí mi ___ (vliegticket).'", correctAnswer: "billete de avión" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Mijn koffer kwam niet aan'", shuffledWords: ["no", "llegó.", "Mi", "maleta"], correctSentence: "Mi maleta no llegó." },
      { type: "multiple-choice", question: "Wat betekent 'el escala' of 'hacer escala'?", options: ["Een tussenstop maken", "Snel vliegen", "Reis annuleren", "Direct vliegen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Een tussenstop'", correctAnswer: "Una escala" },
      { type: "input", question: "Vul in: 'El vuelo hizo ___ (tussenstop) en Madrid.'", correctAnswer: "escala" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Waar is de bagageband?'", shuffledWords: ["la", "recogida", "de", "equipajes?", "¿Dónde", "está"], correctSentence: "¿Dónde está la recogida de equipajes?" },
      { type: "multiple-choice", question: "Welk woord betekent 'reiziger' of 'passagier'?", options: ["El pasajero", "El piloto", "El agente", "El aduanero"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De passagier'", correctAnswer: "El pasajero" },
      { type: "input", question: "Vul in: 'Los ___ (passagiers) subieron al avión.'", correctAnswer: "pasajeros" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Laad je handbagage op'", shuffledWords: ["el", "equipaje.", "Carga"], correctSentence: "Carga el equipaje." },
      { type: "multiple-choice", question: "Wat is 'el piloto'?", options: ["De piloot", "De steward", "De gids", "De chauffeur"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De stewardess / steward'", correctAnswer: "El auxiliar de vuelo" },
      { type: "input", question: "Vul in: 'El ___ (piloot) anunció el despegue.'", correctAnswer: "piloto" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'De vlucht was rechtstreeks'", shuffledWords: ["fue", "directo.", "El", "vuelo"], correctSentence: "El vuelo fue directo." },
      { type: "multiple-choice", question: "Wat betekent 'vuelo directo'?", options: ["Rechtstreekse vlucht", "Vlucht met overstap", "Geannuleerde vlucht", "Vertraagde vlucht"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Rechtstreekse vlucht'", correctAnswer: "Vuelo directo" },
      { type: "input", question: "Vul in: 'Buscamos la zona de ___ (aankomst).'", correctAnswer: "llegadas" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Vertrek is in hal 2'", shuffledWords: ["en", "la", "terminal", "dos.", "Salidas", "está"], correctSentence: "Salidas está en la terminal dos." },
      { type: "multiple-choice", question: "Wat is het tegenovergestelde van 'Llegadas' op de luchthaven?", options: ["Salidas", "Aduana", "Escala", "Equipaje"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Vertrek' (op borden)", correctAnswer: "Salidas" },
      { type: "input", question: "Vul in: 'La terminal de ___ (vertrek) está llena.'", correctAnswer: "salidas" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik toonde mijn identiteitsbewijs'", shuffledWords: ["mi", "documento.", "Enseñé"], correctSentence: "Enseñé mi documento." },
      { type: "multiple-choice", question: "Hoe zeg je 'stoel aan het raam'?", options: ["Asiento de ventana", "Asiento de pasillo", "Asiento central", "Asiento libre"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Stoel aan het gangpad'", correctAnswer: "Asiento de pasillo" },
      { type: "input", question: "Vertaal: 'Gewicht van de bagage'", correctAnswer: "Peso del equipaje" }
    ]
  },

  /* --------------------------------------------------------------------------
     Les 6: Woordenschat: Openbaar vervoer, tickets & richtingen
     -------------------------------------------------------------------------- */
  {
    id: "a2_m1_l6",
    chapterTitle: "Module 1: Indefinido I – Basis, Reizen & Vervoer",
    title: "Les 6: Woordenschat: Openbaar vervoer, tickets & richtingen",
    description: "Leer navigeren met het openbaar vervoer, kaartjes kopen en de weg vragen of uitleggen.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "El autobús / El tren", nl: "De bus / De trein", example: "Perdimos el último autobús." },
      { es: "La estación de trenes", nl: "Het treinstation", example: "Llegamos a la estación de trenes." },
      { es: "El billete de ida y vuelta", nl: "Het retourticket", example: "Compré un billete de ida y vuelta." },
      { es: "La parada de metro", nl: "De metrohalte", example: "¿Dónde está la parada de metro?" },
      { es: "Girar a la izquierda / derecha", nl: "Naar links / rechts afslaan", example: "Giré a la derecha en la esquina." },
      { es: "Seguir recto", nl: "Rechtdoor gaan", example: "Seguí recto hasta el semáforo." }
    ],
    cheatsheet: `
      <h4>Woordenschat: Vervoer & Richtingen</h4>
      <ul>
        <li><b>El billete sencillo:</b> Enkele reis</li>
        <li><b>El billete de ida y vuelta:</b> Retour</li>
        <li><b>Hacer transbordo:</b> Overstappen</li>
        <li><b>La esquina:</b> De hoek</li>
        <li><b>El semáforo:</b> Het verkeerslicht</li>
        <li><b>A la izquierda / A la derecha:</b> Links / Rechts</li>
        <li><b>Todo recto:</b> Rechtdoor</li>
      </ul>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Wat is 'un billete de ida y vuelta'?", options: ["Een enkel ticket", "Een retourticket", "Een maandkaart", "Een gratis ticket"], correctIndex: 1 },
      { type: "input", question: "Vertaal naar het Spaans: 'Rechtdoor'", correctAnswer: "Todo recto" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Sla af naar links bij de hoek'", shuffledWords: ["a", "la", "izquierda", "en", "la", "esquina.", "Gira"], correctSentence: "Gira a la izquierda en la esquina." },
      { type: "multiple-choice", question: "Hoe zeg je 'overstappen' in het vervoer?", options: ["Hacer transbordo", "Cambiar autobús", "Pasar billete", "Subir tren"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het treinstation'", correctAnswer: "La estación de trenes" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'We misten de bus'", shuffledWords: ["el", "autobús.", "Perdimos"], correctSentence: "Perdimos el autobús." },
      { type: "multiple-choice", question: "Wat betekent 'girar a la derecha'?", options: ["Links afslaan", "Rechts afslaan", "Rechtdoor gaan", "Keren"], correctIndex: 1 },
      { type: "input", question: "Vul in: 'Necesito un billete ___ (enkele reis).'", correctAnswer: "sencillo" },
      { type: "input", question: "Vertaal: 'De bushalte'", correctAnswer: "La parada de autobús" },
      { type: "multiple-choice", question: "Wat is 'el semáforo'?", options: ["Het verkeerslicht", "Het bord", "Het kruispunt", "Het zebrapad"], correctIndex: 0 },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Waar is de metrohalte?'", shuffledWords: ["la", "parada", "de", "metro?", "¿Dónde", "está"], correctSentence: "¿Dónde está la parada de metro?" },
      { type: "input", question: "Vul in: 'El tren sale de la ___ (perron) 4.'", correctAnswer: "vía" },
      { type: "multiple-choice", question: "Wat betekent 'la vía' op een treinstation?", options: ["Het perron / het spoor", "De ingang", "De kassa", "De wachtruimte"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het spoor / perron'", correctAnswer: "La vía" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik stapte over op lijn 2'", shuffledWords: ["transbordo", "en", "la", "línea", "dos.", "Hice"], correctSentence: "Hice transbordo en la línea dos." },
      { type: "multiple-choice", question: "Hoe zeg je 'kruispunt'?", options: ["El cruce", "La esquina", "El semáforo", "La acera"], correctIndex: 0 },
      { type: "input", question: "Vul in: 'Sigue recto hasta el ___ (verkeerslicht).'", correctAnswer: "semáforo" },
      { type: "input", question: "Vertaal: 'De taxi'", correctAnswer: "El taxi" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Aan de rechterkant zie je het station'", shuffledWords: ["a", "la", "derecha.", "La", "estación", "está"], correctSentence: "La estación está a la derecha." },
      { type: "multiple-choice", question: "Wat betekent 'la acera'?", options: ["Het trottoir / de stoep", "De straat", "Het spoor", "Het park"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het trottoir'", correctAnswer: "La acera" },
      { type: "input", question: "Vul in: 'Compré un billete ___ (retour).'", correctAnswer: "de ida y vuelta" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Stap uit bij de volgende halte'", shuffledWords: ["en", "la", "siguiente", "parada.", "Baja"], correctSentence: "Baja en la siguiente parada." },
      { type: "multiple-choice", question: "Wat betekent werkwoord *bajar* bij vervoer?", options: ["Instappen", "Uitstappen", "Kopen", "Wachten"], correctIndex: 1 },
      { type: "input", question: "Vertaal: 'Instappen' (in voertuig)", correctAnswer: "Subir" },
      { type: "input", question: "Vul in: '___ (Stap in) al autobús rápidamente.'", correctAnswer: "Sube" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'We stapten uit in het centrum'", shuffledWords: ["en", "el", "centro.", "Bajamos"], correctSentence: "Bajamos en el centro." },
      { type: "multiple-choice", question: "Wat is 'la taquilla'?", options: ["Het loket / de kassa", "De treincoupé", "De buschauffeur", "De kofferbak"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het loket'", correctAnswer: "La taquilla" },
      { type: "input", question: "Vul in: 'Compré el billete en la ___ (loket).'", correctAnswer: "taquilla" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Hoeveel kost de rit?'", shuffledWords: ["cuesta", "el", "trayecto?", "¿Cuánto"], correctSentence: "¿Cuánto cuesta el trayecto?" },
      { type: "multiple-choice", question: "Wat is 'el trayecto'?", options: ["Het traject / de rit", "De vertraging", "Het ticket", "De halte"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De dienstregeling'", correctAnswer: "El horario" },
      { type: "input", question: "Vul in: 'Consulta el ___ (dienstregeling) de autobuses.'", correctAnswer: "horario" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Het station is heel dichtbij'", shuffledWords: ["muy", "cerca.", "La", "estación", "está"], correctSentence: "La estación está muy cerca." },
      { type: "multiple-choice", question: "Wat is het tegenovergestelde van 'cerca'?", options: ["Lejos", "Recto", "Delante", "Dentro"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ver weg'", correctAnswer: "Lejos" },
      { type: "input", question: "Vul in: 'El hotel no está ___ (ver weg).'", correctAnswer: "lejos" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Sla af bij de tweede straat'", shuffledWords: ["en", "la", "segunda", "calle.", "Gira"], correctSentence: "Gira en la segunda calle." },
      { type: "multiple-choice", question: "Hoe zeg je 'stadsbus'?", options: ["Autobús urbano", "Autobús nocturno", "Tren de alta velocidad", "Metro expreso"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Nachtbus'", correctAnswer: "Autobús nocturno" },
      { type: "input", question: "Vul in: 'Tomamos el ___ (nachtbus).'", correctAnswer: "autobús nocturno" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Trein nummer vier komt aan'", shuffledWords: ["número", "cuatro.", "Llega", "el", "tren"], correctSentence: "Llega el tren número cuatro." },
      { type: "multiple-choice", question: "Wat is 'AVE' in Spanje?", options: ["De hogesnelheidstrein", "De stadsbus", "De luchthaven shuttle", "De metro van Madrid"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De bestuurder / chauffeur'", correctAnswer: "El conductor" },
      { type: "input", question: "Vul in: 'Le pagué al ___ (chauffeur).'", correctAnswer: "conductor" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Steek de straat over'", shuffledWords: ["la", "calle.", "Cruza"], correctSentence: "Cruza la calle." },
      { type: "multiple-choice", question: "Wat betekent 'cruzar la calle'?", options: ["De straat oversteken", "In de straat parkeren", "De straat inlopen", "De straat schoonmaken"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'De hoek'", correctAnswer: "La esquina" },
      { type: "input", question: "Vertaal: 'Linksaf'", correctAnswer: "A la izquierda" }
    ]
  },

  /* --------------------------------------------------------------------------
     Les 7: Drill & Stampen: Reisverhalen in de Indefinido
     -------------------------------------------------------------------------- */
  {
    id: "a2_m1_l7",
    chapterTitle: "Module 1: Indefinido I – Basis, Reizen & Vervoer",
    title: "Les 7: Drill & Stampen: Reisverhalen in de Indefinido",
    description: "Snelheidstraining en intensieve herhaling van vervoegingen, klankveranderingen en reis-vocabulaire.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "Viajar -> Viajé", nl: "Reizen -> Ik reisde", example: "Viajé por toda la costa." },
      { es: "Llegar -> Llegué", nl: "Aankomen -> Ik kwam aan", example: "Llegué a las diez de la noche." },
      { es: "Perder -> Perdió", nl: "Verliezen -> Hij/Zij verloor", example: "Perdió el autobús de línea." },
      { es: "Comprar -> Compraron", nl: "Kopen -> Zij kochten", example: "Compraron billetes sencillos." },
      { es: "Tomar -> Tomasteis", nl: "Nemen -> Jullie namen", example: "¿Tomasteis el taxi o el metro?" },
      { es: "Salir -> Salimos", nl: "Vertrekken -> Wij vertrokken", example: "Salimos temprano del hotel." }
    ],
    cheatsheet: `
      <h4>Snelle Refresher: Indefinido Mix</h4>
      <p><b>-AR:</b> -é, -aste, -ó, -amos, -asteis, -aron</p>
      <p><b>-ER / -IR:</b> -í, -iste, -ió, -imos, -isteis, -ieron</p>
      <p><b>Yo-uitzonderingen:</b> -gar &rarr; -gués | -zar &rarr; -cé | -car &rarr; -qué</p>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Vervoeg *viajar* (yo):", options: ["viajé", "viajó", "viajaste", "viajo"], correctIndex: 0 },
      { type: "input", question: "Vul in: 'Yo ___ (pagar) la reserva ayer.'", correctAnswer: "pagué" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Gisteren arriveerden we laat'", shuffledWords: ["tarde.", "llegamos", "Ayer"], correctSentence: "Ayer llegamos tarde." },
      { type: "multiple-choice", question: "Vervoeg *salir* (ellos):", options: ["salieron", "salieronse", "salieronen", "salieroná"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Zij (enkelvoud) verloor haar koffer'", correctAnswer: "Perdió su maleta" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik zocht de metro halte'", shuffledWords: ["de", "metro.", "parada", "la", "Busqué"], correctSentence: "Busqué la parada de metro." },
      { type: "multiple-choice", question: "Vervoeg *buscar* (yo):", options: ["busqué", "buscé", "buscó", "buscaste"], correctIndex: 0 },
      { type: "input", question: "Vul in: '¿Ustedes ___ (comprender) el horario?'", correctAnswer: "comprendieron" },
      { type: "input", question: "Vertaal: 'Jullie namen de trein'", correctAnswer: "Tomasteis el tren" },
      { type: "multiple-choice", question: "Vervoeg *organizar* (yo):", options: ["organizé", "organicé", "organizó", "organizo"], correctIndex: 1 },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Hij kocht een retourticket'", shuffledWords: ["un", "billete", "de", "ida", "y", "vuelta.", "Compró"], correctSentence: "Compró un billete de ida y vuelta." },
      { type: "input", question: "Vul in: 'Nosotros ___ (visitar) la ciudad.'", correctAnswer: "visitamos" },
      { type: "multiple-choice", question: "Vervoeg *escribir* (tú):", options: ["escribiste", "escribió", "escribí", "escribieron"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik landde in Madrid'", correctAnswer: "Aterricé en Madrid" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Zij overhandigden hun paspoorten'", shuffledWords: ["sus", "pasaportes.", "Entregaron"], correctSentence: "Entregaron sus pasaportes." },
      { type: "multiple-choice", question: "Vervoeg *llegar* (yo):", options: ["llegué", "llegé", "llegó", "llegaste"], correctIndex: 0 },
      { type: "input", question: "Vul in: 'Tú ___ (perder) el último tren.'", correctAnswer: "perdiste" },
      { type: "input", question: "Vertaal: 'Ik betaalde met creditcard'", correctAnswer: "Pagué con tarjeta de crédito" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Eergisteren reisde ik per bus'", shuffledWords: ["en", "autobús.", "viajé", "Anteayer"], correctSentence: "Anteayer viajé en autobús." },
      { type: "multiple-choice", question: "Vervoeg *volver* (nosotros):", options: ["volvimos", "volveremos", "volvisteis", "volvieron"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Zij (meervoud) veranderden van vlucht'", correctAnswer: "Cambiaron de vuelo" },
      { type: "input", question: "Vul in: 'Yo ___ (empezar) la excursión.'", correctAnswer: "empecé" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Sloeg je af naar rechts?'", shuffledWords: ["a", "la", "derecha?", "¿Giraste"], correctSentence: "¿Giraste a la derecha?" },
      { type: "multiple-choice", question: "Vervoeg *apagar* (yo):", options: ["apagué", "apagéc", "apagó", "apagaste"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Wij staken de straat over'", correctAnswer: "Cruzamos la calle" },
      { type: "input", question: "Vul in: '¿___ (beber) vosotros cerveza?'", correctAnswer: "Bebisteis" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik pakte mijn rugzak'", shuffledWords: ["mi", "mochila.", "Cargué"], correctSentence: "Cargué mi mochila." },
      { type: "multiple-choice", question: "Vervoeg *subir* (él):", options: ["subió", "subí", "subiste", "subieron"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik zocht het adres op'", correctAnswer: "Busqué la dirección" },
      { type: "input", question: "Vul in: 'Ellos ___ (recibir) las maletas.'", correctAnswer: "recibieron" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Vorige week kwamen ze aan'", shuffledWords: ["llegaron.", "La", "semana", "pasada"], correctSentence: "La semana pasada llegaron." },
      { type: "multiple-choice", question: "Vervoeg *explicar* (yo):", options: ["expliqué", "explicé", "explicó", "explicaste"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Hij stapte uit bij het station'", correctAnswer: "Bajó en la estación" },
      { type: "input", question: "Vul in: 'Yo ___ (sacar) el billete en la máquina.'", correctAnswer: "saqué" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Zij checkten de koffers in'", shuffledWords: ["las", "maletas.", "Facturaron"], correctSentence: "Facturaron las maletas." },
      { type: "multiple-choice", question: "Vervoeg *comer* (vosotros):", options: ["comisteis", "comimos", "comieron", "comiste"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik speelde gitaar gisteravond'", correctAnswer: "Toqué la guitarra anoche" },
      { type: "input", question: "Vul in: '¿Usted ___ (confirmar) el vuelo?'", correctAnswer: "confirmó" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Drie dagen geleden vertrok hij'", shuffledWords: ["salió.", "Hace", "tres", "días"], correctSentence: "Hace tres días salió." },
      { type: "multiple-choice", question: "Vervoeg *cruzar* (yo):", options: ["crucé", "cruzé", "cruzó", "cruzaste"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Wij wachten een uur op de bus'", correctAnswer: "Esperamos el autobús una hora" },
      { type: "input", question: "Vul in: 'Yo ___ (almorzar) en la estación.'", correctAnswer: "almorcé" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Het vliegtuig steeg stipt op'", shuffledWords: ["puntual.", "El", "avión", "despegó"], correctSentence: "El avión despegó puntual." },
      { type: "multiple-choice", question: "Vervoeg *bajar* (tú):", options: ["bajaste", "bajó", "bajé", "bajaron"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik maakte foto's'", correctAnswer: "Saqué fotos" },
      { type: "input", question: "Vul in: 'Vosotros ___ (aprender) las rutas.'", correctAnswer: "aprendisteis" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik parkeerde de auto nabij'", shuffledWords: ["el", "coche", "cerca.", "Aparqué"], correctSentence: "Aparqué el coche cerca." },
      { type: "multiple-choice", question: "Vervoeg *responder* (ellos):", options: ["respondieron", "respondieronse", "respondió", "respondieronen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Jij begreep het advies'", correctAnswer: "Entendiste el consejo" },
      { type: "input", question: "Vertaal: 'Ik begon laat'", correctAnswer: "Empecé tarde" }
    ]
  },

  /* --------------------------------------------------------------------------
     Les 8: Integratie & Herhaling
     -------------------------------------------------------------------------- */
  {
    id: "a2_m1_l8",
    chapterTitle: "Module 1: Indefinido I – Basis, Reizen & Vervoer",
    title: "Les 8: Integratie & Herhaling",
    description: "Combineer grammatica van de Pretérito Indefinido met alle geleerde reistermen in een volledige herhalingsles.",
    isOptional: false,
    points: 40,
    vocabulary: [
      { es: "El itinerario", nl: "De reisroute / De planning", example: "Organizamos el itinerario ayer." },
      { es: "La reserva", nl: "De reservering", example: "Confirmé la reserva por internet." },
      { es: "El equipaje", nl: "De bagage", example: "Recogimos el equipaje en la cinta." },
      { es: "La cinta de equipajes", nl: "De bagageband", example: "Buscamos las maletas en la cinta." },
      { es: "El mostrador de información", nl: "De informatiebalie", example: "Pregunté en el mostrador." },
      { es: "Perder la conexión", nl: "De aansluiting missen", example: "Por el retraso perdí la conexión." }
    ],
    cheatsheet: `
      <h4>Overzicht Module 1 Integratie</h4>
      <ul>
        <li><b>Grammatica:</b> Indefinido -AR vs -ER/-IR + yo-spellingveranderingen (-gar, -zar, -car).</li>
        <li><b>Tijdsaanduidingen:</b> ayer, anoche, anteayer, el año pasado, hace X días.</li>
        <li><b>Thema:</b> Vliegveld, openbaar vervoer, tickets & richtingen.</li>
      </ul>
    `,
    questionBank: [
      { type: "multiple-choice", question: "Welke zin staat in de Pretérito Indefinido?", options: ["Ayer compré un billete de tren.", "Hoy compro un billete de tren.", "Mañana compraré un billete.", "Voy a comprar un billete."], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Gisteravond kwamen we aan op het vliegveld'", correctAnswer: "Anoche llegamos al aeropuerto" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Vorig jaar reisde ik naar Spanje'", shuffledWords: ["a", "España.", "El", "año", "pasado", "viajé"], correctSentence: "El año pasado viajé a España." },
      { type: "multiple-choice", question: "Wat is de juiste 'yo'-vorm van *organizar* in het verleden?", options: ["organizé", "organicé", "organizó", "organizo"], correctIndex: 1 },
      { type: "input", question: "Vul in: 'Yo ___ (buscar) la puerta de embarque.'", correctAnswer: "busqué" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'We misten de aansluiting'", shuffledWords: ["la", "conexión.", "Perdimos"], correctSentence: "Perdimos la conexión." },
      { type: "multiple-choice", question: "Hoe vertaal je 'vijf dagen geleden'?", options: ["Hace cinco días", "Cinco días pasados", "En cinco días", "Por cinco días"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik betaalde voor de handbagage'", correctAnswer: "Pagué por el equipaje de mano" },
      { type: "input", question: "Vul in: 'Ella ___ (escribir) los datos en el billete.'", correctAnswer: "escribió" },
      { type: "multiple-choice", question: "Wat betekent 'girar a la izquierda en el semáforo'?", options: ["Bij het verkeerslicht naar links afslaan", "Bij het verkeerslicht naar rechts afslaan", "Rechtdoor rijden bij het licht", "Stoppen voor het licht"], correctIndex: 0 },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik vatte de reisroute samen'", shuffledWords: ["el", "itinerario.", "Resumí"], correctSentence: "Resumí el itinerario." },
      { type: "input", question: "Vul in: '¿___ (Subir) vosotros al tren a tiempo?'", correctAnswer: "Subisteis" },
      { type: "multiple-choice", question: "Welke uitgang past bij 'ellos' voor *comer* in Indefinido?", options: ["-ieron", "-aron", "-en", "-ieronen"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Zij (meervoud) staken de straat over op de hoek'", correctAnswer: "Cruzaron la calle en la esquina" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Eergisteren pakte ik de koffer in'", shuffledWords: ["la", "maleta.", "Anteayer", "preparé"], correctSentence: "Anteayer preparé la maleta." },
      { type: "multiple-choice", question: "Wat is 'el mostrador de información'?", options: ["De informatiebalie", "De douanecontrole", "De bagageband", "De ticketautomaat"], correctIndex: 0 },
      { type: "input", question: "Vul in: 'El vuelo ___ (despegar) con retraso.'", correctAnswer: "despegó" },
      { type: "input", question: "Vertaal: 'Ik begon de vakantie vorige week'", correctAnswer: "Empecé las vacaciones la semana pasada" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ze haalden de koffers van de band'", shuffledWords: ["las", "maletas", "de", "la", "cinta.", "Sacaron"], correctSentence: "Sacaron las maletas de la cinta." },
      { type: "multiple-choice", question: "Wat is 'un billete sencillo'?", options: ["Een enkele reis", "Een retourticket", "Een goedkoop ticket", "Een digitaal ticket"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik zocht de bagageband'", correctAnswer: "Busqué la cinta de equipajes" },
      { type: "input", question: "Vul in: 'Vosotros ___ (tomar) el autobús urbano.'", correctAnswer: "tomasteis" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ze gaven de boardingpass aan de agent'", shuffledWords: ["la", "tarjeta", "de", "embarque.", "Entregaron"], correctSentence: "Entregaron la tarjeta de embarque." },
      { type: "multiple-choice", question: "Wat is de Indefinido van *vivir* voor 'tú'?", options: ["viviste", "vivió", "viví", "vivieron"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'We stapten over bij het volgende station'", correctAnswer: "Hicimos transbordo en la siguiente estación" },
      { type: "input", question: "Vul in: 'Yo ___ (almorzar) en el restaurante del aeropuerto.'", correctAnswer: "almorcé" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ik sprak met de taxichauffeur'", shuffledWords: ["con", "el", "taxista.", "Hablé"], correctSentence: "Hablé con el taxista." },
      { type: "multiple-choice", question: "Hoe spel je de 'yo'-vorm van *sacar* in de Indefinido?", options: ["saqué", "sacé", "sacó", "sacaste"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Zij (enkelvoud) kocht een ticket aan het loket'", correctAnswer: "Compró un billete en la taquilla" },
      { type: "input", question: "Vul in: 'Mis amigos ___ (regresar) el mes pasado.'", correctAnswer: "regresaron" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Gisteravond dronken we iets in de bar'", shuffledWords: ["algo", "en", "el", "bar.", "Anoche", "bebimos"], correctSentence: "Anoche bebimos algo en el bar." },
      { type: "multiple-choice", question: "Wat betekent 'seguir recto dos cuadras'?", options: ["Twee blokken rechtdoor gaan", "Na twee blokken linksaf", "Twee blokken teruglopen", "Stoppen na twee blokken"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik parkeerde de auto bij het station'", correctAnswer: "Aparqué el coche cerca de la estación" },
      { type: "input", question: "Vul in: 'Tú ___ (perder) el pasaporte en el taxi.'", correctAnswer: "perdiste" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'We liepen langs het trottoir'", shuffledWords: ["por", "la", "acera.", "Caminamos"], correctSentence: "Caminamos por la acera." },
      { type: "multiple-choice", question: "Wat is de vervoeging van *llegar* voor 'yo'?", options: ["llegué", "llegé", "llegó", "llegaste"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Het schip/de boot vertrok om tien uur'", correctAnswer: "El barco salió a las diez" },
      { type: "input", question: "Vul in: 'Yo ___ (tocar) la maleta equivocada.'", correctAnswer: "toqué" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ze toonden de identiteitsbewijzen bij de douane'", shuffledWords: ["los", "documentos", "en", "la", "aduana.", "Enseñaron"], correctSentence: "Enseñaron los documentos en la aduana." },
      { type: "multiple-choice", question: "Wat is de betekenis van 'aterrizaje de emergencia'?", options: ["Noodlanding", "Geplande landing", "Snelle vlucht", "Vertraagde start"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik zocht de informatiebalie'", correctAnswer: "Busqué el mostrador de información" },
      { type: "input", question: "Vul in: '¿Usted ___ (viajar) en clase ejecutiva?'", correctAnswer: "viajó" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Twee uur geleden stegen we op'", shuffledWords: ["hace", "dos", "horas.", "Despegamos"], correctSentence: "Despegamos hace dos horas." },
      { type: "multiple-choice", question: "Welke klinkers veranderen in de Indefinido yo-vorm van -gar?", options: ["g wordt gu voor e", "g wordt j voor a", "g wordt z voor o", "er verandert niets"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'We vonden de gate'", correctAnswer: "Encontramos la puerta de embarque" },
      { type: "input", question: "Vul in: 'Yo ___ (entregar) las llaves al salir.'", correctAnswer: "entregué" },
      { type: "word-scramble", question: "Zet in de juiste volgorde: 'Ze vervoerden de bagage snel'", shuffledWords: ["rápido.", "el", "equipaje", "Transportaron"], correctSentence: "Transportaron el equipaje rápido." },
      { type: "multiple-choice", question: "Wat is 'el asiento de pasillo'?", options: ["Gangpadstoel", "Raamstoel", "Middenstoel", "Eerste klas stoel"], correctIndex: 0 },
      { type: "input", question: "Vertaal: 'Ik arriveerde gisteren op tijd'", correctAnswer: "Llegué a tiempo ayer" },
      { type: "input", question: "Vertaal: 'Zij vonden het station niet'", correctAnswer: "No encontraron la estación" }
    ]
  },

  /* --------------------------------------------------------------------------
     🏆 Eindtoets Module 1 (A2)
     -------------------------------------------------------------------------- */
  {
    id: "a2_m1_eindtoets",
    chapterTitle: "Module 1: Indefinido I – Basis, Reizen & Vervoer",
    title: "🏆 Eindtoets Module 1 (A2)",
    description: "Test je kennis over de Pretérito Indefinido (regelmatig & stamveranderingen), verleden tijdsaanduidingen en reisinformatie!",
    isOptional: false,
    isExam: true,
    points: 60,
    getDynamicQuestions: function() {
      let allQuestions = [];
      window.LESSONS_DATA.forEach(l => {
        if (l.id.startsWith("a2_m1") && !l.isExam && l.questionBank) {
          allQuestions = allQuestions.concat(l.questionBank);
        }
      });
      allQuestions.sort(() => Math.random() - 0.5);
      return allQuestions.slice(0, 15);
    }
  }
);
