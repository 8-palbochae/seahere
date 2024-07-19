import React from "react";
// import headerIcon from "../../consts/header/header.image";
import { ReactComponent as Bell } from "../../../assets/header/bell.svg";

export const Header = () => {
	return (
		<div>
			<div className="flex justify-between bg-white border-b-2 border-black">
				<div
					className="flex-auto"
					style={{ width: 24, height: 24 }}
				></div>
				<div className="flex-auto justify-items-center">헤더입니다</div>
				<div>
					<Bell />
				</div>
			</div>
		</div>
	);
};
