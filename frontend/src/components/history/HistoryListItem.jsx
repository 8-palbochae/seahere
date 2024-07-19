import React from 'react';

const HistoryListItem = ({type}) => {
    console.log(type)
    return (
        <div className="w-[376px] h-[159px]">
        <div className=" w-[382px] h-[159px] top-0 left-0">
          <div className="relative w-[376px] h-[159px] bg-blue-300 rounded-[20px]">
            <div className="absolute w-[360px] h-[99px] top-12 left-2  bg-[100%_100%]">
              <div className="absolute w-[311px] h-[53px] top-[22px] left-[25px] bg-[#d9d9d9] rounded-[10px]" />
              <div className="absolute w-[311px] h-[53px] top-[22px] left-[25px] bg-[#d9d9d9] rounded-[10px]" />
              <img className="absolute w-px h-[39px] top-[29px] left-[179px] object-cover" alt="Line" src="line-22.svg" />
              <div className="w-[107px] top-[35px] left-[195px] text-xl absolute text-black text-center tracking-[0] leading-[normal]">
                16 개
              </div>
              <div className="absolute w-[107px] top-[35px] left-[46px]   text-black text-xl text-center tracking-[0] leading-[normal]">
                5 품목
              </div>
            </div>
            <div className="absolute w-[196px] h-8 top-[7px] left-2 bg-white rounded-[20px]">
              <div className="w-[109px] top-[7px] left-[42px] text-base whitespace-nowrap absolute text-black text-center tracking-[0] leading-[normal]">
                {type}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HistoryListItem;