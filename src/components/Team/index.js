import React from "react";

import imgUmberto from "images/umberto.png";
import imgDaniele from "images/daniele.png";

const Team = () => {
	return (
		<section id="team-section" className="wprt-section team">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2 className="margin-bottom-0">INCONTRA IL NOSTRO TEAM</h2>
						<div className="wprt-lines style-1 custom-3 title">
							<div className="line-1"></div>
							<div className="line-2"></div>
						</div>

						<div className="wprt-team arrow-style-2 has-arrows arrow60 arrow-light">
							<div id="team-wrap" className="cbp">
								<div className="cbp-item col-md-6">
									<div className="member">
										<div className="inner">
											<div className="image">
												<div className="inner">
													<img src={imgUmberto} alt="image" />
												</div>
											</div>
											<div className="texts">
												<h4 className="name">Umberto Cremascoli</h4>
												<div className="position">Titolare</div>
											</div>
										</div>
									</div>
								</div>
								<div className="cbp-item col-md-6">
									<div className="member">
										<div className="inner">
											<div className="image">
												<div className="inner">
													<img src={imgDaniele} alt="image" />
												</div>
											</div>
											<div className="texts">
												<h4 className="name">Daniele Cremascoli</h4>
												<div className="position">Titolare</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
