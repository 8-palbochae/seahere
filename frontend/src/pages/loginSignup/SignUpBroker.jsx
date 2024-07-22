import React, { useState } from 'react';
import MainLogo from '../../assets/common/MainLogo.svg';
import background from '../../assets/common/background.svg';
import back from '../../assets/loginSignup/backbutton.svg';
import camera from '../../assets/loginSignup/camera.svg';
import calendar from '../../assets/loginSignup/calendar.svg';
import Background from '../../components/loginSignup/Background';
import InputField from '../../components/loginSignup/InputField';
import SubmitButton from '../../components/loginSignup/SubmitButton';
import BrokerCheckModal from '../../components/loginSignup/BrokerCheckModal';

const SignUpBroker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBrokerCheckSuccess, setIsBrokerCheckSuccess] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsBrokerCheckSuccess(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Background backgroundSrc={background} logoSrc={MainLogo} backButtonSrc={back} backLink={"/signup-B-choice"}>
      <div className="absolute top-[418px] left-1/2 transform -translate-x-1/2 w-full max-w-[276px] text-center">
        <div className="mb-4">
          <img className="mx-auto" src={camera} alt="Camera" />
        </div>
        <form className="relative w-full space-y-4" onSubmit={handleSubmit}>
          <InputField type="text" name="representativeName" placeholder="대표자 성명" />
          <InputField type="text" name="businessNumber" placeholder="사업자 등록번호" />
          <div className="relative">
            <InputField type="text" name="issueDate" placeholder="발급 일자" />
            <img
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              src={calendar}
              alt="Calendar"
            />
          </div>
          <SubmitButton>진위 여부 확인</SubmitButton>
        </form>
      </div>
      {isModalOpen && (
        <BrokerCheckModal
          onClose={closeModal}
          success={isBrokerCheckSuccess}
        />
      )}
    </Background>
  );
};

export default SignUpBroker;
