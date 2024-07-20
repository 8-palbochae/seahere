import UserInfo from "../components/setting/UserInfo";
import SettingList from "../components/setting/SettingList";

const Setting = () => {
	return (
		<div className="flex  justify-center">
			<div className="flex flex-col justify-center items-center gap-5 w-4/5">
				<div className="flex w-full">
					<UserInfo />
				</div>
				<div className="flex w-full">
					<SettingList />
				</div>
			</div>
		</div>
	);
};

export default Setting;
