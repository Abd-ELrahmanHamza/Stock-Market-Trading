import { axiosInstance, fetchData } from "./axios";
const postTransactions = async (data: any, userName: string) => {
  fetchData({
    axiosInstance: axiosInstance,
    method: "POST",
    url: `/transactions/`,
    requestConfig: {
      data: { data: data, userName: userName },
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export { postTransactions };
