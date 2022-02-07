import React from "react";
import styled from "styled-components";
import Department from "./pages/Department";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} exact />
			<Route path="/department" element={<Department />} exact />
		</Routes>
	);
};

export default App;
