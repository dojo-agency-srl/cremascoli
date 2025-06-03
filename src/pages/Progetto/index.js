import React, { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import Breadcrumb from "components/Breadcrumb";

import { progetti, progettoPage } from "site-structure.js";
import ProjectDetail from "components/ProjectDetail";

const Progetto = () => {
	const { routeName } = useParams();
	const [project, setProject] = useState(null);

	useEffect(() => {
		// document.body.classList.remove("header-style-5");
		// document.body.classList.add("header-style-1");
		// return () => {
		// 	document.body.classList.remove("header-style-1");
		// 	document.body.classList.add("header-style-5");
		// };
	}, []);

	useEffect(() => {
		const projectTemp = progetti.find(
			(item) => item.route === "/progetto/" + routeName
		);

		if (projectTemp) {
			setProject(projectTemp);
		}

		setProject(projectTemp);
	}, [routeName]);

	return (
		<>
			{project ? (
				<>
					<Breadcrumb page={`${project.nome}`} />
					<ProjectDetail progetto={project} />
				</>
			) : (
				""
			)}
		</>
	);
};

export default Progetto;
