import React from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

const PeriodSetting = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      defaultValue={dayjs('2015/01/01', dateFormat)}
      format={dateFormat}
      inputReadOnly={true} // 자판 비활성화
      popupStyle={{ textAlign: 'center' }}
      />  
      </Space>
);
export default PeriodSetting;