import { Box, Grid } from "@mui/material";
import { Card, NoPadCard } from "../../components/Card";
import { BarChart } from "../../components/BarChart";
import { IconCard, IconGradientCard } from "../../components/IconCard";
import styled from "@mui/material/styles/styled";
import wallet from "../../assets/images/wallet.png";
import stock from "../../assets/images/stock.png";
import Transactions from "../../features/Transactions";

const StyledGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const InvestorDashboard = () => {
  return (
    <Box>
      <StyledGrid container spacing={3} columns={{ sm: 1, md: 4 }}>
        <Grid item xs={1} md={1}>
          <StyledGrid container spacing={8} columns={{ sm: 2, md: 1 }}>
            <Grid item xs={1} md={1}>
              <NoPadCard>
                <IconGradientCard Icon={wallet} text="200$" sub="Wallet" />
              </NoPadCard>
            </Grid>
            <Grid item xs={1} md={1}>
              <NoPadCard>
                <IconCard Icon={stock} text="250" sub="Stocks" />
              </NoPadCard>
            </Grid>
          </StyledGrid>
        </Grid>
        <Grid item xs={1} md={3}>
          <Card>
            <Transactions />
          </Card>
        </Grid>
      </StyledGrid>
      <Card>
        <BarChart />
      </Card>
    </Box>
  );
};

export default InvestorDashboard;
