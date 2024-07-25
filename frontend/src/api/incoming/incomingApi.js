import axios from "axios"
import { url } from "../../constants/defaultUrl"

const getProductList = async () =>{
    try{
        const res = await axios.get(`${url}/product-search`,{
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
                
            }
        })
        return res.data;
    }catch(error){
        // console.log(...error)
        // alert(error.message)
        throw new Error("서버 연결 실패")
    }
}
export {getProductList}