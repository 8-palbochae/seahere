import React from 'react';
import HistoryListItem from './HistoryListItem';
const HistoryList = () => {
    return (
        <div className='flex justify-center w-full' >
            <div className='flex flex-col gap-1 w-full mx-3'>
                <div className='w-full'>
                    <HistoryListItem type={"출고"}/>
                </div>
                <div>
                    <HistoryListItem type={"입고"}/>
                </div>
                <div>
                    <HistoryListItem type={"조정"}/>
                </div>
            </div>
        </div> 
    );
};

export default HistoryList;