import { Services } from "../../domain/entities/services";
import companiesMiddleware from "./companiesMiddleware";
import stocksMiddleware from "./stocksMiddleware";
import transactionsMiddleware from "./transactionsMiddleware";
import userMiddleware from "./userMiddleware";

const customMiddleWare =
  ({ logger }: Services) =>
  (store: any) =>
  (next: any) =>
  (action: any) => {
    logger(action);
    next(action);
  };
const middlewares = [
  customMiddleWare,
  ...companiesMiddleware,
  ...stocksMiddleware,
  ...transactionsMiddleware,
  ...userMiddleware,
];

export default middlewares;
