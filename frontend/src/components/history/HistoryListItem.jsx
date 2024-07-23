import React from 'react';
import { ReactComponent as Outgoing } from "../../assets/history/outgoing-icon.svg";
import { ReactComponent as Incoming } from "../../assets/history/incoming-icon.svg";
import { ReactComponent as Adjust } from "../../assets/history/adjust-icon.svg";
import useHistoryHandler from '../../hooks/History/historyHandler';
import dayjs from 'dayjs';

const HistoryListItem = ({ type }) => {
    const { handleNavigation } = useHistoryHandler();
    
    // 아이콘 매핑 객체
    const iconMap = {
        출고: <Outgoing className="w-full h-full object-cover fill-red-600" style={{ marginLeft: '20px', marginTop: '2px' }} />,
        입고: <Incoming className="w-full h-full object-cover fill-blue-600" style={{ marginLeft: '20px', marginTop: '2px' }} />,
        조정: <Adjust className="w-full h-full object-cover fill-green-600" style={{ marginLeft: '20px', marginTop: '2px' }} />,
    };

    const typeColor = {
        출고 : 'text-red-600',
        입고 : 'text-blue-600',
        조정 : 'text-green-600',
    }
    // 선택된 아이콘
    const icon = iconMap[type];

    return (
        <div className='flex flex-col text-green justify-center items-center w-full gap-3 mb-1 
        shadow-lg rounded-lg p-4 bg-white border-t-2 border-gray-200' onClick={() => handleNavigation(type)}>
            <div className='w-11/12 mx-3 text-left text-gray-400'>
                {dayjs().format('YYYY-MM-DD')}
            </div>
            <div className='flex w-full justify-between'>
                <div className='flex gap-10 items-center'>
                    <div className='w-12 h-12'>
                        {icon}
                    </div>
                    <span className={`font-bold text-lg ${typeColor[type]}`}>{type}</span>
                </div>
                <div className='flex justify-around items-center gap-5'>
                    <div className='text-lg text-gray-600 font-semibold'>5품목</div>
                    <div className='text-lg text-gray-600 font-semibold'>16개</div>
                </div>
            </div>
        </div>
    );
};

export default HistoryListItem;
