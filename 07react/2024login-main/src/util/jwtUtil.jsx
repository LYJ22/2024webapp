import axios from "axios";
import { getCookie } from "./cookieUtil";

const jwtAxios = axios.create();
const beforeReq = (config) => {
  console.log("before request...");

  const memberInfo = getCookie("member");

  if (!memberInfo) {
    return Promise.reject({ response: { data: { error: "Require_login" } } });
  }

  const { accessToken } = memberInfo;
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};
const requestFail = (error) => {
  console.log("Request Fail..........");
  return Promise.reject(error);
};

const beforeRes = (res) => {
  console.log("before response...");
  console.log(res);

  // const data = res.data
};
const responseFail = (error) => {
  console.log("Response Fail..........");
  return Promise.reject(error);
};

jwtAxios.interceptors.request(beforeReq, requestFail);
jwtAxios.interceptors.response(beforeRes, responseFail);

export default jwtAxios;
