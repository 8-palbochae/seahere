import React from 'react';
import { DatePicker } from 'antd';
import PeriodSetting from "./PeriodStart";// antd 스타일 시트 import
import dayjs from 'dayjs';
import PeriodStart from './PeriodStart';
import PeriodEnd from './PeriodEnd';

const { RangePicker } = DatePicker;

function Period() {
  return (
    <div className="flex flex-col items-center space-y-4 w-full mt-3">
      <div className="flex w-full justify-center space-x-6">
      <PeriodStart /><span>~</span> <PeriodEnd />
      </div>
      <div className="flex w-full justify-center space-x-4 px-4">
        <button className="flex-grow bg-gray-100 text-black py-2 px-4 rounded">1일</button>
        <button className="flex-grow bg-gray-100 text-black py-2 px-4 rounded">일주일</button>
        <button className="flex-grow bg-gray-100 text-black py-2 px-4 rounded">한 달</button>
      </div>
      <div className="flex w-full justify-center space-x-4 px-4">
        <button className="flex-grow bg-gray-100 text-black py-2 px-4 rounded">조회</button>
      </div>
    </div>
  );
}

export default Period;
