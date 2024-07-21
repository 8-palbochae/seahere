import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginChoice from "./pages/LoginChoice";
import Layout from "./pages/layout/Layout";
import Setting from "./pages/Setting";
import Main from "./pages/Main";
import History from "./pages/History";
import InventoryView from "./pages/InventoryView";
import Income from "./pages/Income";
import SignUpChoice from "./pages/SignUpChoice";
import MainSetting from "./components/setting/main/MainSetting";
import OutgoingList from "./pages/OutgoingList";
import QrInfo from "./components/setting/qrinfo/QrInfo";
import UserInfoSetting from "./components/setting/userinfo/UserInfoSetting";
import OutgoingReqList from "./pages/OutgoingReqList";

function App() {
	return (
		<div className="flex justify-center items-center bg-gray-100 jsu">
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/setting" element={<Setting />}>
							<Route path="" element={<MainSetting />} />
							<Route
								path="user-info"
								element={<UserInfoSetting />}
							/>
							<Route path="qr-info" element={<QrInfo />} />
						</Route>
						<Route path="/main" element={<Main />} />
						<Route path="/history" element={<History />} />
						<Route path="/inventory" element={<InventoryView />} />
						<Route path="/incoming" element={<Income />} />
						<Route path="/outgoing" />
						<Route
							path="/outgoingList"
							element={<OutgoingList />}
						/>
						<Route path="/outgoingReqList" element={<OutgoingReqList/>} />
						<Route path="/incomingList" element={<OutgoingReqList />} />
					</Route>
					<Route path="/" element={<LoginChoice />} h />
					<Route path="/signup" element={<SignUpChoice />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
