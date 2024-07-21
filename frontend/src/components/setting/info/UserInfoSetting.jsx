import React from "react";
import settingIcon from "../../../constants/setting/setting.image";
import UserInfoList from "./UserInfoList";

const UserInfoSetting = () => {
	return (
		<div className="flex flex-col items-center gap-9">
			<img
				src={settingIcon.userInfoImage}
				className=" w-[150px] h-[150px]  rounded-full"
				alt="프로필 이미지"
			/>
			<div>
				<UserInfoList />
			</div>
		</div>
	);
};

export default UserInfoSetting;
