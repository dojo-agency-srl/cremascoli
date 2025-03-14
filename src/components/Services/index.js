import React from "react";

import { servizi } from "site-structure.js";

const Services = () => {
	return (
		<section id="services-section" className="wprt-section services">
			<div className="container">
				<div className="row">
					<div className="col-md-12 title">
						<h2 className="text-center margin-bottom-10">SERVIZI</h2>
						<div className="wprt-lines style-2 custom-1">
							<div className="line-1"></div>
						</div>
					</div>

					{servizi.map((servizio) => (
						<div className="col-md-4">
							<div className="wprt-icon-box accent-background rounded icon-effect-2 icon-left">
								<div className="icon-wrap">
									<span className={`dd-icon ${servizio.icon}`}></span>
								</div>
								<div className="content-wrap">
									<h3 className="dd-title font-size-18">
										<a>{servizio.nome}</a>
									</h3>
									<p>{servizio.descrizione}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
