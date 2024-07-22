import React from 'react';
import IncomingListTitle from '../components/incoming/IncomingListTitle';
import IncomingListComponent from '../components/incoming/IncomingListComponent';

const IncomingList = () => {
    return (
        <div>
        <div className="mt-2">
            <IncomingListTitle />
        </div>
        <div className="mt-1">
            <IncomingListComponent />
        </div>
        </div>
    );
};

export default IncomingList;