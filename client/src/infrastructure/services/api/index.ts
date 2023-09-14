import { postCompaniesRecords } from "./companies";
import { postStocks } from "./stocks";
import { postTransactions } from "./transactions";
import { postUser } from "./user";

interface Api {
  postCompaniesRecords: typeof postCompaniesRecords;
  postStocks: typeof postStocks;
  postTransactions: typeof postTransactions;
  postUser: typeof postUser;
}

const api: Api = {
  postCompaniesRecords: postCompaniesRecords,
  postStocks: postStocks,
  postTransactions: postTransactions,
  postUser,
};
export default api;
export type { Api };
