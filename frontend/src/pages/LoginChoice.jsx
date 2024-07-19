import { Link } from "react-router-dom";

const LoginChoice = () => {
	return (
		<div>
			첫 로그인 선택창 입니다.
			<div>
				<Link to={"/main"}>메인으로</Link>
			</div>
		</div>
	);
};

export default LoginChoice;
