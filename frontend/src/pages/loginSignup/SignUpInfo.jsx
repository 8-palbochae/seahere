import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';
import MainLogo from '../../assets/common/MainLogo.svg';
import background from '../../assets/common/background.svg';
import back from '../../assets/loginSignup/backbutton.svg';

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
    <div className="relative w-[390px] h-[844px] bg-white">
      <div className="absolute w-[390px] h-[465px] top-[401px] left-0">
        <img
          className="w-[390px] h-[390px] top-[75px] left-0 absolute object-cover"
          src={background}
        />
      </div>
      <img
        className="absolute w-80 h-80 top-[52px] left-[35px] object-cover"
        src={MainLogo}
      />
      <Link to="/signup-choice">
        <img
          className="absolute w-[30px] h-10 top-2 left-2.5 object-cover"
          src={back}
        />
      </Link>
      <div className="absolute top-[400px] left-1/2 transform -translate-x-1/2 w-full max-w-[276px]">
        <form className="relative w-full max-w-[276px]">
          <input
            className="absolute w-full px-4 py-2 border border-gray-300 rounded-md font-normal text-black leading-normal left-1/2 transform -translate-x-1/2"
            type="text"
            placeholder="이름"
            style={{ top: '0px' }}
          />
          <input
            className="absolute w-full px-4 py-2 border border-gray-300 rounded-md font-normal text-black leading-normal left-1/2 transform -translate-x-1/2"
            type="email"
            placeholder="이메일"
            style={{ top: '60px' }}
          />
          <input
            className="absolute w-full px-4 py-2 border border-gray-300 rounded-md font-normal text-black leading-normal left-1/2 transform -translate-x-1/2"
            type="password"
            placeholder="비밀번호"
            style={{ top: '120px' }}
          />
          <input
            className="absolute w-full px-4 py-2 border border-gray-300 rounded-md font-normal text-black leading-normal left-1/2 transform -translate-x-1/2"
            type="password"
            placeholder="비밀번호 확인"
            style={{ top: '180px' }}
          />
          <input
            className="absolute w-full px-4 py-2 border border-gray-300 rounded-md font-normal text-black leading-normal left-1/2 transform -translate-x-1/2 cursor-pointer"
            type="text"
            placeholder="주소 입력"
            style={{ top: '240px' }}
            value={address}
            onClick={() => setIsPostcodeOpen(true)}
            readOnly
          />
          <input
            className="absolute w-full px-4 py-2 border border-gray-300 rounded-md font-normal text-black leading-normal left-1/2 transform -translate-x-1/2"
            type="text"
            placeholder="상세 주소"
            style={{ top: '300px' }}
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
          />
          <button
            className="absolute w-full py-2 bg-blue-600 text-white rounded-md font-normal leading-normal left-1/2 transform -translate-x-1/2"
            type="submit"
            style={{ top: '360px' }}
          >
            시작하기
          </button>
        </form>
      </div>
      {isPostcodeOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-4 rounded-lg">
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
    </div>
  );
};

export default SignUpInfo;
