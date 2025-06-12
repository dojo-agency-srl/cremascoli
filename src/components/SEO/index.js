import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { routes } from "routes.js";

const SEO = () => {
	const location = useLocation();

	const currentRoute =
		routes.find((route) => route.route === location.pathname) || {};

	const {
		pageTitle = "Progetti Edili | Le Realizzazioni di Impresa Umberto Cremascoli",
		pageDescription = "Guarda i nostri progetti edili realizzati a Casalpusterlengo, Lodi e Milano. Costruzioni e ristrutturazioni su misura per ogni esigenza.",
	} = currentRoute;

	document.title = pageTitle;
	const metaDescription = document.querySelector("meta[name='description']");
	if (metaDescription) {
		metaDescription.setAttribute("content", pageDescription);
	}

	return (
		<Helmet>
			<title>{pageTitle}</title>
			<meta name="description" content={pageDescription} />
		</Helmet>
	);
};

export default SEO;
