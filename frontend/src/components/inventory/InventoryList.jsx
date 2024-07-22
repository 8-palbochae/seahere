import React from 'react';
import InventoryListItem from './InventoryListItem';

const InventoryList = () => {
    const items = Array.from({ length: 30 }, (_, index) => index + 1);
    
    return (
        <div>
           {items.map(item => (
                <InventoryListItem key={item} /> // 각 InventoryItem에 고유한 key를 추가합니다
            ))}

        </div>
    );
};

export default InventoryList;