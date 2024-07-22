import React from "react";

const UserInfoItem = ({ type, value }) => {
	return (
		<div className="flex justify-between gap-2 bg-blue-300 rounded-[20px] p-3">
			<div>{type}</div>
			<div>{value}</div>
		</div>
	);
};

export default UserInfoItem;
