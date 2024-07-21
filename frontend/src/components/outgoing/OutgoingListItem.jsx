import React, { useState } from 'react';
import dayjs from 'dayjs';
import useDragHandler from '../../hooks/useDragHandler';
import '../inventory/InventoryItem.css';
import InventoryItemDetails from '../inventory/IventoryItemDetails';

const OutgoingListItem = () => {
    const { itemRef, handleTouchStart, handleTouchMove, handleTouchEnd, handleMouseDown, isSwiped } = useDragHandler(
        () => console.log('Swiped left'),
        () => console.log('Swiped right')
    );

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <div className="relative w-full flex flex-col">
            <div className="relative w-full flex">
                <div
                    ref={itemRef}
                    className={`flex w-full h-[98px] bg-white rounded-[20px] border-[3px] border-solid border-blue-300 items-center px-4 transition-transform duration-300 ease-in-out ${isSwiped ? 'translate-x-[-100px]' : 'translate-x-0'
                        }`}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onClick={handleToggle}
                >
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-[69px] text-center font-normal text-black text-base leading-[normal]">
                            스파로스
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-[73px] text-center font-normal text-black text-base leading-[normal]">
                            넙치 외 3건
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-[73px] text-center font-normal text-black text-base leading-[normal]">
                            2024-07-10<br />06:00:03
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-[70px] text-center font-normal text-black text-base leading-[normal]">
                            출고 대기
                        </div>
                    </div>
                </div>
                <button
                    className={`absolute right-0 h-[98px] bg-blue-600 text-white py-2 px-4 rounded-r-lg shadow-lg flex items-center justify-center transition-width duration-300 ease-in-out ${isSwiped ? 'block' : 'hidden'}`}
                    style={{ width: '100px' }}
                    onClick={() => alert('출고 완료 되었습니다.')}
                >
                    출고 완료
                </button>
            </div>
            <div
                className={`transition-height overflow-hidden flex flex-col justify-center items-center ${isExpanded ? 'details-open' : 'details-closed'}`}
            >
                {isExpanded && (
                    <>
                        <InventoryItemDetails />
                        <InventoryItemDetails />
                        <InventoryItemDetails />
                        <InventoryItemDetails />
                    </>
                )}
            </div>
        </div>
    );
};

export default OutgoingListItem;
