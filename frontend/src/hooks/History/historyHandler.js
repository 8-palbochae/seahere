// src/utils/historyHandler.js
import { useNavigate } from 'react-router-dom';

const useHistoryHandler = () => {
    const navigate = useNavigate();

    const handleNavigation = (type) => {
        switch (type) {
            case '출고':
                navigate('/outgoingList');
                break;
            case '입고':
                navigate('/incomingList'); 
                break;
            case '조정':
                navigate('/adjustList'); 
                break;
            default:
                break;
        }
    };

    return { handleNavigation };
};

export default useHistoryHandler;
