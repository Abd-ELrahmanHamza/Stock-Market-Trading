import { Box, Typography, styled } from "@mui/material";
import Stocks from "../../features/Stocks";
import { BuyButton, SellButton } from "../../components/Button";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import PaidIcon from "@mui/icons-material/Paid";
import { buyStockUtil, sellStockUtil } from "../../../application/utils/stocks";
import Stock from "../../../domain/entities/stock";
import { useAppSelector } from "../../../application/hooks";
const CenterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
interface Props {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}
function IconTabs({ value, handleChange }: Props) {
  return (
    <CenterBox>
      <Tabs value={value} onChange={handleChange}>
        <Tab icon={<PhoneIcon />} label="Your Stocks" />
        <Tab icon={<PaidIcon />} label="Buy Stocks" />
      </Tabs>
    </CenterBox>
  );
}
const InvestorStocks = () => {
  const userStocks = useAppSelector((state) => state.user.stocks);
  const companiesStocks = useAppSelector((state) => state.stocks);

  const [value, setValue] = React.useState(0);
  const handleBuyStocks = (stock: Stock) => {
    buyStockUtil(stock);
  };
  const handleSellStocks = (stock: Stock) => {
    sellStockUtil(stock);
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      <IconTabs value={value} handleChange={handleChange} />
      {value === 0 && (
        <Box>
          <Typography variant="h4" sx={{ padding: "1rem" }}>
            Your Stocks
          </Typography>
          <Stocks
            stocks={userStocks}
            ActionComponent={SellButton}
            handleAction={handleSellStocks}
            actionText="Sell"
          />
        </Box>
      )}
      {value === 1 && (
        <Box>
          <Typography variant="h4" sx={{ padding: "1rem" }}>
            Buy Stocks
          </Typography>
          <Stocks
            stocks={companiesStocks}
            ActionComponent={BuyButton}
            handleAction={handleBuyStocks}
            actionText="Buy"
          />
        </Box>
      )}
    </Box>
  );
};

export default InvestorStocks;
