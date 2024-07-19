import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchInput from '../components/common/SearchInput';
import IventoryList from '../components/iventory/IventoryList';

const IventoryView = () => {
    

  return (
    <div className="w-full">
        <IventoryList/>
       {/* <div className="flex justify-around items-center border-b border-gray-300 p-2 mx-1">
            <div className="flex-1 font-bold">어종</div>
            <div className="flex-1 font-bold">분류</div>
            <div className="flex-1 font-bold">총 수량</div>
            <div className="flex-1 font-bold">최신입고일</div>
        </div> */}
    </div>
    );
};

export default IventoryView;