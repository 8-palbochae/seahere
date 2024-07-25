import React, { useState } from "react";
import OutgoingReqListComponent from "../itemcomponent/OutgoingReqListComponent";
import SearchInputFilter from "../../../common/SearchInputFilter";
import { getOutgoingReqList } from "../../../../api/outgoing/outgoingApi";
import { useQuery } from "@tanstack/react-query";

const OutgoingReqList = () => {
	// const [startDate, setStartDate] =
	const { data, isPending, isError, error } = useQuery({
		queryKey: ["outgoingReqList"],
		queryFn: getOutgoingReqList,
	});
	const { outgoingReqList, setOutgoingReqList } = useState(data);

	if (isPending) {
		return <div>로딩중...</div>;
	}
	console.log(data);
	return (
		<div>
			<div>
				<SearchInputFilter />

				<OutgoingReqListComponent data={data} />
			</div>
		</div>
	);
};

export default OutgoingReqList;
