import { Box } from "@mui/material";
import { WalletCard } from "../../features/Cards";
import styled from "@mui/material/styles/styled";
import { useState } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { Card } from "../../components/Card";
import { useAppDispatch } from "../../../application/hooks";
import { addMoney } from "../../../application/slice/userSlice";
import { getUserUtil } from "../../../application/utils/user";

const WalletContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

interface MoneyFormProps {
  handleAddMoney: (amount: number) => void;
}
function MoneyForm({ handleAddMoney }: MoneyFormProps) {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the amount to a server or perform some action
    handleAddMoney(amount ? parseInt(amount) : 0);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Money Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Amount of Money"
              variant="outlined"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

const InvestorWallet = () => {
  const user = getUserUtil();
  const dispatcher = useAppDispatch();
  const handleAddMoney = (amount: number) => {
    console.log("Add Money");
    dispatcher(addMoney(amount));
  };
  return (
    <Box>
      <WalletContainer>
        <WalletCard text={user.money.toString()} />
      </WalletContainer>
      <Card>
        <MoneyForm handleAddMoney={handleAddMoney} />
      </Card>
    </Box>
  );
};

export default InvestorWallet;
