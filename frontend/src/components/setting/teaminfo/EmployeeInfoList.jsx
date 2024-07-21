import React from "react";
import EmployeeInfoItem from "./EmployeeInfoItem";

const EmployeeList = () => {
	return (
		<div className="flex flex-col gap-3 items-center p-3">
			<EmployeeInfoItem />
			<EmployeeInfoItem />
			<EmployeeInfoItem />
			<EmployeeInfoItem />
			<EmployeeInfoItem />
			<EmployeeInfoItem />
			<EmployeeInfoItem />
			<EmployeeInfoItem />
		</div>
	);
};

export default EmployeeList;
