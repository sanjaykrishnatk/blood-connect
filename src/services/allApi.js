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

//api to retrieve requests from admin side-Smera
export const retrieveRequestApi = async () => {
  return await commonApi("GET", `${serverUrl}/requests`, "");
};

//api to retrieve recipients data from admin side-Smera
export const retrieveRecipientApi = async () => {
  return await commonApi("GET", `${serverUrl}/recipients`, "");
};

//api to get/retrieve blood requests of the specific user - FARHANA
export const getRequestByPhoneApi = async (phone) => {
  return await commonApi("GET", `${serverUrl}/requests?phone=${phone}`, "");
};

//api to add form data to blood request section - FARHANA
export const addRequestApi = async (reqBody) => {
  return await commonApi("POST", `${serverUrl}/requests`, reqBody);
};

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
  return await commonApi("GET", `${serverUrl}/donors`, "");
};

//api to delete request from admin side

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

export const retrieveDonorDetails = async (donorId) => {
  return await commonApi("GET", `${serverUrl}/donors/${donorId}`);
};

export const updateDonorDetails = async (donorId, donorData) => {
  return await commonApi("PUT", `${serverUrl}/donors/${donorId}`, donorData);
};

// registration api
export const registrationApi = async (reqBody, type) => {
  let urlType = type == "recipient" ? "recipients" : "donors";
  return await commonApi("POST", `${serverUrl}/${urlType}`, reqBody);
};

//authenticate user api
export const authenticationApi = async (phone, type) => {
  let urlType = "";

  if (type == "recipient") {
    urlType = "recipients";
  } else if (type == "donor") {
    urlType = "donors";
  } else if (type == "admin") {
    urlType = "admin";
  }
  return await commonApi("GET", `${serverUrl}/${urlType}?phone=${phone}`, "");
};

//get donation requests by blood group api
export const getRequestsByBloodGroupApi = async (bloodGroup) => {
  return await commonApi(
    "GET",
    `${serverUrl}/requests?bloodGroup=${encodeURIComponent(bloodGroup)}`,
    ""
  );
};
