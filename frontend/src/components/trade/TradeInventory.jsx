// src/components/TradeInventory.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import TradeInventoryContent from './TradeInventoryContent';

const TradeInventory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <div className='relative min-h-screen pb-16 w-full'>
                {/* Main Content Area */}
                <div 
                    className='w-full cursor-pointer'
                    onClick={handleOpenModal}
                >
                    <TradeInventoryContent />
                    <TradeInventoryContent />
                    <TradeInventoryContent />
                    <TradeInventoryContent />
                    <TradeInventoryContent />
                    <TradeInventoryContent />
                    <TradeInventoryContent />
                    <TradeInventoryContent />
                    <TradeInventoryContent />
                </div>
                
                {/* Modal Component */}
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <div className='p-4 w-full'>
                        <TradeInventoryContent />
                    </div>
                </Modal>
            </div>

            {/* Button Positioned at the Bottom of the Viewport */}
            <div className='fixed bottom-16 left-0 w-full px-4 pb-3 z-50 bg-white outline-none'>
                <button className='bg-blue-600 w-full text-white p-3 font-bold rounded-md'>
                    {`도움 요청 목록 (0)건`}
                </button>
            </div>
        </>
    );
};

TradeInventory.propTypes = {};

export default TradeInventory;
