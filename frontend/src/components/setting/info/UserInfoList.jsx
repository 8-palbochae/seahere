import React from "react";
import UserInfoItem from "./UserInfoItem";

const UserInfoList = () => {
	return (
		<div className="flex flex-col gap-2">
			<UserInfoItem type={"직원명"} value={"홍길동"} />
			<UserInfoItem type={"이메일"} value={"iwantgohome@naver.com"} />
			<UserInfoItem type={"회사명"} value={"스파로스"} />
			<UserInfoItem type={"사업자번호"} value={"112-00-11122"} />
		</div>
	);
};

export default UserInfoList;
