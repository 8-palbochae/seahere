import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginChoice from "./pages/LoginChoice";
import Layout from "./pages/layout/Layout";
import Setting from "./pages/Setting";
import Main from "./pages/Main";
import History from "./pages/History";

function App() {
	return (
		<div className="flex justify-center items-center bg-gray-100 jsu">
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/setting" element={<Setting />} />
						<Route path="/main" element={<Main />} />
						<Route path="/history" element={<History />} />
						<Route path="/inventory" />
						<Route path="/incoming" />
						<Route path="/outgoing" />
						<Route path="/setting" />
					</Route>
					<Route path="/" element={<LoginChoice />} h />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
