interface CompanyStockRecord {
  date: string;
  value: number;
}

interface CompaniesRecords {
  [key: string]: CompanyStockRecord[];
}

interface CompaniesState {
  companies: CompaniesRecords;
  status: string;
  error: string | null;
}
export type { CompanyStockRecord, CompaniesRecords, CompaniesState };
