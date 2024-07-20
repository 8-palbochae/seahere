import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/common/header/Header";
import Bottom from "../../components/common/bottom/Bottom";

const Layout = () => {
	return (
		<div className=" flex flex-col gap-8 w-full max-w-4xl bg-white shadow-md min-h-screen justify-between">
			<div>
				<Header />
			</div>
			<div className="flex-grow overflow-y-auto">
				<Outlet className="h-full" />
			</div>
			<div>
				<Bottom />
			</div>
		</div>
	);
};

export default Layout;
