import React from 'react';
import nupchiIcon from '../../assets/history/nupchi-icon.png';

const AdjustListItem = () => {
    return (
        <div className="w-full px-2">
            <div className="relative w-full bg-blue-300 rounded-[10px] shadow-lg px-4 py-4 overflow-hidden flex items-center">
                <div className="relative flex items-center mr-2"> 
                    <img className="w-[60px] h-[60px] object-cover relative bottom-4" alt="Image" src={nupchiIcon} />
                    <div className="absolute top-[60%] left-0 right-0 text-center text-black font-normal text-base rounded-md px-2 py-1 bg-white bg-opacity-100">
                        넙치
                    </div>
                </div>
                <div className="text-center flex-1">
                    <div className="text-black font-normal text-base">
                        활어
                    </div>
                </div>
                <div className="text-center flex-1 mr-2">
                    <div className="text-black font-normal text-base">
                    10 &rarr; 5
                    </div>
                </div>
                <div className="text-center flex-1 mr-2">
                    <div className="text-black font-normal text-base">
                        1500 &rarr; 2000 
                    </div>
                </div>
                <div className="text-center flex-1">
                    <div className="text-black font-normal text-base">
                        2024-07-12/12:23:00
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdjustListItem;