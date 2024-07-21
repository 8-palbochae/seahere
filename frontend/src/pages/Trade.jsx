import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from '../components/common/SearchInput';
import BrokerSearchInput from '../components/common/BrokerSearchInput ';
import BrokerItem from '../components/trade/BrokerItem';
import TradeBrokerList from '../components/trade/TradeBrokerList';

const Trade = () => {
    return (
        <div>
            <BrokerSearchInput/>
            <TradeBrokerList/>
        </div>
    );
};

Trade.propTypes = {};

export default Trade;