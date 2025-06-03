import React, { useState, useRef, useEffect } from "react";
import GallerySlideshow from "components/GallerySlideshow";

import { gallery, facts } from "site-structure.js";

const Gallery = () => {
	const boxRef = useRef(null);
	const countersRef = useRef([]);

	useEffect(() => {
		const startCounting = (counterElement, target) => {
			let count = 1;
			const increment = Math.ceil(target / 100);

			const interval = setInterval(() => {
				if (count < target) {
					count += increment;
					counterElement.innerText = Math.min(count, target);
				} else {
					clearInterval(interval);
				}
			}, 10);
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry, index) => {
					if (entry.isIntersecting) {
						const counterElement = countersRef.current[index];
						if (counterElement) {
							const target = parseInt(counterElement.dataset.target, 10);
							startCounting(counterElement, target);
						}
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.5 }
		);

		countersRef.current.forEach((counter) => {
			if (counter) observer.observe(counter);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<section id="chooseus-section" className="wprt-section" ref={boxRef}>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="wprt-spacer"></div>
					</div>

					<div className="col-md-6">
						<h2 className="line-height-normal margin-bottom-10">LA NOSTRA STORIA</h2>
						<div className="wprt-lines style-1 custom-3 title">
							<div className="line-1"></div>
							<div className="line-2"></div>
						</div>

						<p className="margin-bottom-25">
							<b>Costruire con impegno</b> è il motto che ha guidato l’IMPRESA UMBERTO
							CREMASCOLI SRL dal suo nascere, quasi mezzo secolo fa, ad oggi. È infatti nel
							1970 che il Geom. Umberto Cremascoli fonda l’omonima impresa di cui ancora oggi
							è titolare, accompagnato dal 2007 dal figlio Ing. Daniele. L'Impresa opera su
							tutto il territorio Lodigiano sia nel settore pubblico che privato,
							distinguendosi particolarmente per l'attenzione ai dettagli e la qualità
							costruttiva. I punti di forza sono, appunto, la qualità del prodotto finale, la
							presenza in cantiere e l'attenzione al cliente.
						</p>
						<div className="row">
							{facts.map((fact, index) => (
								<div className="col-md-6">
									<div className="wprt-counter text-center has-plus">
										<div
											className="number"
											ref={(el) => (countersRef.current[index] = el)}
											data-target={fact.numero}>
											0
										</div>
										<div className="text">{fact.titolo}</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="col-md-6">
						<GallerySlideshow gallery={gallery} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
