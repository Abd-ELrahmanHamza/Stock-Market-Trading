import { Services } from "../../domain/entities/services";

const setUserMiddleware =
  ({ api }: Services) =>
  (store: any) =>
  (next: any) =>
  (action: any) => {
    if (
      action.type === "user/addMoney" ||
      action.type === "user/buyStock" ||
      action.type === "user/sellStock" ||
      action.type === "user/addProfit" ||
      action.type === "user/setUser"
    ) {
      const currentState = store.getState();
      api.postUser(currentState.user);
    }
    next(action);
  };

export default [setUserMiddleware];
