import React from "react";
import { ReactComponent as Bell } from "../../../assets/header/bell.svg";

export const Header = () => {
	return (
		<div>
			<div className="flex justify-between h-12 bg-white border-b-2 border-black">
				<div className="" style={{ width: 24, height: 24 }}></div>
				<div className="flex justify-items-center items-center text-center">
					헤더입니다
				</div>
				<div className="flex justify-center items-center">
					<Bell />
				</div>
			</div>
		</div>
	);
};
