// TradeInputModal.js
import React from 'react';
import PropTypes from 'prop-types';

const TradeInputModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75'>
            <div className='bg-white p-4 rounded-md'>
                <button onClick={onClose} className='absolute top-2 right-2 text-xl'>×</button>
                {children}
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
