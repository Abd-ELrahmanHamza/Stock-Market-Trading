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

const getTransactions = async () => {
  return fetchData({
    axiosInstance: axiosInstance,
    method: "GET",
    url: `/usersTransactions/`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export { postTransactions, getTransactions };
