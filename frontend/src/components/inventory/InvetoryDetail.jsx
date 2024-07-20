import React, { useState } from 'react';
import dayjs from 'dayjs';
import './InventoryDetail.css';
import useDragHandler from '../../hooks/useDragHandler';
import productImg from '../../assets/income/product.svg'; // 실제 이미지 경로로 수정 필요

const  InventoryDetail = ({ item }) => {
    const [showButtons, setShowButtons] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false); // 클릭 시 세부 사항 표시 여부

    const handleLeftSwipe = () => setShowButtons(true);
    const handleRightSwipe = () => setShowButtons(false);

    const {
        itemRef,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        handleMouseDown
    } = useDragHandler(handleLeftSwipe, handleRightSwipe);

    const handleClick = () => {
        setIsExpanded(!isExpanded); // 클릭 시 세부 사항 토글
    };

    return (
        <div
            ref={itemRef}
            className={`inventory-item ${showButtons ? 'show-buttons' : ''}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onClick={handleClick} // 클릭 이벤트 핸들러 추가
        >
            <div className="content">
                <div className='flex flex-col justify-center items-center gap-2'>
                    <img className='w-14 h-14 rounded-full object-cover' src={item.img} alt="Product" />
                    <span>{item.name}</span>
                </div>
                <div className='flex-1 text-center font-bold text-lg'>{item.type}</div>
                <div className='flex-1 text-center text-lg'>{item.quantity}</div>
                <div className='flex-1 text-center text-sm'>{dayjs(item.date).format('YYYY-MM-DD HH:mm:ss')}</div>
            </div>
            <div className='buttons'>
                <button className='edit'>수정</button>
                <button className='delete'>삭제</button>
            </div>
            {isExpanded && (
                <div className="details">
                    {/* 세부 사항을 여기에 추가 */}
                    <p>세부 정보 1: {item.detail1}</p>
                    <p>세부 정보 2: {item.detail2}</p>
                </div>
            )}
        </div>
    );
};

export default InventoryDetail;