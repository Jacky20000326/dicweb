import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyled } from "./components/componentStyled/GlobalStyled";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";

// 設定全域所需要使用的主題樣式
// import { ThemeProvider } from "styled-components";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<GlobalStyled />
			<Nav></Nav>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
