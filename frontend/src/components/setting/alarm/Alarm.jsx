import React from "react";
import Period from "./Period";
import AlarmList from "./AlarmList";

const Alarm = () => {
	return (
		<div className="flex flex-col m-3 gap-3">
			<Period />
			<hr className="bg-blue-300 " />
			<AlarmList />
			<hr className="bg-blue-300 " />
			<button className="self-center rounded-[10px] p-2 bg-blue-600 text-white w-1/3">
				{"품목 추가"}
			</button>
			<button className="self-center rounded-[10px] p-2 bg-blue-600 text-white w-full">
				{"보내기"}
			</button>
		</div>
	);
};

export default Alarm;
