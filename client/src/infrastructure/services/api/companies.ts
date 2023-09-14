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

export { postCompaniesRecords };
