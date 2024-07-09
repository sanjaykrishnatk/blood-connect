import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

export const smsApi = async (reqBody) => {
  return await commonApi(
    "POST",
    "https://www.fast2sms.com/dev/bulkV2",
    reqBody
  );
};

export const getDonorsByBloodGroupApi = async (bloodGroup) => {
  return await commonApi(
    "GET",
    `${serverUrl}/donors?bloodGroup=${encodeURIComponent(bloodGroup)}`,
    ""
  );
};

export const retrieveRequestApi = async () => {
  return await commonApi("GET", `${serverUrl}/requests`, "");
};


//api to get/retrieve requests of the specific user

export const getRequestReportApi= async()=>{
  return await commonApi('GET', `${serverUrl}/requests`, "")
}

//api to add form data to request section
export const addRequestApi = async(reqBody)=>{
  return await commonApi('POST',`${serverUrl}/requests`, reqBody )
}
