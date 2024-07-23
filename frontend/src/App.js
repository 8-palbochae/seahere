import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginChoice from "./pages/LoginChoice";
import Layout from "./pages/layout/Layout";
import Setting from "./pages/Setting";
import Main from "./pages/Main";
import History from "./components/history/main/page/History.jsx";
import InventoryView from "./pages/InventoryView";
import Income from "./pages/Income";
import SignUp from "./pages/SignUp.jsx";
import {
	MainSetting,
	UserInfoSetting,
	QrInfo,
	PasswordChange,
	TeamInfo,
	InventorySetting,
} from "./components/setting";
import SignUpChoice from "./components/login_signup/pagecomponent/SignUpChoice.jsx";
import SignUpBroker from "./components/login_signup/pagecomponent/SignUpBroker.jsx";
import SignUpBrokerChoice from "./components/login_signup/pagecomponent/SignUpBrokerChoice.jsx";
import SignUpInfo from "./components/login_signup/pagecomponent/SignUpInfo.jsx";
import OutgoingList from "./components/history/outgoing/page/OutgoingList.jsx";

import OutgoingReqList from "./components/history/outgoing/page/OutgoingReqList.jsx";
import Alarm from "./components/setting/alarm/Alarm";
import IncomingList from "./components/history/incoming/page/IncomingList.jsx";
import AdjustList from "./components/history/adjust/page/AdjustList.jsx";
import AlarmHistory from "./components/common/header/AlarmHistory";
import Cart from "./pages/Cart";
import BrokerMain from "./components/main/broker/BrokerMain";
import TradeMain from "./components/trade/TradeMain";
import TradeView from "./pages/TradeView";
import TradeBrokerMain from "./components/trade/TradeBrokerMain";
import HistoryOutlet from "./pages/HistoryOutlet.jsx";

function App() {
	return (
		<div className="flex justify-center items-center bg-gray-100 jsu">
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/setting" element={<Setting />}>
							<Route path="" element={<MainSetting />} />
							<Route path="users" element={<UserInfoSetting />} />
							<Route path="qr" element={<QrInfo />} />
							<Route
								path="alarm-history"
								element={<AlarmHistory />}
							/>
							<Route
								path="password"
								element={<PasswordChange />}
							/>
							<Route path="teams" element={<TeamInfo />} />
							<Route
								path="inventories"
								element={<InventorySetting />}
							/>
							<Route path="alarms" element={<Alarm />} />
						</Route>
						<Route path="/main" element={<Main />}>
							<Route path="" element={<BrokerMain />} />
						</Route>
						<Route path="/histories" element={<HistoryOutlet />}>
							<Route path="" element={<History />} />
							<Route
								path="outgoings"
								element={<OutgoingList />}
							/>
							<Route
								path="incomingList"
								element={<IncomingList />}
							/>
							<Route
								path="outgoings/requests"
								element={<OutgoingReqList />}
							/>
							<Route path="adjusts" element={<AdjustList />} />
						</Route>
						<Route
							path="/inventories"
							element={<InventoryView />}
						/>

						<Route path="/trades" element={<TradeView />}>
							<Route path="" element={<TradeMain />} />
							<Route
								path="broker/:id"
								element={<TradeBrokerMain />}
							/>
						</Route>
						<Route path="/carts" element={<Cart />} />
						<Route path="/incoming" element={<Income />} />
						<Route
							path="/alarm-history"
							element={<AlarmHistory />}
						/>
					</Route>
					<Route path="/login" element={<LoginChoice />} />
					<Route path="/signup" element={<SignUp />}>
						<Route path="" element={<SignUpInfo />} />
						<Route path="broker" element={<SignUpBroker />} />
						<Route path="choice" element={<SignUpChoice />} />
						<Route
							path="broker-choice"
							element={<SignUpBrokerChoice />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
