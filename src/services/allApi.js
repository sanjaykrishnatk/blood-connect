import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";



export const retrieveRequestApi =async()=>{
    await commonApi('GET',`${serverUrl}/requests`,"")
}