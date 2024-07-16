import axios from "axios";

export const commonApi = async (httpRequest, url, reqBody) => {
  let reqConfig = {
    method: httpRequest,
    url,
    data: reqBody,
    headers: {
      authorization:
        "wB2U60QDGRgbP5HW7qdTpZi9rezOMk4nFELucxJX1hCfvYKVlA6ELlu5kNHj824B9zDpsI7RwrCGofbd",
      "Content-Type": "application/json",
    },
  };
  return await axios(reqConfig)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
