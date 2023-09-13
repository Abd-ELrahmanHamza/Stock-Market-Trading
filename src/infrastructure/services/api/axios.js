import { default as axios } from "axios";

// Base URL for the api
const BASE_URL = "http://localhost:8000/";
/*
  process.env.REACT_APP_MODE === "production"
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_MOCK_URL;
*/
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const fetchData = async (configObj) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;

  try {
    const ctrl = new AbortController();
    const res = await axiosInstance({
      method,
      url,
      ...requestConfig,
      signal: ctrl.signal,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export { fetchData, axiosInstance };
