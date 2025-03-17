import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ page }) => {
	return (
		<div id="featured-title" className="clearfix featured-title-left">
			<div id="featured-title-inner" className="container clearfix">
				<div className="featured-title-inner-wrap">
					<div className="featured-title-heading-wrap">
						<h1 className="featured-title-heading">{page}</h1>
					</div>
					<div id="breadcrumbs">
						<div className="breadcrumbs-inner">
							<div className="breadcrumb-trail">
								<Link to="/" title="Home" rel="home" className="trail-begin">
									Home
								</Link>
								<span className="sep">/</span>
								<span className="trail-end">{page}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Breadcrumb;
