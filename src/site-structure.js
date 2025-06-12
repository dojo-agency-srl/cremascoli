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

import imgWork33 from "images/works/elsa-morante/1.png";
import imgWork34 from "images/works/elsa-morante/2.png";
import imgWork35 from "images/works/elsa-morante/3.png";
import imgWork36 from "images/works/elsa-morante/4.png";
import imgWork37 from "images/works/elsa-morante/5.png";
import imgWork38 from "images/works/elsa-morante/6.png";
import imgWork39 from "images/works/elsa-morante/7.png";

import imgWork40 from "images/works/welchome/1.png";
import imgWork41 from "images/works/welchome/2.png";
import imgWork42 from "images/works/welchome/3.png";
import imgWork43 from "images/works/welchome/4.png";
import imgWork44 from "images/works/welchome/5.png";
import imgWork45 from "images/works/welchome/6.png";

import imgGallery1 from "images/gallery/about1.jpg";
import imgGallery2 from "images/gallery/about2.jpg";
import imgGallery3 from "images/gallery/about3.jpg";
import imgGallery4 from "images/gallery/about4.jpg";
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
		key: "progetto-1",
		nome: "Villa Singola Piacenza",
		descrizioneBreve: "Descrizione Test 1",
		descrizione:
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit nulla quis fermentum hendrerit. Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae.</p>",
		route: "/progetto/villa-singola-piacenza",
		copertina: imgWork1,
		cliente: "Cliente 1",
		architetto: "Architetto 1",
		budget: "€ 320.000",
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
	{
		key: "progetto-2",
		nome: "Villa Singola Crema",
		descrizioneBreve: "Descrizione Test 2",
		descrizione:
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit nulla quis fermentum hendrerit. Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae.</p>",
		route: "/progetto/villa-singola-crema",
		copertina: imgWork9,
		cliente: "Cliente 2",
		architetto: "Architetto 2",
		budget: "€ 320.000",
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
		nome: "Via Picasso",
		descrizioneBreve: "Descrizione Test 3",
		descrizione:
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit nulla quis fermentum hendrerit. Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae.</p>",
		route: "/progetto/via-picasso",
		copertina: imgWork16,
		cliente: "Cliente 3",
		architetto: "Architetto 3",
		budget: "€ 320.000",
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
		nome: "Via Aldo Moro",
		descrizioneBreve: "Descrizione Test 4",
		descrizione:
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit nulla quis fermentum hendrerit. Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae.</p>",
		route: "/progetto/test4",
		copertina: imgWork23,
		cliente: "Cliente 4",
		architetto: "Architetto 4",
		budget: "€ 320.000",
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
		nome: "Ex-Samor",
		descrizioneBreve: "Descrizione Test 5",
		descrizione:
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit nulla quis fermentum hendrerit. Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae.</p>",
		route: "/progetto/ex-samor",
		copertina: imgWork26,
		cliente: "Cliente 5",
		architetto: "Architetto 5",
		budget: "€ 320.000",
		filter: "current",
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
	{
		key: "progetto-6",
		nome: "Via Elsa Morante",
		descrizioneBreve: "Descrizione Test 6",
		descrizione:
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit nulla quis fermentum hendrerit. Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae.</p>",
		route: "/progetto/via-elsa-morante",
		copertina: imgWork33,
		cliente: "Cliente 6",
		architetto: "Architetto 6",
		budget: "€ 320.000",
		filter: "current",
		gallery: [
			{
				image: imgWork33,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Elsa Morante",
			},
			{
				image: imgWork34,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Elsa Morante",
			},
			{
				image: imgWork35,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Elsa Morante",
			},
			{
				image: imgWork36,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Elsa Morante",
			},
			{
				image: imgWork37,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Elsa Morante",
			},
			{
				image: imgWork38,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Elsa Morante",
			},
			{
				image: imgWork39,
				alt: "Impresa Umberto Cremascoli | Dettaglio costruzione Via Elsa Morante",
			},
		],
	},
	{
		key: "progetto-7",
		nome: "WelcHome",
		descrizioneBreve: "Descrizione Test 6",
		descrizione:
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit nulla quis fermentum hendrerit. Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae.</p>",
		route: "/progetto/welchome",
		copertina: imgWork40,
		cliente: "Cliente 6",
		architetto: "Architetto 6",
		budget: "€ 320.000",
		filter: "current",
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
		image: imgGallery3,
		alt: "Impresa Umberto Cremascoli | Galleria Immagini",
	},
	{
		image: imgGallery4,
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
	// {
	// 	key: "offerta-4",
	// 	titolo: "Ristrutturazioni",
	// 	testo:
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.",
	// 	copertina: imgService4,
	// },
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
