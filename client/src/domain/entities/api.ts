type ConfigObject = {
  data?: any;
  method: string;
  url: string;
  requestConfig?: any; // Change to your request config type
  headers?: any;
};

type FetchData = (
  configObj: ConfigObject,
//   setLoading: (loading: boolean) => void,
//   setResponse: (response: any) => void,
//   setError: (error: any) => void
) => Promise<void>;

export type { FetchData, ConfigObject };
