import { store } from "../store";

const getUserUtil = () => {
  return store.getState().user;
};

export { getUserUtil };
