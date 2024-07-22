import React from 'react';
import NoQRSearchInput from '../components/common/NoQRSearchInput';
import OutgoingListHeader from '../components/outgoing/OutgoingListHeader';
import OutgoingListComponent from '../components/outgoing/OutgoingListComponent';

const OutgoingList = () => {
    return (
        <div>
            <div>
                <NoQRSearchInput />
                <OutgoingListHeader />
                <OutgoingListComponent />
            </div>
        </div>
    );
};

export default OutgoingList;