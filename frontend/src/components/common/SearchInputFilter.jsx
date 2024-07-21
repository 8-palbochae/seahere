import React from "react";
import PropTypes from "prop-types";
import { iventoryIcon } from "../../constants/iventory/iventory.image";

const SearchInputFilter = () => {
	return (
		<div>
			<div className="flex h-11 bg-gray-100 justify-around items-center gap-3 m-2 rounded">
				<img
					className="w-8 object-cover ml-3 mr-2"
					src={iventoryIcon.searchIcon}
					alt=""
				/>
				<input
					className="w-4/5 h-8 p-2 bg-gray-200 rounded"
					type="text"
					placeholder="검색"
				/>
				<img
					className="w-8 object-cover mr-3"
					src={iventoryIcon.filterIcon}
					alt=""
				/>
			</div>
		</div>
	);
};

export default SearchInputFilter;