import { axiosInstance, fetchData } from "./axios";

const getStatistics = async () => {
  return fetchData({
    axiosInstance: axiosInstance,
    method: "GET",
    url: `/statistics/`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export { getStatistics };
