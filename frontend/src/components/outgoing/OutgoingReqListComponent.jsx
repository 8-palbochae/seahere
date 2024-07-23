import React from 'react';
import OutgoingReqListItem from './OutgoingReqListItem';
import PeriodStart from '../history/PeriodStart';
import PeriodEnd from '../history/PeriodEnd';

const OutgoingReqListComponent = () => {
    return (
        <div className="w-full flex flex-col items-center px-2 gap-2">
            <div className="flex items-center gap-2">
                <PeriodStart />
                <span>~</span>
                <PeriodEnd />
            </div>
            <OutgoingReqListItem />
        </div>
    );
};

export default OutgoingReqListComponent;
