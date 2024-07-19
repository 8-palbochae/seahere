import React from "react";
import "./App.css";
import { Header } from "./compoents/common/Header";

function App() {
	return (
		<div className="flex justify-center items-center bg-gray-100">
			<div className="w-full max-w-4xl bg-white p-8 shadow-md p-0  min-h-screen">
				<div>
					<Header />
				</div>
				<div>
					<h1 className="text-2xl font-bold mb-4">Hello, Musinsa!</h1>
					<p className="text-gray-700">
						This is your main content area.
					</p>
				</div>
			</div>
			
		</div>
	);
}

export default App;
