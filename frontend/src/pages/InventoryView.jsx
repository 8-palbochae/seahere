import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchInput from '../components/common/SearchInput';
import InventoryList from '../components/inventory/InventoryList';
import MainInventory from '../components/inventory/MainInventory';

const InventoryView = () => {
    

  return (
    <div className="w-full">
        <MainInventory/>
    </div>
    );
};

export default InventoryView;