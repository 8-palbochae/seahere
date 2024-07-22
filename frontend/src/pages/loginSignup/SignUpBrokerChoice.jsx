import MainLogo from '../../assets/common/MainLogo.svg';
import background from '../../assets/common/background.svg';
import back from '../../assets/loginSignup/backbutton.svg';
import Background from '../../components/loginSignup/Background';
import ChoiceBox from '../../components/loginSignup/ChoiceBox';

const SignUpBrokerChoice = () => {
  return (
    <Background backgroundSrc={background} logoSrc={MainLogo} backButtonSrc={back} backLink={"/signup-choice"}>
      <div className="absolute w-full h-full top-[436px] flex flex-col items-center space-y-6 mt-4">
        <ChoiceBox to="/signup-B-info">신규 사업자 등록</ChoiceBox>
        <ChoiceBox to="/signup-info">신규 직원 등록</ChoiceBox>
      </div>
    </Background>
  );
};

export default SignUpBrokerChoice;
