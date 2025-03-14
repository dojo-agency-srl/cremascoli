import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import { routes } from "routes.js";

let location;

const App = () => {
	const [loading, setLoading] = useState(false);
	location = useLocation();

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
				getRoutes(route.collapse);
			}

			if (route.route != undefined)
				return (
					<Route
						exact
						path={route.route}
						element={route.component}
						key={route.key}></Route>
				);
			else return;
		});

	return (
		<>
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				{getRoutes(routes)}
			</Routes>
		</>
	);
};

export default App;
