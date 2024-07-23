import React from 'react';
import NoQRSearchInput from '../components/common/NoQRSearchInput';
import OutgoingReqListComponent from '../components/outgoing/OutgoingReqListComponent';
import SearchInputFilter from '../components/common/SearchInputFilter';

const OutgoingReqList = () => {
    return (
        <div>
            <div>
                <SearchInputFilter />
                <OutgoingReqListComponent />
            </div>
            
        </div>
    );
};

export default OutgoingReqList;