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
import SignUpChoice from './pages/loginSignup/SignUpChoice';
import SignUpInfo from "./pages/loginSignup/SignUpInfo";
import SignUpBroker from "./pages/loginSignup/SignUpBroker";
import SignUpBrokerChoice from "./pages/loginSignup/SignUpBrokerChoice";

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
					<Route path="/signup-choice" element={<SignUpChoice/>}/>
					<Route path="/signup-B-choice" element={<SignUpBrokerChoice/>}/>
					<Route path="/signup-B-info" element={<SignUpBroker/>}/>
					<Route path="/signup-info" element={<SignUpInfo/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
