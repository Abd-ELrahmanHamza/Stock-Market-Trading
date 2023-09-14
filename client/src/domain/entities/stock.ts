export default interface Stock {
  name: string;
  count: number;
  price: number;
}

export interface StockState {
  stocks: Stock[];
  status: string;
  error: string | null;
}
