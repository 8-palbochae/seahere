import { Link } from "react-router-dom";
import MainImage from "../constants/main/main.image";

const SignUpTemplate = () => {
	return (
		<div>
			<div className="relative w-[390px] h-[844px] bg-white">
				<div className="absolute w-[390px] h-[423px] top-[436px] left-1">
					<img
						className="w-[390px] h-[390px] top-[33px] left-0 absolute object-cover"
						src={MainImage.background}
					/>
				</div>
				<div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<img
						className="w-80 h-80 object-cover"
						src={MainImage.mainLogo}
						alt="Main Logo"
					/>
				</div>
			</div>

			<div>
				<Link to={"/main"}>메인으로</Link>
				<Link to={"/incoming"}>입고화면으로</Link>
			</div>
		</div>
	);
};

export default SignUpTemplate;
