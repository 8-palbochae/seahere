import React from "react";
import "./App.css";
import Bottom from './components/common/bottom/Bottom';

function App() {
	return (
		<div className="flex flex-col min-h-screen bg-gray-100">
			<div className="flex flex-col flex-grow container mx-auto">
				<Bottom />
			</div>
			
		</div>
	);
}

export default App;
