import AutocompleteDropDown from "../../components/Autocomplete";
import { Card } from "../../components/Card";
import { Box } from "@mui/system";
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";
import React from "react";
import { InfoAlert } from "../../components/Alerts";
import { useAppDispatch, useAppSelector } from "../../../application/hooks";
import AdminCompanyForm from "../../features/AdminCompanyForm";
import { fetchCompanies } from "../../../application/slice/companiesSlice";
import CenterBox from "../../components/CenterBox";
import LineChart from "../../components/LineChart";
import { fetchStocks } from "../../../application/slice/stocksSlice";
import { updateStockUtil } from "../../../application/utils/stocks";

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
  const [stocksCount, setStocksCount] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [companyStockRecords, setCompanyStockRecords] = React.useState<
    { name: string; value: number }[]
  >([]);
  const dispatch = useAppDispatch();

  const companies = useAppSelector((state) => state.companies);
  const stocks = useAppSelector((state) => state.stocks);

  const handleStocksChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStocksCount(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateStockUtil({
      name: selectedCompany,
      count: parseInt(stocksCount),
      price: parseInt(price),
    });
  };
  const handleOptionChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: unknown
  ) => {
    setSelectedCompany(newValue as string);
  };

  React.useEffect(() => {
    if (
      !companies ||
      !companies.companies ||
      !companies.companies[selectedCompany || ""]
    )
      return;
    setCompanyStockRecords(
      companies.companies[selectedCompany || ""].map((record) => ({
        name: record.date,
        value: record.value,
      }))
    );
  }, [selectedCompany, companies]);
  React.useEffect(() => {
    dispatch(fetchCompanies());
    dispatch(fetchStocks());
  }, [dispatch]);
  React.useEffect(() => {
    if (!stocks || !stocks.stocks || !selectedCompany) return;
    const companyStockIndex = stocks.stocks.findIndex(
      (stock) => stock.name === selectedCompany
    );
    if (companyStockIndex === -1) return;
    setPrice(stocks.stocks[companyStockIndex].price.toString());
    setStocksCount(stocks.stocks[companyStockIndex].count.toString());
  }, [stocks, selectedCompany]);
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
        {companies && companies.companies && (
          <AutocompleteDropDown
            options={Object.keys(companies.companies)}
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
              stocks={stocksCount}
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
          <>
            <Typography variant="h5" textAlign={"center"}>
              Stocks of {selectedCompany} (Updated every 10s)
            </Typography>
            <CenterBox>
              <LineChart dataSet={companyStockRecords} />
            </CenterBox>
          </>
        ) : (
          <InfoAlert text={`Select a company to show it's stocks`} />
        )}
      </Card>
    </TransactionsContainer>
  );
};

export default AdminCompanies;
