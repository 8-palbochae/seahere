import React from 'react';
import NoQRSearchInput from '../components/common/NoQRSearchInput';
import OutgoingListHeader from '../components/outgoing/OutgoingListHeader';
import OutgoingListComponent from '../components/outgoing/OutgoingListComponent';
import SearchInputFilter from '../components/common/SearchInputFilter'
const OutgoingList = () => {
    return (
        <div>
            <div>
                <SearchInputFilter />
                <OutgoingListComponent />
            </div>
        </div>
    );
};

export default OutgoingList;