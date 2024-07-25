import axios from "axios";

const getOutgoingReqList = async () => {
	axios
		.get("http://localhost:8080/outgoings")
		.then(function (response) {
			console.log(response.data);
		})
		.catch(function (error) {
			console.log(error);
		});
};
export { getOutgoingReqList };
