import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";
//sms api
export const smsApi = async (reqBody) => {
  return await commonApi(
    "POST",
    "https://www.fast2sms.com/dev/bulkV2",
    reqBody
  );
};
//api to get donors grouped by blood group
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




//api to get/retrieve blood requests of the specific user - FARHANA

export const getRequestByIdApi= async(id)=>{
  return await commonApi('GET', `${serverUrl}/requests/${id}`, "")
}

//api to add form data to blood request section - FARHANA
export const addRequestApi = async(reqBody)=>{
  return await commonApi('POST',`${serverUrl}/requests`, reqBody )
}


// API to retrieve last donation date by donor ID
export const retrieveLastDonation = async (donorId) => {
  return await commonApi("GET", `${serverUrl}/donors/${donorId}`, "");
};

//Api to retrieve donor data by admin
export const retrieveDonorsApi = async () => {
  return await commonApi("GET", `${serverUrl}/donors`, "");
};

// API to update last donation date by donor ID
export const updateLastDonationApi = async (donorId, reqBody) => {
  return await commonApi("PATCH", `${serverUrl}/donors/${donorId}`, reqBody);
};

// API to retrieve history to donorhistory
export const retrieveHistoryApi = async () => {
  return await commonApi("GET", `${serverUrl}/history`, "");
};

//Api to delete request by admin
export const deleteRequestApi = async (id) => {
  return await commonApi("DELETE", `${serverUrl}/requests/${id}`, "");
};

//api to get request by request id
export const getRequestDetails = async (id) => {
  return await commonApi("GET", `${serverUrl}/requests/${id}`, "");
};

//api to update request by request id
export const updateRequestDetails = async (id, reqBody) => {
  return await commonApi("PUT", `${serverUrl}/requests/${id}`, reqBody);
};

//api to get donor by donor id
export const getDonorDetailsApi = async (id) => {
  return await commonApi("GET", `${serverUrl}/donors/${id}`, "");
};

//api to update donor donation history
export const updateDonorHistoryApi = async (id, reqBody) => {
  return await commonApi("PUT", `${serverUrl}/donors/${id}`, reqBody);
};

