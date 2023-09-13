import { Api } from "../../infrastructure/services/api";

interface Services {
  logger: (message: string) => void;
  api: Api;
}

export type { Services };
