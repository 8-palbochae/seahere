import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	LoginChoice,
	Layout,
	Setting,
	Main,
	InventoryView,
	Income,
	SignUp,
	HistoryOutlet,
	TradeView,
	Cart,
} from "./pages";
import {
	MainSetting,
	UserInfoSetting,
	QrInfo,
	PasswordChange,
	TeamInfo,
	InventorySetting,
	Alarm,
} from "./components/setting";
import {
	SignUpChoice,
	SignUpBroker,
	SignUpBrokerChoice,
	SignUpInfo,
} from "./components/login_signup";
import {
	History,
	OutgoingList,
	IncomingList,
	OutgoingReqList,
	AdjustList,
} from "./components/history";
import { TradeMain, TradeBrokerMain } from "./components/trade";
import AlarmHistory from "./components/common/header/AlarmHistory";
import BrokerMain from "./components/main/broker/BrokerMain";

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
							<Route path="adjusts" element={<AdjustList />} />
						</Route>
						<Route
							path="outgoings/requests"
							element={<OutgoingReqList />}
						/>
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
