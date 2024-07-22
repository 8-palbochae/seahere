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
            <div 
                className='w-full cursor-pointer' 
                onClick={handleOpenModal}
            >
                <TradeInventoryContent />
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <div className='p-4 w-full'>
                    <TradeInventoryContent />
                </div>
            </Modal>
        </>
    );
};

TradeInventory.propTypes = {};

export default TradeInventory;
