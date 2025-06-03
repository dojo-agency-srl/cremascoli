import React from "react";
import { Link } from "react-router-dom";

import { contattiPage } from "site-structure.js";

const Promotion = ({ testo, cta }) => {
	return (
		<section className="wprt-section promotion">
			<div className="container">
				<div className="row" style={{ display: "flex", alignItems: "center" }}>
					<div className="col-md-8">
						<div className="wprt-spacer"></div>
						<h2 className="text-white text-center-mobile font-size-20 margin-bottom-0">
							{testo || "Costruttori e General contractor dal 1970"}
						</h2>
						<div className="wprt-spacer"></div>
					</div>

					<div className="col-md-4">
						<div className="text-right text-center-mobile">
							<Link to={contattiPage.route} className="wprt-button white rounded-3px">
								{cta || "CHIEDI UN PREVENTIVO"}
							</Link>
						</div>
						<div className="wprt-spacer"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Promotion;
