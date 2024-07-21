import React from "react";
import settingIcon from "../../../constants/setting/setting.image";

const UserInfoPasswordItem = ({ type }) => {
	return (
		<div className="flex justify-between gap-2 bg-blue-300 rounded-[20px] p-3">
			<div>{type}</div>
			<img src={settingIcon.rightArrowIcon} alt="오른쪽 화살표" />
		</div>
	);
};

export default UserInfoPasswordItem;
