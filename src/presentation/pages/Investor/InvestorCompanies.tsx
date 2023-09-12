import React from "react";
import { BarChart } from "../../components/BarChart";
import { Card } from "../../components/Card";
import CenterBox from "../../components/CenterBox";
import CompaniesAccordion from "../../features/CompaniesAccordion";
import { Grid, Typography, Box } from "@mui/material";
import styled from "@mui/material/styles/styled";
const companies = [
  {
    name: "Apple",
    stocks: 200,
    price: 200,
  },
  {
    name: "Google",
    stocks: 200,
    price: 200,
  },
  {
    name: "Facebook",
    stocks: 200,
    price: 200,
  },
  {
    name: "Microsoft",
    stocks: 200,
    price: 200,
  },
  {
    name: "Microsoft",
    stocks: 200,
    price: 200,
  },
  {
    name: "Microsoft2",
    stocks: 200,
    price: 200,
  },
  {
    name: "Microsoft3",
    stocks: 200,
    price: 200,
  },
  {
    name: "Microsoft4",
    stocks: 200,
    price: 200,
  },
];

const CompanyName = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2,0),
}));
const InvestorCompanies = () => {
  const [selectedCompany, setSelectedCompany] = React.useState<string | false>(
    false
  );
  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };
  return (
    <Box>
      <CompanyName variant="h4" color="primary">
        {selectedCompany}
      </CompanyName>
      <Grid container spacing={3} columns={{ xs: 1, md: 1, lg: 4 }}>
        <Grid item xs={1} md={3}>
          <Card>
            <CenterBox>
              <BarChart />
            </CenterBox>
          </Card>
        </Grid>
        <Grid item xs={1} md={1}>
          <Card>
            <CompaniesAccordion
              companies={companies}
              handleSelectCompany={handleSelectCompany}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InvestorCompanies;
