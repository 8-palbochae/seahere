import React from "react";
import AlarmListItem from "./AlarmListItem";
import { Checkbox } from "antd";

const AlarmList = () => {
	return (
		<div className="flex flex-col gap-2 w-full ">
			<div>{"품목"}</div>
			<div className="flex flex-col gap-2 overflow-auto max-h-[500px] m-3">
				<AlarmListItem />
				<AlarmListItem />
				<AlarmListItem />
				<AlarmListItem />
				<AlarmListItem />
				<AlarmListItem />
				<AlarmListItem />
				<AlarmListItem />
				<AlarmListItem />
				<AlarmListItem />
				<AlarmListItem />
			</div>
		</div>
	);
};

export default AlarmList;
