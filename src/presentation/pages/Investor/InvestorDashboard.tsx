import { Box, Grid } from "@mui/material";
import { Card } from "../../components/Card";
import { BarChart } from "../../components/BarChart";
import styled from "@mui/material/styles/styled";
import Transactions from "../../features/Transactions";
import { StocksCard, WalletCard } from "../../features/Cards";

const StyledGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledCardGrid = styled(Grid)(({ theme }) => ({
  width: "100%",
}));

const InvestorDashboard = () => {
  return (
    <Box>
      <StyledGrid container spacing={3} columns={{ sm: 1, md: 4 }}>
        <Grid item xs={1} md={1}>
          <StyledGrid container spacing={8} columns={{ sm: 2, md: 1 }}>
            <StyledCardGrid item xs={1} md={1}>
              <WalletCard />
            </StyledCardGrid>
            <StyledCardGrid item xs={1} md={1}>
              <StocksCard />
            </StyledCardGrid>
          </StyledGrid>
        </Grid>
        <StyledCardGrid item xs={1} md={3}>
          <Card>
            <Transactions />
          </Card>
        </StyledCardGrid>
      </StyledGrid>
      <Card>
        <BarChart />
      </Card>
    </Box>
  );
};

export default InvestorDashboard;
