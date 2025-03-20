import React, { useState } from "react";
import { Link } from "react-router-dom";

import { progetti } from "site-structure.js";

const WorksFull = () => {
	const [filtroAttivo, setFiltroAttivo] = useState("*");

	const handleFilterClick = (filter) => {
		setFiltroAttivo(filter);
	};

	// Filtra i progetti in base alla classe
	const progettiFiltrati =
		filtroAttivo === "*"
			? progetti
			: progetti.filter((progetto) => progetto.filter === filtroAttivo);

	return (
		<section id="portfolio-section" className="wprt-section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2 className="text-center font-size-28 margin-bottom-10">PORTFOLIO GRID</h2>
						<div className="wprt-lines style-2 custom-1">
							<div className="line-1"></div>
						</div>

						<p className="wprt-subtitle">
							Cras id justo eget sapien scelerisque lacinia non a eros. In a volutpat magna.
							Vivamus pretium urna at condimentum porta. Phasellus mollis mauris dolor, a
							tincidunt mauris fringilla.
						</p>
					</div>

					<div className="col-md-12">
						<div className="wprt-project">
							<div id="project-filter">
								<div
									onClick={() => handleFilterClick("*")}
									className={`cbp-filter-item ${filtroAttivo === "*" ? "active" : ""}`}>
									<span>Tutti</span>
								</div>
								<div
									onClick={() => handleFilterClick("old")}
									className={`cbp-filter-item ${filtroAttivo === "old" ? "active" : ""}`}>
									<span>Passati</span>
								</div>
								<div
									onClick={() => handleFilterClick("current")}
									className={`cbp-filter-item ${filtroAttivo === "current" ? "active" : ""}`}>
									<span>In corso</span>
								</div>
							</div>

							<div id="projects" className="cbp">
								{progettiFiltrati.map((progetto) => (
									<div className={`project-item col-md-4 ${progetto.filter}`} key={progetto.key}>
										<div className="inner">
											<div className="grid">
												<figure className="effect-fadeIn">
													<img src={progetto.copertina} alt="image" />
													<figcaption>
														<div>
															<h2>
																<Link to={progetto.route}>{progetto.nome}</Link>
															</h2>
															<p>{progetto.descrizioneBreve}</p>
														</div>
													</figcaption>
												</figure>
											</div>
										</div>
									</div>
								))}
							</div>

							{progettiFiltrati.length === 0 && (
								<p className="text-center">Nessun progetto trovato.</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorksFull;
