import React, { useEffect } from "react";

import Breadcrumb from "components/Breadcrumb";
import Gallery from "components/Gallery";
import Promotion2 from "components/Promotion2";
import Team from "components/Team";

const ChiSiamo = () => {
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
			<Breadcrumb page="Chi siamo" />
			<Gallery />
			<Promotion2 />
			<Team />
		</>
	);
};

export default ChiSiamo;
