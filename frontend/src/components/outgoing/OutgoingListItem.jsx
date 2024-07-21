import React from 'react';
import useDragHandler from '../../hooks/useDragHandler'; 

const OutgoingListItem = () => {
    const { itemRef, handleTouchStart, handleTouchMove, handleTouchEnd, handleMouseDown, isSwiped } = useDragHandler(
        () => console.log('Swiped left'),
        () => console.log('Swiped right')
    );

    return (
        <div className="relative w-full h-[98px] flex">
            <div
                ref={itemRef}
                className={`w-full h-full bg-white rounded-[20px] border-[3px] border-solid border-blue-300 flex items-center px-4 transition-transform duration-300 ease-in-out ${
                    isSwiped ? 'translate-x-[-100px]' : 'translate-x-0'
                }`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
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
            {isSwiped && (
                <button
                    className="absolute right-0 top-0 h-full bg-blue-600 text-white py-2 px-4 rounded-l-lg shadow-lg flex items-center justify-center"
                    style={{ width: '100px' }}
                    onClick={() => alert('출고 완료 되었습니다.')}
                >
                    출고 완료
                </button>
            )}
        </div>
    );
};

export default OutgoingListItem;