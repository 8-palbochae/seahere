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

    return (
        <div className="w-full">
            <div className="relative w-full h-[98px] flex" onClick={handleOpenModal}>
                <div className="w-full h-full bg-white rounded-[20px] border-[3px] border-solid border-blue-300 flex items-center px-4 cursor-pointer">
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
