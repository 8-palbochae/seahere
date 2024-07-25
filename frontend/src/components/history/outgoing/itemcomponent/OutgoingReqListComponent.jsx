import React from "react";
import OutgoingReqListItem from "./OutgoingReqListItem";
import PeriodStart from "../../main/itemcomponent/PeriodStart";
import PeriodEnd from "../../main/itemcomponent/PeriodEnd";

const OutgoingReqListComponent = ({ data, setStartDate, setEndDate }) => {
	return (
		<div className="w-full flex flex-col items-center px-2 gap-2">
			<div className="flex items-center gap-2">
				<PeriodStart setStartDate={setStartDate} />
				<span>~</span>
				<PeriodEnd setEndDate={setEndDate} />
			</div>
			{data.map((item) => (
				<OutgoingReqListItem item={item} key={item.outgoingId} />
			))}
		</div>
	);
};

export default OutgoingReqListComponent;
