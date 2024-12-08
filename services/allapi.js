import { commonApi } from "./commonapi";
import { serverUrl } from "./severurl";


export const getProductApi = async()=>{
    return await commonApi('GET',`${serverUrl}/products`,"")
}

export const addProductApi = async(reqBody)=>{
    return await commonApi('POST', `${serverUrl}/product`,reqBody)
}