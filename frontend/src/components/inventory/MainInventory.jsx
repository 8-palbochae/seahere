import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from '../common/SearchInput';
import InventoryList from './InventoryList';

const MainInventory = () => {
  return (
    <>
      <SearchInput/>
      <InventoryList/>
    </>
  );
};

MainInventory.propTypes = {};

export default MainInventory;