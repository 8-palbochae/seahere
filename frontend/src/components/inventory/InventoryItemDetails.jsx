import React from 'react';
import { iventoryIcon } from '../../constants/iventory/iventory.image';
import useInventorySlide from '../../hooks/inventory/useInventorySlide';

const InventoryItemDetails = () => {
    const { isSlid, handleTouchStart, handleTouchMove, handleMouseDown, handleMouseMove } = useInventorySlide();

    return (
        <div
            className="relative w-full p-3 border-t border-gray-200 overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
        >
            <div className="flex">
                {/* Main Content Area */}
                <div
                    className={`flex flex-col justify-center transition-transform duration-300 ${isSlid ? 'translate-x-[-140px]' : 'translate-x-0'}`}
                    style={{ flex: '1 0 auto', width: 'calc(100% - 140px)' }} // Adjust width to fit the buttons container
                >
                    <div className="flex justify-around items-center mb-2">
                        <span className="w-1/6 text-sm font-medium truncate text-center">활어</span>
                        <span className="w-1/6 text-sm truncate text-center">국산</span>
                        <span className="w-1/6 text-sm font-semibold truncate text-center">{"100->20"}</span>
                        <span className="w-2/6 text-sm truncate overflow-hidden text-ellipsis text-center" title="10000000000000000원">
                            1000000000
                        </span>
                        <span className="w-1/6 text-xs truncate text-red-500 border-2 rounded-full items-center text-center p-1">{"+3일"}</span>
                    </div>
                </div>

                {/* Buttons Container */}
                <div
                    className={`absolute top-0 right-0 h-full flex flex-row bg-white border-l border-gray-200 transition-transform duration-300 ${isSlid ? 'translate-x-0' : 'translate-x-full'}`}
                    style={{ width: '140px' }} // Width of the buttons container
                >
                    <button className="flex-1 flex items-center justify-center p-0 bg-gray-400">
                        <img src={iventoryIcon.editIcon} className='w-3/5 h-3/5 object-contain' alt="Edit" />
                    </button>
                    <button className="flex-1 flex items-center justify-center p-0 bg-red-500">
                        <img src={iventoryIcon.deleteIcon} className='w-3/5 h-3/5 object-contain' alt="Delete" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItemDetails;
