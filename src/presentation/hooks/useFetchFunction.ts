import { useState, useEffect } from "react";

type ConfigObject = {
  axiosInstance: any; // Change to your axios instance type
  method: string;
  url: string;
  requestConfig?: any; // Change to your request config type
};

type FetchData = (configObj: ConfigObject) => Promise<void>;

type UseFetchFunctionReturnType = [
  any,
  string | null,
  boolean,
  FetchData | null
];

const useFetchFunction = (): UseFetchFunctionReturnType => {
  // The response state
  const [response, setResponse] = useState<any>([]);
  // The error state
  const [error, setError] = useState<string | null>(null);
  // The loading state (used to show something like a spinner)
  const [loading, setLoading] = useState<boolean>(false);
  // The reloading state (used to trigger a reload of the data)
  const [controller, setController] = useState<AbortController | null>(null);

  /**
   *  Used to fetch data from an API
   */
  const fetchData: FetchData = async (configObj) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;

    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      const res = await axiosInstance({
        method,
        url,
        ...requestConfig,
        signal: ctrl.signal,
      });
      setResponse(res.data);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // useEffect cleanup function
    return () => controller?.abort();
  }, [controller]);

  return [response, error, loading, fetchData];
};

export default useFetchFunction;
