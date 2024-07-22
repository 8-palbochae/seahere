import MainLogo from '../../assets/common/MainLogo.svg';
import background from '../../assets/common/background.svg';
import back from '../../assets/loginSignup/backbutton.svg';
import ChoiceBox from '../../components/loginSignup/ChoiceBox';
import Background from '../../components/loginSignup/Background';

const SignUpChoice = () => {
  return (
    <Background backgroundSrc={background} logoSrc={MainLogo} backButtonSrc={back} backLink={"/"}>
      <div className="absolute w-full h-full top-[436px] flex flex-col items-center space-y-6 mt-4">
        <ChoiceBox to="/signup-B-choice">사업자로 가입</ChoiceBox>
        <ChoiceBox to="/signup-info">일반 사용자로 가입</ChoiceBox>
      </div>
    </Background>
  );
};

export default SignUpChoice;