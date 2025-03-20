import React from "react";
import Hero from "components/Hero";
import Promotion from "components/Promotion";
import Services from "components/Services";
import Works from "components/Works";
import ChooseUs from "components/ChooseUs";
import Offer from "components/Offer";
import Facts from "components/Facts";

const Home = () => {
	return (
		<>
			<Hero />
			<Promotion />
			<Services />
			<Works />
			<ChooseUs />
			<Offer />
			<Facts />
		</>
	);
};

export default Home;
