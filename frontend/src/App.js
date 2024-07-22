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
import SignUpChoice from "./pages/loginSignup/SignUpChoice";
import SignUpBroker from "./pages/loginSignup/SignUpBroker";
import SignUpBrokerChoice from "./pages/loginSignup/SignUpBrokerChoice";
import SignUpInfo from "./pages/loginSignup/SignUpInfo";
import MainSetting from "./components/setting/main/MainSetting";
import OutgoingList from "./pages/OutgoingList";
import QrInfo from "./components/setting/qrinfo/QrInfo";
import UserInfoSetting from "./components/setting/userinfo/UserInfoSetting";
import PasswordChange from "./components/setting/userinfo/password_change/PasswordChange";
import TeamInfo from "./components/setting/teaminfo/TeamInfo";
import InventorySetting from "./components/setting/inventoryinfo/InventorySetting";

import OutgoingReqList from "./pages/OutgoingReqList";
import Alarm from "./components/setting/alarm/Alarm";
import IncomingList from "./pages/IncomingList";
import AdjustList from "./pages/AdjustList";
import AlarmHistory from "./components/common/header/AlarmHistory";
function App() {
	return (
		<div className="flex justify-center items-center bg-gray-100 jsu">
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/setting" element={<Setting />}>
							<Route path="" element={<MainSetting />} />
							<Route path="user" element={<UserInfoSetting />} />
							<Route path="qr" element={<QrInfo />} />
							<Route
								path="alarm-history"
								element={<AlarmHistory />}
							/>
							<Route
								path="password-change"
								element={<PasswordChange />}
							/>
							<Route path="team" element={<TeamInfo />} />
							<Route
								path="inventory"
								element={<InventorySetting />}
							/>
							<Route path="alarm" element={<Alarm />} />
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
						<Route
							path="/outgoingReqList"
							element={<OutgoingReqList />}
						/>
						<Route
							path="/incomingList"
							element={<IncomingList />}
						/>
						<Route path="/adjustList" element={<AdjustList />} />
						<Route
							path="/alarm-history"
							element={<AlarmHistory />}
						/>
					</Route>
					<Route path="/" element={<LoginChoice />} h />
					<Route path="/signup-choice" element={<SignUpChoice />} />
					<Route
						path="/signup-B-choice"
						element={<SignUpBrokerChoice />}
					/>
					<Route path="/signup-B-info" element={<SignUpBroker />} />
					<Route path="/signup-info" element={<SignUpInfo />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
