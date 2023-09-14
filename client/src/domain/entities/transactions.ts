interface Transaction {
  type: string;
  amount: number;
  date: string;
  company: string;
  price: number;
}

interface UsersTransactions {
  [key: string]: Transaction[];
}
export type { Transaction, UsersTransactions };
