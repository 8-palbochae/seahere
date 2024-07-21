import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../../assets/common/MainLogo.svg';
import background from '../../assets/common/background.svg';
import back from '../../assets/loginSignup/backbutton.svg';
import camera from '../../assets/loginSignup/camera.svg';
import calendar from '../../assets/loginSignup/calendar.svg';
import BrokerCheckSuccess from './BrokerCheckSuccess';

const SignUpBroker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-[390px] h-[844px] bg-white">
      <div className="absolute w-[390px] h-[423px] top-[436px] left-0">
        <img
          className="w-[390px] h-[390px] top-[33px] left-0 absolute object-cover"
          src={background}
        />
      </div>
      <img
        className="absolute w-80 h-80 top-[52px] left-[35px] object-cover"
        src={MainLogo}
      />
      <Link to="/signup-B-choice">
        <img
          className="absolute w-[30px] h-10 top-2 left-2.5 object-cover"
          src={back}
        />
      </Link>
      <div className="absolute top-[418px] left-1/2 transform -translate-x-1/2 w-full max-w-[276px] text-center">
        <div className="mb-4">
          <img className="mx-auto" src={camera} alt="Camera" />
        </div>
        <form className="relative w-full space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md font-normal text-black leading-normal"
            type="text"
            placeholder="대표자 성명"
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md font-normal text-black leading-normal"
            type="text"
            placeholder="사업자 등록번호"
          />
          <div className="relative">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md font-normal text-black leading-normal"
              type="text"
              placeholder="발급 일자"
            />
            <img
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              src={calendar}
              alt="Calendar"
            />
          </div>
          <button
            className="w-full py-2 bg-blue-600 text-white rounded-md font-normal leading-normal"
            type="submit"
          >
            진위 여부 확인
          </button>
        </form>
      </div>
      {isModalOpen && <BrokerCheckSuccess onClose={closeModal} />}
    </div>
  );
};

export default SignUpBroker;
