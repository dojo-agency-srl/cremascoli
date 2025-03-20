import React, { useState } from "react";
import GallerySlideshow from "components/GallerySlideshow";

import { faqs, gallery } from "site-structure.js";

const ChooseUs = () => {
	const [activeIndex, setActiveIndex] = useState(0);

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

						<GallerySlideshow gallery={gallery} />
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
