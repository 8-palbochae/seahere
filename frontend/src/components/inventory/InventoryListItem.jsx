import React, { useState } from 'react';
import dayjs from 'dayjs';
import productImg from '../../assets/income/product.svg';
import './styles/InventoryItem.css';
import InventoryItemDetails from './InventoryItemDetails';

const InventoryItem = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    // 클릭 핸들러: 아이템을 클릭하면 확장 여부를 토글
    const handleToggle = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <div>
            <div 
                className={`flex p-3 justify-around items-center cursor-pointer bg-white border border-gray-200 rounded-md shadow-sm
                            ${isExpanded ? 'rounded-b-none' : 'rounded-md'}`} // 조건부 클래스 추가
                onClick={handleToggle}
            >
                <div className='flex flex-col justify-center items-center gap-2'>
                    <img className='w-10 h-10 rounded-full object-cover' src={productImg} alt="Product" />
                    <span className="text-gray-800">광어</span>
                </div>
                <div className='text-center font-bold text-lg text-gray-800'>활어</div>
                <div className='text-center text-lg text-gray-700'>100kg</div>
                <div className='text-center text-sm text-gray-500'>{dayjs().format('YYYY-MM-DD')}</div>
            </div>
            <div 
                className={`transition-height overflow-hidden flex flex-col justify-center items-center ${isExpanded ? 'details-open' : 'details-closed'}`}
            >
                <InventoryItemDetails />
                <InventoryItemDetails />
                <InventoryItemDetails />
                <InventoryItemDetails />
            </div>
        </div>
    );
};

export default InventoryItem;
