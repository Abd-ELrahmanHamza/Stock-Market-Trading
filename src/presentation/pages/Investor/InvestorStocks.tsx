import { Box, Typography } from "@mui/material";
import Stocks from "../../features/Stocks";
import {BuyButton, SellButton} from "../../components/Button";

const InvestorStocks = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h4" sx={{ padding: "1rem" }}>
          Your Stocks
        </Typography>
        <Stocks
          ActionComponent={
            <SellButton props={{ onClick: () => console.log("Sell") }}>
              Sell
            </SellButton>
          }
        />
      </Box>
      <Box>
        <Typography variant="h4" sx={{ padding: "1rem" }}>
          Buy Stocks
        </Typography>
        <Stocks
          ActionComponent={
            <BuyButton props={{ onClick: () => console.log("Buy") }}>
              Buy
            </BuyButton>
          }
        />
      </Box>
    </Box>
  );
};

export default InvestorStocks;
