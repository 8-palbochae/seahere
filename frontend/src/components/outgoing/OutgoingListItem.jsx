import React, { useState } from 'react';
import nupchiIcon from '../../assets/history/nupchi-icon.png';
import useDragHandler from '../../hooks/useDragHandler';

const OutgoingReqListModalDetail = () => {
    const [isSwiped, setIsSwiped] = useState(false);

    // 핸들러 함수들
    const handleSwipeLeft = () => {
        setIsSwiped(true);
    };

    const handleSwipeRight = () => {
        setIsSwiped(false);
    };

    const { itemRef, handleTouchStart, handleTouchMove, handleTouchEnd, handleMouseDown } = useDragHandler(
        handleSwipeLeft,
        handleSwipeRight
    );

    return (
        <div className="relative w-full h-[98px] flex">
            <div
                ref={itemRef}
                className={`w-full h-full bg-blue-300 rounded-[10px] shadow-lg px-4 py-4 flex items-center transition-transform duration-300 ease-in-out ${
                    isSwiped ? 'translate-x-[-100px]' : 'translate-x-0'
                }`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
            >
                {/* Item 1: 넙치 및 이미지 */}
                <div className="relative flex items-center mr-4">
                    <img
                        className="w-[60px] h-[60px] object-cover"
                        alt="Image"
                        src={nupchiIcon}
                    />
                    <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 text-center text-black font-normal text-base rounded-md px-2 py-1 bg-white bg-opacity-100">
                        넙치
                    </div>
                </div>

                {/* Item 2: 10kg */}
                <div className="text-center flex-1">
                    <div className="text-black font-normal text-base">
                        10kg
                    </div>
                </div>

                {/* Item 3: 10000원 */}
                <div className="text-center flex-1">
                    <div className="text-black font-normal text-base">
                        10000원
                    </div>
                </div>

                {/* Item 4: 100→20 */}
                <div className="text-center flex-1">
                    <div className="text-black font-normal text-base">
                        100→20
                    </div>
                </div>
            </div>

            {/* 삭제 버튼 */}
            {isSwiped && (
                <button
                    className="absolute right-0 top-0 h-full bg-red-600 text-white py-2 px-4 rounded-l-lg shadow-lg flex items-center justify-center z-10"
                    style={{ width: '100px' }}
                    onClick={() => alert('삭제되었습니다.')}
                >
                    삭제
                </button>
            )}
        </div>
    );
};

export default OutgoingReqListModalDetail;
