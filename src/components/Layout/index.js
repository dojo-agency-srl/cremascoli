import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import SEO from "components/SEO";

const Layout = ({ title, description }) => {
	return (
		<>
			<SEO title={title} description={description} />
			<Header />
			<div id="main-content" className="site-main clearfix">
				<div id="content-wrap">
					<div id="site-content" className="site-content clearfix">
						<div id="inner-content" className="inner-content-wrap">
							<div className="page-content">
								<Outlet />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
