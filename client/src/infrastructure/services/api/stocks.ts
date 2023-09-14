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

export { postStocks };
