import React from 'react';

const InventoryItemDetails = () => {
    return (
        <div className="flex w-10/12 justify-between items-center p-3 border-t border-gray-200">
            <div className="flex items-center mb-2">
                <span className="font-semibold">상태</span>
            </div>
            <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">원산지</span>
            </div>
            <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">재고량</span>
            </div>
            <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">입고액</span>
            </div>
            <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">입고일</span>
            </div>
        </div>
    );
};

export default InventoryItemDetails;
