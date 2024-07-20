import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginChoice from "./pages/LoginChoice";
import Layout from "./pages/layout/Layout";
import Setting from "./pages/Setting";
import Main from "./pages/Main";
import History from "./pages/History";
import IventoryView from './pages/IventoryView';
import Income from './pages/Income';
import SignUpChoice from './pages/SignUpChoice';
import SignUpInfo from "./pages/SignUpInfo";

function App() {
	return (
		<div className="flex justify-center items-center bg-gray-100 jsu">
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/setting" element={<Setting />} />
						<Route path="/main" element={<Main />} />
						<Route path="/history" element={<History />} />
						<Route path="/inventory" element={<IventoryView/>} />
						<Route path="/incoming" element={<Income/>}/>
						<Route path="/outgoing" />
						<Route path="/setting" />
					</Route>
					<Route path="/" element={<LoginChoice />} h />
					<Route path="/signup" element={<SignUpChoice/>}/>
					<Route path="/business-signup" element={<SignUpChoice/>}/>
					<Route path="/signup-info" element={<SignUpInfo/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
