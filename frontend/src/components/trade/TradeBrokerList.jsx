import React from 'react';
import PropTypes from 'prop-types';
import BrokerItem from './BrokerItem';

const TradeBrokerList = () => {
    return (
        <div className='flex flex-col gap-4 my-2'>
            <BrokerItem/>
            <BrokerItem/>
            <BrokerItem/>
            <BrokerItem/>
            <BrokerItem/>
            <BrokerItem/>
            <BrokerItem/>
            <BrokerItem/>
        </div>
    );
};

TradeBrokerList.propTypes = {};

export default TradeBrokerList;