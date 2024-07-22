// src/components/Modal.js

import React from 'react';
import PropTypes from 'prop-types';

const TradeInputModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center'>
            <div className='bg-white p-4 rounded-md shadow-lg'>
                <div>{children}</div>
                <button 
                    onClick={onClose} 
                    className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
                >
                    Close
                </button>
            </div>
        </div>
    );
};

TradeInputModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default TradeInputModal;
