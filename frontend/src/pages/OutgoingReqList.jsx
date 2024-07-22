import React from 'react';
import NoQRSearchInput from '../components/common/NoQRSearchInput';
import OutgoingReqListComponent from '../components/outgoing/OutgoingReqListComponent';

const OutgoingReqList = () => {
    return (
        <div>
            <div>
                <NoQRSearchInput />
                <OutgoingReqListComponent />
            </div>
            
        </div>
    );
};

export default OutgoingReqList;