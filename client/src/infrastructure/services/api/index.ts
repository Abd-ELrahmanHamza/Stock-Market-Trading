import { postCompaniesRecords } from "./companies";
import { getStocks, postStocks } from "./stocks";
import { postTransactions } from "./transactions";
import { postUser } from "./user";

interface Api {
  postCompaniesRecords: typeof postCompaniesRecords;
  postStocks: typeof postStocks;
  postTransactions: typeof postTransactions;
  postUser: typeof postUser;
  getStocks: typeof getStocks;
}

const api: Api = {
  postCompaniesRecords: postCompaniesRecords,
  postStocks: postStocks,
  postTransactions: postTransactions,
  postUser,
  getStocks,
};
export default api;
export type { Api };
