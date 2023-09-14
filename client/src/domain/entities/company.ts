interface CompanyStockRecord {
  date: string;
  value: number;
}

interface CompaniesRecords {
  [key: string]: CompanyStockRecord[];
}

export type { CompanyStockRecord, CompaniesRecords };
