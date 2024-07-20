import React from "react";
import SettingItem from "./SettingItem";
import settingIcon from "../../../constants/setting/setting.image";

const SettingList = () => {
	return (
		<div className="flex flex-col  w-full h-full">
			<div>
				<SettingItem type={"알람 보내기"} svg={settingIcon.sendIcon} />
			</div>
			<div>
				<SettingItem
					type={"보낸 알람 내역"}
					svg={settingIcon.alarmHistoryIcon}
				/>
			</div>
			<div>
				<SettingItem
					type={"재고 설정"}
					svg={settingIcon.inventoryIcon}
				/>
			</div>
			<div>
				<SettingItem type={"팀 설정"} svg={settingIcon.teamIcon} />
			</div>
			<div>
				<SettingItem type={"QR 정보"} svg={settingIcon.qrIcon} />
			</div>
			<div>
				<SettingItem type={"로그아웃"} svg={settingIcon.logoutIcon} />
			</div>
		</div>
	);
};

export default SettingList;
