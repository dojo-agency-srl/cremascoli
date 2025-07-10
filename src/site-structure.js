import imgWork1 from "images/works/singola-pc/1.png";
import imgWork2 from "images/works/singola-pc/2.png";
import imgWork3 from "images/works/singola-pc/3.png";
import imgWork4 from "images/works/singola-pc/4.png";
import imgWork5 from "images/works/singola-pc/5.png";
import imgWork6 from "images/works/singola-pc/6.png";
import imgWork8 from "images/works/singola-pc/8.png";

import imgWork9 from "images/works/singola-crema/1.png";
import imgWork10 from "images/works/singola-crema/2.png";
import imgWork11 from "images/works/singola-crema/3.png";
import imgWork12 from "images/works/singola-crema/4.png";
import imgWork13 from "images/works/singola-crema/5.png";
import imgWork14 from "images/works/singola-crema/6.png";
import imgWork15 from "images/works/singola-crema/7.png";

import imgWork16 from "images/works/picasso/1.png";
import imgWork17 from "images/works/picasso/2.png";
import imgWork18 from "images/works/picasso/3.png";
import imgWork19 from "images/works/picasso/4.png";
import imgWork20 from "images/works/picasso/5.png";
import imgWork21 from "images/works/picasso/6.png";
import imgWork22 from "images/works/picasso/7.png";

import imgWork23 from "images/works/aldo-moro/1.png";
import imgWork24 from "images/works/aldo-moro/2.png";
import imgWork25 from "images/works/aldo-moro/3.png";

import imgWork26 from "images/works/ex-samor/1.png";
import imgWork27 from "images/works/ex-samor/2.png";
import imgWork28 from "images/works/ex-samor/3.png";
import imgWork29 from "images/works/ex-samor/4.png";
import imgWork30 from "images/works/ex-samor/5.png";
import imgWork31 from "images/works/ex-samor/6.png";
import imgWork32 from "images/works/ex-samor/7.png";

import imgWork40 from "images/works/welchome/1.png";
import imgWork41 from "images/works/welchome/2.png";
import imgWork42 from "images/works/welchome/3.png";
import imgWork43 from "images/works/welchome/4.png";
import imgWork44 from "images/works/welchome/5.png";
import imgWork45 from "images/works/welchome/6.png";

import imgWork46 from "images/works/veneto/1.png";
import imgWork47 from "images/works/veneto/2.png";
import imgWork48 from "images/works/veneto/3.png";
import imgWork49 from "images/works/veneto/4.png";
import imgWork50 from "images/works/veneto/5.png";
import imgWork51 from "images/works/veneto/6.png";
import imgWork52 from "images/works/veneto/7.png";

import imgGallery1 from "images/gallery/about1.jpg";
import imgGallery2 from "images/gallery/about2.jpg";
import imgGallery5 from "images/gallery/about5.jpg";
import imgGallery6 from "images/gallery/about6.jpg";

import imgService1 from "images/services/service1.png";
import imgService2 from "images/services/service2.png";
import imgService3 from "images/services/service3.png";
import imgService4 from "images/services/service4.png";

const homePage = {
	pageName: "Home",
	pageTitle:
		"Impresa Umberto Cremascoli | Costruzioni e Ristrutturazioni a Casalpusterlengo, Lodi e Milano",
	pageDescription:
		"Impresa Umberto Cremascoli: costruzioni, ristrutturazioni e interventi edili a Casalpusterlengo, Lodi e Milano. Affidabilità e qualità per il tuo progetto edilizio.",
	route: "/home",
};

const chisiamoPage = {
	pageName: "Chi Siamo",
	pageTitle:
		"Impresa Umberto Cremascoli | Esperienza e Qualità nell’Edilizia a Lodi e Milano",
	pageDescription:
		"Scopri la storia e i valori di Impresa Umberto Cremascoli. Da anni operiamo nel settore edile a Lodi e Milano con professionalità ed esperienza.",
	route: "/chi-siamo",
};

const serviziPage = {
	pageName: "Servizi",
	pageTitle:
		"Servizi Edili a Casalpusterlengo, Lodi e Milano | Costruzioni e Ristrutturazioni",
	pageDescription:
		"Offriamo costruzioni, ristrutturazioni e manutenzioni edili a Casalpusterlengo, Lodi e Milano. Scopri i servizi di Impresa Umberto Cremascoli.",
	route: "/servizi",
};

const portfolioPage = {
	pageName: "Portfolio",
	pageTitle: "Progetti Edili | Le Realizzazioni di Impresa Umberto Cremascoli",
	pageDescription:
		"Guarda i nostri progetti edili realizzati a Casalpusterlengo, Lodi e Milano. Costruzioni e ristrutturazioni su misura per ogni esigenza.",
	route: "/portfolio",
};

const progettoPage = {
	pageName: "Progetto",
	pageTitle: "Progetti Edili | Le Realizzazioni di Impresa Umberto Cremascoli",
	pageDescription:
		"Guarda i nostri progetti edili realizzati a Casalpusterlengo, Lodi e Milano. Costruzioni e ristrutturazioni su misura per ogni esigenza.",
	route: "/progetto/:routeName",
};

const contattiPage = {
	pageName: "Contatti",
	pageTitle:
		"Contatta Impresa Umberto Cremascoli | Edilizia a Casalpusterlengo, Lodi e Milano",
	pageDescription:
		"Hai bisogno di un'impresa edile? Contatta Impresa Umberto Cremascoli per un preventivo o maggiori informazioni sui nostri servizi.",
	route: "/contatti",
};

const servizi = [
	{
		key: "servizio-1",
		nome: "Chiavi in Mano",
		descrizione: "Gestione completa dal progetto alla realizzazione finale",
		icon: "icon-o-light-bulb-1",
	},
	{
		key: "servizio-2",
		nome: "Ristrutturazioni Edili",
		descrizione: "Efficientamento energetico e restyling totale dell'immobile",
		icon: "icon-o-helmet",
	},
	{
		key: "servizio-3",
		nome: "Sviluppo Immobiliare Diretto",
		descrizione: "Realizziamo immobili moderni partendo da aree edificabili",
		icon: "icon-o-tools-1",
	},
	{
		key: "servizio-4",
		nome: "Gestione Permessi e Pratiche",
		descrizione: "Seguiamo ogni iter burocratico e autorizzativo",
		icon: "icon-o-drawing-1",
	},
	{
		key: "servizio-5",
		nome: "Consulenza Tecnica Integrata",
		descrizione: "Supporto completo con tecnici e imprese qualificate",
		icon: "icon-o-ruler-2",
	},
	{
		key: "servizio-6",
		nome: "Innovazione e Sostenibilità",
		descrizione:
			"Soluzioni costruttive moderne, efficienti e tecnologicamente avanzate",
		icon: "icon-tap-1",
	},
];

const progetti = [
	{
		key: "progetto-2",
		nome: "Villa Singola, Crema",
		descrizioneBreve: "Ricostruzione moderna, efficiente e funzionale.",
		descrizione:
			"<p>L’intervento ha previsto la demolizione e ricostruzione con diversa sagoma di una vecchia villa sita alle porte di Crema. Il nuovo fabbricato composto da due unità abitative rispecchia i più alti stardard energetici e funzionali uniti ad un design moderno e lineare come richiesto dal cliente.</p>",
		route: "/progetto/villa-singola-crema",
		copertina: imgWork9,
		progettista: "Geom. Luigi Meazzi",
		committente: "Privato",
		filter: "old",
		gallery: [
			{
				image: imgWork9,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Villa Singola Crema",
			},
			{
				image: imgWork10,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Villa Singola Crema",
			},
			{
				image: imgWork11,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Villa Singola Crema",
			},
			{
				image: imgWork12,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Villa Singola Crema",
			},
			{
				image: imgWork13,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Villa Singola Crema",
			},
			{
				image: imgWork14,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Villa Singola Crema",
			},
			{
				image: imgWork15,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Villa Singola Crema",
			},
		],
	},
	{
		key: "progetto-3",
		nome: "Edificio Plurifamiliare, Casalpusterlengo",
		descrizioneBreve:
			"Demolizione e ampliamento con vetrate, sbalzi e impianti moderni.",
		descrizione:
			"<p>L’intervento ha previsto la demolizione e ricostruzione con ampliamento di un vecchio edificio plurifamiliare sito nella parte residenziale di Casalpusterlengo. Oggi il fabbricato si presente con linee moderne e squadrate caratterizzate da ampie superfici vetrate e sbalzi strutturali. Grande importanza è stata data anche alla parte energetica installando tutte le più recenti tecnologie impiantistiche.</p>",
		route: "/progetto/edificio-plurifamiliare-casalpusterlengo",
		copertina: imgWork16,
		progettista: "Geom. Luigi Meazzi",
		committente: "Privato",
		filter: "old",
		gallery: [
			{
				image: imgWork16,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Picasso",
			},
			{
				image: imgWork17,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Picasso",
			},
			{
				image: imgWork18,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Picasso",
			},
			{
				image: imgWork19,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Picasso",
			},
			{
				image: imgWork20,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Picasso",
			},
			{
				image: imgWork21,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Picasso",
			},
			{
				image: imgWork22,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Picasso",
			},
		],
	},
	{
		key: "progetto-4",
		nome: "Quartiere Via Aldo Moro, Casalpusterlengo",
		descrizioneBreve:
			"Complesso residenziale in evoluzione con terrazzi, verde e indipendente",
		descrizione:
			"<p>Partito nel 2014 e tutt’ora in evoluzione il complesso di Via Aldo Moro a Casalpusterlengo è composto da 9 palazzine e 5 ville singole tutte caratterizzate da spazi verdi esclusi, ampi terrazzi e indipendenza.</p>",
		route: "/progetto/quartiere-via-aldo-moro-casalpusterlengo",
		copertina: imgWork23,
		progettista: "Geom. Luigi Meazzi",
		committente: "Impresa Umberto Cremascoli srl",
		filter: "old",
		gallery: [
			{
				image: imgWork23,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Aldo Moro",
			},
			{
				image: imgWork24,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Aldo Moro",
			},
			{
				image: imgWork25,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Aldo Moro",
			},
		],
	},
	{
		key: "progetto-5",
		nome: "Centro Uffici San Zeno, Casalpusterlengo ( Ex samor )",
		descrizioneBreve:
			"Da fabbrica dismessa a palazzina uffici moderna, sicura ed efficiente.",
		descrizione:
			"<p>L’intervento di rigenerazione urbana ha previsto la ristrutturazione con efficientamento energetico ed adeguamento sismico della palazzina uffici della Ex Samor, azienda dismessa nella zona centrale del paese. Oggi all’interno di una moderna palazzina trovano sede l’Impresa Umberto Cremascoli e altre attività commerciali locali.</p>",
		route: "/progetto/centro-uffici-san-zeno-ex-samor",
		copertina: imgWork26,
		progettista: "Geom. Luigi Meazzi",
		committente: "Impresa Umberto Cremascoli srl",
		filter: "old",
		gallery: [
			{
				image: imgWork26,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Ex Samor",
			},
			{
				image: imgWork27,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Ex Samor",
			},
			{
				image: imgWork28,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Ex Samor",
			},
			{
				image: imgWork29,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Ex Samor",
			},
			{
				image: imgWork30,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Ex Samor",
			},
			{
				image: imgWork31,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Ex Samor",
			},
			{
				image: imgWork32,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Ex Samor",
			},
		],
	},
	// {
	// 	key: "progetto-6",
	// 	nome: "Via Elsa Morante",
	// 	descrizioneBreve: "Descrizione Test 6",
	// 	descrizione:
	// 		"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit nulla quis fermentum hendrerit. Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae.</p>",
	// 	route: "/progetto/via-elsa-morante",
	// 	copertina: imgWork33,
	// 	cliente: "Cliente 6",
	// 	architetto: "Architetto 6",
	// 	budget: "€ 320.000",
	// 	filter: "old",
	// 	gallery: [
	// 		{
	// 			image: imgWork33,
	// 			alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Elsa Morante",
	// 		},
	// 		{
	// 			image: imgWork34,
	// 			alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Elsa Morante",
	// 		},
	// 		{
	// 			image: imgWork35,
	// 			alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Elsa Morante",
	// 		},
	// 		{
	// 			image: imgWork36,
	// 			alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Elsa Morante",
	// 		},
	// 		{
	// 			image: imgWork37,
	// 			alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Elsa Morante",
	// 		},
	// 		{
	// 			image: imgWork38,
	// 			alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Elsa Morante",
	// 		},
	// 		{
	// 			image: imgWork39,
	// 			alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Elsa Morante",
	// 		},
	// 	],
	// },
	{
		key: "progetto-7",
		nome: "Via Raffaello Casalpusterlengo, Residenza Welchome",
		descrizioneBreve:
			"Demolizione villa, 10 appartamenti verdi ed efficienti in classe A4",
		descrizione:
			"<p>L’intervento di rigenerazione urbana ha previsto la demolizione di una vecchia villa e la ricostruzione di un complesso di 10 appartamenti caratterizzati da ampi spazi verdi al piano terra e da giardini pensili al piano primo. Tutti gli appartamenti sono dotati di impianto fotovoltaico dedicato e di pompa di calore ad alta efficienza raggiungendo la classe A4.</p>",
		route: "/progetto/via-raffaello-casalpusterlengo-residenza-welchome",
		copertina: imgWork40,
		progettista: "Geom. Luigi Meazzi",
		committente: "Impresa Umberto Cremascoli srl",
		filter: "old",
		gallery: [
			{
				image: imgWork40,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione WelcHome",
			},
			{
				image: imgWork41,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione WelcHome",
			},
			{
				image: imgWork42,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione WelcHome",
			},
			{
				image: imgWork43,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione WelcHome",
			},
			{
				image: imgWork44,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione WelcHome",
			},
			{
				image: imgWork45,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione WelcHome",
			},
		],
	},
	{
		key: "progetto-8",
		nome: "Viale Veneto, Codogno",
		descrizioneBreve:
			"Appartamenti moderni con verde, terrazzi e posizione strategica centrale",
		descrizione:
			"<p>VIA VENETO non è solo un complesso immobiliare ma un progetto di rigenerazione urbana consapevole, nato per valorizzare l’esistente senza il consumo di nuovo suolo. Appartamenti moderni, dotati di ampi terrazzi e giardini privati, progettati per chi cerca comfort, luce naturale e una connessione con il verde, senza rinunciare alla comodità: il complesso sorge in una posizione strategica, vicinissimo alla stazione e al centro storico.</p>",
		route: "/progetto/viale-veneto-codogno",
		copertina: imgWork46,
		progettista: "Geom. Luigi Meazzi",
		committente: "Impresa Umberto Cremascoli srl",
		filter: "current",
		gallery: [
			{
				image: imgWork46,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Veneto Codogno",
			},
			{
				image: imgWork47,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Veneto Codogno",
			},
			{
				image: imgWork48,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Veneto Codogno",
			},
			{
				image: imgWork49,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Veneto Codogno",
			},
			{
				image: imgWork50,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Veneto Codogno",
			},
			{
				image: imgWork51,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Veneto Codogno",
			},
			{
				image: imgWork52,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Veneto Codogno",
			},
		],
	},
	{
		key: "progetto-1",
		nome: "Villa Singola, Piacenza",
		descrizioneBreve:
			"Villa alle porte di Piacenza, intervento edile completo dell’impresa",
		descrizione:
			"<p>Importante villa situata alle porte di Piacenza in cui L’impresa si è occupata della parte edile di tutto il cantiere.</p>",
		route: "/progetto/villa-singola-piacenza",
		copertina: imgWork1,
		progettista: "----",
		committente: "Privato",
		filter: "old",
		gallery: [
			{
				image: imgWork1,
				alt:
					"Impresa Umberto Cremascoli | Dettaglio costruzione Villa Singola Piacenza",
			},
			{
				image: imgWork2,
				alt:
					"Impresa Umberto Cremascoli | Dettaglio costruzione Villa Singola Piacenza",
			},
			{
				image: imgWork3,
				alt:
					"Impresa Umberto Cremascoli | Dettaglio costruzione Villa Singola Piacenza",
			},
			{
				image: imgWork4,
				alt:
					"Impresa Umberto Cremascoli | Dettaglio costruzione Villa Singola Piacenza",
			},
			{
				image: imgWork5,
				alt:
					"Impresa Umberto Cremascoli | Dettaglio costruzione Villa Singola Piacenza",
			},
			{
				image: imgWork6,
				alt:
					"Impresa Umberto Cremascoli | Dettaglio costruzione Villa Singola Piacenza",
			},
			{
				image: imgWork8,
				alt:
					"Impresa Umberto Cremascoli | Dettaglio costruzione Villa Singola Piacenza",
			},
		],
	},
];

const faqs = [
	{
		key: "faq-1",
		titolo: "Oltre 50 anni di esperienza: perché conta davvero?",
		testo:
			"Da più di 50 anni, Costruiamo o ristrutturiamo immobili civili o industriali, sempre con lo stesso impegno.",
	},
	{
		key: "faq-2",
		titolo: "Come facciamo a rispettare sempre tempi e qualità?",
		testo:
			"Nel corso degli anni siamo riusciti a costruire un network di tecnici e imprese che ci permettono di garantire: tempi di realizzazione certi, immutata qualità costruttiva e costante innovazione tecnologica.",
	},
	{
		key: "faq-3",
		titolo: "Cosa ci rende sempre un passo avanti?",
		testo:
			"Formazioni e informazione: tutto il nostro staff è costantemente aggiornato e formato, per essere sempre pronto a confrontarsi con le nuove tecnologie costruttive e le nuove tecniche di efficienza energetica.",
	},
	{
		key: "faq-4",
		titolo: "Perché dovrei affidarmi a voi per un progetto complesso?",
		testo:
			"Perché uniamo esperienza, organizzazione e innovazione per offrire un servizio completo e affidabile in ogni fase.",
	},
];

const gallery = [
	{
		image: imgGallery1,
		alt: "Impresa Umberto Cremascoli | Galleria Immagini",
	},
	{
		image: imgGallery2,
		alt: "Impresa Umberto Cremascoli | Galleria Immagini",
	},
	{
		image: imgGallery5,
		alt: "Impresa Umberto Cremascoli | Galleria Immagini",
	},
	{
		image: imgGallery6,
		alt: "Impresa Umberto Cremascoli | Galleria Immagini",
	},
];

const offerta = [
	{
		key: "offerta-1",
		titolo: "Nuove Costruzioni",
		testo:
			"Operando da general contractor siamo in grado di gestire tutto il flusso di lavoro. Dalle fase preliminare di progettazione e ottenimento dei permessi, a quella della costruzione dell'opera. Siamo capaci di accompagnare il cliente passo passo in tutte le scelte necessarie ad ottenere un immobile su misura e personalizzato.",
		copertina: imgService1,
	},
	{
		key: "offerta-2",
		titolo: "Ristrutturazioni",
		testo:
			"Che si tratti di puro efficinetamento energetico o di ristrutturazione completa dell'immobile anche in questo caso riusciamo a seguire in prima persona tutte le fasi di lavorazione fino alla consegna dell'immobile finito.",
		copertina: imgService2,
	},
	{
		key: "offerta-3",
		titolo: "Iniziative Immobiliari",
		testo:
			"Core business dell'impresa fin dalla sua nascita é lo sviluppo di proprie iniziative immobiliari. Dalla scelta della migliore area edificabile alla consegna dell'immobile finito. Impresa Cremascoli segue l’intero processo direttamente per garantire elevati standard di qualità con immobili moderni ed efficienti.",
		copertina: imgService3,
	},
];

const facts = [
	{
		key: "fact-1",
		titolo: "PROGETTI COMPLETATI",
		numero: "200",
	},
	{
		key: "fact-2",
		titolo: "CLIENTI SODDISFATTI",
		numero: "180",
	},
];

const contatti = {
	phone: "+39 0377 81300",
	mail: "info@impresacremascoli.it",
	indirizzo: "Via Felice Cavallotti 211, 26841 Casalpusterlengo (LO)",
	hours: "Lun - Ven: 8:00 - 18:00",
	instagram: "https://www.instagram.com",
	facebook: "https://www.facebook.com",
};

export {
	homePage,
	chisiamoPage,
	serviziPage,
	portfolioPage,
	progettoPage,
	contattiPage,
	servizi,
	progetti,
	faqs,
	gallery,
	offerta,
	facts,
	contatti,
};
