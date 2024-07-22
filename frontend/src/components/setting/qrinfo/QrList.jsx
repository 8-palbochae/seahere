import React, { useState } from "react";
import QrItem from "./QrItem";
import settingIcon from "../../../constants/setting/setting.image";
import { Modal } from "antd";

const QrList = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleClose = () => {
		setIsModalOpen(false);
	};

	const onClickModalClose = () => {
		setIsModalOpen(false);
	};
	return (
		<div className="flex flex-col items-center gap-3 w-full  p-2">
			<Modal
				title="Qr 이미지 전송"
				open={isModalOpen}
				footer={null}
				maskClosable={true}
				onCancel={handleClose}
			>
				<div className="flex flex-col gap-2">
					<hr />
					<button
						onClick={onClickModalClose}
						className="bg-gray-300 rounded-[20px] p-2"
					>
						{"이메일로 이미지 보내기"}
					</button>
					<button
						onClick={onClickModalClose}
						className="bg-gray-300 rounded-[20px] p-2 "
					>
						{"선택한 이미지 모두 이메일로 보내기"}
					</button>
				</div>
			</Modal>
			<QrItem qrCode={settingIcon.qrCode} onClick={showModal} />
			<QrItem qrCode={settingIcon.qrCode} onClick={showModal} />
			<QrItem qrCode={settingIcon.qrCode} onClick={showModal} />
			<QrItem qrCode={settingIcon.qrCode} onClick={showModal} />
			<QrItem qrCode={settingIcon.qrCode} onClick={showModal} />
			<QrItem qrCode={settingIcon.qrCode} onClick={showModal} />
			<QrItem qrCode={settingIcon.qrCode} onClick={showModal} />
			<QrItem qrCode={settingIcon.qrCode} onClick={showModal} />
			<QrItem qrCode={settingIcon.qrCode} onClick={showModal} />
			<QrItem qrCode={settingIcon.qrCode} onClick={showModal} />
		</div>
	);
};

export default QrList;
