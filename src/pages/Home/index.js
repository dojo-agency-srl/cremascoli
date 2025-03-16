import React from "react";
import Header from "components/Header";
import Hero from "components/Hero";
import Promotion from "components/Promotion";
import Services from "components/Services";
import Works from "components/Works";
import ChooseUs from "components/ChooseUs";
import Offer from "components/Offer";
import Facts from "components/Facts";
import Footer from "components/Footer";

const Home = () => {
	return (
		<>
			<Header />
			<Hero />

			<div id="main-content" class="site-main clearfix">
				<div id="content-wrap">
					<div id="site-content" class="site-content clearfix">
						<div id="inner-content" class="inner-content-wrap">
							<div class="page-content">
								<Promotion />
								<Services />
								<Works />
								<ChooseUs />
								<Offer />
								<Facts />
								<Footer />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
