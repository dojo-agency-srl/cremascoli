import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Layout from "components/Layout";

import { routes } from "routes.js";

const App = () => {
	const [loading, setLoading] = useState(false);
	const location = useLocation();

	useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;

		const handleStart = () => setLoading(true);
		const handleComplete = () => setLoading(false);

		handleStart();
		setTimeout(handleComplete, 1000);

		return () => {
			handleComplete();
		};
	}, [location]);

	const getRoutes = (routes) =>
		routes.map((route) => {
			if ("collapse" in route) {
				return getRoutes(route.collapse);
			}
			if (route.route) {
				return (
					<Route exact path={route.route} element={route.component} key={route.key} />
				);
			}
			return null;
		});

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Navigate to="/home" />} />

					{getRoutes(routes)}
				</Route>
			</Routes>
		</>
	);
};

export default App;
