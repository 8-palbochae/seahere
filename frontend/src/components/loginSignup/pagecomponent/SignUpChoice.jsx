import MainLogo from '../../../assets/common/MainLogo.svg';
import background from '../../../assets/common/background.svg';
import back from '../../../assets/loginSignup/backbutton.svg';
import ChoiceBox from '../../../components/loginsignup/itemcomponent/ChoiceBox';
import Background from '../../../components/loginsignup/itemcomponent/Background';

const SignUpChoice = () => {
  return (
    <Background backgroundSrc={background} logoSrc={MainLogo} backButtonSrc={back} backLink={"/login"}>
      <div className="absolute w-full h-full top-[436px] flex flex-col items-center space-y-6 mt-4">
        <ChoiceBox to="/signup/broker-choice">사업자로 가입</ChoiceBox>
        <ChoiceBox to="/signup">일반 사용자로 가입</ChoiceBox>
      </div>
    </Background>
  );
};

export default SignUpChoice;