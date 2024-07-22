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
        <div className="relative w-full max-w-[600px] bg-blue-300 rounded-[10px] shadow-lg px-4 py-4 overflow-hidden">
            <div
                ref={itemRef}
                className={`flex items-center justify-start w-full transition-transform duration-300 ease-in-out ${
                    isSwiped ? 'translate-x-[-100px]' : 'translate-x-0'
                }`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
            >
                {/* Item 1: 넙치 및 이미지 */}
                <div className="relative flex items-center mr-2"> {/* 왼쪽으로 이동 */}
                    <img className="w-[60px] h-[60px] object-cover relative bottom-4" alt="Image" src={nupchiIcon} />
                    <div className="absolute top-[60%] left-0 right-0 text-center text-black font-normal text-base rounded-md px-2 py-1 bg-white bg-opacity-100">
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
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-500 text-white px-4 py-9 rounded-md z-10"
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
