import { axiosInstance, fetchData } from "./axios";
const postStocks = async (data: any) => {
  fetchData({
    axiosInstance: axiosInstance,
    method: "POST",
    url: `/stocks/`,
    requestConfig: {
      data: data,
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

const updateStocks = async (data: any) => {
  fetchData({
    axiosInstance: axiosInstance,
    method: "POST",
    url: `/stock/`,
    requestConfig: {
      data: data,
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

const getStocks = async () => {
  return fetchData({
    axiosInstance: axiosInstance,
    method: "GET",
    url: `/stocks/`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};



export { postStocks, getStocks, updateStocks };
