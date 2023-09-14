import { Services } from "../../domain/entities/services";
import { postCompaniesRecords } from "./api/companies";
import { postStocks, getStocks } from "./api/stocks";
import { postTransactions } from "./api/transactions";
import { postUser } from "./api/user";
import consoleLogger from "./logger/consoleLogger";

const services: Services = {
  logger: consoleLogger,
  api: {
    postCompaniesRecords,
    postStocks,
    postTransactions,
    postUser,
    getStocks,
  },
};

export default services;
