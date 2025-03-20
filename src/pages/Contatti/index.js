import React, { useEffect } from "react";

import Header from "components/Header";
import Breadcrumb from "components/Breadcrumb";
import Contact from "components/Contact";
import Footer from "components/Footer";

const Contatti = () => {
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
			<Breadcrumb page="Contatti" />
			<Contact />
		</>
	);
};

export default Contatti;
