import React from "react";
import AlarmListItem from "./AlarmListItem";
import { Checkbox } from "antd";

const AlarmList = () => {
	return (
		<div className="flex flex-col gap-2 w-full">
			<div>{"품목"}</div>
			<AlarmListItem />
			<AlarmListItem />
			<AlarmListItem />
			<AlarmListItem />
			<AlarmListItem />
			<AlarmListItem />
		</div>
	);
};

export default AlarmList;
