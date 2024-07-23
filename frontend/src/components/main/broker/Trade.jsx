import React from "react";
import MainImage from "../../../constants/main/main.image";

const Trade = () => {
	return (
		<div className="flex flex-col items-center justify-center p-3  shadow-lg rounded-[20px] gap-2">
			<div className="flex">
				<div className=" border-r border-gray-300 pr-1">
					{"도와달레이"}
				</div>
				<div className="pl-1">{"도움 요청"}</div>
			</div>
			<div>
				<img src={MainImage.helpIcon} alt="help-icon" />
			</div>
		</div>
	);
};

export default Trade;
