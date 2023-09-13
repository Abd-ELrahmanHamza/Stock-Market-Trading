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

export { postUser };
