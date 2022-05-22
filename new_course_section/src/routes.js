import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Explore from "./components/Explore/Explore";
import Section from "./components/Section/Section";
function routes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/courses" replace />}></Route>
				<Route path="/courses" exact strict element={<Section />}></Route>
				<Route
					path="/courses/:course_id/explore"
					exact
					strict
					element={<Explore />}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default routes;
