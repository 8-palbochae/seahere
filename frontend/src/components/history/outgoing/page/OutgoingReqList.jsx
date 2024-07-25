import React, { useEffect, useState } from "react";
import OutgoingReqListComponent from "../itemcomponent/OutgoingReqListComponent";
import SearchInputFilter from "../../../common/SearchInputFilter";
import { getOutgoingReqList } from "../../../../api/outgoing/outgoingApi";
import { useQuery } from "@tanstack/react-query";

const OutgoingReqList = () => {
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const [search, setSearch] = useState();
	useEffect(() => {
		console.log(startDate);
		console.log(endDate);
		console.log(search);
	});
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
				<SearchInputFilter setSearch={setSearch} />
				<OutgoingReqListComponent
					data={data}
					setStartDate={setStartDate}
					setEndDate={setEndDate}
				/>
			</div>
		</div>
	);
};

export default OutgoingReqList;
