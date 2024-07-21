import React from "react";
import dayjs from "dayjs";
import productImg from "../../../assets/income/product.svg";

const InventoryItem = () => {
	return (
		<div
			className={
				"flex  p-1 justify-around items-center border border-blue-300 rounded-[20px] "
			}
		>
			<div className="flex flex-col justify-center items-center gap-2 ">
				<img
					className="w-10 h-10 rounded-full object-cover "
					src={productImg}
					alt="Product"
				/>
				<span className="text-gray-800">{"광어"}</span>
			</div>
			<div className="w-px h-10 bg-gray-400"></div>
			<div className="text-center font-bold text-lg text-gray-800">
				{"활어"}
			</div>
			<div className="w-px h-10 bg-gray-400"></div>
			<div className="text-center text-lg text-gray-700">{"100kg"}</div>
			<div className="w-px h-10 bg-gray-400"></div>
			<div className="text-center text-sm text-gray-500">{"50000원"}</div>
		</div>
	);
};

export default InventoryItem;
