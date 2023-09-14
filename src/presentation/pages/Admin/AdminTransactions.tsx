import AutocompleteDropDown from "../../components/Autocomplete";
import { Card } from "../../components/Card";
import Transactions from "../../features/Transactions";
import { Box } from "@mui/system";
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";
import React from "react";
import { InfoAlert } from "../../components/Alerts";
import { useAppDispatch, useAppSelector } from "../../../application/hooks";
import { fetchTransactions } from "../../../application/slice/usersTransactionsSlice";

const TransactionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));

const AdminTransactions = () => {
  const dispatch = useAppDispatch();
  const { usersTransactions, status, error } = useAppSelector(
    (state) => state.usersTransactions
  );
  React.useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const [selectedUser, setSelectedUser] = React.useState<string>("");
  const handleOptionChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: unknown
  ) => {
    setSelectedUser(newValue as string);
  };
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
        <Typography
          sx={{
            marginBottom: "1rem",
          }}
          variant="h4"
          color="primary"
        >
          Select a user
        </Typography>
        {usersTransactions && (
          <AutocompleteDropDown
            options={Object.keys(usersTransactions)}
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
        {selectedUser ? (
          <Transactions transactions={usersTransactions[selectedUser]} />
        ) : (
          <InfoAlert text={`Select a user to show his transactions`} />
        )}
      </Card>
    </TransactionsContainer>
  );
};

export default AdminTransactions;
