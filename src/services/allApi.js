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


// API to retrieve last donation date by donor ID
export const retrieveLastDonation = async (donorId) => {
  return await commonApi("GET", `${serverUrl}/donors/${donorId}`, "");
};

// API to update last donation date by donor ID
export const updateLastDonationApi = async (donorId, reqBody) => {
  return await commonApi("PATCH", `${serverUrl}/donors/${donorId}`, reqBody);
};

// API to retrieve history to donorhistory
export const retrieveHistoryApi = async () => {
  return await commonApi("GET", `${serverUrl}/history`, "");
};

