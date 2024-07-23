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
            <div className="relative w-full h-[98px] flex" onClick={handleOpenModal}>
                <div className="absolute top-2 left-0 mt-2 ml-4 text-black font-normal text-sm">
                    {date}
                </div>
                <div className="w-full h-full bg-white rounded-[20px] border-[3px] border-solid border-blue-300 flex items-center px-4 cursor-pointer">
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-2/6 text-center font-normal text-black text-base leading-[normal]">
                            스파로스
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-[73px] text-center font-normal text-black text-base leading-[normal]">
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
