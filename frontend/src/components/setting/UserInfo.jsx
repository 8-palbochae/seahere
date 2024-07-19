import React from "react";
import { ReactComponent as RightArrow } from "../../assets/setting/right-arrow.svg";

const UserInfo = () => {
	return (
		<>
			<div className="w-[365px] h-[123px] mt-8">
				<div className=" w-[369px] h-[123px] top-0 left-0">
					<div className="relative w-[365px] h-[123px] bg-white rounded-[10px] border border-solid border-[#d9d9d9]">
						<div className="absolute w-[87px] h-7 top-8 left-[100px]">
							<div className="flex">
								<div className="top-0 left-0  w-20 h-7 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-sm text-center tracking-[0] leading-[normal]">
									스파로스
								</div>
								<div>
									<RightArrow className="bv w-[9px] h-5 top-1 left-[78px]" />
								</div>
							</div>
						</div>
						<div className="absolute w-[76px] h-[76px] top-[23px] left-[15px] bg-[#d9d9d9] rounded-[38px]" />
						<div className="top-[66px] left-[99px] absolute w-20 h-7 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-sm text-center tracking-[0] leading-[normal]">
							홍길동
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default UserInfo;
