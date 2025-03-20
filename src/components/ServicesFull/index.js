import React from "react";

import worker from "images/worker.png";

import { servizi } from "site-structure.js";

const ServicesFull = () => {
	return (
		<section id="services-full-section" className="wprt-section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2 className="text-center margin-bottom-10">COSTRUIAMO LE TUE IDEE</h2>
						<div className="wprt-lines style-2 custom-1">
							<div className="line-1"></div>
						</div>

						<p className="wprt-subtitle" style={{ margin: "24px auto 48px auto  " }}>
							Dalla progettazione alla realizzazione: soluzioni su misura per ogni esigenza.
						</p>
					</div>

					<div className="col-md-4">
						<div className="wprt-icon-box accent-background rounded icon-effect-3 icon-right">
							<div className="icon-wrap">
								<span className={`dd-icon ${servizi[0].icon}`}></span>
							</div>
							<div className="content-wrap">
								<h3 className="dd-title font-size-18">{servizi[0].nome}</h3>
								<p>{servizi[0].descrizione}</p>
							</div>
						</div>

						<div className="wprt-icon-box accent-background rounded icon-effect-3 icon-right">
							<div className="icon-wrap">
								<span className={`dd-icon ${servizi[1].icon}`}></span>
							</div>
							<div className="content-wrap">
								<h3 className="dd-title font-size-18">{servizi[1].nome}</h3>
								<p>{servizi[1].descrizione}</p>
							</div>
						</div>

						<div className="wprt-icon-box accent-background rounded icon-effect-3 icon-right">
							<div className="icon-wrap">
								<span className={`dd-icon ${servizi[2].icon}`}></span>
							</div>
							<div className="content-wrap">
								<h3 className="dd-title font-size-18">{servizi[2].nome}</h3>
								<p>{servizi[2].descrizione}</p>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="text-center">
							<img src={worker} alt="image" />
						</div>
					</div>

					<div className="col-md-4">
						<div className="wprt-icon-box accent-background rounded icon-effect-3 icon-left">
							<div className="icon-wrap">
								<span className={`dd-icon ${servizi[3].icon}`}></span>
							</div>
							<div className="content-wrap">
								<h3 className="dd-title font-size-18">{servizi[3].nome}</h3>
								<p>{servizi[3].descrizione}</p>
							</div>
						</div>

						<div className="wprt-icon-box accent-background rounded icon-effect-3 icon-left">
							<div className="icon-wrap">
								<span className={`dd-icon ${servizi[4].icon}`}></span>
							</div>
							<div className="content-wrap">
								<h3 className="dd-title font-size-18">{servizi[4].nome}</h3>
								<p>{servizi[4].descrizione}</p>
							</div>
						</div>

						<div className="wprt-icon-box accent-background rounded icon-effect-3 icon-left">
							<div className="icon-wrap">
								<span className={`dd-icon ${servizi[5].icon}`}></span>
							</div>
							<div className="content-wrap">
								<h3 className="dd-title font-size-18">{servizi[5].nome}</h3>
								<p>{servizi[5].descrizione}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesFull;
