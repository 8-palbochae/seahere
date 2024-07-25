import axios from "axios";
import { url } from "../../constants/defaultUrl";

const getOutgoingReqList = async () => {
	try {
		const res = await axios.get(`${url}/outgoings`, {});
		return res.data;
	} catch (error) {
		throw new Error("Failed to fetch data");
	}
};
export { getOutgoingReqList };
