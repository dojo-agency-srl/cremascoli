import Home from "pages/Home";
import ChiSiamo from "pages/ChiSiamo";
import Servizi from "pages/Servizi";
import Portfolio from "pages/Portfolio";
import Progetto from "pages/Progetto";
import Contatti from "pages/Contatti";

import {
	homePage,
	chisiamoPage,
	serviziPage,
	portfolioPage,
	progettoPage,
	contattiPage,
} from "site-structure.js";

const appname = process.env.REACT_APP_WEBSITE_NAME;

const routes = [
	{
		key: "home",
		...homePage,
		component: (
			<Home title={homePage.pageTitle} description={homePage.pageDescription} />
		),
		visible: true,
	},
	{
		key: "chisiamo",
		...chisiamoPage,
		component: (
			<ChiSiamo
				title={chisiamoPage.pageTitle}
				description={chisiamoPage.pageDescription}
			/>
		),
		visible: true,
	},
	{
		key: "portfolio",
		...portfolioPage,
		component: (
			<Portfolio
				title={portfolioPage.pageTitle}
				description={portfolioPage.pageDescription}
			/>
		),
		visible: true,
	},
	{
		key: "progetto",
		...progettoPage,
		component: (
			<Progetto
				title={progettoPage.pageTitle}
				description={progettoPage.pageDescription}
			/>
		),
		visible: false,
	},
	{
		key: "servizi",
		...serviziPage,
		component: (
			<Servizi
				title={serviziPage.pageTitle}
				description={serviziPage.pageDescription}
			/>
		),
		visible: true,
	},

	{
		key: "contatti",
		...contattiPage,
		component: (
			<Contatti
				title={contattiPage.pageTitle}
				description={contattiPage.pageDescription}
			/>
		),
		visible: true,
	},
];

export { routes };
