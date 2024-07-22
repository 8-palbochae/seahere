import React from 'react';
import PropTypes from 'prop-types';
import BrokerSearchInput from '../components/common/BrokerSearchInput ';
import BrokerTradeDeatil from '../components/trade/BrokerTradeDeatil';
import { useParams } from 'react-router-dom';

const BrokerDetailPage = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div className='flex flex-col w-full items-center'>
            <BrokerSearchInput/>
            <BrokerTradeDeatil id={id}/>
        </div>
    );
};

BrokerDetailPage.propTypes = {};

export default BrokerDetailPage;