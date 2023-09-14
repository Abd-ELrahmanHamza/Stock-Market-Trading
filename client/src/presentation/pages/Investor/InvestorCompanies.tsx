import React, { useEffect } from "react";
import { Card } from "../../components/Card";
import CenterBox from "../../components/CenterBox";
import CompaniesAccordion from "../../features/CompaniesAccordion";
import { Grid, Typography, Box } from "@mui/material";
import styled from "@mui/material/styles/styled";
import LineChart from "../../components/LineChart";
import { useAppSelector } from "../../../application/hooks";

const CompanyName = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2, 0),
}));

const InvestorCompanies = () => {
  const stocks = useAppSelector((state) => state.stocks);
  const companies = useAppSelector((state) => state.companies.companies);
  const [selectedCompany, setSelectedCompany] = React.useState<string | false>(
    false
  );
  const [companyStockRecords, setCompanyStockRecords] = React.useState<
    { name: string; value: number }[]
  >([]);
  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

  useEffect(() => {
    if (!companies || selectedCompany) return;
    setSelectedCompany(Object.keys(companies)[0]);
  }, [companies, selectedCompany]);

  useEffect(() => {
    if (!companies || !companies[selectedCompany || ""]) return;
    setCompanyStockRecords(
      companies[selectedCompany || ""].map((record) => ({
        name: record.date,
        value: record.value,
      }))
    );
  }, [selectedCompany, companies]);
  return (
    <Box>
      <CompanyName variant="h4" color="primary">
        {selectedCompany}
      </CompanyName>
      <Grid container spacing={3} columns={{ xs: 1, md: 1, lg: 4 }}>
        <Grid item xs={1} md={3}>
          <Card>
            <CenterBox>
              <LineChart dataSet={companyStockRecords} />
            </CenterBox>
          </Card>
        </Grid>
        <Grid item xs={1} md={1}>
          <Card>
            <CompaniesAccordion
              stocks={stocks.stocks}
              handleSelectCompany={handleSelectCompany}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InvestorCompanies;
