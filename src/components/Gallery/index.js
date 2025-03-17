import React, { useState, useRef, useEffect } from "react";

import { gallery, facts } from "site-structure.js";

const Gallery = () => {
	const [selectedImage, setSelectedImage] = useState(gallery[0]);

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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat.
							Integer blandit nulla quis fermentum hendrerit. Vestibulum eu libero volutpat,
							portas quam acc, tempus sem. Donec sodales quam id lorem lobortis, vitae
							interdum nisl vehicula. Pellentesque habitant morbi tristique senectus et netus
							et malesuada fames ac turpis egestas. Etiam suscipit, elit quis facilisis
							dictum, diam justo volutpat dui. Cras id justo eget sapien scelerisque lacinia
							non a eros. In a volutpat magna. Vivamus pretium urna at condimentum porta.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec erat erat.
							Vestibulum eu libero volutpat, portas quam acc, tempus sem. Cras id justo eget
							sapien scelerisque lacinia non a eros. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Quisque nec erat erat.
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
						<div className="wprt-galleries galleries w-570px">
							<div id="wprt-slider">
								<img src={selectedImage.image} alt={selectedImage.alt} />
							</div>

							<div id="wprt-carousel">
								<ul className="slides">
									{gallery.map((image) => (
										<li onClick={() => setSelectedImage(image)} style={{ cursor: "pointer" }}>
											<img src={image.image} alt={image.alt} />
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
