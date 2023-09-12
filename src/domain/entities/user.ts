export default interface User {
  name: string;
  stocksCount: number;
  money: number;
  stocks: Record<string, number>; // Define stocks as an object with string keys and number values
}
