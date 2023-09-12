import { Box } from "@mui/material";
import { WalletCard } from "../../features/Cards";
import styled from "@mui/material/styles/styled";
import { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Container,
} from "@mui/material";
import { Card } from "../../components/Card";
import { useAppSelector } from "../../../application/hooks";

const WalletContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));
function MoneyForm() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the amount to a server or perform some action
    console.log("Submitted amount:", amount);
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
  const user = useAppSelector((state) => state.user);

  return (
    <Box>
      <WalletContainer>
        <WalletCard text={user.money.toString()} />
      </WalletContainer>
      <Card>
        <MoneyForm />
      </Card>
    </Box>
  );
};

export default InvestorWallet;
