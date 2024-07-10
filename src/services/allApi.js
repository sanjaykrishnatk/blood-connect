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
