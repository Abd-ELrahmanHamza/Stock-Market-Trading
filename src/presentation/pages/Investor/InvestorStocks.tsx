import { Box, Typography, styled } from "@mui/material";
import Stocks from "../../features/Stocks";
import { BuyButton, SellButton } from "../../components/Button";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import PaidIcon from "@mui/icons-material/Paid";
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
            ActionComponent={
              <SellButton props={{ onClick: () => console.log("Sell") }}>
                Sell
              </SellButton>
            }
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
            ActionComponent={
              <BuyButton props={{ onClick: () => console.log("Buy") }}>
                Buy
              </BuyButton>
            }
          />
        </Box>
      )}
    </Box>
  );
};

export default InvestorStocks;
