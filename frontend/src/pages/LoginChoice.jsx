import { Link } from "react-router-dom";
import MainLogo from '../assets/common/MainLogo.svg';
import background from '../assets/common/background.svg';
import naver from '../assets/loginSignup/naver.svg';
import google from '../assets/loginSignup/google.svg';
import middleLine from '../assets/loginSignup/middle_Line.svg';
import InputField from '../components/loginSignup/InputField'; // 새로 정의한 InputField 컴포넌트를 가져옵니다
import SubmitButton from '../components/loginSignup/SubmitButton'; // 새로 정의한 SubmitButton 컴포넌트를 가져옵니다

const LoginChoice = () => {
	return (
		<div>
			<div className="relative w-[390px] h-[844px] bg-white">
				<div className="absolute w-[390px] h-[423px] top-[436px] left-1">
					<img
						className="w-[390px] h-[390px] top-[33px] left-0 absolute object-cover"
						src={background}
					/>
					<div className="absolute w-[259px] h-[148px] top-[233px] left-[62px]">
						<div className="absolute w-[135px] h-[62px] top-0 left-[60px]">
							<img
								className="w-[62px] h-[62px] top-0 left-[73px] absolute object-cover"
								src={naver}
							/>
							<img
								className="w-16 h-[62px] top-0 left-0 absolute object-cover"
								src={google}
							/>
						</div>
						<div className="absolute w-[261px] h-[15px] top-[77px] left-0">
							<div className="relative w-[259px] h-[15px]">
								<img
									className="absolute w-[259px] h-0.5 top-2 left-0"
									src={middleLine}
								/>
								<div className="w-[33px] top-0 left-[111px] text-black text-[15px] text-center leading-[15px] whitespace-nowrap absolute [font-family:'Inter-Regular',Helvetica] font-normal tracking-[0]">
									또는
								</div>
							</div>
						</div>
						<div className="absolute w-[222px] h-5 top-32 left-[19px]">
							<div className="absolute w-[220px] top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[15px]">
								<Link to={"/signup-choice"}>email로 시작하기</Link>
							</div>
						</div>
					</div>
					<form className="absolute w-[276px] h-[207px] top-0 left-[62px]">
						<div className="top-0 absolute w-[273px] h-[52px] left-0.5">
							<InputField type="text" name="email" placeholder="이메일" />
						</div>
						<div className="top-[66px] absolute w-[273px] h-[52px] left-0.5">
							<InputField type="password" name="password" placeholder="비밀번호" />
						</div>
						<div className="absolute w-[276px] h-[49px] top-[132px] left-0">
							<SubmitButton>시작하기</SubmitButton>
						</div>
					</form>
					<div className="w-[100%] h-[18px] top-[189px] left-0 text-black text-base text-center leading-[normal] absolute [font-family:'Inter-Regular',Helvetica] font-normal tracking-[0]">
						아이디/비밀번호 재발급
					</div>
				</div>
				<img
					className="absolute w-80 h-80 top-[52px] left-[35px] object-cover"
					src={MainLogo}
				/>
			</div>

			<div>
				<Link to={"/main"}>메인으로</Link>
				<Link to={"/incoming"}>입고화면으로</Link>
			</div>
		</div>
	);
};

export default LoginChoice;
