import React from "react";
import "./App.css";
import Period from "./components/Trade/Period";

function App() {
	return (
		<div className="flex justify-center items-center min-h-screen to-blue-600">
			<div className="w-full max-w-4xl bg-white p-8 shadow-md">
				<Period/>
			</div>
		</div>
	);
}

export default App;
