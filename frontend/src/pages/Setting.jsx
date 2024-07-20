import { Outlet } from "react-router-dom";

const Setting = () => {
	return (
		<div className="flex flex-col justify-center pt-8">
			<Outlet />
		</div>
	);
};

export default Setting;
