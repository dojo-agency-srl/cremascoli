import Home from "pages/Home";
import ChiSiamo from "pages/ChiSiamo";
import Servizi from "pages/Servizi";
import Portfolio from "pages/Portfolio";
import Contatti from "pages/Contatti";

import {
	homePage,
	chisiamoPage,
	serviziPage,
	portfolioPage,
	contattiPage,
} from "site-structure.js";

const appname = process.env.REACT_APP_WEBSITE_NAME;

const routes = [
	{
		key: "home",
		...homePage,
		component: <Home title={`${homePage.pageTitle} - ${appname}`} />,
		visible: true,
	},
	{
		key: "chisiamo",
		...chisiamoPage,
		component: <ChiSiamo title={`${chisiamoPage.pageTitle} - ${appname}`} />,
		visible: true,
	},
	{
		key: "portfolio",
		...portfolioPage,
		component: <Portfolio title={`${portfolioPage.pageTitle} - ${appname}`} />,
		visible: true,
	},
	{
		key: "servizi",
		...serviziPage,
		component: <Servizi title={`${serviziPage.pageTitle} - ${appname}`} />,
		visible: true,
	},

	{
		key: "contatti",
		...contattiPage,
		component: <Contatti title={`${contattiPage.pageTitle} - ${appname}`} />,
		visible: true,
	},
];

export { routes };
