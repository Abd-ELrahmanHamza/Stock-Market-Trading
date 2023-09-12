import React from "react";
import { BarChart } from "../../components/BarChart";
import { Card } from "../../components/Card";
import CenterBox from "../../components/CenterBox";
import CompaniesAccordion from "../../features/CompaniesAccordion";
import { Grid, Typography, Box } from "@mui/material";
import styled from "@mui/material/styles/styled";
import { useAppSelector } from "../../../application/hooks";

const CompanyName = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2, 0),
}));

const InvestorCompanies = () => {
  const companies = useAppSelector((state) => state.companies.companies);
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
