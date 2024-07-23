import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import MainLogo from '../../../assets/common/MainLogo.svg';
import background from '../../../assets/common/background.svg';
import back from '../../../assets/loginSignup/backbutton.svg';
import Background from '../../../components/loginSignup/itemcomponent/Background';
import InputField from '../../../components/loginSignup/itemcomponent/InputField';
import SubmitButton from '../../../components/loginSignup/itemcomponent/SubmitButton';

const SignUpInfo = () => {
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setAddress(fullAddress);
    setIsPostcodeOpen(false);
  };

  return (
    <Background backgroundSrc={background} logoSrc={MainLogo} backButtonSrc={back} backLink={"/login"}>
      <div className="absolute top-[400px] left-1/2 transform -translate-x-1/2 w-full max-w-[276px]">
        <form className="relative w-full max-w-[276px]">
          <div className="mt-2">
            <InputField type="text" name="name" placeholder="이름" />
          </div>
          <div className="mt-2">
            <InputField type="email" name="email" placeholder="이메일" />
          </div>
          <div className="mt-2">
            <InputField type="password" name="password" placeholder="비밀번호" />
          </div>
          <div className="mt-2">
            <InputField type="password" name="confirmPassword" placeholder="비밀번호 확인" />
          </div>
          <div className="mt-2">
            <InputField
              type="text"
              name="address"
              placeholder="주소 입력"
              value={address}
              onClick={() => setIsPostcodeOpen(true)}
              readOnly
              className="cursor-pointer"
            />
          </div>
          <div className="mt-2">
            <InputField
              type="text"
              name="detailAddress"
              placeholder="상세 주소"
              value={detailAddress}
              onChange={(e) => setDetailAddress(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <SubmitButton>시작하기</SubmitButton>
          </div>
        </form>
      </div>
      {isPostcodeOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-4 rounded-lg max-w-[500px] w-full">
            <DaumPostcode onComplete={handleComplete} />
            <button
              className="mt-2 w-full py-2 bg-red-600 text-white rounded-md"
              onClick={() => setIsPostcodeOpen(false)}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </Background>
  );
};

export default SignUpInfo;
