import React from "react";
import { ReactComponent as RightArrow } from "../../assets/setting/right-arrow-icon.svg";

const SettingItem = ({ type }) => {
	return (
		<div className="flex p-8 justify-between w-full h-3/4 border-2 items-center rounded-lg border-bottom-style:solid] border-blue-300 hover:bg-blue-300 active:bg-blue-500">
			{type}
			<RightArrow />
		</div>
	);
};

export default SettingItem;
