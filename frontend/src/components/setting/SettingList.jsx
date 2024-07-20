import React from "react";
import SettingItem from "./SettingItem";

const SettingList = () => {
	return (
		<div className="flex flex-col  w-full h-full">
			<div>
				<SettingItem type={"알람 보내기"} />
			</div>
			<div>
				<SettingItem type={"보낸 알람 내역"} />
			</div>
			<div>
				<SettingItem type={"재고 설정"} />
			</div>
			<div>
				<SettingItem type={"팀 설정"} />
			</div>
			<div>
				<SettingItem type={"QR 정보"} />
			</div>
		</div>
	);
};

export default SettingList;
