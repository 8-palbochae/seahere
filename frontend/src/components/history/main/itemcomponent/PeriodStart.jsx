import React, { useEffect, useState } from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import userEvent from "@testing-library/user-event";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;
const dateFormat = "YYYY-MM-DD";

const PeriodStart = ({ setStartDate }) => {
	const handleStartChange = (date) => {
		setStartDate(dayjs(date).format(dateFormat));
	};
	return (
		<Space direction="vertical" size={12}>
			<DatePicker
				format={dateFormat}
				inputReadOnly={true} // 자판 비활성화
				onChange={handleStartChange}
			/>
		</Space>
	);
};

export default PeriodStart;
