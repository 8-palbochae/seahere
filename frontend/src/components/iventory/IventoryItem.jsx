import React from 'react';
import dayjs from 'dayjs'
import productImg from '../../assets/income/product.svg';


const IventoryItem = () => {
    return (
        <div className='flex justify-around items-center mt-4 mx-2 rounded-xl border-2 border-blue-600 p-4 space-x-4' >
            <div className='flex flex-col justify-center items-center gap-2'>
                <img className='w-14 h-14 rounded-full object-cover' src={productImg} alt="Product" />
                <span >광어</span>
            </div>
            <div className='flex-1 text-center font-bold text-lg'>활어</div>
            <div className='flex-1 text-center text-lg'>100kg</div>
            <div className='flex-1 text-center text-sm'>{dayjs().format('YYYY-MM-DD HH:mm:ss')}</div>
        </div>
    );
};

IventoryItem.propTypes = {};

export default IventoryItem;