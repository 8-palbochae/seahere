import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { tradeIcon } from '../../constants/trade/trade.image';

const BrokerItem = () => {
    const [isLike, setIsLike] = useState(false);

    const handleLikeClick = () => {
        setIsLike(!isLike);
    }

    return (
        <div className='relative flex flex-row w-11/12 max-w-md mx-3 items-start bg-white border border-gray-200 rounded-lg shadow-md p-4'>
            {/* Image Container */}
            <div className='w-20 h-20 flex items-center justify-center mr-4'>
                <img 
                    src={tradeIcon.brokerLogo} 
                    className='w-full h-full object-cover rounded-lg' 
                    alt="Broker Logo" 
                />
            </div>
            {/* Text Content */}
            <div className='flex flex-col justify-between items-start gap-2 w-full'>
                <div className='text-lg font-bold overflow-hidden whitespace-nowrap text-ellipsis'>여보소 수산</div>
                <div className='text-sm overflow-hidden whitespace-nowrap text-ellipsis'>부산 해운대구 APEC로 17 센텀리더스마크</div>
                <div className='overflow-hidden whitespace-nowrap text-ellipsis'>우동 1514</div>
            </div>
            {/* Like Button */}
            <div className='absolute bottom-0 right-0 mb-2 mr-2'>
                <button onClick={handleLikeClick}>
                    <img 
                        src={isLike ? tradeIcon.likeIcon : tradeIcon.unLikeIcon} 
                        className='w-5 h-5 object-cover' 
                        alt="Like Icon" 
                    />
                </button>
            </div>
        </div>
    );
};

BrokerItem.propTypes = {};

export default BrokerItem;
