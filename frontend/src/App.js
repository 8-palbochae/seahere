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
import PasswordChange from "./components/setting/userinfo/password_change/PasswordChange";
import TeamInfo from "./components/setting/teaminfo/TeamInfo";
import OutgoingReqList from "./pages/OutgoingReqList"
import Trade from './pages/Trade';
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
							<Route
								path="password-change"
								element={<PasswordChange />}
							/>
							<Route path="team-info" element={<TeamInfo />} />
						</Route>
						<Route path="/main" element={<Main />} />
						<Route path="/history" element={<History />} />
						<Route path="/inventory" element={<InventoryView />} />
						<Route path="/trade" element={<Trade />} />
						<Route path="/incoming" element={<Income />} />
						<Route path="/outgoing" />
						<Route
							path="/outgoingList"
							element={<OutgoingList />}
						/>
						<Route path="/outgoingReqList" element={<OutgoingReqList />} />
					</Route>
					<Route path="/" element={<LoginChoice />} />
					<Route path="/signup" element={<SignUpChoice />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
