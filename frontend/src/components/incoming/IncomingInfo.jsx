import React from 'react';
import PropTypes from 'prop-types';

const IncomingInfo = () => {
    return (
        <div className='flex flex-col mt-10'>
            <div className='flex flex-col w-full items-center'>
                <div className=' w-11/12 flex items-center'>
                        <div className=' w-full font-bold text-3xl'>입고 정보 입력</div>
                </div>
            </div>            

            <div className='flex flex-col gap-4 mt-5 shadow-md border border-gray-200 rounded-lg p-6 mx-4'>
                 <div className='flex flex-col w-full items-center'>
                    <div className='w-11/12 flex items-center'>
                        <div className='w-full font-bold text-2xl'>입고량</div>
                    </div>
                    <div className='flex items-center w-11/12 mt-4'>
                        <input className='border p-2 flex-grow rounded-xl' type="text" />
                        <span className='ml-2 font-bold text-2xl'>Kg</span>
                    </div>
                </div>

                <div className='flex flex-col w-full items-center'>
                    <div className='w-11/12 flex items-center'>
                        <div className='w-full font-bold text-2xl'>입고량</div>
                    </div>
                    <div className='flex items-center w-11/12 mt-4'>
                        <input className='border p-2 flex-grow rounded-xl' type="text" />
                        <span className='ml-2 font-bold text-2xl'>원</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

IncomingInfo.propTypes = {};

export default IncomingInfo;