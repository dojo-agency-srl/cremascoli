import imgWork1 from "images/works/work1.png";
import imgWork2 from "images/works/work2.png";
import imgWork3 from "images/works/work3.png";
import imgWork4 from "images/works/work4.png";
import imgWork5 from "images/works/work5.png";
import imgWork6 from "images/works/work6.png";

import imgGallery1 from "images/gallery/about1.jpg";
import imgGallery2 from "images/gallery/about2.jpg";
import imgGallery3 from "images/gallery/about3.jpg";
import imgGallery4 from "images/gallery/about4.jpg";
import imgGallery5 from "images/gallery/about1.jpg";
import imgGallery6 from "images/gallery/about2.jpg";
import imgGallery7 from "images/gallery/about3.jpg";
import imgGallery8 from "images/gallery/about4.jpg";

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
		nome: "Servizio 1",
		descrizione: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		icon: "icon-drawing",
	},
	{
		key: "servizio-2",
		nome: "Servizio 2",
		descrizione: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		icon: "icon-drawing",
	},
	{
		key: "servizio-3",
		nome: "Servizio 3",
		descrizione: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		icon: "icon-drawing",
	},
	{
		key: "servizio-4",
		nome: "Servizio 4",
		descrizione: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		icon: "icon-drawing",
	},
	{
		key: "servizio-5",
		nome: "Servizio 5",
		descrizione: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		icon: "icon-drawing",
	},
	{
		key: "servizio-6",
		nome: "Servizio 6",
		descrizione: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		icon: "icon-drawing",
	},
];

const progetti = [
	{
		key: "progetto-1",
		nome: "Progetto 1",
		descrizioneBreve: "Descrizione Test 1",
		descrizione:
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit nulla quis fermentum hendrerit. Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae.</p>",
		route: "/progetto/test1",
		copertina: imgWork1,
		cliente: "Cliente 1",
		architetto: "Architetto 1",
		budget: "€ 320.000",
		filter: "old",
		gallery: [
			{
				image: imgGallery1,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery2,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery3,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery4,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery5,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery6,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery7,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery1,
				alt: "Descrizione immagine",
			},
		],
	},
	{
		key: "progetto-2",
		nome: "Progetto 2",
		descrizioneBreve: "Descrizione Test 2",
		descrizione:
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit nulla quis fermentum hendrerit. Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae.</p>",
		route: "/progetto/test2",
		copertina: imgWork2,
		cliente: "Cliente 2",
		architetto: "Architetto 2",
		budget: "€ 320.000",
		filter: "old",
		gallery: [
			{
				image: imgGallery1,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery2,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery3,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery4,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery5,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery6,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery7,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery1,
				alt: "Descrizione immagine",
			},
		],
	},
	{
		key: "progetto-3",
		nome: "Progetto 3",
		descrizioneBreve: "Descrizione Test 3",
		descrizione:
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit nulla quis fermentum hendrerit. Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae.</p>",
		route: "/progetto/test3",
		copertina: imgWork3,
		cliente: "Cliente 3",
		architetto: "Architetto 3",
		budget: "€ 320.000",
		filter: "old",
		gallery: [
			{
				image: imgGallery1,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery2,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery3,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery4,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery5,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery6,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery7,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery1,
				alt: "Descrizione immagine",
			},
		],
	},
	{
		key: "progetto-4",
		nome: "Progetto 4",
		descrizioneBreve: "Descrizione Test 4",
		descrizione:
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit nulla quis fermentum hendrerit. Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae.</p>",
		route: "/progetto/test4",
		copertina: imgWork4,
		cliente: "Cliente 4",
		architetto: "Architetto 4",
		budget: "€ 320.000",
		filter: "old",
		gallery: [
			{
				image: imgGallery1,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery2,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery3,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery4,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery5,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery6,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery7,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery1,
				alt: "Descrizione immagine",
			},
		],
	},
	{
		key: "progetto-5",
		nome: "Progetto 5",
		descrizioneBreve: "Descrizione Test 5",
		descrizione:
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit nulla quis fermentum hendrerit. Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae.</p>",
		route: "/progetto/test5",
		copertina: imgWork5,
		cliente: "Cliente 5",
		architetto: "Architetto 5",
		budget: "€ 320.000",
		filter: "current",
		gallery: [
			{
				image: imgGallery1,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery2,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery3,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery4,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery5,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery6,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery7,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery1,
				alt: "Descrizione immagine",
			},
		],
	},
	{
		key: "progetto-6",
		nome: "Progetto 6",
		descrizioneBreve: "Descrizione Test 6",
		descrizione:
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat. Integer blandit nulla quis fermentum hendrerit. Vestibulum eu libero volutpat, portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae.</p>",
		route: "/progetto/test6",
		copertina: imgWork6,
		cliente: "Cliente 6",
		architetto: "Architetto 6",
		budget: "€ 320.000",
		filter: "current",
		gallery: [
			{
				image: imgGallery1,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery2,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery3,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery4,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery5,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery6,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery7,
				alt: "Descrizione immagine",
			},
			{
				image: imgGallery1,
				alt: "Descrizione immagine",
			},
		],
	},
];

const faqs = [
	{
		key: "faq-1",
		titolo: "Più di 30 anni di esperienza nelle costruzioni",
		testo:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.",
	},
	{
		key: "faq-2",
		titolo: "Lorem ipsum dolor sit amet, consectetur adipiscing",
		testo:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.",
	},
	{
		key: "faq-3",
		titolo: "Lorem ipsum dolor sit amet, consectetur adipiscing",
		testo:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.",
	},
	{
		key: "faq-4",
		titolo: "Lorem ipsum dolor sit amet, consectetur adipiscing",
		testo:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.",
	},
];

const gallery = [
	{
		image: imgGallery1,
		alt: "Immagine 1",
	},
	{
		image: imgGallery2,
		alt: "Immagine 2",
	},
	{
		image: imgGallery3,
		alt: "Immagine 3",
	},
	{
		image: imgGallery4,
		alt: "Immagine 4",
	},
	{
		image: imgGallery5,
		alt: "Immagine 5",
	},
	{
		image: imgGallery6,
		alt: "Immagine 6",
	},
	{
		image: imgGallery7,
		alt: "Immagine 7",
	},
	{
		image: imgGallery8,
		alt: "Immagine 8",
	},
];

const offerta = [
	{
		key: "offerta-1",
		titolo: "Ristrutturazioni",
		testo:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.",
		copertina: imgService1,
	},
	{
		key: "offerta-2",
		titolo: "Design & Costruzione",
		testo:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.",
		copertina: imgService2,
	},
	{
		key: "offerta-3",
		titolo: "Architettura del verde",
		testo:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.",
		copertina: imgService3,
	},
	{
		key: "offerta-4",
		titolo: "Ristrutturazioni",
		testo:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.",
		copertina: imgService4,
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
