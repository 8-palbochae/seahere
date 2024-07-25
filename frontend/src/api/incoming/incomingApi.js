import axios from "axios"
import { url } from "../../constants/defaultUrl"

const getProductList = async () =>{
    try{
        const res = await axios.get(`${url}/product-search`)
        return res.data;
    }catch(error){
        throw new Error("서버 연결 실패")
    }
}
export {getProductList}