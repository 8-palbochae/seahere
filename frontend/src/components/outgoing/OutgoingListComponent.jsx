import React from 'react';
import OutgoingListHeader from './OutgoingListHeader';
import OutgoingListItem from './OutgoingListItem';

const OutgoingListComponent = () => {
    return (
        // <div className="w-full px-4">
        <div className="w-full flex flex-col items-center px-4 gap-2">
            <OutgoingListHeader />
            <OutgoingListItem />
        </div>
    );
};

export default OutgoingListComponent;