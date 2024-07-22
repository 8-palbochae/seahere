import React from 'react';
import OutgoingListHeader from './OutgoingListHeader';
import OutgoingReqListItem from './OutgoingReqListItem';

const OutgoingReqListComponent = () => {
    return (
        <div className="w-full flex flex-col items-center px-2 gap-2">
            <OutgoingListHeader />
            <OutgoingReqListItem />
        </div>
    );
};

export default OutgoingReqListComponent;