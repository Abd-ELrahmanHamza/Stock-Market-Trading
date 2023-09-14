import { axiosInstance, fetchData } from "./axios";

const postUser = async (data: any) => {
  fetchData({
    axiosInstance: axiosInstance,
    method: "POST",
    url: `/user/`,
    requestConfig: {
      data: data,
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

const getUsers = async () => {
  return fetchData({
    axiosInstance: axiosInstance,
    method: "GET",
    url: `/user/`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export { postUser, getUsers };
