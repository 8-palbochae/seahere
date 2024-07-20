import React from 'react';
import {ReactComponent as Outgoing} from "../../assets/navigator/outgoing-icon.svg"
import {ReactComponent as Incoming} from "../../assets/navigator/incoming-icon.svg"
import {ReactComponent as Adjust} from "../../assets/navigator/adjust-icon.svg"


const HistoryListItem = ({type}) => {

  // 아이콘 매핑 객체
  const iconMap = {
    출고: <Outgoing className="w-7 h-7" style={{ marginLeft: '20px', marginTop:'2px'}} />,
    입고: <Incoming className="w-7 h-7" style={{ marginLeft: '20px', marginTop:'2px' }} />,
    조정: <Adjust className="w-7 h-7" style={{ marginLeft: '20px',marginTop:'2px' }} />,
};

// 선택된 아이콘
const icon = iconMap[type];
    return (
        
            <div className="flex flex-col justify-center w-full">
                <div className="relative w-[376px] h-[159px] bg-blue-300 rounded-[20px] border-2 border-gray-300">
                <div className="flex flex-col">
                  <div className="absolute w-[196px] h-8 top-[7px] left-2 bg-white rounded-[20px]">
                  {icon}
                          <div className="w-[109px] top-[7px] left-[42px] text-base whitespace-nowrap absolute text-black text-center tracking-[0] leading-[normal]">
                              {type}
                          </div>
                   </div>
                      
                    <div className="absolute w-[360px] h-[99px] top-12 left-2 bg-[100%_100%]">
                          <div className="absolute w-[311px] h-[53px] top-[22px] left-[25px] bg-[#d9d9d9] rounded-[10px]" />
                          <div className="absolute w-[311px] h-[53px] top-[22px] left-[25px] bg-[#d9d9d9] rounded-[10px]" />
                          <div className="absolute w-[1px] h-[39px] top-[30px] left-1/2 transform -translate-x-1/2 bg-gray-500"></div>
                          <div className="absolute w-[107px] top-[35px] left-[46px] text-xl text-black text-center tracking-[0] leading-[normal]">
                              5 품목
                          </div>
                          <div className="w-[107px] top-[35px] left-[195px] text-xl absolute text-black text-center tracking-[0] leading-[normal]">
                              16 개
                          </div>
                      </div>
                  </div>
                </div>
            
                </div>
    );
};

export default HistoryListItem;
