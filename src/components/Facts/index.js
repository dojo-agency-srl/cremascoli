import React, { useEffect, useRef } from "react";
import { facts } from "site-structure.js";
import bgImg from "images/facts.png";

const Facts = () => {
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
		<section
			id="facts-section"
			className="wprt-section facts parallax"
			ref={boxRef}
			style={{ backgroundImage: `url(${bgImg})` }}>
			<div className="container">
				<div className="row">
					<div className="col-md-4"></div>
					<div className="col-md-8">
						<div className="wprt-spacer"></div>
						<h2 className="text-right text-center-mobile text-white font-family-extend font-size-25 margin-bottom-0 line-height-normal letter-spacing-1px">
							Impresa Umberto Cremascoli
						</h2>
						<h3 className="text-right text-center-mobile text-white font-family-heading font-size-70 line-height-normal margin-bottom-20 letter-spacing-1px">
							<strong>IN NUMERI</strong>
						</h3>
					</div>
					<div className="col-md-6"></div>
					{facts.map((fact, index) => (
						<div key={index} className="col-md-3">
							<div className="wprt-counter text-right white-type has-plus">
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
		</section>
	);
};

export default Facts;
