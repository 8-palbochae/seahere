import React, { useState } from 'react';
import OutgoingReqListModal from './OutgoingReqListModal';

const OutgoingReqListItem = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
        console.log("클릭됨");
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // 날짜 데이터 예시
    const date = '2024-07-12';

    return (
        <div className="w-full">
            <div className="relative w-full flex flex-col" onClick={handleOpenModal}>
            <div className="text-gray-700 text-base mb-1 border-b border-gray-300 pb-1">
                {date}
            </div>
                <div className="w-full  bg-white rounded-[20px] h-[98px]  shadow-lg border-solid flex items-center px-4 cursor-pointer">
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-[73px] text-center font-normal truncate text-black text-base leading-[normal]">
                            스파로스
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-[73px] text-center font-normal truncate text-black text-base leading-[normal]">
                            넙치 외 3건
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-[70px] text-center font-normal text-black text-base leading-[normal]">
                            요청
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <OutgoingReqListModal handleCloseModal={handleCloseModal} />
            )}
        </div>
    );
};

export default OutgoingReqListItem;
