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
import SignUp from "./pages/SignUp.jsx";
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
import Trade from "./pages/Trade";
import BrokerDetailPage from "./pages/BrokerDetailPage";
import Cart from "./pages/Cart";
import BrokerMain from "./components/main/broker/BrokerMain";

function App() {
	return (
		<div className="flex justify-center items-center bg-gray-100 jsu">
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/setting" element={<Setting />}>
							<Route path="" element={<MainSetting />} />
							<Route path="user" element={<UserInfoSetting />} /> {/*users */}
							<Route path="qr" element={<QrInfo />} />
							<Route
								path="alarm-history"
								element={<AlarmHistory />}
							/>
							<Route
								path="password-change"
								element={<PasswordChange />} 
							/> {/* password */}
							<Route path="team" element={<TeamInfo />} />{/* teams */}
							<Route
								path="inventory"
								element={<InventorySetting />}
							/>{/* inventories */}
							<Route path="alarm" element={<Alarm />} /> {/* alarms */}
						</Route>
						<Route path="/main" element={<Main />}>
							<Route path="" element={<BrokerMain />} />
						</Route>
						<Route path="/history" element={<History />} /> {/* histories */}
						<Route path="/inventory" element={<InventoryView />} /> {/* inventories */}

						<Route path="/trade" element={<Trade />} /> {/* trades */}
						<Route
							path="/broker/:id"
							element={<BrokerDetailPage />}
						/> {/* /brokers/:id */}
						<Route path="/cart" element={<Cart />} /> {/* carts */}

						<Route path="/incoming" element={<Income />} />
						<Route
							path="/outgoingList"
							element={<OutgoingList />}
						/>{/* /outgoings */}
						<Route
							path="/outgoingReqList"
							element={<OutgoingReqList />}
						/>{/* /outgoings/requests */}
						<Route
							path="/incomingList"
							element={<IncomingList />}
						/>
						<Route path="/adjustList" element={<AdjustList />} /> {/* /adjusts */}
						<Route
							path="/alarm-history"
							element={<AlarmHistory />}
						/>
					</Route>
					<Route path="/login" element={<LoginChoice />} /> {/* /login */} 
					<Route path="/signup" element={<SignUp />}>
						<Route path="" element={<SignUpInfo />} /> 
						<Route path="broker" element={<SignUpBroker />} /> 
						<Route path="choice" element={<SignUpChoice />} /> {/* /signup/choice */}
						<Route path="broker-choice" element={<SignUpBrokerChoice />} /> {/* /signup/broker-choice */}
					</Route> {/* /signup */}

				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
