import React, { useState } from "react";
import GallerySlideshow from "components/GallerySlideshow";

import { faqs, gallery } from "site-structure.js";

const ChooseUs = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleToggle = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

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
								onClick={() => handleToggle(index)}>
								<h3 className="toggle-title">{faq.titolo}</h3>
								<div
									className="toggle-content"
									style={{
										opacity: activeIndex === index ? "1" : "",
										display: activeIndex === index ? "block" : "",
										height: activeIndex === index ? "auto" : "",
										transition: "opacity .32s ease-in-out, height .32s ease-in-out",
									}}>
									{faq.testo}
								</div>
							</div>
						))}
					</div>

					<div className="col-md-6 second">
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
