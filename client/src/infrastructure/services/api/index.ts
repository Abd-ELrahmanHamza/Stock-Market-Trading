import { postCompaniesRecords } from "./companies";
import { getStocks, postStocks, updateStocks } from "./stocks";
import { postTransactions } from "./transactions";
import { postUser } from "./user";

interface Api {
  postCompaniesRecords: typeof postCompaniesRecords;
  postStocks: typeof postStocks;
  postTransactions: typeof postTransactions;
  postUser: typeof postUser;
  getStocks: typeof getStocks;
  updateStocks: typeof updateStocks;
}

const api: Api = {
  postCompaniesRecords: postCompaniesRecords,
  postStocks: postStocks,
  postTransactions: postTransactions,
  postUser,
  getStocks,
  updateStocks,
};
export default api;
export type { Api };
