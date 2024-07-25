import axios from "axios"
import { url } from "../../constants/defaultUrl"

const getProductList = async (type) =>{  
    try{
        const res = await axios.get(`${url}/product-search-${type}`,{
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
                
            }
        })
        return res.type;
    }catch(error){
        // console.log("dsfa:", `${url}/product-search-${type}`);
        throw new Error("서버 연결 실패")
    }
}
export {getProductList}