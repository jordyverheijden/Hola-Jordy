// ==========================================
// GRAMMATICA A1 - js/data/a1/skill-grammatica.js
// 9 Lessen met elk theorie en 25 vragen over de grammatica van modules 1 t/m 9
// ==========================================

window.skillGrammaticaA1 = [
    {
        id: 'grammatica-1',
        title: 'Grammatica 1: Persoonlijke voornaamwoorden & SER',
        description: 'Leer de basis voornaamwoorden en het werkwoord \'ser\' (zijn).',
        theory: `
            <h3>Het werkwoord SER (zijn)</h3>
            <p>Gebruik <strong>ser</strong> voor vaste eigenschappen, nationaliteiten, beroepen en identiteit.</p>
            <ul>
                <li><strong>Yo</strong> soy (Ik ben)</li>
                <li><strong>Tú</strong> eres (Jij bent)</li>
                <li><strong>Él / Ella / Usted</strong> es (Hij / zij / u is)</li>
                <li><strong>Nosotros / Nosotras</strong> somos (Wij zijn)</li>
                <li><strong>Vosotros / Vosotras</strong> sois (Jullie zijn)</li>
                <li><strong>Ellos / Ellas / Ustedes</strong> son (Zij / u bent - meervoud)</li>
            </ul>
        `,
        quizzes: [
            { type: 'multiple-choice', question: 'Kies de juiste vorm van het werkwoord "ser" bij het voornaamwoord "yo":\n"Yo [ ... ] español."', options: ['soy', 'eres', 'es', 'somos'], answer: 'soy' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "tú":\n"Tú [ ... ] muy simpático."', options: ['soy', 'eres', 'es', 'son'], answer: 'eres' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "él / ella":\n"Ella [ ... ] médica."', options: ['soy', 'eres', 'es', 'somos'], answer: 'es' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "nosotros":\n"Nosotros [ ... ] estudiantes."', options: ['soy', 'eres', 'somos', 'son'], answer: 'somos' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "ellos / ellas":\n"Ellos [ ... ] de Madrid."', options: ['soy', 'es', 'somos', 'son'], answer: 'son' },
            { type: 'multiple-choice', question: 'Welk persoonlijk voornaamwoord hoort bij "somos"?', options: ['Yo', 'Tú', 'Nosotros', 'Ellos'], answer: 'Nosotros' },
            { type: 'multiple-choice', question: 'Vertaal "Ik ben":', options: ['Tú eres', 'Yo soy', 'Él es', 'Nosotros somos'], answer: 'Yo soy' },
            { type: 'multiple-choice', question: 'Vertaal "Jij bent":', options: ['Yo soy', 'Tú eres', 'Ella es', 'Ellos son'], answer: 'Tú eres' },
            { type: 'multiple-choice', question: 'Kies de juiste zin:', options: ['Yo eres estudiante', 'Tú soy estudiante', 'Yo soy estudiante', 'Él soy estudiante'], answer: 'Yo soy estudiante' },
            { type: 'multiple-choice', question: 'Wat betekent "Nosotros somos"?', options: ['Jullie zijn', 'Zij zijn', 'Wij zijn', 'Ik ben'], answer: 'Wij zijn' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "usted":\n"Usted [ ... ] muy amable."', options: ['soy', 'eres', 'es', 'somos'], answer: 'es' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "vosotros":\n"Vosotros [ ... ] de Holanda."', options: ['sois', 'somos', 'son', 'soy'], answer: 'sois' },
            { type: 'multiple-choice', question: 'Wie of wat hoort bij de vorm "soy"?', options: ['Yo', 'Tú', 'Él', 'Nosotros'], answer: 'Yo' },
            { type: 'multiple-choice', question: 'Wie of wat hoort bij de vorm "eres"?', options: ['Yo', 'Tú', 'Ella', 'Usted'], answer: 'Tú' },
            { type: 'multiple-choice', question: 'Vertaal "Zij (vrouwelijk meervoud) zijn":', options: ['Ellas son', 'Nosotras somos', 'Vosotras sois', 'Ellos son'], answer: 'Ellas son' },
            { type: 'multiple-choice', question: 'Wat is de correcte ontkenning van "Yo soy profesor"?', options: ['No soy profesor', 'Soy no profesor', 'No estoy profesor', 'No eres profesor'], answer: 'No soy profesor' },
            { type: 'multiple-choice', question: 'Kies de juiste zin met "ser":\n"Nosotros [ ... ] amigos."', options: ['somos', 'sois', 'son', 'soy'], answer: 'somos' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "Carlos y Ana":\n"Carlos y Ana [ ... ] novios."', options: ['sois', 'somos', 'son', 'es'], answer: 'son' },
            { type: 'multiple-choice', question: 'Wat betekent de zin "Tú no eres de aquí"?', options: ['Jij bent niet van hier', 'Jij bent hier niet', 'Jij woont hier niet', 'Jij kent dit niet'], answer: 'Jij bent niet van hier' },
            { type: 'multiple-choice', question: 'Welk voornaamwoord betekent "jullie" (informeel in Spanje)?', options: ['Vosotros', 'Ellos', 'Ustedes', 'Nosotros'], answer: 'Vosotros' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm:\n"El libro [ ... ] rojo."', options: ['es', 'soy', 'eres', 'somos'], answer: 'es' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm:\n"Las flores [ ... ] bonitas."', options: ['es', 'son', 'somos', 'sois'], answer: 'son' },
            { type: 'multiple-choice', question: 'Wat is de betekenis van het werkwoord "ser"?', options: ['hebben', 'zijn', 'gaan', 'doen'], answer: 'zijn' },
            { type: 'multiple-choice', question: 'Kies de juiste vraag:\n"¿[ ... ] eres tú?" -> "Soy Juan."', options: ['Quién', 'Qué', 'Dónde', 'Cómo'], answer: 'Quién' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"Yo [ ... ] un hombre feliz."', options: ['soy', 'eres', 'es', 'somos'], answer: 'soy' }
        ]
    },
    {
        id: 'grammatica-2',
        title: 'Grammatica 2: Tijdsaanduidingen & Dagen',
        description: 'Leer hoe je dagen van de week gebruikt en hoe je klokkijkt.',
        theory: `
            <h3>Klokkijken en Dagen</h3>
            <p><strong>Klokkijken:</strong> Voor 1 uur gebruik je <em>"Es la una"</em>. Voor alle andere uren gebruik je <em>"Son las [uur]"</em>.</p>
            <p><strong>Dagen van de week:</strong> Dagen schrijf je met een kleine letter en krijgen het lidwoord <strong>el</strong> (bijv. <em>el lunes</em> - maandag).</p>
        `,
        quizzes: [
            { type: 'multiple-choice', question: 'Hoe zeg je "het is één uur" in het Spaans?', options: ['Son las una', 'Es la una', 'Es las dos', 'Son la una'], answer: 'Es la una' },
            { type: 'multiple-choice', question: 'Hoe zeg je "het is twee uur"?', options: ['Es la dos', 'Son las dos', 'Son el dos', 'Es dos'], answer: 'Son las dos' },
            { type: 'multiple-choice', question: 'Welk lidwoord gebruik je voor dagen van de week (bijv. maandag)?', options: ['La', 'Los', 'El', 'Las'], answer: 'El' },
            { type: 'multiple-choice', question: 'Vertaal "dinsdag":', options: ['El lunes', 'El martes', 'El miércoles', 'El jueves'], answer: 'El martes' },
            { type: 'multiple-choice', question: 'Wat betekent "Qué hora es"?', options: ['Welke dag is het?', 'Hoe laat is het?', 'Waar ben je?', 'Hoe gaat het?'], answer: 'Hoe laat is het?' },
            { type: 'multiple-choice', question: 'Kies de juiste vertaling voor "vrijdag":', options: ['El jueves', 'El viernes', 'El sábado', 'El domingo'], answer: 'El viernes' },
            { type: 'multiple-choice', question: 'Hoe vraag je "om hoe laat"?', options: ['¿Qué hora es?', '¿A qué hora?', '¿Cuánto?', '¿Dónde?'], answer: '¿A qué hora?' },
            { type: 'multiple-choice', question: 'Welke dag komt na "el martes"?', options: ['El lunes', 'El miércoles', 'El jueves', 'El viernes'], answer: 'El miércoles' },
            { type: 'multiple-choice', question: 'Hoe zeg je "om twaalf uur"?', options: ['A las doce', 'A la una', 'A las dos', 'A las diez'], answer: 'A las doce' },
            { type: 'multiple-choice', question: 'Welk woord betekent "zondag"?', options: ['Sábado', 'Domingo', 'Viernes', 'Martes'], answer: 'Domingo' },
            { type: 'multiple-choice', question: 'Hoe zeg je "het is middernacht"?', options: ['Es la medianoche', 'Son las medianoche', 'Es mediodía', 'Son las doce'], answer: 'Es la medianoche' },
            { type: 'multiple-choice', question: 'Wat is "donderdag" in het Spaans?', options: ['El miércoles', 'El jueves', 'El viernes', 'El martes'], answer: 'El jueves' },
            { type: 'multiple-choice', question: 'Hoe zeg je "het is kwart over drie"?', options: ['Son las tres y cuarto', 'Son las tres y media', 'Son las tres menos cuarto', 'Es la una y cuarto'], answer: 'Son las tres y cuarto' },
            { type: 'multiple-choice', question: 'Hoe zeg je "het is half vier" (drie uur dertig)?', options: ['Son las tres y cuarto', 'Son las tres y media', 'Son las cuatro menos cuarto', 'Son las tres y diez'], answer: 'Son las tres y media' },
            { type: 'multiple-choice', question: 'Wat betekent "el fin de semana"?', options: ['De werkweek', 'Het weekend', 'De maandag', 'De middag'], answer: 'Het weekend' },
            { type: 'multiple-choice', question: 'Welke dag komt vóór "el miércoles"?', options: ['El lunes', 'El martes', 'El jueves', 'El viernes'], answer: 'El martes' },
            { type: 'multiple-choice', question: 'Hoe zeg je "het is kwart voor vijf"?', options: ['Son las cinco y cuarto', 'Son las cinco y media', 'Son las cinco menos cuarto', 'Son las cuatro menos cuarto'], answer: 'Son las cinco menos cuarto' },
            { type: 'multiple-choice', question: 'Welk woord betekent "zaterdag"?', options: ['Sábado', 'Domingo', 'Viernes', 'Lunes'], answer: 'Sábado' },
            { type: 'multiple-choice', question: 'Hoe zeg je "om negen uur \'s avonds"?', options: ['A las nueve de la mañana', 'A las nueve de la noche', 'A las nueve de la tarde', 'A las nueve en punto'], answer: 'A las nueve de la noche' },
            { type: 'multiple-choice', question: 'Hoe schrijf je dagen van de week in het Spaans qua hoofdletters?', options: ['Met een hoofdletter', 'Met een kleine letter', 'Alles in hoofdletters', 'Maakt niet uit'], answer: 'Met een kleine letter' },
            { type: 'multiple-choice', question: 'Wat betekent "mañana"?', options: ['Gisteren of ochtend', 'Morgen of ochtend', 'Alleen avond', 'Volgende week'], answer: 'Morgen of ochtend' },
            { type: 'multiple-choice', question: 'Hoe vraag je naar de dag van vandaag?', options: ['¿Qué día es hoy?', '¿Qué hora es?', '¿Cuál es tu día?', '¿Cuándo es hoy?'], answer: '¿Qué día es hoy?' },
            { type: 'multiple-choice', question: 'Vertaal "vandaag is het maandag":', options: ['Hoy es lunes', 'Hoy es martes', 'Mañana es lunes', 'Ayer fue lunes'], answer: 'Hoy es lunes' },
            { type: 'multiple-choice', question: 'Wat betekent "ayer"?', options: ['Vandaag', 'Morgen', 'Gisteren', 'Eergisteren'], answer: 'Gisteren' },
            { type: 'multiple-choice', question: 'Hoe zeg je "om half acht"?', options: ['A las siete y media', 'A las ocho y media', 'A las siete y cuarto', 'A las ocho menos cuarto'], answer: 'A las siete y media' }
        ]
    },
    {
        id: 'grammatica-3',
        title: 'Grammatica 3: Beleefde vormen & Querer',
        description: 'Gebruik het werkwoord \'querer\' (willen) om beleefd te bestellen.',
        theory: `
            <h3>Het werkwoord QUERER (willen)</h3>
            <p><strong>Querer</strong> is een klinkerwisselend werkwoord (e -> ie):</p>
            <ul>
                <li>Yo <strong>quiero</strong> (Ik wil)</li>
                <li>Tú <strong>quieres</strong> (Jij wilt)</li>
                <li>Él / Ella / Usted <strong>quiere</strong> (Hij / zij / u wilt)</li>
                <li>Nosotros <strong>queremos</strong> (Wij willen)</li>
                <li>Vosotros <strong>queréis</strong> (Jullie willen)</li>
                <li>Ellos / Ellas / Ustedes <strong>quieren</strong> (Zij willen)</li>
            </ul>
        `,
        quizzes: [
            { type: 'multiple-choice', question: 'Kies de juiste vorm van "querer" bij "yo":\n"Yo [ ... ] un café."', options: ['quiero', 'quieres', 'quiere', 'queremos'], answer: 'quiero' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "tú":\n"¿Qué [ ... ] tú?"', options: ['quiero', 'quieres', 'quiere', 'quieren'], answer: 'quieres' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "usted" (u):\n"¿Qué [ ... ] tomar?"', options: ['quieres', 'quiere', 'queremos', 'quiero'], answer: 'quiere' },
            { type: 'multiple-choice', question: 'Wat betekent "Quiero un vaso de agua"?', options: ['Ik wil een glas water', 'Ik heb een glas water', 'Ik drink water', 'Geef mij water'], answer: 'Ik wil een glas water' },
            { type: 'multiple-choice', question: 'Hoe zeg je "wij willen"?', options: ['queréis', 'quieren', 'queremos', 'quiero'], answer: 'queremos' },
            { type: 'multiple-choice', question: 'Welk type klinkerwisseling ondergaat het werkwoord "querer" in de tegenwoordige tijd (e -> ...)?', options: ['ie', 'ue', 'i', 'e'], answer: 'ie' },
            { type: 'multiple-choice', question: 'Vertaal "alsjeblieft" (wanneer je iets vraagt):', options: ['Gracias', 'De nada', 'Por favor', 'Perdón'], answer: 'Por favor' },
            { type: 'multiple-choice', question: 'Kies de correcte zin om iets te bestellen:', options: ['Quiero una mesa, por favor', 'Soy una mesa', 'Tengo una mesa', 'Voy una mesa'], answer: 'Quiero una mesa, por favor' },
            { type: 'multiple-choice', question: 'Wat betekent "la cuenta"?', options: ['De menukaart', 'De rekening', 'Het voorgerecht', 'De fooi'], answer: 'De rekening' },
            { type: 'multiple-choice', question: 'Kies de juiste meervoudsvorm voor "zij willen":', options: ['queremos', 'queréis', 'quieren', 'quieres'], answer: 'quieren' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "vosotros":\n"¿Qué [ ... ] comer vosotros?"', options: ['queréis', 'queremos', 'quieren', 'quieres'], answer: 'queréis' },
            { type: 'multiple-choice', question: 'Wat betekent de zin "Quiero hablar con el camarero"?', options: ['Ik wil met de kok praten', 'Ik wil met de kelner praten', 'Ik wil afrekenen', 'Ik wil de kaart'], answer: 'Ik wil met de kelner praten' },
            { type: 'multiple-choice', question: 'Hoe vraag je beleefd om de menukaart?', options: ['Quiero la carta, por favor', 'Soy la carta', 'Tengo la carta', 'Quiero la cuenta'], answer: 'Quiero la carta, por favor' },
            { type: 'multiple-choice', question: 'Welk werkwoord is synoniem voor "querer" als je iets wilt bestellen in de zin van "wensen"?', options: ['Desear', 'Tener', 'Estar', 'Ser'], answer: 'Desear' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm:\n"Ella [ ... ] un té con limón."', options: ['quiero', 'quieres', 'quiere', 'queremos'], answer: 'quiere' },
            { type: 'multiple-choice', question: 'Wat betekent "tengo hambre"?', options: ['Ik ben dorstig', 'Ik heb honger', 'Ik wil betalen', 'Ik ben moe'], answer: 'Ik heb honger' },
            { type: 'multiple-choice', question: 'Wat betekent "tengo sed"?', options: ['Ik heb honger', 'Ik heb dorst', 'Ik wil slapen', 'Ik ben blij'], answer: 'Ik heb dorst' },
            { type: 'multiple-choice', question: 'Kies de juiste zin:\n"Nosotros [ ... ] dos cervezas, por favor."', options: ['quiero', 'quieres', 'quiere', 'queremos'], answer: 'queremos' },
            { type: 'multiple-choice', question: 'Hoe reageer je beleefd als iemand "gracias" tegen je zegt?', options: ['Por favor', 'De nada', 'Hola', 'Buenos días'], answer: 'De nada' },
            { type: 'multiple-choice', question: 'Wat betekent "la propina"?', options: ['De rekening', 'De fooi', 'Het menu', 'Het voorgerecht'], answer: 'De fooi' },
            { type: 'multiple-choice', question: 'Kies de correcte vorm:\n"Ustedes [ ... ] reservar una mesa."', options: ['quieren', 'queremos', 'queréis', 'quieres'], answer: 'quieren' },
            { type: 'multiple-choice', question: 'Wat betekent "buen provecho"?', options: ['Eet smakelijk', 'Proost', 'Welterusten', 'Tot ziens'], answer: 'Eet smakelijk' },
            { type: 'multiple-choice', question: 'Kies de juiste vertaling voor "een tafel voor twee personen":', options: ['una mesa para dos personas', 'una mesa para tres personas', 'un plato para dos', 'la cuenta para dos'], answer: 'una mesa para dos personas' },
            { type: 'multiple-choice', question: 'Wat betekent "el camarero"?', options: ['De kok', 'De ober / kelner', 'De eigenaar', 'De gast'], answer: 'De ober / kelner' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"No [ ... ] comer carne, soy vegetariano."', options: ['quiero', 'quieres', 'quiere', 'queremos'], answer: 'quiero' }
        ]
    },
    {
        id: 'grammatica-4',
        title: 'Grammatica 4: Bezittelijke voornaamwoorden',
        description: 'Leer hoe je aangeeft van wie iets is (mijn, jouw, ons).',
        theory: `
            <h3>Bezittelijke voornaamwoorden (Adjetivos posesivos)</h3>
            <p>Deze woorden passen zich aan het zelfstandig naamwoord (enkelvoud/meervoud) aan:</p>
            <ul>
                <li><strong>mi / mis</strong> (mijn)</li>
                <li><strong>tu / tus</strong> (jouw)</li>
                <li><strong>su / sus</strong> (zijn / haar / uw / hun)</li>
                <li><strong>nuestro/a / nuestros/as</strong> (ons / onze)</li>
            </ul>
        `,
        quizzes: [
            { type: 'multiple-choice', question: 'Kies het juiste bezittelijk voornaamwoord:\n"Esta es [ ... ] casa (mijn huis)."', options: ['mi', 'mis', 'tu', 'su'], answer: 'mi' },
            { type: 'multiple-choice', question: 'Kies de juiste meervoudsvorm:\n"Son [ ... ] libros (mijn boeken)."', options: ['mi', 'mis', 'tu', 'tus'], answer: 'mis' },
            { type: 'multiple-choice', question: 'Vertaal "jouw vader":', options: ['mi padre', 'tu padre', 'su padre', 'nuestro padre'], answer: 'tu padre' },
            { type: 'multiple-choice', question: 'Welke vorm past bij "nuestra" in het meervoud (mannelijk/vrouwelijk)?', options: ['nuestros / nuestras', 'mi / mis', 'tu / tus', 'su / sus'], answer: 'nuestros / nuestras' },
            { type: 'multiple-choice', question: 'Kies het juiste woord:\n"[ ... ] madre es muy amable (onze moeder)."', options: ['Mi', 'Tu', 'Nuestra', 'Su'], answer: 'Nuestra' },
            { type: 'multiple-choice', question: 'Wat betekent "mis hermanos"?', options: ['mijn broer', 'mijn broers / broers en zussen', 'jouw broer', 'onze broer'], answer: 'mijn broers / broers en zussen' },
            { type: 'multiple-choice', question: 'Kies de correcte vertaling voor "zijn auto":', options: ['mi coche', 'tu coche', 'su coche', 'nuestro coche'], answer: 'su coche' },
            { type: 'multiple-choice', question: 'Welk woord vult de zin correct aan?\n"¿Dónde están [ ... ] llaves? (jouw sleutels - meervoud)"', options: ['tu', 'tus', 'mis', 'sus'], answer: 'tus' },
            { type: 'multiple-choice', question: 'Wat is de juiste vorm voor "ons huis"?', options: ['nuestro casa', 'nuestra casa', 'nuestros casas', 'nuestras casa'], answer: 'nuestra casa' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"Ellos buscan a [ ... ] amigos."', options: ['su', 'sus', 'mi', 'tu'], answer: 'sus' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm voor "jullie familie" (in Spanje):', options: ['vuestro familia', 'vuestra familia', 'vuestros familia', 'vuestras familia'], answer: 'vuestra familia' },
            { type: 'multiple-choice', question: 'Wat betekent "su libro" in het Spaans?', options: ['Mijn boek', 'Jouw boek', 'Zijn / haar / uw boek', 'Ons boek'], answer: 'Zijn / haar / uw boek' },
            { type: 'multiple-choice', question: 'Kies de correcte zin:\n"Tengo [ ... ] perro en casa (mijn hond)."', options: ['mi', 'mis', 'tu', 'su'], answer: 'mi' },
            { type: 'multiple-choice', question: 'Kies de juiste meervoudsvorm:\n"¿Dónde están [ ... ] gafas? (jouw bril - let op: glazen is meervoud in het Spaans)"', options: ['tu', 'tus', 'mi', 'mis'], answer: 'tus' },
            { type: 'multiple-choice', question: 'Vertaal "onze vrienden":', options: ['nuestro amigo', 'nuestra amiga', 'nuestros amigos', 'nuestras amigas'], answer: 'nuestros amigos' },
            { type: 'multiple-choice', question: 'Welk bezittelijk voornaamwoord hoort bij "yo"?', options: ['mi / mis', 'tu / tus', 'su / sus', 'nuestro / nuestra'], answer: 'mi / mis' },
            { type: 'multiple-choice', question: 'Welk bezittelijk voornaamwoord hoort bij "tú"?', options: ['mi / mis', 'tu / tus', 'su / sus', 'vuestro / vuestra'], answer: 'tu / tus' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm:\n"Maria y Juan viven con [ ... ] padres."', options: ['su', 'sus', 'mi', 'tu'], answer: 'sus' },
            { type: 'multiple-choice', question: 'Wat betekent "nuestro perro"?', options: ['Onze hond', 'Jullie hond', 'Hun hond', 'Mijn hond'], answer: 'Onze hond' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"Esta oficina es [ ... ] (van ons / onze oficina)."', options: ['nuestra', 'nuestro', 'nuestros', 'nuestras'], answer: 'nuestra' },
            { type: 'multiple-choice', question: 'Vertaal "haar naam":', options: ['su nombre', 'mi nombre', 'tu nombre', 'nuestro nombre'], answer: 'su nombre' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"Compro un regalo para [ ... ] madre."', options: ['mi', 'mis', 'tu', 'tus'], answer: 'mi' },
            { type: 'multiple-choice', question: 'Wat is de juiste vorm voor "jullie boeken"?', options: ['vuestro libro', 'vuestros libros', 'vuestra libro', 'vuestras libros'], answer: 'vuestros libros' },
            { type: 'multiple-choice', question: 'Kies de correcte zin:\n"Mis abuelos viven en [ ... ] pueblo."', options: ['su', 'sus', 'mi', 'tu'], answer: 'su' },
            { type: 'multiple-choice', question: 'Verandert "mi" in het meervoud naar "mis"?', options: ['Ja', 'Nee'], answer: 'Ja' }
        ]
    },
    {
        id: 'grammatica-5',
        title: 'Grammatica 5: IR a + infinitief (Toekomende tijd)',
        description: 'Leer plannen maken met het werkwoord \'ir\' (gaan) + hele werkwoord.',
        theory: `
            <h3>De nabije toekomst: IR a + Infinitief</h3>
            <p>Om te zeggen wat je gaat doen, gebruik je de vervoeging van <strong>ir</strong> + <strong>a</strong> + het hele werkwoord (infinitief):</p>
            <ul>
                <li><strong>Voy a</strong> estudiar (Ik ga studeren)</li>
                <li><strong>Vas a</strong> comer (Jij gaat eten)</li>
                <li><strong>Vamos a</strong> viajar (Wij gaan reizen)</li>
            </ul>
        `,
        quizzes: [
            { type: 'multiple-choice', question: 'Kies de juiste vorm van "ir" bij "yo":\n"Yo [ ... ] a viajar."', options: ['vas', 'va', 'voy', 'vamos'], answer: 'voy' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "tú":\n"¿[ ... ] a comer?"', options: ['voy', 'vas', 'va', 'van'], answer: 'vas' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "nosotros":\n"Nosotros [ ... ] a estudiar."', options: ['voy', 'vas', 'vamos', 'van'], answer: 'vamos' },
            { type: 'multiple-choice', question: 'Wat betekent de constructie "voy a viajar"?', options: ['Ik reis', 'Ik ga reizen', 'Ik reisde', 'Ik wil reizen'], answer: 'Ik ga reizen' },
            { type: 'multiple-choice', question: 'Welk voorzetsel staat er altijd tussen het werkwoord "ir" en het hele werkwoord?', options: ['de', 'en', 'a', 'por'], answer: 'a' },
            { type: 'multiple-choice', question: 'Kies de juiste zin:', options: ['Ellos van a salir', 'Ellos voy a salir', 'Ellos va a salir', 'Ellos vamos a salir'], answer: 'Ellos van a salir' },
            { type: 'multiple-choice', question: 'Vertaal "wij gaan kopen":', options: ['voy a comprar', 'vas a comprar', 'vamos a comprar', 'van a comprar'], answer: 'vamos a comprar' },
            { type: 'multiple-choice', question: 'Wat betekent "¿A dónde vas?":', options: ['Wat ga je doen?', 'Waar ga je heen?', 'Hoe ga je?', 'Wanneer ga je?'], answer: 'Waar ga je heen?' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "él":\n"Él [ ... ] a descansar."', options: ['voy', 'vas', 'va', 'van'], answer: 'va' },
            { type: 'multiple-choice', question: 'Welke vertaling hoort bij "van a comprar"?', options: ['wij gaan kopen', 'jullie gaan kopen', 'zij gaan kopen', 'ik ga kopen'], answer: 'zij gaan kopen' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "vosotros":\n"¿[ ... ] a visitar a vuestros abuelos?"', options: ['vais', 'vamos', 'van', 'vas'], answer: 'vais' },
            { type: 'multiple-choice', question: 'Wat betekent "voy a leer un libro"?', options: ['Ik lees een boek', 'Ik ga een boek lezen', 'Ik heb een boek gelezen', 'Ik wil een boek'], answer: 'Ik ga een boek lezen' },
            { type: 'multiple-choice', question: 'Kies de juiste zin:\n"Mañana [ ... ] a llover."', options: ['va', 'voy', 'vas', 'van'], answer: 'va' },
            { type: 'multiple-choice', question: 'Hoe zeg je "wat ga je doen?" in het Spaans?', options: ['¿Qué haces?', '¿Qué vas a hacer?', '¿Adónde vas?', '¿Cómo estás?'], answer: '¿Qué vas a hacer?' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm:\n"Maria y yo [ ... ] a cocinar una paella."', options: ['voy', 'vas', 'va', 'vamos'], answer: 'vamos' },
            { type: 'multiple-choice', question: 'Wat betekent "vamos a empezar"?', options: ['We gaan beginnen', 'We zijn klaar', 'We gaan weg', 'We stoppen'], answer: 'We gaan beginnen' },
            { type: 'multiple-choice', question: 'Vertaal "jij gaat slapen":', options: ['vas a dormir', 'voy a dormir', 'va a dormir', 'van a dormir'], answer: 'vas a dormir' },
            { type: 'multiple-choice', question: 'Welk werkwoord is "ir" in de verleden tijd? (los van de constructie)', options: ['gaan', 'zijn', 'hebben', 'willen'], answer: 'gaan' },
            { type: 'multiple-choice', question: 'Kies de correcte vorm:\n"Los niños [ ... ] a jugar al parque."', options: ['va', 'vas', 'van', 'vamos'], answer: 'van' },
            { type: 'multiple-choice', question: 'Wat betekent "el viaje"?', options: ['De reis', 'Het vliegtuig', 'De vakantie', 'De auto'], answer: 'De reis' },
            { type: 'multiple-choice', question: 'Kies de juiste zin:\n"Usted [ ... ] a tener éxito."', options: ['va', 'vas', 'van', 'vamos'], answer: 'va' },
            { type: 'multiple-choice', question: 'Hoe zeg je "ik ga niet op vakantie"?', options: ['No voy a ir de vacaciones', 'No voy ir vacaciones', 'No voy de vacaciones a ir', 'No va a ir'], answer: 'No voy a ir de vacaciones' },
            { type: 'multiple-choice', question: 'Wat betekent "el billete"?', options: ['Het kaartje / ticket', 'De tas', 'De stoel', 'Het paspoort'], answer: 'Het kaartje / ticket' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"¿Cuándo [ ... ] a llegar el tren?"', options: ['va', 'vas', 'van', 'vamos'], answer: 'va' },
            { type: 'multiple-choice', question: 'Drukt "ir a + infinitief" een nabije toekomst uit?', options: ['Ja', 'Nee'], answer: 'Ja' }
        ]
    },
    {
        id: 'grammatica-6',
        title: 'Grammatica 6: ESTAR vs. SER (Locatie & Staat)',
        description: 'Het verschil tussen permanente eigenschappen (ser) en tijdelijke staat/locatie (estar).',
        theory: `
            <h3>SER versus ESTAR (Beide betekenen 'zijn')</h3>
            <ul>
                <li><strong>SER:</strong> Vaste eigenschappen, identiteit, beroep, nationaliteit en tijd. (<em>Soy holandés</em>)</li>
                <li><strong>ESTAR:</strong> Locatie en tijdelijke staten/emoties. (<em>Estoy cansado</em> / <em>Madrid está en España</em>)</li>
            </ul>
        `,
        quizzes: [
            { type: 'multiple-choice', question: 'Welk werkwoord gebruik je voor een locatie (waar iets zich bevindt)?', options: ['Ser', 'Estar', 'Tener', 'Ir'], answer: 'Estar' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm van "estar" bij "yo":\n"Yo [ ... ] en casa."', options: ['soy', 'estoy', 'es', 'está'], answer: 'estoy' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "dónde":\n"¿Dónde [ ... ] el baño?"', options: ['es', 'está', 'soy', 'estoy'], answer: 'está' },
            { type: 'multiple-choice', question: 'Gebruik je ser of estar voor een tijdelijke gemoedstoestand (zoals moe zijn)?', options: ['Ser', 'Estar'], answer: 'Estar' },
            { type: 'multiple-choice', question: 'Kies de juiste zin:', options: ['Madrid es en España', 'Madrid está en España', 'Madrid soy en España', 'Madrid estoy en España'], answer: 'Madrid está en España' },
            { type: 'multiple-choice', question: 'Hoe zeg je "wij zijn moe"?', options: ['Somos cansados', 'Estamos cansados', 'Tenemos cansados', 'Vemos cansados'], answer: 'Estamos cansados' },
            { type: 'multiple-choice', question: 'Welk werkwoord gebruik je voor iemands beroep of nationaliteit?', options: ['Estar', 'Ser', 'Tener', 'Ir'], answer: 'Ser' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "ustedes":\n"¿Cómo [ ... ] ustedes?" (hoe maken jullie het / hoe is jullie staat)', options: ['son', 'están', 'somos', 'estamos'], answer: 'están' },
            { type: 'multiple-choice', question: 'Wat is correct voor "de soep is koud (temperatuur/tijdelijke staat)"?', options: ['La sopa es fría', 'La sopa está fría'], answer: 'La sopa está fría' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm van "estar" bij "tú":\n"¿Cómo [ ... ]?"', options: ['eres', 'estás', 'soy', 'estoy'], answer: 'estás' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"Juan [ ... ] alto y delgado."', options: ['es', 'está', 'soy', 'estoy'], answer: 'es' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"Hoy [ ... ] muy feliz (tijdelijk/gevoel)."', options: ['soy', 'estoy', 'es', 'está'], answer: 'estoy' },
            { type: 'multiple-choice', question: 'Wat betekent de zin "El coche es nuevo"?', options: ['De auto is nieuw (vaste eigenschap)', 'De auto staat ergens nieuw', 'De auto is tijdelijk nieuw', 'De auto werkt niet'], answer: 'De auto is nieuw (vaste eigenschap)' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm:\n"Nosotros [ ... ] en un hotel."', options: ['somos', 'estamos', 'somos', 'estoy'], answer: 'estamos' },
            { type: 'multiple-choice', question: 'Waar of niet waar: "Ser" gebruik je voor de vaste identiteit of eigenschap van iemand.', options: ['Waar', 'Niet waar'], answer: 'Waar' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"La puerta [ ... ] abierta."', options: ['es', 'está', 'soy', 'estoy'], answer: 'está' },
            { type: 'multiple-choice', question: 'Vertaal "ik ben leraar":', options: ['Soy profesor', 'Estoy profesor', 'Soy el profesor de estar', 'Estoy ser profesor'], answer: 'Soy profesor' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "vosotros":\n"Vosotros [ ... ] en Madrid."', options: ['sois', 'estáis', 'somos', 'estamos'], answer: 'estáis' },
            { type: 'multiple-choice', question: 'Wat is correct voor het uur/tijdstip?\n"¿Qué hora [ ... ]?" -> "Son las tres."', options: ['es', 'está', 'son', 'están'], answer: 'es' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"Las llaves [ ... ] encima de la mesa."', options: ['son', 'están', 'somos', 'estoy'], answer: 'están' },
            { type: 'multiple-choice', question: 'Vertaal "wij zijn Nederlands":', options: ['Somos holandeses', 'Estamos holandeses', 'Somos de holanda estar', 'Estamos en holanda'], answer: 'Somos holandeses' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"La fiesta [ ... ] en mi casa (vindt plaats / locatie event)."', options: ['es', 'está', 'soy', 'estoy'], answer: 'es' },
            { type: 'multiple-choice', question: 'Wat betekent "estoy enfermo"?', options: ['Ik ben ziek', 'Ik ben arts', 'Ik ben sterk', 'Ik ben moe'], answer: 'Ik ben ziek' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"El café [ ... ] caliente."', options: ['es', 'está', 'somos', 'estoy'], answer: 'está' },
            { type: 'multiple-choice', question: 'Is "estar" onregelmatig in de ik-vorm (estoy)?', options: ['Ja', 'Nee'], answer: 'Ja' }
        ]
    },
    {
        id: 'grammatica-7',
        title: 'Grammatica 7: Regelmatige -AR werkwoorden',
        description: 'Leer de vervoeging van regelmatige werkwoorden die eindigen op -ar.',
        theory: `
            <h3>Regelmatige -AR werkwoorden</h3>
            <p>In de tegenwoordige tijd vervang je de uitgang (-ar) door:</p>
            <ul>
                <li>-o (yo)</li>
                <li>-as (tú)</li>
                <li>-a (él/ella/usted)</li>
                <li>-amos (nosotros)</li>
                <li>-áis (vosotros)</li>
                <li>-an (ellos/ellas/ustedes)</li>
            </ul>
        `,
        quizzes: [
            { type: 'multiple-choice', question: 'Wat is de uitgang van een regelmatiger -ar werkwoord voor "yo"?', options: ['-as', '-a', '-o', '-amos'], answer: '-o' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm van "trabajar" bij "yo":\n"Yo [ ... ] en un banco."', options: ['trabajo', 'trabajas', 'trabaja', 'trabajamos'], answer: 'trabajo' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "tú" voor het werkwoord "estudiar":\n"Tú [ ... ] español."', options: ['estudio', 'estudias', 'estudia', 'estudiamos'], answer: 'estudias' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "nosotros" voor "hablar":\n"Nosotros [ ... ] español."', options: ['hablo', 'hablas', 'hablamos', 'hablan'], answer: 'hablamos' },
            { type: 'multiple-choice', question: 'Wat is de uitgang voor "ellos / ellas" bij -ar werkwoorden?', options: ['-an', '-en', '-amos', '-áis'], answer: '-an' },
            { type: 'multiple-choice', question: 'Vertaal "zij luisteren":', options: ['escucho', 'escuchas', 'escuchamos', 'escuchan'], answer: 'escuchan' },
            { type: 'multiple-choice', question: 'Kies de juiste zin:', options: ['Ella trabaja mucho', 'Ella trabajas mucho', 'Ella trabajo mucho', 'Ella trabajamos mucho'], answer: 'Ella trabaja mucho' },
            { type: 'multiple-choice', question: 'Wat betekent "comprar"?', options: ['spreken', 'kopen', 'werken', 'studeren'], answer: 'kopen' },
            { type: 'multiple-choice', question: 'Hoe vervoeg je "escuchar" voor "jullie (vosotros)" in Spanje?', options: ['escucháis', 'escuchan', 'escuchamos', 'escuchas'], answer: 'escucháis' },
            { type: 'multiple-choice', question: 'Kies de correcte vorm voor "wij spreken":', options: ['hablas', 'habla', 'hablamos', 'hablan'], answer: 'hablamos' },
            { type: 'multiple-choice', question: 'Wat betekent het werkwoord "cantar"?', options: ['dansend', 'zingen', 'lopen', 'kijken'], answer: 'zingen' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm:\n"Ellos [ ... ] la televisión por la noche."', options: ['miro', 'miras', 'mira', 'miran'], answer: 'miran' },
            { type: 'multiple-choice', question: 'Vertaal "jij luistert naar muziek":', options: ['Tú escuchas música', 'Tú escucho música', 'Tú escucha música', 'Tú escuchamos música'], answer: 'Tú escuchas música' },
            { type: 'multiple-choice', question: 'Wat is de vorm voor "usted" bij het werkwoord "bailar"?', options: ['bailo', 'bailas', 'baila', 'bailan'], answer: 'baila' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"Nosotros no [ ... ] mucho los viernes."', options: ['descanso', 'descansas', 'descansamos', 'descansan'], answer: 'descansamos' },
            { type: 'multiple-choice', question: 'Wat betekent "viajar"?', options: ['reizen', 'werken', 'koken', 'wonen'], answer: 'reizen' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm:\n"Yo [ ... ] español con mis amigos."', options: ['hablo', 'hablas', 'habla', 'hablamos'], answer: 'hablo' },
            { type: 'multiple-choice', question: 'Vertaal "jullie werken in de tuin":', options: ['Vosotros trabajáis en el jardín', 'Vosotros trabajan en el jardín', 'Vosotros trabajamos en el jardín', 'Vosotros trabajas en el jardín'], answer: 'Vosotros trabajáis en el jardín' },
            { type: 'multiple-choice', question: 'Wat betekent "necesitar"?', options: ['nodig hebben / moeten', 'kopen', 'zoeken', 'vinden'], answer: 'nodig hebben / moeten' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm:\n"Ella [ ... ] un vestido nuevo."', options: ['compro', 'compras', 'compra', 'compran'], answer: 'compra' },
            { type: 'multiple-choice', question: 'Wat is de uitgang voor "tú" bij regelmatige -ar werkwoorden?', options: ['-o', '-as', '-a', '-an'], answer: '-as' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"¿[ ... ] (tú) en Madrid?"', options: ['vivo', 'vives', 'vive', 'vivimos'], answer: 'vives' },
            { type: 'multiple-choice', question: 'Vertaal "de studenten studeren in de bibliotheek":', options: ['Los estudiantes estudian en la biblioteca', 'Los estudiantes estudio en la biblioteca', 'Los estudiantes estudiáis en la biblioteca', 'Los estudiantes estudiamos en la biblioteca'], answer: 'Los estudiantes estudian en la biblioteca' },
            { type: 'multiple-choice', question: 'Wat betekent "practicar deporte"?', options: ['sporten / sport beoefenen', 'huiswerk maken', 'eten koken', 'muziek luisteren'], answer: 'sporten / sport beoefenen' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm:\n"Mi padre [ ... ] en una oficina."', options: ['trabajo', 'trabajas', 'trabaja', 'trabajan'], answer: 'trabaja' }
        ]
    },
    {
        id: 'grammatica-8',
        title: 'Grammatica 8: Verplichtingen (tener que + inf)',
        description: 'Druk verplichtingen uit met het werkwoord \'tener\' (hebben) + que + hele werkwoord.',
        theory: `
            <h3>Verplichtingen: TENER QUE + Infinitief</h3>
            <p>Om aan te geven dat je iets *moet* doen, gebruik je de vervoeging van <strong>tener</strong> + <strong>que</strong> + het hele werkwoord:</p>
            <ul>
                <li><strong>Tengo que</strong> trabajar (Ik moet werken)</li>
                <li><strong>Tienes que</strong> estudiar (Jij moet studeren)</li>
                <li><strong>Tiene que</strong> salir (Hij/zij moet weg)</li>
            </ul>
        `,
        quizzes: [
            { type: 'multiple-choice', question: 'Wat is de vorm van "tener" bij "yo":\n"Yo [ ... ] un coche."', options: ['tengo', 'tienes', 'tiene', 'tenemos'], answer: 'tengo' },
            { type: 'multiple-choice', question: 'Hoe zeg je "ik moet gaan" (gebruik tener que)?', options: ['tengo que ir', 'tienes que ir', 'tiene que ir', 'tenemos que ir'], answer: 'tengo que ir' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "tú":\n"Tú [ ... ] que estudiar voor het examen."', options: ['tengo', 'tienes', 'tiene', 'tenemos'], answer: 'tienes' },
            { type: 'multiple-choice', question: 'Welk woord verbindt "tener" met het hele werkwoord in deze constructie?', options: ['de', 'a', 'que', 'en'], answer: 'que' },
            { type: 'multiple-choice', question: 'Vertaal "wij moeten uitrusten":', options: ['tengo que descansar', 'tenemos que descansar', 'tenéis que descansar', 'tienen que descansar'], answer: 'tenemos que descansar' },
            { type: 'multiple-choice', question: 'Wat betekent "tengo dolor de cabeza"?', options: ['Ik heb hoofdpijn', 'Ik moet slapen', 'Ik ben ziek', 'Ik heb honger'], answer: 'Ik heb hoofdpijn' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "él / ella":\n"Ella [ ... ] que trabajar hoy."', options: ['tengo', 'tienes', 'tiene', 'tienen'], answer: 'tiene' },
            { type: 'multiple-choice', question: 'Wat is de betekenis van "tener"?', options: ['zijn', 'hebben', 'gaan', 'willen'], answer: 'hebben' },
            { type: 'multiple-choice', question: 'Kies de juiste zin voor "jullie moeten eten":', options: ['tenéis que comer', 'tienen que comer', 'tenemos que comer', 'tienes que comer'], answer: 'tenéis que comer' },
            { type: 'multiple-choice', question: 'Wat betekent "qué te pasa"?', options: ['Wat is je naam?', 'Wat mankeert je / wat is er?', 'Hoe laat is het?', 'Waar ga je heen?'], answer: 'Wat mankeert je / wat is er?' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "ustedes":\n"Ustedes [ ... ] que firmar este documento."', options: ['tienen', 'tenemos', 'tenéis', 'tienes'], answer: 'tienen' },
            { type: 'multiple-choice', question: 'Vertaal "jij moet opschieten (darse prisa)":', options: ['tienes que darte prisa', 'tengo que darme prisa', 'tiene que darse prisa', 'tenemos que darnos prisa'], answer: 'tienes que darte prisa' },
            { type: 'multiple-choice', question: 'Wat betekent "tengo fiebre"?', options: ['Ik heb koorts', 'Ik heb kou', 'Ik ben blij', 'Ik heb honger'], answer: 'Ik heb koorts' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm bij "vosotros":\n"Vosotros [ ... ] que limpiar la casa."', options: ['tenéis', 'tenemos', 'tienen', 'tienes'], answer: 'tenéis' },
            { type: 'multiple-choice', question: 'Wat betekent "el médico"?', options: ['De apotheker', 'De arts / dokter', 'De ziekenbroeder', 'De patiënt'], answer: 'De arts / dokter' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"Mañana [ ... ] que madrugar (vroeg opstaan)."', options: ['tengo', 'tienes', 'tiene', 'tenemos'], answer: 'tengo' },
            { type: 'multiple-choice', question: 'Vertaal "wij hebben een groot huis":', options: ['Tenemos una casa grande', 'Tengo una casa grande', 'Tenéis una casa grande', 'Tienen una casa grande'], answer: 'Tenemos una casa grande' },
            { type: 'multiple-choice', question: 'Wat betekent "la medicina"?', options: ['Het medicijn', 'De dokter', 'Het ziekenhuis', 'De pijn'], answer: 'Het medicijn' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"¿Cuántos años [ ... ] tú?"', options: ['tienes', 'tengo', 'tiene', 'tenemos'], answer: 'tienes' },
            { type: 'multiple-choice', question: 'Wat is de betekenis van "tener que"?', options: ['mogen', 'moeten', 'kunnen', 'willen'], answer: 'moeten' },
            { type: 'multiple-choice', question: 'Kies de juiste zin:\n"Ella [ ... ] que comprar pan."', options: ['tiene', 'tengo', 'tienes', 'tenemos'], answer: 'tiene' },
            { type: 'multiple-choice', question: 'Wat betekent "el hospital"?', options: ['De apotheek', 'Het ziekenhuis', 'De tandarts', 'De huisarts'], answer: 'Het ziekenhuis' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"Los estudiantes [ ... ] que leer mucho."', options: ['tienen', 'tenemos', 'tenéis', 'tienes'], answer: 'tienen' },
            { type: 'multiple-choice', question: 'Vertaal "ik heb honger" letterlijk met tener:', options: ['tengo hambre', 'tengo sed', 'tengo calor', 'tengo frío'], answer: 'tengo hambre' },
            { type: 'multiple-choice', question: 'Is het werkwoord "tener" onregelmatig in de ik-vorm (tengo)?', options: ['Ja', 'Nee'], answer: 'Ja' }
        ]
    },
    {
        id: 'grammatica-9',
        title: 'Grammatica 9: GUSTAR (leuk vinden)',
        description: 'Leer hoe het werkwoord \'gustar\' werkt voor het uiten van voorkeuren.',
        theory: `
            <h3>Het werkwoord GUSTAR (leuk vinden / bevallen)</h3>
            <p>Letterlijk betekent dit "het bevalt mij". Je gebruikt vooral twee vormen:</p>
            <ul>
                <li><strong>Me gusta</strong> + enkelvoudig woord of hele werkwoord (bijv. <em>Me gusta el café</em> / <em>Me gusta viajar</em>)</li>
                <li><strong>Me gustan</strong> + meervoudig woord (bijv. <em>Me gustan los libros</em>)</li>
            </ul>
            <p>Voorzetsels voor personen: <em>me</em> (mij), <em>te</em> (jou), <em>le</em> (u/hem/haar), <em>nos</em> (ons), <em>os</em> (jullie), <em>les</em> (hun/u).</p>
        `,
        quizzes: [
            { type: 'multiple-choice', question: 'Wat gebruik je voor een enkelvoudig woord of werkwoord na gustar bij "ik"?', options: ['me gustan', 'me gusta', 'te gusta', 'le gusta'], answer: 'me gusta' },
            { type: 'multiple-choice', question: 'Wat gebruik je voor een meervoudig woord na gustar bij "ik"?\n"Me [ ... ] los libros."', options: ['gusta', 'gustan', 'gustas', 'gustamos'], answer: 'gustan' },
            { type: 'multiple-choice', question: 'Hoe zeg jij "jij vind het leuk / houdt ervan" (enkelvoud)?', options: ['me gusta', 'te gusta', 'le gusta', 'nos gusta'], answer: 'te gusta' },
            { type: 'multiple-choice', question: 'Vertaal "wij houden van reizen / vinden reizen leuk":', options: ['me gusta viajar', 'te gusta viajar', 'nos gusta viajar', 'les gusta viajar'], answer: 'nos gusta viajar' },
            { type: 'multiple-choice', question: 'Welk indirect objectvoornaamwoord hoort bij "wij" (nosotros)?', options: ['me', 'te', 'le', 'nos'], answer: 'nos' },
            { type: 'multiple-choice', question: 'Kies de juiste optie voor meervoud bij "jij":\n"¿Te [ ... ] las matemáticas?"', options: ['gusta', 'gustan', 'gustas', 'gustamos'], answer: 'gustan' },
            { type: 'multiple-choice', question: 'Wat is de letterlijke betekenis van "me gusta"?', options: ['ik wil', 'het bevalt mij', 'ik heb', 'ik ben'], answer: 'het bevalt mij' },
            { type: 'multiple-choice', question: 'Kies de juiste vorm voor "zij vinden het leuk" (meervoud):', options: ['le gustan', 'les gustan', 'nos gustan', 'te gustan'], answer: 'les gustan' },
            { type: 'multiple-choice', question: 'Kies de correcte zin:', options: ['Me gusta el fútbol', 'Me gustan el fútbol', 'Yo gusto el fútbol', 'Gusta me el fútbol'], answer: 'Me gusta el fútbol' },
            { type: 'multiple-choice', question: 'Wat gebruik je als je wilt zeggen dat u (beleefd) van iets houdt?', options: ['te gusta', 'le gusta', 'nos gusta', 'os gusta'], answer: 'le gusta' },
            { type: 'multiple-choice', question: 'Kies de juiste optie voor een werkwoord na gustar:\n"Me gusta [ ... ] (bailar)."', options: ['gusta', 'gustan', 'bailar', 'baila'], answer: 'bailar' },
            { type: 'multiple-choice', question: 'Vertaal "jullie vinden de film leuk":', options: ['os gusta la película', 'os gustan la película', 'os gusta las películas', 'os gustan las películas'], answer: 'os gusta la película' },
            { type: 'multiple-choice', question: 'Wat gebruik je bij een meervoudig onderwerp voor "u / hij / zij"?', options: ['le gusta', 'les gusta', 'les gustan', 'le gustan'], answer: 'les gustan' },
            { type: 'multiple-choice', question: 'Kies de juiste zin:\n"A María [ ... ] las frutas."', options: ['le gusta', 'le gustan', 'les gusta', 'les gustan'], answer: 'le gustan' },
            { type: 'multiple-choice', question: 'Hoe zeg je "ik hou niet van koffie"?', options: ['No me gusta el café', 'Me gusta no el café', 'No gusto el café', 'Gustame no el café'], answer: 'No me gusta el café' },
            { type: 'multiple-choice', question: 'Welk voornaamwoord hoort bij "vosotros" (jullie in Spanje)?', options: ['nos', 'os', 'les', 'te'], answer: 'os' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"¿Te [ ... ] leer novelas?"', options: ['gusta', 'gustan', 'gustas', 'gustamos'], answer: 'gusta' },
            { type: 'multiple-choice', question: 'Wat betekent "me encanta"?', options: ['Ik vind het erg leuk / ik ben er dol op', 'Ik vind het niet leuk', 'Ik haat het', 'Het is oké'], answer: 'Ik vind het erg leuk / ik ben er dol op' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"Nos [ ... ] los animales."', options: ['gusta', 'gustan', 'gustamos', 'gustas'], answer: 'gustan' },
            { type: 'multiple-choice', question: 'Vertaal "wat vind je leuk om te doen?":', options: ['¿Qué te gusta hacer?', '¿Qué haces?', '¿Cómo te gusta?', '¿Dónde te gusta?'], answer: '¿Qué te gusta hacer?' },
            { type: 'multiple-choice', question: 'Verandert het werkwoord gustar alleen tussen "gusta" (enkelvoud) en "gustan" (meervoud)?', options: ['Ja', 'Nee'], answer: 'Ja' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"A mis amigos [ ... ] jugar al tenis."', options: ['le gusta', 'les gusta', 'le gustan', 'les gustan'], answer: 'les gusta' },
            { type: 'multiple-choice', question: 'Wat betekent "odiar"?', options: ['houden van', 'haten', 'leuk vinden', 'koken'], answer: 'haten' },
            { type: 'multiple-choice', question: 'Kies de juiste optie:\n"A mí [ ... ] mucho la música pop."', options: ['me gusta', 'me gustan', 'te gusta', 'le gusta'], answer: 'me gusta' },
            { type: 'multiple-choice', question: 'Is gustar een normaal -ar werkwoord qua vervoeging?', options: ['Nee, het wordt bijna alleen in de 3e persoon enkelvoud en meervoud gebruikt', 'Ja, net zoals hablar'], answer: 'Nee, het wordt bijna alleen in de 3e persoon enkelvoud en meervoud gebruikt' }
        ]
    }
];

function getGrammaticaLessons() {
    return window.skillGrammaticaA1.map(lesson => {
        const shuffled = [...lesson.quizzes].sort(() => 0.5 - Math.random());
        return {
            ...lesson,
            quizzes: shuffled.slice(0, 10)
        };
    });
}

function getGrammaticaLessonById(id) {
    const lessons = getGrammaticaLessons();
    return lessons.find(l => l.id === id);
}
