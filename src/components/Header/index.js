import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import logo from "images/logo_white.png";
import logo_black from "images/logo_black.png";

import { routes } from "routes.js";
import { homePage, progetti, contatti } from "site-structure.js";

let location;

const Header = () => {
	const [isFixed, setIsFixed] = useState(false);
	const [elementY, setElementY] = useState(null);
	const [menuOpen, setMenuOpen] = useState(false);
	const [openSubMenu, setOpenSubMenu] = useState(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsFixed(true);
			} else {
				setIsFixed(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [elementY]);

	location = useLocation();

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const toggleSubMenu = (key) => {
		setOpenSubMenu(openSubMenu === key ? null : key);
	};

	const handleLinkClick = () => {
		setMenuOpen(false);
	};

	const renderRoutes = () =>
		routes.map((route) => {
			if (route.visible) {
				return (
					<li
						className={`menu-item ${
							location.pathname === route.route ? "current-menu-item" : ""
						} ${route.route === "/portfolio" ? "menu-item-has-children" : ""}`}
						key={route.key}>
						<Link to={route.route} key={route.key + "-link"}>
							{route.pageName}
						</Link>
						{route.route === "/portfolio" && (
							<ul className="sub-menu">
								{progetti.map((progetto) => (
									<li key={progetto.key} className="menu-item">
										<Link to={progetto.route}>{progetto.nome}</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				);
			}
			return null;
		});

	const renderMobileRoutes = () =>
		routes.map((route) => {
			if (route.visible) {
				const isActive = openSubMenu === route.key;
				return (
					<li
						className={`menu-item ${
							location.pathname === route.route ? "current-menu-item" : ""
						} ${route.route === "/portfolio" ? "menu-item-has-children" : ""}`}
						key={route.key}>
						<Link to={route.route} key={route.key + "-link"} onClick={handleLinkClick}>
							{route.pageName}
						</Link>
						{route.route === "/portfolio" && (
							<>
								<span
									className={`arrow ${isActive ? "active" : ""}`}
									onClick={() => toggleSubMenu(route.key)}></span>
								<ul className="sub-menu" style={{ display: isActive ? "block" : "none" }}>
									{progetti.map((progetto) => (
										<li key={progetto.key} className="menu-item">
											<Link to={progetto.route} onClick={handleLinkClick}>
												{progetto.nome}
											</Link>
										</li>
									))}
								</ul>
							</>
						)}
					</li>
				);
			}
			return null;
		});

	return (
		<div id="site-header-wrap">
			<div id="top-bar" className="style-2">
				<div id="top-bar-inner" className="container">
					<div className="top-bar-inner-wrap">
						<div className="top-bar-socials">
							<div className="inner">
								<span className="icons">
									<a href={contatti.instagram} target="_blank" title="Instagram">
										<span className="fa fa-instagram" aria-hidden="true"></span>
									</a>
									<a href={contatti.facebook} target="_blank" title="Facebook">
										<span className="fa fa-facebook" aria-hidden="true"></span>
									</a>
								</span>
							</div>
						</div>
						<div className="top-bar-content">
							<span id="top-bar-text">
								<i className="fa fa-phone-square"></i>
								{contatti.phone}
								<i className="fa fa-envelope"></i>
								{contatti.mail}
								<i className="fa fa-clock-o"></i>
								{contatti.hours}
							</span>
						</div>
					</div>
				</div>
			</div>

			<header
				id="site-header"
				className={`header-front-page ${
					location.pathname === homePage.route ? "style-1" : "style-1"
				} ${isFixed ? "is-sticky style-1" : ""}`}>
				<div id="site-header-inner" className="container">
					<div className="wrap-inner">
						<div id="site-logo" className="clearfix">
							<div id="site-logo-inner">
								<Link
									to="/"
									title="Construction"
									rel="home"
									className="main-logo"
									onClick={handleLinkClick}>
									<img
										src={
											location.pathname === "/home" ? logo_black : isFixed ? logo_black : logo_black
										}
										alt="Impresa Umberto Cremascoli"
										width="200"
										height="30"
									/>
								</Link>
							</div>
						</div>

						<div
							className={`mobile-button ${menuOpen ? "active" : ""}`}
							onClick={toggleMenu}>
							<span></span>
						</div>

						<nav id="main-nav" className="main-nav">
							<ul className="menu">{renderRoutes()}</ul>
						</nav>

						<nav
							id="main-nav-mobi"
							className="main-nav"
							style={{ display: menuOpen ? "block" : "none" }}>
							<ul className="menu">{renderMobileRoutes()}</ul>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
