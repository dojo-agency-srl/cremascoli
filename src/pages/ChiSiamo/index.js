import React, { useEffect } from "react";

import Header from "components/Header";
import Breadcrumb from "components/Breadcrumb";
import Gallery from "components/Gallery";
import Promotion2 from "components/Promotion2";
import Team from "components/Team";
import Footer from "components/Footer";

const ChiSiamo = () => {
	useEffect(() => {
		document.body.classList.remove("header-style-5");
		document.body.classList.add("header-style-1");

		return () => {
			document.body.classList.remove("header-style-1");
			document.body.classList.add("header-style-5");
		};
	}, []);

	return (
		<>
			<Header />
			<Breadcrumb page="Chi siamo" />

			<div id="main-content" class="site-main clearfix">
				<div id="content-wrap">
					<div id="site-content" class="site-content clearfix">
						<div id="inner-content" class="inner-content-wrap">
							<div class="page-content">
								<Gallery />
								<Promotion2 />
								<Team />
								<Footer />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChiSiamo;
