import UserInfo from "../components/setting/UserInfo";

const Setting = () => {
	return (
		<div className="flex  justify-center">
			<div className="flex flex-col">
				<div>
					<UserInfo />
				</div>
				<div>세팅화면입니다.</div>
			</div>
		</div>
	);
};

export default Setting;
