import React from "react";
import "./Bottom.css";
import bottomIcon from "../../../constants/bottom/bottom.image";
import { Link } from "react-router-dom";

const Bottom = () => {
  return (
    <div className='flex flex-row justify-between w-full bottom-0 border-t py-1 border-gray-300 bg-white mb-2'>
      <Link
        to={"/main"}
        className='flex flex-col items-center text-gray-600 hover:text-gray-500 flex-1 text-center py-2'
      >
        <img
          src={bottomIcon.homeIcon}
          alt='홈 아이콘'
          className='w-6 h-6 mb-1'
        />
        <span className='text-xs font-extralight text-gray-400'>홈</span>
      </Link>
      <Link
        to={"/history"}
        aria-label='거래 내역'
        className='flex flex-col items-center text-gray-600 hover:text-gray-500 flex-1 text-center py-2'
      >
        <img
          src={bottomIcon.historyIcon}
          alt='거래 내역 아이콘'
          className='w-6 h-6 mb-1'
        />
        <span className='text-xs font-extralight text-gray-400'>거래 내역</span>
      </Link>
      <Link
        to={"/inventory"}
        aria-label='재고 내역'
        className='flex flex-col items-center text-gray-600 hover:text-gray-500 flex-1 text-center py-2'
      >
        <img
          src={bottomIcon.iventoryIcon}
          alt='재고 내역 아이콘'
          className='w-6 h-6 mb-1'
        />
        <span className='text-xs font-extralight text-gray-400'>재고 조회</span>
      </Link>
      <Link
        to={"/setting"}
        aria-label='설정'
        className='flex flex-col items-center text-gray-600 hover:text-gray-500 flex-1 text-center py-2'
      >
        <img src={bottomIcon.settingIcon} alt='설정 아이콘' className='mb-1' />
        <span className='text-xs font-extralight text-gray-400'>
          사용자 설정
        </span>
      </Link>
    </div>
  );
};

export default Bottom;
