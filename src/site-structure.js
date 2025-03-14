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

const homePage = {
	pageTitle: "Home",
	route: "/home",
};

const chisiamoPage = {
	pageTitle: "Chi Siamo",
	route: "/chi-siamo",
};

const serviziPage = {
	pageTitle: "Servizi",
	route: "/servizi",
};

const portfolioPage = {
	pageTitle: "Portfolio",
	route: "/portfolio",
};

const contattiPage = {
	pageTitle: "Contatti",
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
		nome: "Test 1",
		descrizioneBreve: "Descrizione Test 1",
		route: "/test1",
		copertina: imgWork1,
	},
	{
		key: "progetto-2",
		nome: "Test 2",
		descrizioneBreve: "Descrizione Test 2",
		route: "/test2",
		copertina: imgWork2,
	},
	{
		key: "progetto-3",
		nome: "Test 3",
		descrizioneBreve: "Descrizione Test 3",
		route: "/test3",
		copertina: imgWork3,
	},
	{
		key: "progetto-4",
		nome: "Test 4",
		descrizioneBreve: "Descrizione Test 4",
		route: "/test4",
		copertina: imgWork4,
	},
	{
		key: "progetto-5",
		nome: "Test 5",
		descrizioneBreve: "Descrizione Test 5",
		route: "/test5",
		copertina: imgWork5,
	},
	{
		key: "progetto-6",
		nome: "Test 6",
		descrizioneBreve: "Descrizione Test 6",
		route: "/test6",
		copertina: imgWork6,
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
];

const contatti = {
	phone: "+39 0377 81300",
	mail: "info@impresacremascoli.it",
	hours: "Lun - Ven: 8:00 - 18:00",
	instagram: "https://www.instagram.com",
	facebook: "https://www.facebook.com",
};

export {
	homePage,
	chisiamoPage,
	serviziPage,
	portfolioPage,
	contattiPage,
	servizi,
	progetti,
	faqs,
	gallery,
	contatti,
};
