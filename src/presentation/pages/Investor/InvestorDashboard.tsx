import { Box, Grid, Typography } from "@mui/material";
import { Card } from "../../components/Card";
import styled from "@mui/material/styles/styled";
import Transactions from "../../features/Transactions";
import { StocksCard, WalletCard } from "../../features/Cards";
import AreaChart from "../../components/AreaChart";
import { useAppSelector } from "../../../application/hooks";
import React from "react";
import { addProfitUtil } from "../../../application/utils/user";
import CenterBox from "../../components/CenterBox";
import { BuyButton } from "../../components/Button";
import { useNavigate } from "react-router-dom";
const StyledGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledCardGrid = styled(Grid)(({ theme }) => ({
  width: "100%",
}));

const InvestorDashboard = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);
  const companies = useAppSelector((state) => state.companies);
  const userProfit = useAppSelector((state) => state.user.profit);
  const transactions = useAppSelector((state) => state.transactions);

  const [performanceDataGraph, setPerformanceDataGraph] = React.useState<
    { name: string; value: number }[]
  >([]);

  React.useEffect(() => {
    const dataGraph = [];
    if (!userProfit) return;
    for (const key in userProfit) {
      dataGraph.push({ name: key, value: userProfit[key] });
    }
    setPerformanceDataGraph(dataGraph);
  }, [userProfit]);
  React.useEffect(() => {
    const calculateProfitLoss = () => {
      if (!companies || !user.stocks) return;
      let profitLoss = 0;
      user.stocks.forEach((stock) => {
        const company = companies[stock.name];
        if (!company) return;
        const currentStockValue = company[company.length - 1].value;
        profitLoss += (currentStockValue - stock.price) * stock.count;
      });
      return profitLoss;
    };
    const temp = calculateProfitLoss();
    if (temp) {
      addProfitUtil(temp);
    }
  }, [companies, user.stocks]);
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
            {performanceDataGraph && performanceDataGraph.length !== 0 && (
              <>
                <AreaChart dataSet={performanceDataGraph} />
              </>
            )}

            {performanceDataGraph && performanceDataGraph.length === 0 && (
              <CenterBox>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h4" sx={{ padding: "1rem" }}>
                    Buy stock to see your performance
                  </Typography>
                  <BuyButton
                    props={{
                      onClick: () => {
                        navigate("/investor/stocks");
                      },
                    }}
                  >
                    <Typography variant="h6">Buy Stocks</Typography>
                  </BuyButton>
                </Box>
              </CenterBox>
            )}
          </Card>
        </StyledCardGrid>
      </StyledGrid>
      <Card>
        <Transactions transactions={transactions} />
      </Card>
    </Box>
  );
};

export default InvestorDashboard;
