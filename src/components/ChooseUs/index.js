import React, { useState } from "react";

import { faqs, gallery } from "site-structure.js";

const ChooseUs = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [selectedImage, setSelectedImage] = useState(gallery[0]);

	return (
		<section id="chooseus-section" className="wprt-section">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h2>PERCHE' SCEGLIERCI?</h2>
						<div className="wprt-lines style-1 custom-3 title">
							<div className="line-1"></div>
							<div className="line-2"></div>
						</div>

						{faqs.map((faq, index) => (
							<div
								key={index}
								className={`wprt-toggle style-1 ${activeIndex === index ? "active" : ""}`}
								onClick={() => setActiveIndex(index)}>
								<h3 className="toggle-title">{faq.titolo}</h3>
								<div
									className="toggle-content"
									style={{
										opacity: activeIndex === index ? "1" : "0",
										display: activeIndex === index ? "block" : "none",
										transition: "opacity .32s ease-in-out",
									}}>
									{faq.testo}
								</div>
							</div>
						))}
					</div>

					<div className="col-md-6">
						<h2>GUARDACI IN AZIONE</h2>
						<div className="wprt-lines style-1 custom-3 title">
							<div className="line-1"></div>
							<div className="line-2"></div>
						</div>

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

					<div className="col-md-12">
						<div className="wprt-spacer"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ChooseUs;
