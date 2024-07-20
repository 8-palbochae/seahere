import React from "react";
import headerIcon from "../../../constants/header/header.image";

export const Header = () => {
	return (
		<div>
			<div className="flex justify-between h-16 bg-white border-b-2 border-black">
				<div className="" style={{ width: 24, height: 24 }}></div>
				<div className="flex justify-items-center items-center text-center font-bold text-lg">
					헤더입니다
				</div>
				<div className="flex justify-center items-center">
					<img
						src={headerIcon.bellIcon}
						alt="종 모양 아이콘"
						className="w-6 h-6 mb-1"
					/>
				</div>
			</div>
		</div>
	);
};
