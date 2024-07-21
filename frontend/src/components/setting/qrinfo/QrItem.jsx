import React from "react";
import { Checkbox } from "antd";
import settingIcon from "../../../constants/setting/setting.image";

const QrItem = ({ qrCode }) => {
	return (
		<div className="flex flex-col bg-[#2536eb] rounded-[20px] p-2 gap-3">
			<div className="flex items-center gap-4">
				<div className="bg-white p-2  rounded-[20px] w-2/5">
					{"광어 / 활어"}
				</div>
				<div>
					<Checkbox />
				</div>
				<div className="flex-grow flex justify-end">
					<img src={settingIcon.moreIcon} alt="more-icon" />
				</div>
			</div>
			<div className="bg-white rounded-[20px] p-2">
				<img src={qrCode} />
			</div>
		</div>
	);
};

export default QrItem;
