import React from "react";
import GallerySlideshow from "components/GallerySlideshow";

import { gallery } from "site-structure.js";

const ProjectDetail = ({ progetto }) => {
	return (
		<section id="projectdetail-section" className="wprt-section">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div
							className="wprt-spacer"
							data-desktop="0"
							data-mobi="40"
							data-smobi="40"></div>

						<h3 className="line-height-normal margin-bottom-10">PANORAMICA</h3>
						<div className="wprt-lines style-1 custom-3" style={{ marginBottom: 20 }}>
							<div className="line-1"></div>
							<div className="line-2"></div>
						</div>

						<div dangerouslySetInnerHTML={{ __html: progetto.descrizione }}></div>

						<div className="wprt-lines style-1 custom-4">
							<div className="line-1"></div>
						</div>

						<ul className="wprt-list style-2 accent-color margin-top-30 margin-bottom-25">
							<li>
								<strong>Cliente:</strong> {progetto.cliente}
							</li>
							<li>
								<strong>Architetto:</strong> {progetto.architetto}
							</li>
							<li>
								<strong>Budget:</strong> {progetto.budget}
							</li>
						</ul>
					</div>

					<div className="col-md-6">
						<GallerySlideshow gallery={progetto.gallery} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectDetail;
