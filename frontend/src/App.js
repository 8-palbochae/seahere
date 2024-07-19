import React from "react";
import "./App.css";
import Bottom from "./components/common/bottom/Bottom";
import { Header } from './components/common/header/Header';

function App() {
	return (
		<div className="flex justify-center items-center bg-gray-100 jsu">
			<div className=" flex flex-col w-full max-w-4xl bg-white shadow-md min-h-screen justify-between">
				<div>
					<Header />
				</div>
				<div className="flex-grow">
					<h1 className="text-2xl font-bold mb-4">Hello, Musinsa!</h1>
					<p className="text-gray-700">
						This is your main content area.
					</p>
				</div>
				<div>
					<Bottom />
				</div>
			</div>
		</div>
	);
}

export default App;
