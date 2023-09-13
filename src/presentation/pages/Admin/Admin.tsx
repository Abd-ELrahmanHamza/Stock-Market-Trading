import Box from "@mui/material/Box";
import Sidebar from "../../layouts/Sidebar";
import { styled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../layouts/Header";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ApartmentIcon from "@mui/icons-material/Apartment";
import WalletIcon from "@mui/icons-material/Wallet";
import PaidIcon from "@mui/icons-material/Paid";

const Container = styled(Box)({
  display: "flex",
});

const ContentContainer = styled(Box)(() => ({
  width: "100%",
  overflow: "auto",
  padding: "1rem",
}));

const navigationList = [
  {
    text: "Statistics",
    icon: <PaidIcon />,
    link: "",
  },
  {
    text: "Transactions",
    icon: <InboxIcon />,
    link: "transactions",
  },
  {
    text: "Companies",
    icon: <WalletIcon />,
    link: "companies",
  },
];

export default function Admin() {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Container>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Sidebar
          open={open}
          toggleDrawer={toggleDrawer}
          navigationList={navigationList}
        />
        <Box component="main" sx={{ width: "100%" }}>
          <Header title="Dashboard" />
          <ContentContainer>
            <Outlet></Outlet>
          </ContentContainer>
        </Box>
      </Box>
    </Container>
  );
}
