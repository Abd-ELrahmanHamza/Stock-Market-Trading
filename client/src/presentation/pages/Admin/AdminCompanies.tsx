import AutocompleteDropDown from "../../components/Autocomplete";
import { Card } from "../../components/Card";
import Transactions from "../../features/Transactions";
import { Box } from "@mui/system";
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";
import React from "react";
import { InfoAlert } from "../../components/Alerts";
import { useAppDispatch, useAppSelector } from "../../../application/hooks";
import AdminCompanyForm from "../../features/AdminCompanyForm";
import { fetchCompanies } from "../../../application/slice/companiesSlice";
import Stocks from "../../features/Stocks";
import CenterBox from "../../components/CenterBox";
import LineChart from "../../components/LineChart";

const TransactionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  marginBottom: "1rem",
  color: theme.palette.primary.main,
}));

const AdminCompanies = () => {
  const [selectedCompany, setSelectedCompany] = React.useState<string>("");
  const [stocks, setStocks] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [companyStockRecords, setCompanyStockRecords] = React.useState<
    { name: string; value: number }[]
  >([]);
  const dispatch = useAppDispatch();

  const { companies, status, error } = useAppSelector(
    (state) => state.companies
  );

  const handleStocksChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStocks(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStocks("");
    setPrice("");
  };
  const handleOptionChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: unknown
  ) => {
    setSelectedCompany(newValue as string);
  };

  React.useEffect(() => {
    if (!companies || !companies[selectedCompany || ""]) return;
    setCompanyStockRecords(
      companies[selectedCompany || ""].map((record) => ({
        name: record.date,
        value: record.value,
      }))
    );
  }, [selectedCompany, companies]);
  React.useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);
  return (
    <TransactionsContainer>
      <Card
        props={{
          sx: {
            width: "100%",
            marginBottom: "1rem",
          },
        }}
      >
        <StyledTitle variant="h4">Select a company</StyledTitle>
        {companies && (
          <AutocompleteDropDown
            options={Object.keys(companies)}
            handleOptionChange={handleOptionChange}
          />
        )}
      </Card>
      <Card
        props={{
          sx: {
            width: "100%",
            marginBottom: "1rem",
          },
        }}
      >
        {selectedCompany ? (
          <Box>
            <StyledTitle variant="h4">
              Add stock to {selectedCompany}
            </StyledTitle>
            <AdminCompanyForm
              handleSubmit={handleSubmit}
              handleStocksChange={handleStocksChange}
              handlePriceChange={handlePriceChange}
              stocks={stocks}
              price={price}
            />
          </Box>
        ) : (
          <InfoAlert text={`Select a company to add stocks to it`} />
        )}
      </Card>
      <Card
        props={{
          sx: {
            width: "100%",
            marginBottom: "1rem",
          },
        }}
      >
        {selectedCompany && companyStockRecords ? (
          <CenterBox>
            <LineChart dataSet={companyStockRecords} />
          </CenterBox>
        ) : (
          //   <Stocks stocks={companies[selectedCompany]} />
          <InfoAlert text={`Select a company to show it's stocks`} />
        )}
      </Card>
    </TransactionsContainer>
  );
};

export default AdminCompanies;
