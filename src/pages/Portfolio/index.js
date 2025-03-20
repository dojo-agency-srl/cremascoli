import React, { useEffect } from "react";

import Breadcrumb from "components/Breadcrumb";
import WorksFull from "components/WorksFull";

const Portfolio = () => {
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
			<Breadcrumb page="Portfolio" />
			<WorksFull />
		</>
	);
};

export default Portfolio;
