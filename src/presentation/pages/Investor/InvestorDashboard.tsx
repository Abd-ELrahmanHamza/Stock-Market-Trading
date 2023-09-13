import { Box, Grid, Typography } from "@mui/material";
import { Card } from "../../components/Card";
import styled from "@mui/material/styles/styled";
import Transactions from "../../features/Transactions";
import { StocksCard, WalletCard } from "../../features/Cards";
import { useAppSelector } from "../../../application/hooks";
import AreaChart from "../../components/AreaChart";

const StyledGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledCardGrid = styled(Grid)(({ theme }) => ({
  width: "100%",
}));

const InvestorDashboard = () => {
  const user = useAppSelector((state) => state.user);
  return (
    <Box>
      <StyledGrid container spacing={3} columns={{ sm: 1, md: 4 }}>
        <Grid item xs={1} md={1}>
          <StyledGrid container spacing={3} columns={{ sm: 2, md: 1 }}>
            <StyledCardGrid item xs={1} md={1}>
              <WalletCard text={user.money.toString()} />
            </StyledCardGrid>
            <StyledCardGrid item xs={1} md={1}>
              <StocksCard text={user.stocksCount.toString()} />
            </StyledCardGrid>
          </StyledGrid>
        </Grid>
        <StyledCardGrid item xs={1} md={3}>
          <Card>
            <AreaChart
              dataSet={[
                { name: "Jun", value: 10 },
                { name: "asc", value: 10 },
                { name: "Junsad", value: 120 },
                { name: "Junsad", value: 130 },
                { name: "Junsad", value: 210 },
                { name: "Junsad", value: -10 },
                { name: "Junsad", value: 10 },
              ]}
            />
          </Card>
        </StyledCardGrid>
      </StyledGrid>
      <Card>
        <Transactions />
      </Card>
    </Box>
  );
};

export default InvestorDashboard;
