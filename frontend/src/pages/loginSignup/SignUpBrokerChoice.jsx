import { Link } from "react-router-dom";
import MainLogo from '../../assets/common/MainLogo.svg';
import background from '../../assets/common/background.svg';
import back from '../../assets/loginSignup/backbutton.svg';

const SignUpBrokerChoice = () => {
  return (
    <div className="relative w-[390px] h-[844px] bg-white">
      <div className="absolute w-[390px] h-[423px] top-[436px] left-0">
        <img
          className="w-[390px] h-[390px] top-[33px] left-0 absolute object-cover"
          src={background}
        />
        <div className="absolute w-full h-full top-0 flex flex-col items-center space-y-6 mt-4">
          <Link to="/signup-B-info">
            <div className="flex items-center justify-center w-[316px] h-[160px] bg-[#fffffff2] rounded-[25px] border border-solid border-[#d9d9d9]">
              <div className="[font-family: 'inter-Regular', Helvetica] font-normal text-black text-center tracking-[0] leading-[30px] whitespace-nowrap">
                신규 사업자 등록
              </div>
            </div>
          </Link>
          <Link to="/signup-info">
            <div className="flex items-center justify-center w-[316px] h-[160px] bg-[#fffffff2] rounded-[25px] border border-solid border-[#d9d9d9]">
              <div className="[font-family: 'inter-Regular', Helvetica] font-normal text-black text-center tracking-[0] leading-[30px] whitespace-nowrap">
                신규 직원 등록
              </div>
            </div>
          </Link>
        </div>
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
    </div>
  );
};

export default SignUpBrokerChoice;
