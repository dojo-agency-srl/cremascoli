import React from "react";
import { Link } from "react-router-dom";

import bgImg from "images/promotion2.png";

import { contattiPage } from "site-structure.js";

const Promotion2 = () => {
	return (
		<section
			id="promotion2-section"
			className="wprt-section promotion-2 parallax"
			style={{ backgroundImage: `url(${bgImg})` }}>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h3 className="text-center text-white font-family-heading font-size-30 margin-bottom-20">
							ECCELLENZA NELLE COSTRUZIONI <span className="text-accent-color">DAL 1970</span>
						</h3>
						<div className="text-center margin-top-30">
							<Link to={contattiPage.route} className="wprt-button rounded-3px">
								CHIEDI UN PREVENTIVO
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Promotion2;
