import React, { useEffect } from "react";

import Breadcrumb from "components/Breadcrumb";
import ServicesFull from "components/ServicesFull";
import Promotion from "components/Promotion";
import Offer from "components/Offer";

const Servizi = () => {
	useEffect(() => {
		document.body.classList.remove("header-style-5");
		document.body.classList.add("header-style-1");

		return () => {
			document.body.classList.remove("header-style-1");
			document.body.classList.add("header-style-5");
		};
	}, []);

	return (
		<>
			<Breadcrumb page="Servizi" />
			<ServicesFull />
			<Promotion
				testo="Ti aiuteremo a costruire la casa dei tuoi sogni"
				cta="CONTATTACI"
			/>
			<Offer />
		</>
	);
};

export default Servizi;
