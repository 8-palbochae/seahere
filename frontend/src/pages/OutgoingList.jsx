import React from 'react';
import NoQRSearchInput from '../components/common/NoQRSearchInput';
import OutgoingListComponent from '../components/outgoing/OutgoingListComponent';

const OutgoingList = () => {
    return (
        <div>
            <div>
                <NoQRSearchInput />
                <OutgoingListComponent/>
            </div>

        </div>
    );
};

export default OutgoingList;