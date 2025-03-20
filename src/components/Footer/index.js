import React from "react";
import { Link } from "react-router-dom";

import logo from "images/pittogramma.png";

import { routes } from "routes.js";
import { contatti } from "site-structure.js";

const Footer = () => {
	const renderRoutes = () =>
		routes.map((route) => {
			if (route.visible) {
				return (
					<>
						<li className="style-2">
							<Link to={route.route}>{route.pageName}</Link>
						</li>
					</>
				);
			}

			return null;
		});

	return (
		<>
			<footer id="footer">
				<div id="footer-widgets" className="container style-1">
					<div className="row">
						<div className="col-md-4">
							<div className="widget widget_text">
								<h2 className="widget-title">
									<span>ABOUT US</span>
								</h2>
								<div className="textwidget">
									<img
										width={80}
										src={logo}
										alt="image"
										className="margin-top-5 margin-bottom-25"
									/>
									<p>
										Costruire non è solo un lavoro. Per noi di Impresa Umberto Cremascoli è una
										passione. Ad ogni progetto che realizziamo fissiamo l’asticella della qualità
										sempre più in alto e offriamo alle persone il meglio dell’industria, con amore
										per quello che facciamo per rendere le visioni dei clienti una realtà.
									</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="widget widget_links">
								<h2 className="widget-title">
									<span>COMPANY LINKS</span>
								</h2>
								<ul className="wprt-links clearfix col2">{renderRoutes()}</ul>
							</div>
						</div>

						<div className="col-md-4">
							<div className="widget widget_information">
								<h2 className="widget-title">
									<span>INFO UTILI</span>
								</h2>
								<ul className="style-2">
									<li className="address clearfix">
										<span className="hl">Indirizzo:</span>
										<span className="text">{contatti.indirizzo}</span>
									</li>
									<li className="phone clearfix">
										<span className="hl">Telefono:</span>
										<span className="text">{contatti.phone}</span>
									</li>
									<li className="email clearfix">
										<span className="hl">E-mail:</span>
										<span className="text">{contatti.mail}</span>
									</li>
								</ul>
							</div>

							<div className="widget widget_socials">
								<div className="socials">
									<a target="_blank" href={contatti.instagram}>
										<i className="fa fa-instagram"></i>
									</a>
									<a target="_blank" href={contatti.facebook}>
										<i className="fa fa-facebook"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div id="bottom" className="clearfix style-1">
				<div id="bottom-bar-inner" className="wprt-container">
					<div className="bottom-bar-inner-wrap">
						<div className="bottom-bar-content">
							<div id="copyright">
								COPYRIGHT &copy; {new Date().getFullYear()} | IMPRESA UMBERTO CREMASCOLI SRL |
								MADE BY{" "}
								<a href="https://www.dojoagency.it" target="_blank">
									DOJO AGENCY
								</a>
							</div>
						</div>

						<div className="bottom-bar-menu">
							<ul className="bottom-nav">
								<li>
									<a href="#/">PRIVACY POLICY</a>
								</li>
								<li>
									<a href="#/">COOKIE POLICY</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
