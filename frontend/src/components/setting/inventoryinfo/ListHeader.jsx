import React from "react";
import historyIcon from "../../../constants/history/history.image";

const ListHeader = () => {
	return (
		<div className=" w-full p-3">
			<div className=" h-full flex">
				<div className="flex-1 flex items-center justify-center  border border-solid  border-[#5e5d5d]">
					{"어종"}
				</div>
				<div className="flex-1 flex items-center justify-center  border border-solid  border-[#4b4949]">
					{"분류"}
				</div>
				<div className="flex-1 flex items-center justify-center  border border-solid  border-[#4b4949]">
					{"알림설"}
					<br />
					{"정수량"}
				</div>
				<div className="flex-1 flex items-center justify-center  border border-solid  border-[#777777]">
					{"출고가격"}
					<br />
					{"(1kg)"}
				</div>
				<div className="flex items-center justify-center  border border-solid  border-[#4b4949]">
					<img src={historyIcon.sortIcon} alt="file-icon" />
				</div>
			</div>
		</div>
	);
};

export default ListHeader;
