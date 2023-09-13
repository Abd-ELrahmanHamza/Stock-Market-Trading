import Stock from "./stock";

export default interface User {
  name: string;
  stocksCount: number;
  money: number;
  stocks: Stock[];
  profit: { [key: string]: number };
  role: "investor" | "admin";
}
