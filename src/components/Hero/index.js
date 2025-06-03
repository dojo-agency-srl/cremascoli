import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./hero.css";

import bgImg from "images/hero.png";

import { chisiamoPage } from "site-structure.js";

export default function HeroSection() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const titles = ["IMPRESA", "UMBERTO", "CREMASCOLI"];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			id="hero-section"
			style={{
				backgroundImage: `url(${bgImg})`,
			}}>
			<div className="hero-content">
				<div className="hero-title scroll">
					{titles.map((title, index) => (
						<h1 key={index} className={`title ${index === currentIndex ? "visible" : ""}`}>
							{title}
						</h1>
					))}
				</div>

				<div className="hero-text">
					<p>
						La nostra impresa garantisce che il tuo progetto venga realizzato nei tempi e
						con la massima professionalità.
					</p>
				</div>

				<div className="hero-button">
					<Link className="wprt-button rounded-3px" to={chisiamoPage.route}>
						SCOPRI DI PIU'
					</Link>
				</div>
			</div>

			<a className="arrow scroll-target" href="#services-section"></a>
		</div>
	);
}
