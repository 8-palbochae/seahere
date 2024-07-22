import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BrokerItem from './BrokerItem';
import InventoryItemDetails from './../inventory/InventoryItemDetails';
import TradeInputModal from './TradeInputModal';
import withTradeClickHandler from '../../hooks/trade/withTradeClickHandler';
import TradeInventory from './TradeInventory';

const BrokerTradeDetail = ({ id }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        console.log(isModalOpen);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    const ClickableInventoryItem = withTradeClickHandler(InventoryItemDetails, handleItemClick);

    return (
        <div className='w-11/12 flex flex-col items-center justify-center '>
            <BrokerItem id={id} />
            <TradeInventory/>
            {isModalOpen && (
                <TradeInputModal onClose={closeModal}>
                    <div>
                        {/* Display details of the selected item */}
                        Details of item {selectedItem}
                    </div>
                </TradeInputModal>
            )}
        </div>
    );
};

BrokerTradeDetail.propTypes = {
    id: PropTypes.string.isRequired,
};

export default BrokerTradeDetail;
