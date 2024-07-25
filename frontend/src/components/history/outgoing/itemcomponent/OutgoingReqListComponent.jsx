import React from "react";
import OutgoingReqListItem from "./OutgoingReqListItem";
import PeriodStart from "../../main/itemcomponent/PeriodStart";
import PeriodEnd from "../../main/itemcomponent/PeriodEnd";

const OutgoingReqListComponent = ({ data }) => {
	return (
		<div className="w-full flex flex-col items-center px-2 gap-2">
			<div className="flex items-center gap-2">
				<PeriodStart />
				<span>~</span>
				<PeriodEnd />
			</div>
			{data.map((item) => (
				<OutgoingReqListItem item={item} key={item.outgoingId} />
			))}
		</div>
	);
};

export default OutgoingReqListComponent;
