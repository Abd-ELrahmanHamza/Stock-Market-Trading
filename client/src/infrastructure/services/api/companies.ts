import { axiosInstance, fetchData } from "./axios";
const postCompaniesRecords = async (data: any) => {
  fetchData({
    axiosInstance: axiosInstance,
    method: "POST",
    url: `/companiesRecords/`,
    requestConfig: {
      data: data,
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

const getCompaniesRecords = async () => {
  return fetchData({
    axiosInstance: axiosInstance,
    method: "GET",
    url: `/companiesRecords/`,
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
};

export { postCompaniesRecords, getCompaniesRecords };
