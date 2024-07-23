import React from 'react';
import NoQRSearchInput from '../../../common/NoQRSearchInput';
import OutgoingReqListComponent from '../itemcomponent/OutgoingReqListComponent';
import SearchInputFilter from '../../../common/SearchInputFilter';

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