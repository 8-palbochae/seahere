import React from "react";
import QrItem from "./QrItem";
import settingIcon from "../../../constants/setting/setting.image";

const QrList = () => {
	return (
		<div className="flex flex-col items-center gap-3 w-full p-2">
			<QrItem qrCode={settingIcon.qrCode} />
			<QrItem qrCode={settingIcon.qrCode} />
			<QrItem qrCode={settingIcon.qrCode} />
			<QrItem qrCode={settingIcon.qrCode} />
			<QrItem qrCode={settingIcon.qrCode} />
			<QrItem qrCode={settingIcon.qrCode} />
			<QrItem qrCode={settingIcon.qrCode} />
			<QrItem qrCode={settingIcon.qrCode} />
			<QrItem qrCode={settingIcon.qrCode} />
		</div>
	);
};

export default QrList;
