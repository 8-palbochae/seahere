import React from "react";
import MainImage from "../../../../constants/main/main.image";
const PasswordChange = () => {
	return (
		<div className="flex justify-center w-full h-full">
			<div className="flex flex-col items-center justify-between ">
				<img
					className=" w-1/3 h-1/3  object-cover"
					src={MainImage.mainLogo}
					alt="Main Logo"
				/>

				<img
					className="m-2 w-1/3 h-1/3  object-cover"
					src={MainImage.background}
				/>
			</div>
		</div>
	);
};

export default PasswordChange;
